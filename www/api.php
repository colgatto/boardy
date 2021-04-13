<?php

require_once __DIR__ . '/config.php';

if(!isset($_GET['wi'])) die('NO wi');
$wi = $_GET['wi'];
$wi_dir_path = __DIR__ . '/widgets' . '/' . $wi;
$wi_api_path = $wi_dir_path . '/api.php';
if(!preg_match('/^[a-zA-Z0-9]+$/', $wi) || !is_dir($wi_dir_path) || !is_file($wi_api_path)) die('NO');

if(!isset($_GET['method'])) die('NO method');
$method = $_GET['method'];

$args = isset($_GET['argv']) ? json_decode($_GET['argv'], true) : [];

require_once $wi_api_path; 

if (!class_exists('Api')) die('NO api');
if(!method_exists('Api', $method)) die('NO method');

die( Api::$method($args) );

?>