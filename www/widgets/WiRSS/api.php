<?php

class Api{
	static public function cors($argv){
		return isset($argv['url']) ? file_get_contents($argv['url']) : '';
	}
}

?>