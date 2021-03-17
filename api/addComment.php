<?php
  //устанавливаем кодировку
  header('Content-Type: application/json; charset=utf-8');
  include './connect.php';

  $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
  $name = $obj['name'];
  $email = $obj['email'];
  $comment = $obj['comment'];
  $response = [];
  
  $result = $mysqli->query("INSERT INTO `users` (name, email, comment) VALUES ('$name', '$email', '$comment')");
  
  // $result = $mysqli->query("SELECT * FROM `users` WHERE 1");
  // while($row = mysqli_fetch_assoc($result)){
  //   $response[] = $row;
  // }
  
  echo json_encode($result);
?>
