<?PHP
date_default_timezone_set('Europe/Warsaw');
require("conf.php");
require("ts3admin.class.php");
$tsAdmin = new ts3admin($ip, $qport);
