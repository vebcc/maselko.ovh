<?PHP

$ts3_ip = '127.0.0.1';
$ts3_queryport = 10011;
$ts3_user = 'riskymaslo';
$ts3_pass = 'GOGNLU7X';
$ts3_port = 9987;

require("ts3admin.class.php");

$tsAdmin = new ts3admin($ts3_ip, $ts3_queryport);

if($tsAdmin->getElement('success', $tsAdmin->connect())) {

	$tsAdmin->login($ts3_user, $ts3_pass);

	$tsAdmin->selectServer($ts3_port);

	$clients = $tsAdmin->clientList();

	echo '<div class="tsinfo">Na serwerze jest '. count($clients['data']) . ' osób. </div>';

	foreach($clients['data'] as $client) {
		echo '<div class="tsnick">' . $client['client_nickname'] . '</div>';
	}
}else{
	echo 'Connection could not be established.';
}

if(count($tsAdmin->getDebugLog()) > 0) {
	foreach($tsAdmin->getDebugLog() as $logEntry) {
		echo '<script>alert("'.$logEntry.'");</script>';
	}
}
?>
