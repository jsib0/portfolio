<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    // Enter the email where you want to receive the message
    $emailTo = 'sibalajp@gmail.com';

    $clientFirstName = addslashes(trim($_POST['first_name']));
    $clientEmail = addslashes(trim($_POST['email']));
    $subject = addslashes(trim($_POST['subject']));
    $message = addslashes(trim($_POST['message']));

    $array = array('emailMessage' => '', 'subjectMessage' => '', 'messageMessage' => '');

    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($subject == '') {
        $array['subjectMessage'] = 'Empty subject!';
    }
     if($clientFirstName == '') {
        $array['clientFirstName'] = 'Empty First Name!';
    }
    if($message == '') {
        $array['messageMessage'] = 'Empty message!';
    }
    if(isEmail($clientEmail) && $subject != '' && $message != '') {
        // Send email
		$headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
		mail($emailTo, $subject . " (bootstrap contact form)", $message, $headers);
    }

    echo json_encode($array);

}

?>

<?php 


$subject = 'Contact us';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
//below is what the customer types on the message
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$msg .='Email from '.$email.'
Subject from '.$subject.'
    Email from '.$email.'';     

mail("sibalajp@gmail.com",$subject,$msg,$headers);

?>

