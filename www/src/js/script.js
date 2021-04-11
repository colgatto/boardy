const boardy_cache = new Cache('boardy_cache');

$(document).ready(()=>{
	
	$('#nav_tab .tab-link').on('click', function(e){
		e.preventDefault();
		let t = $(this);
		let tName = t.data('tab');
		$('.tab-link').removeClass('active');
		$('.container').hide();
		t.addClass('active');
		$('#container_' + tName).show();
	});

	let tabs =  Object.keys(widgets);
	
	$('.tab-link[data-tab="' + tabs[0] + '"]').click();

	//INIT WIDGETS

	for (let k = 0; k < tabs.length; k++) {
		
		const t = tabs[k];
		
		let chunked_wlist = [];
		for (let i=0; i < widgets[t].length; i += 4) {
			chunked_wlist.push(widgets[t].slice(i, i + 4));
		}

		let wlist = [];
		for (i=0; i < chunked_wlist.length; i++) {
			for (j=0; j < chunked_wlist[i].length; j++) {
				if(typeof wlist[j] == 'undefined' || !(wlist[j] instanceof Array))
					wlist[j] = [];
				wlist[j][i] = chunked_wlist[i][j];
			}
		}

		let mainRow = $('<div class="row"></div>');
		$('#container_' + t).append(mainRow);
		
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
	}

	for (let i = 0; i < W.instances.length; i++) {
		//UPDATE WIDGET
		W.instances[i].loop();
	}

	//EDITOR

	const editor = new JSONEditor($('#container_editor')[0], { mode: 'code' });

	$.getJSON('/store/widgets.json', (res) => {
		editor.set(res);
		//$('.spinner').hide();
		//$('#jsoneditor').removeClass('hidden');
		//$('.container').removeClass('flex-center');
	});

});