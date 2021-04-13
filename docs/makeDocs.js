const fs = require('fs');

const getSettings = () => {
	const W = {};
	class Widget{};
	const wi_path = __dirname + '/../www/widgets/';
	let wi = fs.readdirSync(wi_path);
	for (let i = 0; i < wi.length; i++) {
		const wiName = wi[i];
		const p = wi_path + wiName;
		if(!fs.lstatSync(p).isDirectory()) continue;
		const jsPath = p + '/' + wiName + '.js';
		if(!fs.lstatSync(jsPath).isFile()) continue;
		eval(fs.readFileSync(jsPath).toString());
	}
	return W;
}

let W = getSettings();

let widgets = Object.keys(W);

let docs = ['# Documentation'];

for (let i = 0; i < widgets.length; i++) {
	const wi = widgets[i];
	console.log('Parse ' + wi);
	docs.push('## ' + wi);
	docs.push("```\n" + JSON.stringify(W[wi].settings, null, 4) + "\n```");
}

fs.writeFileSync(__dirname + '/README.md', docs.join("\n"));
