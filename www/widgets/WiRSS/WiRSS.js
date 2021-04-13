class WiRSS extends Widget{
	
	constructor(id, opt){
		super(id, opt, 10 * 60 * 1000);
	}

	async update(){
		let parser = new RSSParser();

		let apiUrl = this.apiCall('cors', { url: this.opt.url });
		
		boardy_cache.get(apiUrl, this.interval - 1000).then((rss_str) => {
			parser.parseString(rss_str, (err, feed) => {
				if (err) throw err;
				
				let output = [];
				for (let i = 0; i < feed.items.length; i++) {
					const item = feed.items[i];
					//console.log("------------------------");
					//console.log(item);
					let cont = '';
					if(typeof item.contentSnippet != 'undefined' && item.contentSnippet != '')
						cont = item.contentSnippet;
					else if(typeof item.content != 'undefined' && item.content != '')
						cont = item.content;
					else if(typeof item['content:encoded'] != 'undefined' && item['content:encoded'] != '')
						cont = item['content:encoded'];

					if(typeof this.opt.highlight == 'undefined') this.opt.highlight = [];

					//FIXME highlight da rifare come si deve (case insensitive ma deve mantenere lo stesso case)
					for (let j = 0; j < this.opt.highlight.length; j++) {
						const hi = this.opt.highlight[j];
						cont = cont.replace(RegExp(hi,'gim'), '<span class="highlight">' + hi + '</span>');
					}

					output.push('<li>'
						+ '<h6><a href="' + item.link + '"><b>' + item.title + '</b></a></h6>'
						+ '<div class="snippet">' + cont + '</div>'
					+ '</li>');
				}

				this.renderHeader('<div class="wi-title"><a href="' + feed.link + '">' + feed.title + '</a></div>');
				this.render(output.join(''));
			});
		});
	}
}

W.WiRSS = {
	cls: WiRSS,
	editor: (data) => ({
		required: [ 'url' ],
		properties: {
			url: { type: 'string' },
			highlight: {
				type: 'array',
				items: { type: 'string' }
			}
		}
	})
};