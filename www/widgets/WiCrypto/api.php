<?php
/*
switch($_GET['action']){
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
}
*/
?>
