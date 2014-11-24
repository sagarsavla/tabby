<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

$username = $_GET['username'];
$password = $_GET['password'];

  /* connect to the db */
  $link = mysql_connect('websys3.stern.nyu.edu','websysF14GB4','websysF14GB4!!') or die('Cannot connect to the DB');
  mysql_select_db('websysF14GB4',$link) or die('Cannot select the DB');

$query = "SELECT * FROM USER WHERE   USERNAME='".mysql_real_escape_string($username)."' AND PASSWORD='".mysql_real_escape_string($password)."'";
  $result = mysql_query($query,$link) or die('Errant query:  '.$query);

  /*   echo mysql_num_rows($result);*/

  if(mysql_num_rows($result))
    {
        $output = array('status' => true, 'massage' => 'Welcome!');

    }
  else
    {
        $output = array('status' => false, 'massage' => 'Welcome!');

    }

  /* disconnect from the db */
  @mysql_close($link);

$json = json_encode($output);

echo isset($_GET['callback'])
    ? "{$_GET['callback']}($json)"
    : $json;

?>
