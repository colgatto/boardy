<?php
require_once 'config.php';
if(!ENABLE_EDITOR){
	die('editor disabled by config');
}
if(isset($_POST['widgets'])){
	try{
		$d = json_decode($_POST['widgets'], true);
		file_put_contents('widgets.json', json_encode($d, JSON_PRETTY_PRINT));
	}catch(Exception $e){
		die($e);
	}
	die('OK');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Boardy Editor</title>
	
	<link rel="stylesheet" href="lib/css/choices.min.css">
	<link rel="stylesheet" href="lib/css/bootstrap.min.css">
	<link rel="stylesheet" href="lib/css/fontawesome.min.css">
	<link rel="stylesheet" href="src/css/style.css">
	<link rel="stylesheet" href="src/css/colors.css">
	<link rel="stylesheet" href="src/css/stars_background.css">

	<script src="lib/js/jquery-3.5.1.min.js"></script>
	<script src="lib/js/popper.min.js"></script>
	<script src="lib/js/choices.min.js"></script>
	<script src="lib/js/bootstrap.min.js"></script>
	<script src="lib/js/jsoneditor.min.js"></script>
	
	<script src="src/js/schema.js"></script>
	<script src="src/js/Widget.js"></script>
	<?php
		$wl = is_dir('src/js/widgets') ? scandir('src/js/widgets') : [];
		$wl = array_values(array_filter( $wl, function($wd) { return $wd != 'WiExample' && $wd != "." && $wd != ".." && is_dir('src/js/widgets/' . $wd); }) );
		for ($i=0; $i < count($wl); $i++) { 
			$wi_name = $wl[$i];
			if( is_file('src/js/widgets/' . $wi_name . '/' . $wi_name . '.js') ){
				echo('<script src="src/js/widgets/' . $wi_name . '/' . $wi_name . '.js"></script>');
			}
		}
	?>
	<style>
		body{
		    overflow-y: auto;
		}
		.alert.alert-danger{
			display: none;
		}
	</style>
</head>
<body class="flex-center">
	<!--
	<div clas="stars-background">
		<div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
	</div>
	-->
	<div class="spinner">
		<div class="ring"></div>
		<div class="ring"></div>
		<div class="dot"></div>
	</div>

	<div id="editor_holder"></div>
	
	<div class="fixed-footer">
		<button class="btn" id="home">Home</button>
		<button class="btn" id="save">Save</button>
	    <span id="valid_indicator"></span>
	</div>
	<script>
		let config;

		const updateEditor = (editor) => {
			let e = editor.getValue();
			for (let i = 0; i < e.length; i++) {
				let v = e[i];
				let tab = $(document.getElementById('root.' + i));
				for (let j = 0; j < config.colors.length; j++)
					tab.find('.card').removeClass('list-' + config.colors[j]);
				tab.find('.card').addClass('list-' + v.color);
			}
		};

		$.getJSON('api.php?action=data', (res) => {
			config = res;
			let editor = new JSONEditor(document.getElementById('editor_holder'), {
				theme: 'bootstrap4',
				iconlib: 'fontawesome5',
				disable_collapse: true,
				disable_edit_json: true,
				disable_properties: true,
				no_additional_properties: true,
				required_by_default: true,
				remove_empty_properties: false,
				keep_oneof_values: false,
				startval: config.wlist,
				schema: makeSchema(config)
			});
			
			editor.on('change',() => {
				updateEditor(editor);
			});

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

			editor.on('ready',() => {
				$('body').removeClass('flex-center');
				$('.spinner').hide();
			});

		});
		
    </script>
</body>
</html>