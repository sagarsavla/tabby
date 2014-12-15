<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

$username = $_GET['username'];
  /* connect to the db */

$link = mysql_connect('websys3.stern.nyu.edu','websysF14GB4','websysF14GB4!!') or die('Cannot connect to the DB');
mysql_select_db('websysF14GB4',$link) or die('Cannot select the DB');

$query = "SELECT B.USERNAME, A.BUYDATE, A.COMMENT, A.AMOUNT FROM TRANSACTION  A, USER B , USER C
where C.USERNAME =\"".$username."\"
and A.BUYERID=C.USERID
and B.USERID = A.SELLERID order by BUYDATE desc";

$result = mysql_query($query,$link) or die('Errant query:  '.$query);

$records=array();

if(mysql_num_rows($result)) {
    while($record = mysql_fetch_assoc($result)) {
      $records[] = array('record'=>$record);
    }
  }

$json= json_encode(array('status' => true,'records'=>$records));

  /* disconnect from the db */
@mysql_close($link);

echo isset($_GET['callback'])
    ? "{$_GET['callback']}($json)"
    : $json;

?>
