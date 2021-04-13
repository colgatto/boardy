class WiSpacer extends Widget{
	
	constructor(id, opt){
		super(id, opt);
	}
	async run(){
		console.log(this.opt.height);
		$('#' + this.domId).css({
			height: this.opt.height + 'px'
		});
		return;
	}
}

W.WiSpacer = {
	cls: WiSpacer,
	settings: {
		required: [ 'height' ],
		properties: {
			height: {
				title: 'Height in px',
				type: 'number'
			}
		}
	}
};