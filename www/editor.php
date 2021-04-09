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
require_once 'include/head.php';
?>
	<link rel="stylesheet" href="lib/css/choices.min.css">
	<script src="lib/js/choices.min.js"></script>
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
		html,
		body{
			height: 100%;
		}
		body{
			overflow-y: hidden;
		}
		.alert.alert-danger{
			display: none;
		}
		.container{
			padding: 0;
			overflow-y: auto;
			height: 100%;
		}
		#config{
			position: absolute;
			left: 3px;
			top: 3px;
			z-index: 10;
		}

		.form-control {
			background: transparent;
			height: 44px !important;
		}
		.form-control:focus {
			background-color: transparent;
			border-color: #00e7ff94;
			outline: 0;
			box-shadow: 0 0 0 .2rem rgba(0, 231, 255, 0.44);
		}

		.nav-pills .nav-link {
			border: 0;
			border-radius: 0;
		}

		.nav-pills .nav-item {
			border-radius: 0;
			border: 1px solid #ffffff;
			border-top: 0;
		}
		.nav-pills .nav-item:first-child {
			border-top: 1px solid #ffffff;
		}

		.nav-pills .nav-item:first-child {
			border-top-left-radius: .25rem;
			border-top-right-radius: .25rem;
		}

		.nav-pills .nav-item:last-child {
			border-bottom-left-radius: .25rem;
			border-bottom-right-radius: .25rem;
		}

		.card table tr:last-child td:last-child .json-editor-btn-moveup{
			border-top-right-radius: .25rem;
			border-bottom-right-radius: .25rem;
		}

		.tab-pane:last-child .btn-group .json-editor-btn-moveup{
			border-top-right-radius: .25rem;
			border-bottom-right-radius: .25rem;
		}

		.fixed-footer{
			position: fixed;
			bottom: 0;
			width: 100%;
			z-index: 10;
			padding: 10px;
			background: #00e7ff24;
			border-top: 1px solid #00e7ff;
		}
				
		/********** CUSTOM CHOISES **********/

		.choices__inner{
			display: block;
			min-width: 150px;
			height: calc(1.5em + .75rem + 2px);
			padding: .375rem .75rem;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5;
			background: transparent;
			border: 1px solid #ffffff;
			border-radius: .25rem;
		}
		.choices__list--dropdown{
			background: #000000e0;
			color: #ffffff;
		}
		.is-highlighted,
		.choices__item:hover{
			color: #000000;
		}
		.choices__list--single .choices__item:hover{
			color: #ffffff;
		}

	</style>
</head>
<body>
	<ul class="nav nav-tabs justify-content-center">
		<li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
		<li class="nav-item"><a class="nav-link" href="news.php">News</a></li>
		<li class="nav-item"><a class="nav-link" href="utils.php">Utils</a></li>
		<li class="nav-item"><a class="nav-link active fas fa-cog" href="editor.php"></a></li>
	</ul>
	<div class="container flex-center">
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
				$('.container').removeClass('flex-center');
				$('.spinner').hide();
			});

		});
		
    </script>
</body>
</html>