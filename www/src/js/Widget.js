let W = {
	instances: []
};

class Widget{

	constructor(id, opt, interval=null){
		
		this.domId = id;
		this.interval = interval;
		this.clsName = this.constructor.name;
		
		this.opt = opt;
		
		this._domRoot = $('<div class="card-widget list-' + this.opt.color + ' ' + this.clsName + '" id="' + this.domId + '"></div>');
		this._domContainer = $('<ul class="list-group"></ul>');
		
		this._domHeader = $('<li class="list-group-item list-header"></li>');
		if(this.opt.icon)
			this._domHeader.append( ( this.opt.icon ? '<i class="' + this.opt.icon + '"></i>' : '' ) );	
		this._domHeader.append( '<span>' + this.opt.title + '</span>' );

		this._domContent = $('<div></div>');

		this._domContainer.append(this._domHeader);
		this._domContainer.append(this._domContent);

		this._domRoot.append(this._domContainer);

		this.store = null;

	}
	
	/////////////////////////////////////////

	setup(){
		/* extend me */
		return this;
	}
	async update(){
		/* extend me */
		return this;
	}

	/////////////////////////////////////////
	
	renderHeader(header){
		this._domHeader.html(header);
		return this;
	}
	
	render(content){
		this._domContent.html(content);
		return this;
	}
	
	/////////////////////////////////////////
	
	getStoreKey(){
		return 'boardy_widstr_' + this.clsName + '_' + this.domId;
	}

	initStore(){
		let strKey = this.getStoreKey();
		let s = localStorage.getItem(strKey);
		if(!s){
			localStorage.setItem(strKey, JSON.stringify({}));
			this.store = {};
		}else{
			this.store = JSON.parse(s);
		}
		return this;
	}

	saveStore(){
		localStorage.setItem(this.getStoreKey(), JSON.stringify(this.store));
		return this;
	}

	/////////////////////////////////////////

	async loop(){
		await this.update();
		if(this.interval){
			setTimeout(async () => { await this.loop(); }, this.interval);
		}
	}

};