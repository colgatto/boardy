const boardy_cache = new Cache('boardy_cache');

$(document).ready(()=>{
/*
	let btn_config = document.getElementById('config');
	if(btn_config){
		btn_config.addEventListener('click', function() {
			window.location.href = 'editor.php';
		});
	}
*/
	let chunked_wlist = [];
	for (let i=0; i < widgets.length; i += 4) {
		chunked_wlist.push(widgets.slice(i, i + 4));
	}

	let wlist = [];
	for (i=0; i < chunked_wlist.length; i++) {
		for (j=0; j < chunked_wlist[i].length; j++) {
			if(typeof wlist[j] == 'undefined' || !(wlist[j] instanceof Array))
				wlist[j] = [];
			wlist[j][i] = chunked_wlist[i][j];
		}
	}

	//INIT WIDGETS
	
	let mainRow = $('<div class="row"></div>');
	$('#wcontainer').append(mainRow);
	
	for (let i=0, k=0; i < wlist.length; i++) {
		
		let colXl = $('<div class="col-xl"></div>');
		mainRow.append(colXl);

		for (let j=0; j < wlist[i].length; j++, k++) {
			const wid = wlist[i][j];

			//CREATE INSTANCE
			if(typeof W[wid.type] == 'undefined') continue; //se non lo trova allora è nella blacklist lato php
			let inst = new W[wid.type].cls('card-widget-' + k, wid);

			//APPEND DO TO PAGE
			colXl.append(inst._domRoot);

			//SETUP WIDGET
			inst.setup();
			
			//PUSH TO GLOBAL W
			W.instances.push(inst);
		}
	}

	for (let i = 0; i < W.instances.length; i++) {
		//UPDATE WIDGET
		W.instances[i].loop();
	}
	
});