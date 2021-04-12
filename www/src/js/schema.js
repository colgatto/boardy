const makeSchema = (data) => {
	
	let allWiSchema = [];

	for (const key in W) {
		if (key == 'instances') continue;

		let sc = typeof W[key].editor == 'undefined' ? {} : W[key].editor(data);
		
		sc.type = 'object';
		if(typeof sc.properties == 'undefined') sc.properties = {};
		if(typeof sc.required == 'undefined') sc.required = [];
		sc.properties.type = { type: 'string' };
		sc.properties.title = { type: 'string' };
		sc.properties.color = { type: 'string', enum: data.colors };
		sc.properties.icon = { type: 'string', enum: data.faIcons.map(c=>c[1]) };
		if(!sc.required.includes('type')) sc.required.push('type');
		sc.additionalProperties = false;
		allWiSchema.push(sc);
	}

	let schema = {
		type: 'object',
		propertyNames: {
			pattern: '^[a-zA-Z0-9]+$'
		},
		patternProperties: {
			'^[a-zA-Z0-9]+$': {
				type: 'array',
				items: {
					anyOf: allWiSchema
				}
			}
		}
	};
	
	return schema;
};