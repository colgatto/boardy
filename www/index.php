<?php
	require_once __DIR__ . '/config.php';
	$tab = isset($_GET['t']) ? $_GET['t'] : 'home';
	includeHeader($tab);
?>
</head>
<body>	
	<?php includeNav($tab); ?>
	<div class="container" id="wcontainer"></div>
</body>
</html>