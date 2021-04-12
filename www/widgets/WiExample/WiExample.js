/*

REMENBER:
widget's directory, js file, and class MUST HAVE SAME NAME!

conventionally use "Wi" prefix

*/
class WiExample extends Widget{
	
	constructor(id, opt){
		// exec update() every 5 * 1000 millisecond
		// change the time or remove it to run only once
		super(id, opt, 5 * 1000);
	}

	async setup(){
		/* INITIAL SETUP */
		/* run only once at start */
		$('#' + this.domId + ' .list-group').append('<li>' + this.opt.example_text + '</li>');
	}

	async update(){
		/* THE MAIN ACTION OF WIDGET */
		/* run after setup, once or every N second based on interval */
		$('#' + this.domId + ' .list-group').append('<li>' + ( new Date() ) + '</li>');
		
	}
}

// add widget to W
// the name of key must be the same name of class
W.WiExample = {
	
	//add class with "cls" key
	cls: WiExample,

	// function editor(data) return the json schema for widget's settings
	// argument data contains the "data.json" object, you can use it to access colors, icons and more...
	editor: (data) => ({
		required: [ 'example_text', 'exColor' ],
		properties: {
			example_text: {
				title: 'example Text',
				type: 'string'
			},
			exColor: {
				title: 'Example Color',
				type: 'string',
				enum: data.colors
			}
		}
	})
};