<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");

$servername = "den1.mysql6.gear.host";
$username = "cryptidvacation";
$password = "Wy54qWs5~39~";

try {
    $txt = $_GET['room'];
    $conn = new PDO("mysql:host=$servername;dbname=cryptidvacation", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conn->prepare("SELECT * FROM texting WHERE room = :room");
    $data = [
      ':room' => $_GET['room'],
    ];
    $query->execute($data);
    $json = $query->fetchAll(PDO::FETCH_ASSOC);
    echo (json_encode($json));
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>
