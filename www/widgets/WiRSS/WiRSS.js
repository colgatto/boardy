class WiRSS extends Widget{
	
	constructor(id, opt){
		super(id, opt, 10 * 60 * 1000);
	}

	async update(){
		let parser = new RSSParser();
		boardy_cache.get('/api.php?action=cors&url=' + this.opt.url, this.interval - 1000).then((rss_str) => {
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

					output.push('<li>'
						+ '<h6><a href="' + item.link + '"><b>' + item.title + '</b></a></h6>'
						+ '<div class="snippet">' + cont + '</div>'
					+ '</li>');
				}

				this.renderHeader('<a href="' + feed.link + '">' + feed.title + '</a>');
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
			url: {
				title: 'url',
				type: 'string'
			}
		}
	})
};