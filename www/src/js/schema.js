const makeSchema = (data) => {
	let wList = Object.keys(W).filter(v=>v!='instances');
	let oneOf = [];
	for (let i = 0; i < wList.length; i++) {
		let wid = W[wList[i]];
		let p = JSON.parse(JSON.stringify(wid.editor(data))) || {};
		if(typeof p.properties == 'undefined') p.properties = {};
		if(typeof p.properties.title == 'undefined'){
			p.properties.title = {
				type: 'string',
				default: p.title || 'Widget',
				options:{
					hidden: true
				}
			};
		}
		if(typeof p.properties.color == 'undefined'){
			p.properties.color = {
				title: 'Color',
				type: 'string',
				format: 'choices',
				enum: data.colors
			};
		}
		p.properties.type = {
			type: 'string',
			default: wList[i],
			options:{
				hidden: true
			}
		},
		oneOf.push(p);
	}
	return {
		type: 'array',
		title: ' ',
		format: 'tabs',
		items: {
			headerTemplate: '{{self.title}}',
			oneOf
		}
	};
};