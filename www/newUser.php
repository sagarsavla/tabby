<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

$username = $_GET['newusername'];
$password = $_GET['newpassword'];
$email = $_GET['email'];

  /* connect to the db */
  $link = mysql_connect('websys3.stern.nyu.edu','websysF14GB4','websysF14GB4!!') or die('Cannot connect to the DB');
  mysql_select_db('websysF14GB4',$link) or die('Cannot select the DB');

  $query = "SELECT * FROM USER WHERE   USERNAME='".mysql_real_escape_string($username)."'";
  $result = mysql_query($query,$link) or die('Errant query:  '.$query);

  if(mysql_num_rows($result))
    {
        $output = array('status' => false, 'massage' => 'User exists');

    }
  else
    {
        $newuser = "call newUser(\"".$username."\",\"".$password."\",\"".$email."\")";
        $result = mysql_query($newuser,$link) or die('Errant query:  '.$newuser);
        $result = mysql_query($query,$link) or die('Errant query:  '.$query);
        if(mysql_num_rows($result))
        {

                $output = array('status' => true, 'massage' => 'User Created!');
        }
        else
        {
                $output = array('status' => false, 'massage' => 'Welcome!');
        }

    }

  /* disconnect from the db */
  @mysql_close($link);

$json = json_encode($output);

echo isset($_GET['callback'])
    ? "{$_GET['callback']}($json)"
    : $json;

?>
