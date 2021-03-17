<?php
  header('Content-Type: text/html; charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  
  $db_host = "localhost"; 
  $db_user = "root";
  $db_password = "";
  $db_base = 'honey';
  $link = $mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);
  $mysqli->set_charset("utf8");

  // $result = $mysqli->query("SELECT * FROM `users` WHERE 1");
  // while($row = mysqli_fetch_assoc($result)){
  //   $arr[] = $row;
  // }
  // echo json_encode($arr);
  
?>
