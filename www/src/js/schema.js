const makeSchema = (tabs, data) => {
	let wList = Object.keys(W).filter(v=>v!='instances');
	console.log(wList);
	let schema = {
		type: 'object',
		propertyNames: {
			pattern: '^[a-zA-Z0-9]+$'
		},
		patternProperties: {
			'^[a-zA-Z0-9]+$': {
				oneOf: [{
					type: 'array',
					items: {
						oneOf:[
							/* a questo livello aggiungo oggetti per ogni tipo di widget preso dalla lista completa, aggiungo sempre tutti i wid.js e amen
								quello sotto è di wimarks
							*/
							{
								type: 'object',
								required: [ 'title', 'color', 'icon', 'urls' ],
								properties: {
									title: { type: "string" },
									icon: { type: "string" },
									color: { enum: data.colors,  },
									urls: {
										type: "array",
										items: {
											type: 'object',
											required: [ 'label', 'icon', 'url' ],
											properties: {
												label: { type: "string" },
												icon: { type: "string" },
												url: {
													type: "string",
													examples: [
														"https:\/\/google.com",
														"127.0.0.1:3000"
													]
												}
											}
										}
									},
								}
							}
						]			
					}
				}]
			}
		}
	};

	return schema;

	/*
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
		type: 'object',
		title: 'tabs',
		format: 'tabs',
		items: { oneOf }
	};
	*/
};