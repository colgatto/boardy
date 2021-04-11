<?php

require_once __DIR__ . '/config.php';

if(!isset($_GET['action'])){
	die('no action');
}

switch($_GET['action']){
	case 'cors':
		if(isset($_GET['url']))
			die(file_get_contents($_GET['url']));
	/*
	case 'data':
		$data = json_decode(file_get_contents('store/data.json'), true);
		try{
			$bin_data = json_decode(file_get_contents('https://api.binance.com/api/v3/exchangeInfo'), true);
			$p = [];
			for ($i=0, $l = count($bin_data['symbols']); $i < $l; $i++) {
				$s = $bin_data['symbols'][$i];
				array_push($p, $s['baseAsset'] . '/' . $s['quoteAsset']);
			}
			$data['coinPairs'] = $p;
			file_put_contents('store/data.json', json_encode($data, JSON_PRETTY_PRINT));
		}catch(Exception $e){}
		
		if(!is_file('widgets.json')){
			file_put_contents('widgets.json', '[]');
			$wlist = [];
		}else{
			$wlist = json_decode(file_get_contents('widgets.json'), true);
		}
		$data['wlist'] = $wlist;
		
		die(json_encode($data));
	*/
	case 'save':
		if(isset($_POST['widgets'])){
			try{
				$d = json_decode($_POST['widgets'], true);
				file_put_contents(STORE_PATH, json_encode($d, JSON_PRETTY_PRINT));
			}catch(Exception $e){
				die($e);
			}
			die('OK');
		}
}

?>