
<?php 


$subject = 'Contact us';
$to = 'sibalajp@gmail.com';
$header = "Hello";

//below is what the customer types on the message
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$fname = $_POST['first_name'];

$msg .='Email from '.$email.'
Subject from '.$subject.'
    Email from '.$email.'';     

mail($to,$subject,$msg,$fname,$header);

?>
