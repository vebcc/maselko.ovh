<?php
// podlaczenie sie do bazy
	$servername = "localhost";
	$username = "maselkoovh";
	$password = "vdc8b3xCu24ucagb";
	$dbname = "maselkoovh";

	// Polaczene z baza danych
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Test czy udalo sie polaczyc
	if ($conn->connect_error) {
		die("Nie udalo sie polaczyc z baza danych: " . $conn->connect_error);
	}
/* zapytanie do konkretnej tabeli */
$sql = "SELECT * FROM posty ORDER BY id DESC";
$result = $conn->query($sql);

// test czy cokolwiek zostalo odebrane z tabeli
if ($result->num_rows > 0) {
    // jak zostalo odebrane to wyswietla dane
    while($r = $result->fetch_assoc()) {
        echo "<div id='post_".$r['id']. "' class='post'>";
        echo "<div id='tittle_post_".$r['id']. "' class='tittle_post'>";
		echo "<div id='tittle_tx_post_".$r['id']. "' class='tittle_tx_post'>";
        echo "<h2>".$r['tittle']."</h2>";
		echo "</div>";
		echo "</div>";
        echo "<div id='text_post_".$r['id']. "' class='text_post'>";
		echo "<p>".$r['zawartosc']."</p>";
		echo "</div>";
		echo "<div id='stopka_post_".$r['id']. "' class='stopka_post'>";
		echo "<div id='autor_post_".$r['id']. "' class='autor_post'>";
		echo "Dodal: ".$r['login']." ";
		echo "</div>";
		echo "<div id='add_post_".$r['id']. "' class='add_post'>";
		echo "Dodane: ".$r['datetime']." ";
		echo "</div>";
		echo "</div>";
		echo "</div>";
	}
	} else {
		echo "0 results";
	}
$conn->close();
?>
