<?php require_once 'config.php'; ?>
<?php require_once 'include/head.php'; ?>
	<?php
		if(!is_file('store/utils.json')){
			file_put_contents('store/utils.json', '[]');
			$widgets = [];
		}else{
			$widgets = json_decode(file_get_contents('store/utils.json'), true);
		}
		echo '<script>let widgets = JSON.parse(\'' . str_replace("'", "\'", json_encode($widgets)) .'\');</script>';
	?>
	<script src="src/js/Cache.js"></script>
	<script src="src/js/Widget.js"></script>
	<?php
		$widgetBlackList = [ '.', '..', 'WiExample' ];
		$wl = is_dir('src/js/widgets') ? scandir('src/js/widgets') : [];
		$wl = array_values(array_filter( $wl, function($wd)use($widgetBlackList){ return !in_array($wd, $widgetBlackList) && is_dir('src/js/widgets/' . $wd); }) );
		for ($i=0; $i < count($wl); $i++) { 
			$wi_name = $wl[$i];
			if( is_file('src/js/widgets/' . $wi_name . '/' . $wi_name . '.js') ){
				echo('<script src="src/js/widgets/' . $wi_name . '/' . $wi_name . '.js"></script>');
			}
			if( is_file('src/js/widgets/' . $wi_name . '/style.css') ){
				echo('<link rel="stylesheet" href="src/js/widgets/' . $wi_name . '/style.css">');
			}
		}
	?>
	<script src="src/js/script.js"></script>
</head>
<body>
	<ul class="nav nav-tabs justify-content-center">
		<li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
		<li class="nav-item"><a class="nav-link" href="news.php">News</a></li>
		<li class="nav-item"><a class="nav-link active" href="#">Utils</a></li>
		<li class="nav-item"><a class="nav-link fas fa-cog <?= ENABLE_EDITOR ? '' : 'disabled'; ?>" href="editor.php"></a></li>
	</ul>
	<div class="container" id="wcontainer"></div>
</body>
</html>