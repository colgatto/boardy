$port = 4421
$scriptPath = split-path -parent $MyInvocation.MyCommand.Definition
php -S localhost:$port -t $scriptPath\www
