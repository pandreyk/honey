<?php
  //устанавливаем кодировку
  header('Content-Type: application/json; charset=utf-8');
  include './connect.php';
 
  $response = [];
  
  $result = $mysqli->query("SELECT * FROM `users` WHERE 1");
  while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
  }
  
  echo json_encode($response);
?>
