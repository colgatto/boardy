<?php

class Api{
	static public function updateStore($argv){
		$store_path = __DIR__ . '/store.json';
		$store = is_file($store_path) ? json_decode(file_get_contents($store_path), true) : [];
		try{
			$bin_data = json_decode(file_get_contents('https://api.binance.com/api/v3/exchangeInfo'), true);
			$p = [];
			for ($i=0, $l = count($bin_data['symbols']); $i < $l; $i++) {
				$s = $bin_data['symbols'][$i];
				array_push($p, $s['baseAsset'] . '/' . $s['quoteAsset']);
			}
			$store['coinPairs'] = $p;
			file_put_contents($store_path, json_encode($store, JSON_PRETTY_PRINT));
		}catch(Exception $e){
			return false;
		}
		return true;
	}
}

?>
