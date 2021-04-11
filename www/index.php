<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Boardy</title>
	<link rel="stylesheet" href="/lib/css/bootstrap.min.css">
	<link rel="stylesheet" href="/lib/css/fontawesome.min.css">
	<link rel="stylesheet" href="/lib/css/jsoneditor.min.css">
	<link rel="stylesheet" href="/lib/css/monokai.css">
	<link rel="stylesheet" href="/src/css/style.css">
	<link rel="stylesheet" href="/src/css/colors.css">
	<script src="/lib/js/jquery-3.5.1.min.js"></script>
	<script src="/lib/js/popper.min.js"></script>
	<script src="/lib/js/bootstrap.min.js"></script>
	<script src="/lib/js/rss-parser.min.js"></script>
	<script src="/lib/js/jsoneditor.min.js"></script>
	<?php	
		require_once __DIR__ . '/config.php';
		if(!is_file(STORE_PATH)){		
			$widgets = [ 'home' => [] ];
			file_put_contents(STORE_PATH, json_encode($widgets));
		}else{
			$widgets = json_decode(file_get_contents(STORE_PATH), true);
		}
		echo '<script>let widgets = JSON.parse(\'' . str_replace("'", "\'", json_encode($widgets)) .'\');</script>';
	?>
	<script src="/src/js/Cache.js"></script>
	<script src="/src/js/Widget.js"></script>
	<?php
		$wList = array_merge(...array_values($widgets));
		$wType = array_map(function($v){ return $v['type']; }, $wList);
		$wl = is_dir(RELATIVE_WIDGET_PATH) ? scandir(RELATIVE_WIDGET_PATH) : [];
		$wl = array_values(array_filter( $wl, function($wd)use($wType){ return in_array($wd, $wType) && is_dir(RELATIVE_WIDGET_PATH . $wd); }) );
		for ($i=0; $i < count($wl); $i++) { 
			$wi_name = $wl[$i];
			if( is_file(RELATIVE_WIDGET_PATH . $wi_name . '/' . $wi_name . '.js') ){
				echo('<script src="' . WIDGET_PATH . $wi_name . '/' . $wi_name . '.js"></script>');
			}
			if( is_file(RELATIVE_WIDGET_PATH . $wi_name . '/style.css') ){
				echo('<link rel="stylesheet" href="' . WIDGET_PATH . $wi_name . '/style.css">');
			}
		}
	?>
	<script src="/src/js/script.js"></script>
</head>
<body>
	<ul id="nav_tab" class="nav nav-tabs justify-content-center">
	<?php
		foreach ($widgets as $t => $wList) {
			echo '<li class="nav-item"><a class="nav-link tab-link" href="#" data-tab="' . $t . '">' . ucfirst($t) . '</a></li>';
		}
		if(ENABLE_EDITOR) echo '<li class="nav-item"><a class="nav-link tab-link fas fa-cog" href="#" data-tab="editor"></a></li>';
	?>
	</ul>
	<?php
		foreach ($widgets as $t => $wList) {
			echo '<div class="container" id="container_' . $t . '" style="display: none;"></div>';
		}
		if(ENABLE_EDITOR) echo '<div class="container" id="container_editor" style="display: none;"></div>';
	?>
</body>
</html>