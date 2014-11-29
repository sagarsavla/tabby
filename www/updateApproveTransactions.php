<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");


$value = $_GET['transactions'];

  $link = mysql_connect('websys3.stern.nyu.edu','websysF14GB4','websysF14GB4!!') or die('Cannot connect to the DB');
  mysql_select_db('websysF14GB4',$link) or die('Cannot select the DB');

$query = "call approveT(".$value.")";
        $result = mysql_query($query,$link) or die('Errant query:  '.$query);


@mysql_close($link);

$output = array('status' => true, 'massage' => 'Welcome!');
$json = json_encode($output);

echo isset($_GET['callback'])
    ? "{$_GET['callback']}($json)"
    : $json;


?>
