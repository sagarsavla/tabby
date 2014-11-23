<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");
    // We don't need action for this tutorial, but in a complex code you need a way to determine Ajax action nature
    //$action = $_POST['action'];
    // Decode JSON object into readable PHP object
    //$formData = json_decode($_POST['formData']);

    // Get username
    //$username = $formData->{'username'};
    // Get password
    //$password = $formData->{'password'};

    // Lets say everything is in order
    $output = array('status' => true, 'massage' => 'Welcome!');

$json = json_encode($output);

echo isset($_GET['callback'])
    ? "{$_GET['callback']}($json)"
    : $json;

?>
