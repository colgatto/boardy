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
		required: [ 'urls' ],
		properties: {
			urls: {
				title: 'Urls',
				type: 'array',
				uniqueItems: true,
				items: {
					type: 'object',
					required: [ 'label', 'icon', 'url' ],
					properties: {
						label: {
							title: 'Label',
							type: 'string'
						},
						url: {
							title: 'Url',
							type: 'string'
						},
						icon: {
							title: 'Icon',
							type: 'string',
							enum: data.faIcons.map(c=>c[1])
						}
					}
				}
			}
		}
	})
};