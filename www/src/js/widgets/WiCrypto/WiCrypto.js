class WiCrypto extends Widget{
	
	aSort(aa,bb){
		let a = parseFloat(aa[0]);
		let b = parseFloat(bb[0]);
		if(a > b) return 1;
		if(a < b) return -1;
		return 0;
	}

	bSort(aa,bb){
		let a = parseFloat(aa[0]);
		let b = parseFloat(bb[0]);
		if(a > b) return -1;
		if(a < b) return 1;
		return 0;
	}
	
	parsePrice(p){
		return parseFloat(p).toFixed(8).replace(/0+$/,'').replace(/\.$/,'.00');
	}

	clearZero(depth){
		let newDepth = [];
		for (let i = 0, l = depth.length; i < l; i++) {
			if(parseFloat(depth[i][1]) == 0) continue;
			newDepth.push(depth[i]);
		}
		return newDepth;
	}

	mergeDepth(depth, newDepth){
		let ll = depth.length;
		for (let i = 0, l = newDepth.length; i < l; i++) {
			const newV = newDepth[i];
			let found = false;
			for (let j = 0; j < ll; j++) {
				if(depth[j][0] != newV[0]) continue;
				depth[j][1] = newV[1];
				found = true;
				break;
			}
			if(!found)
				depth.push( newV );
		}

		return this.clearZero(depth);
	}

	subToken(params = [], sub = true){
		return this.bin_sock.send(JSON.stringify({
			method: sub ? 'SUBSCRIBE' : 'UNSUBSCRIBE',
			params,
			id: parseInt(Math.random() * 10000)
		}));
	}

	async getAllTicks(){
		return new Promise((resolve, reject)=>{
			$.getJSON('https://api.binance.com/api/v3/ticker/price', (data) => {
				resolve(data);
			});
		});
	}

	async getPairDepth(pair){
		return new Promise((resolve, reject)=>{
			//setTimeout(()=>{
				$.getJSON('https://api.binance.com/api/v3/depth', {
					symbol: pair,
					limit: 1000
				}, (data) => {
					//setTimeout(()=>{
						resolve( data );
					//}, 1000);
				});
			//}, 1000);
		});
	}
	
	constructor(id, opt){
		super(id, opt);

		this.liPairs = {};

		for (let i = 0; i < this.opt.coins.length; i++) {
			let pData = {};
			
			
			pData.label = this.opt.coins[i];
			pData.price = null;
			pData.url = 'https://www.binance.com/it/trade/' + pData.label.replace('/', '_');
			
			let pId = pData.label.replace('/', '').toUpperCase();
			
			//pData.domA = $('<a href="' + pData.url + '"></a>');
			pData.domA = $('<a></a>');
			pData.domLabel = $('<span class="spn-pair-label">' + pData.label + '</span>');
			pData.domPrice = $('<span class="spn-pair-price">0</span>');
			//pData.domSize = $('<span class="spn-pair-size">0</span>');
			
			pData.domA.append(pData.domLabel);
			pData.domA.append(pData.domPrice);
			//pData.domA.append(pData.domSize);
			
			pData.domLi = $('<li class="list-pair"></li>');
			pData.domLi.append(pData.domA);

			pData.domInfo = $('<li class="list-pair-info">Info</li>');
			
			pData.oldDepth = [];

			this.liPairs[pId] = pData;
		}

		$(document).on('click', '.list-pair', function(){
			let info = $(this).next();
			if(info.is(":hidden")){
				$('.list-pair-info').hide();
				info.show();
			}else{
				$('.list-pair-info').hide();
			}
		});

	}

	async setup(){
	/**/
		let allP = await this.getAllTicks();
		//let initV = {};
		for(let i = 0, l = allP.length; i < l; i++){
			if(typeof this.liPairs[ allP[i]['symbol'] ] == 'undefined') continue;
			//initV[ allP[i]['symbol'] ] = allP[i]['price'];
			this.liPairs[ allP[i]['symbol'] ].currentPrice = allP[i]['price'];
		}

		let cont = $('<div style="overflow: hidden;"></div>');
		let pairs = Object.keys(this.liPairs);
		let params = [];
		for (let i = 0, l = pairs.length; i < l; i++) {
			let p_name = pairs[i];
			let p = this.liPairs[p_name];
			
			p.domPrice.html( this.parsePrice( p.currentPrice ) );
			cont.append(p.domLi);
			cont.append(p.domInfo);
			params.push(p_name.toLowerCase() + '@trade');
			params.push(p_name.toLowerCase() + '@depth');
		}

		this.render(cont);

		//1 Open a stream to wss://stream.binance.com:9443/ws/bnbbtc@depth.
	
		this.bin_sock = new WebSocket('wss://stream.binance.com:9443/ws');
		
		this.bin_sock.addEventListener('open', (event) => {
			this.subToken(params);
		});

		//2 Buffer the events you receive from the stream.
		this.bin_sock.addEventListener('message', (event) => {
			let d = JSON.parse(event.data);
			if(typeof d.e == 'undefined'){
				console.log('NO E');
				console.log(d);
				return;
			}
			switch(d.e){

				case 'trade':
					this.liPairs[d.s].currentPrice = d.p;

					let currP = parseFloat(d.p);
					let lastP = parseFloat(this.liPairs[d.s].domPrice.html());
					if(currP > lastP)
						this.liPairs[d.s].domPrice.css('color', '#02c076');
					else if(currP < lastP)
						this.liPairs[d.s].domPrice.css('color', '#f84960');
					
					this.liPairs[d.s].domPrice.html( this.parsePrice(d.p) );
					//this.liPairs[d.s].domSize.html(d.q);
					break;
				
				case 'depthUpdate':
					
					if(typeof this.liPairs[d.s].fullDepth == 'undefined'){
						this.liPairs[d.s].oldDepth.push(d);
						console.log('pusho da parte perché fullDepth undefined');
						break;
					}
					
					//4 Drop any event where u is <= lastUpdateId in the snapshot.
					if(d.u <= this.liPairs[d.s].fullDepth.lastUpdateId)
						break;
	
					this.liPairs[d.s].fullDepth.asks = this.mergeDepth(this.liPairs[d.s].fullDepth.asks, d.a);
					this.liPairs[d.s].fullDepth.bids = this.mergeDepth(this.liPairs[d.s].fullDepth.bids, d.b);

					let depth = this.liPairs[d.s].fullDepth;
					let cPrice = parseFloat(this.liPairs[d.s].currentPrice);
					let a = [];
					let b = [];
					
					for (let i = 0, l = depth.asks.length; i < l; i++) {
						if(parseFloat(depth.asks[i][0]) < cPrice || parseFloat(depth.asks[i][1]) == 0) continue;
						a.push(depth.asks[i]);
					}
					for (let i = 0, l = depth.bids.length; i < l; i++) {
						if(parseFloat(depth.bids[i][0]) > cPrice || parseFloat(depth.bids[i][1]) == 0) continue;
						b.push(depth.bids[i]);
					}

					//this.liPairs[d.s].fullDepth.asks = this.clearZero(this.liPairs[d.s].fullDepth.asks);
					//this.liPairs[d.s].fullDepth.bids = this.clearZero(this.liPairs[d.s].fullDepth.bids);


					//this.liPairs[d.s].fullDepth.asks = [...a];
					//this.liPairs[d.s].fullDepth.bids = [...b];
					
					a.sort(this.aSort);
					b.sort(this.bSort);
					a.splice(10);
					b.splice(10);
					a.reverse();
					
					let aTot = a.reduce( (t,v) => t + parseFloat(v[1]), 0);
					let bTot = b.reduce( (t,v) => t + parseFloat(v[1]), 0);
					let htmlDom = '';
					for (let i = 0; i < a.length; i++) {
						htmlDom += '<li class="depth_asks">'
							+ '<span class="depth_price">' + a[i][0] + '</span>'
							+ '<span class="depth_qnt">' + a[i][1] + '</span>'
							+ '<div class="depth_bar" style="width: ' + parseInt( ( 100 / aTot ) * parseFloat(a[i][1]) ) + '%;"></div>'
						+ '</li>';
					}
					for (let i = 0; i < b.length; i++) {
						htmlDom += '<li class="depth_bids">'
							+ '<span class="depth_price">' + b[i][0] + '</span>'
							+ '<span class="depth_qnt">' + b[i][1] + '</span>'
							+ '<div class="depth_bar" style="width: ' + parseInt( ( 100 / bTot ) * parseFloat(b[i][1]) ) + '%;"></div>'
						+ '</li>';
					}
					this.liPairs[d.s].domInfo.html(htmlDom);
					break;
				default:
					console.log('NO CASE');
					console.log(d);
					break;
			}
		});

		//3 Get a depth snapshot from https://api.binance.com/api/v3/depth?symbol=BNBBTC&limit=1000
		for (let i = 0, l = pairs.length; i < l; i++) {
			let p_name = pairs[i];
			//let p = this.liPairs[p_name];
			let depth = await this.getPairDepth(p_name);

			let od = this.liPairs[p_name].oldDepth;
			for(let j = 0, ll = od.length; j < ll; j++){
				let newDepth = od[j];
				//4 Drop any event where u is <= lastUpdateId in the snapshot.
				if(newDepth.u <= depth.lastUpdateId) continue;
				//5 The first processed event should have U <= lastUpdateId+1 AND u >= lastUpdateId+1.
				if( (newDepth.U <= depth.lastUpdateId + 1) && (newDepth.u >= depth.lastUpdateId + 1) ){
					console.log('La cosa ha senso');
				}
				depth.asks = this.mergeDepth(depth.asks, newDepth.a);
				depth.bids = this.mergeDepth(depth.bids, newDepth.b);
			}
			this.liPairs[p_name].fullDepth = depth;
		}
		
		//setTimeout(()=>{
		//	this.subToken(params, false);
		//}, 1000 * 5);
		
		/**/
	}

	async update(){

	}
	
};

W.WiCrypto = {
	cls: WiCrypto,
	editor: (data) => ({
		title: 'Crypto Ticker',
		type: 'object',
		format: 'grid-strict',
		properties: {
			exchanger: {
				title: 'Exchanger',
				type: 'string',
				//format: 'choices',
				enum: ['Binance'],
				options: {
					grid_columns: 6
				},
			},
			color: {
				title: 'Color',
				type: 'string',
				format: 'choices',
				enum: data.colors,
				options: {
					grid_columns: 6
				},
			},
			coins: {
				title: 'Pairs',
				type: 'array',
				format: 'table',
				options: {
					grid_columns: 12
				},
				items: {
					title: ' ',
					type: 'string',
					format: 'choices',
					enum: data.coinPairs
				}
			}
		}
	})
};
