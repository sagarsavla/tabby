<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

$buyer = $_GET['buyer'];
$seller = $_GET['seller'];
$depositamount = $_GET['depositamount'];
$buyamount = $_GET['buyamount'];
$buycomment = $_GET['buycomment'];

if(empty($depositamount))
{
        $depositamount = 0.0;
}

if(empty($buyamount))
{
        $buyamount = 0.0;
}

$link = mysql_connect('websys3.stern.nyu.edu','websysF14GB4','websysF14GB4!!') or die('Cannot connect to the DB');
mysql_select_db('websysF14GB4',$link) or die('Cannot select the DB');

$query = "call   newBuyT(\"".$buyer."\",\"".$seller."\",\"".$buycomment."\",".$buyamount.",".$depositamount.")";
$result = mysql_query($query,$link) or die('Errant query:  '.$query);

@mysql_close($link);

$output = array('status' => true, 'massage' => 'Welcome!');
$json = json_encode($output);

echo isset($_GET['callback'])
    ? "{$_GET['callback']}($json)"
    : $json;

?>
