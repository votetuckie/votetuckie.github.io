<?php
header("Access-Control-Allow-Origin: *");

$servername = "den1.mysql6.gear.host";
$username = "cryptidvacation";
$password = "Wy54qWs5~39~";




try {
    $from_net = 1;
    if(isset($_GET['from_net'])) {
      $from_net = $_GET['from_net'];
    }
    $conn = new PDO("mysql:host=$servername;dbname=cryptidvacation", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'hi';
    $sql = "
    INSERT into texting (
      room,
      time_sent,
      message,
      from_net
    )
    VALUES (
      CAST(:room AS UNSIGNED),
      NOW(),
      :message,
      :from_net
    )";
    $query = $conn->prepare($sql);
    $data = [
      ':room' => $_GET['room'],
      ':message' => $_GET['message'],
      ':from_net' => $from_net,
    ];
    $query->execute($data);
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>
