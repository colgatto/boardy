<?php

define('ENABLE_EDITOR', true);
define('STORE_PATH', __DIR__ . '/store/widgets.json');
define('WIDGET_PATH', '/src/js/widgets/');
define('RELATIVE_WIDGET_PATH', __DIR__ . '/src/js/widgets/');

define('TABS', [ 'home', 'news', 'utils' ]);

function getWidgets($tabName){
	if(!in_array($tabName, TABS)) throw 'invalid tab name';
	if(!is_file(STORE_PATH)){		
		$widgets = [];
		for ($i=0; $i < count(TABS); $i++) $widgets[TABS[$i]] = [];
		file_put_contents(STORE_PATH, json_encode($widgets));
	}else{
		$widgets = json_decode(file_get_contents(STORE_PATH), true);
		$toSave = false;
		for ($i=0; $i < count(TABS); $i++){
			if(!isset($widgets[TABS[$i]])){
				$widgets[TABS[$i]] = [];
				$toSave = true;
			}
		}
		if($toSave) file_put_contents(STORE_PATH, json_encode($widgets));
	}
	return $widgets[$tabName];
}

function includeHeader($tabName = false){
	echo '<!DOCTYPE html>'
		. '<html lang="en">'
		. '<head>'
			. '<meta charset="UTF-8">'
			. '<title>Boardy</title>'
			. '<link rel="stylesheet" href="/lib/css/bootstrap.min.css">'
			. '<link rel="stylesheet" href="/lib/css/fontawesome.min.css">'
			. '<link rel="stylesheet" href="/lib/css/jsoneditor.min.css">'
			. '<link rel="stylesheet" href="/src/css/style.css">'
			. '<link rel="stylesheet" href="/src/css/colors.css">'
			. '<script src="/lib/js/jquery-3.5.1.min.js"></script>'
			. '<script src="/lib/js/popper.min.js"></script>'
			. '<script src="/lib/js/bootstrap.min.js"></script>'
			. '<script src="/lib/js/rss-parser.min.js"></script>'
			. '<script src="/lib/js/jsoneditor.min.js"></script>';
	if($tabName){
		$widgets = getWidgets($tabName);
		echo '<script>let widgets = JSON.parse(\'' . str_replace("'", "\'", json_encode($widgets)) .'\');</script>';
		echo '<script src="/src/js/Cache.js"></script>';
		echo '<script src="/src/js/Widget.js"></script>';
		$wType = array_map(function($v){ return $v['type']; }, $widgets);
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
		echo '<script src="/src/js/script.js"></script>';
	}
}

function includeNav($tabName = 'editor'){
	echo '<ul class="nav nav-tabs justify-content-center">';
	for ($i=0; $i < count(TABS); $i++) { 
		$t = TABS[$i];
		echo '<li class="nav-item"><a class="nav-link' . ( $t == $tabName ? ' active' : '' ) . '" href="/index.php?t=' . $t . '">' . ucfirst($t) . '</a></li>';
	}
	echo '<li class="nav-item"><a class="nav-link' . ( $tabName == 'editor' ? ' active' : '' ) . ' fas fa-cog ' . ( ENABLE_EDITOR ? '' : 'disabled' ) . '" href="/editor.php"></a></li>';
	echo '</ul>';
}

?>