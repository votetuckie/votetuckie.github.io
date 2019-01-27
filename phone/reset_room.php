<?php
header('Content-type: application/json');

$servername = "den1.mysql6.gear.host";
$username = "cryptidvacation";
$password = "Wy54qWs5~39~";

try {
    $txt = $_GET['room'];
    $conn = new PDO("mysql:host=$servername;dbname=cryptidvacation", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conn->prepare("DELETE * FROM texting WHERE room = :room");
    $data = [
      ':room' => $_GET['room'],
    ];
    $query->execute($data);
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>
