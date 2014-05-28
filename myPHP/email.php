<?php
	error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);
	require_once "Mail.php";

	$from = "gordon.liu@sap.com";
	$to = "brooklyn.huang@sap.com";
	$subject = "Hi!";
	$body = "Hi,\n\nHow are you?";

	$host = "mail.sap.corp";

	$headers = array ('From' => $from,
	'To' => $to,
	'Subject' => $subject);
	$smtp = Mail::factory('smtp',
	array ('host' => $host,
	'auth' => false));

	$mail = $smtp->send($to, $headers, $body);

	/*require 'PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'mail.sap.corp';  // Specify main and backup server
	$mail->SMTPAuth = false;                               // Enable SMTP authentication

	$mail->From = 'brooklyn.huang@sap.com';
	$mail->FromName = 'Mailer';
	$mail->addAddress('brooklyn.huang@sap.com', 'Brooklynb7');  // Add a recipient

	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Here is the subject';
	$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	if(!$mail->send()) {
	   echo 'Message could not be sent.';
	   echo 'Mailer Error: ' . $mail->ErrorInfo;
	   exit;
	}

	echo 'Message has been sent';*/
?>