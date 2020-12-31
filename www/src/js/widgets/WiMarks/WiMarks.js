class WiMarks extends Widget{
	
	constructor(id, opt){
		super(id, opt);
	}

	setup(){
		let mList = [];
		
		for (let i = 0; i < this.opt.urls.length; i++) {
			const w = this.opt.urls[i];
			mList.push('<li class="list-group-item"><a href="' + w.url + '" target="_blank">'
				+ (w.icon ? '<i class="' + w.icon + '"></i>' : '') + '<span>' + w.label + '</span>'
			+'</a></li>');
		}

		this.render(mList.join(''));

		return this;
	}

};

W.WiMarks = {
	cls: WiMarks,
	editor: (data) => ({
		title: 'Bookmarks group',
		type: 'object',
		format: 'grid-strict',
		properties: {
			title: {
				title: 'Title',
				type: 'string',
				options: {
					grid_columns: 4,
				}
			},
			icon: {
				title: 'Icon',
				type: 'string',
				format: 'choices',
				enum: data.faIcons.map(c=>c[1]),
				options: {
					grid_columns: 4,
				}
			},
			color: {
				title: 'Color',
				type: 'string',
				format: 'choices',
				options: {
					grid_columns: 4
				},
				enum: data.colors
			},
			urls: {
				title: 'Urls',
				type: 'array',
				format: 'table',
				uniqueItems: true,
				items: {
					type: 'object',
					properties: {
						label: {
							title: 'Label',
							type: 'string'
						},
						url: {
							title: 'Url',
							type: 'string',
							default: 'https:\/\/'
						},
						icon: {
							title: 'Icon',
							type: 'string',
							format: 'choices',
							enum: data.faIcons.map(c=>c[1])
						}
					}
				}
			}
		}
	})
};