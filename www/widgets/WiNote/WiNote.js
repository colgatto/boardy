class WiNote extends Widget{
	
	constructor(id, opt){
		
		super(id, opt);
		
		this.initStore();

		if(typeof this.store.v == 'undefined')
			this.store.v = '';

		this.textarea = $('<textarea></textarea>');
		let self = this;
		this.textarea.on('keyup', function(e){
			self.store.v = this.value;
			self.saveStore();
		});

		this.textarea.val(this.store.v);
	}

	setup(){
		this.render(this.textarea);
	}
}

W.WiNote = {
	cls: WiNote
};