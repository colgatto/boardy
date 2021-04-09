<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Boardy</title>

	<link rel="stylesheet" href="lib/css/bootstrap.min.css">
	<link rel="stylesheet" href="lib/css/fontawesome.min.css">
	<link rel="stylesheet" href="src/css/style.css">
	<link rel="stylesheet" href="src/css/colors.css">
	<!-- <link rel="stylesheet" href="src/css/stars_background.css"> -->
	
	<script src="lib/js/jquery-3.5.1.min.js"></script>
	<script src="lib/js/popper.min.js"></script>
	<script src="lib/js/bootstrap.min.js"></script>
	<script src="lib/js/rss-parser.min.js"></script>
	<?php
		if(!is_file('widgets.json')){
			file_put_contents('widgets.json', '[]');
			$widgets = [];
		}else{
			$widgets = json_decode(file_get_contents('widgets.json'), true);
		}
		echo '<script>let widgets = JSON.parse(\'' . str_replace("'", "\'", json_encode($widgets)) .'\');</script>';
	?>
	<script src="src/js/Cache.js"></script>
	<script src="src/js/Widget.js"></script>
	<?php
		$wl = is_dir('src/js/widgets') ? scandir('src/js/widgets') : [];
		$wl = array_values(array_filter( $wl, function($wd) { return $wd != 'WiExample' && $wd != "." && $wd != ".." && is_dir('src/js/widgets/' . $wd); }) );
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
	<!--
	<div clas="stars-background">
		<div id='stars'></div>
		<div id='stars2'></div>
		<div id='stars3'></div>
	</div>
	-->
	<?php
		require_once 'config.php';
		if(ENABLE_EDITOR){
			echo '<button class="btn fas fa-cog" id="config"></button>';
		}
	?>
	<div class="container" id="wcontainer"></div>
</body>
</html>