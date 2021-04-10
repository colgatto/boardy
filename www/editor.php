<?php
	require_once 'config.php';
	if(!ENABLE_EDITOR){
		die('editor disabled by config');
	}
	if(isset($_POST['widgets'])){
		try{
			$d = json_decode($_POST['widgets'], true);
			file_put_contents(STORE_PATH, json_encode($d, JSON_PRETTY_PRINT));
		}catch(Exception $e){
			die($e);
		}
		die('OK');
	}
	includeHeader();
?>
</head>
<body>
	<?php includeNav(); ?>
	<div class="container flex-center" style="padding: 0;">
		<div class="spinner">
			<div class="ring"></div>
			<div class="ring"></div>
			<div class="dot"></div>
		</div>
		
		<div id="jsoneditor" class="hidden" style="width: 100%; height: 100%;"></div>

		<div class="fixed-footer">
			<button class="btn" id="home">Home</button>
			<button class="btn" id="save">Save</button>
			<span id="valid_indicator"></span>
		</div>
	</div>
	<script>

		const editor = new JSONEditor($('#jsoneditor')[0], {
			mode: 'code',
			modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
		});

		$.getJSON('/store/widgets.json', (res) => {
			editor.set(res);
			$('.spinner').hide();
			$('#jsoneditor').removeClass('hidden');
			$('.container').removeClass('flex-center');
		});

		/*
		document.getElementById('save').addEventListener('click', function() {
			$.post('#', {
				widgets: JSON.stringify(editor.getValue())
			}, (res) => {
				//TODO alert
				console.log(res);
			});
		});

		document.getElementById('home').addEventListener('click', function() {
			window.location.href = 'index.php';
		});

		/*
		editor.on('ready',() => {
			$('.container').removeClass('flex-center');
			$('.spinner').hide();
		});
		*/

    </script>
</body>
</html>