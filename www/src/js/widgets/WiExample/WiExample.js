/*

REMENBER:
widget's directory, js file, and class MUST HAVE SAME NAME!

conventionally use "Wi" prefix

*/
class WiExample extends Widget{
	
	constructor(id, opt){
		// exec run() every 5 * 1000 millisecond
		// change the time or remove it to run only once
		super(id, opt, 5 * 1000);
	}

	async run(){
		/* THE MAIN ACTION OF WIDGET */
		/* run once or every N second based on interval */
		$('#' + this.domId + ' .list-group').append('<li>' + ( new Date() ) + '</li>');
		$('#' + this.domId + ' .list-group').append('<li>' + this.opt.example_row + '</li>');
	}
}

// add widget to W
// the name of key must be the same name of class
W.WiExample = {
	
	//add class with "cls" key
	cls: WiExample,

	// function editor(data) return the json schema used by "json-editor" to edit user settings in page editor.php
	// data contains the "data.json" object, you can use it to access colors, icons and more...
	// for documentation see: https://github.com/json-editor/json-editor
	editor: (data) => {
		return {
			title: 'Example widget',
			type: 'object',
			format: 'grid',
			properties: {
				example_row: {
					title: 'example_row',
					type: 'string'
				}
			}
		};
	}
};