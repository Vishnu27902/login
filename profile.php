<?php
    session_start();
    $mail=$_SESSION['mailid'];
    // echo $mail;
    $filter=['_id'=>"$mail"];
    $option=[];
    $connection=new MongoDB\Driver\Manager("mongodb://localhost:27017");
    $query = new MongoDB\Driver\Query($filter,$option);
    $res = $connection->executeQuery("profile.details",$query);
    foreach($res as $row){
        echo(json_encode($row));
    } 
?>
