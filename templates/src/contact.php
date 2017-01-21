
<?php

if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['message'])){
	$firstname = $_POST['firstname']; 
	$lastname = $_POST['lastname']; 
	$email = $_POST['email']; 
	$text = $_POST['message']; 

	$fullname = $lastname.' '.$firstname;


	require 'PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->setFrom($email, $fullname);
$mail->addAddress('gabriel.alexander@sbg.at', 'Kati Baier-Bein');     // Add a recipient
$mail->addReplyTo($email, $fullname);



$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Kontaktanfrage von '.$fullname.' auf freiraum-abtenau.at';
$mail->Body    = '<p><strong>'.$fullname.'</strong> schreibt:</p><p>'.$text.'</p>';


if(!$mail->send()) {
	echo '<div class="mailerror">Leider ist ein Fehler aufgetreten, versuchen Sie es bitte später erneut.</div>';
	//echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	echo '<div class="mailsuccess">Ihre Anfrage wurde erfolgreich Versandt.</div>';
}
}

?>
<div class="contact__text">
	<p>Hier kannst du uns jederzeit eine unverbindliche Anfrage schicken.</p>
</div>
<div class="contact">

	<form class="contact__form" name="contact" method="post" action="contact">
		<label for="firstname">Vorname</label>
		<input type="text" id="firstname" name="firstname">

		<label for="lastname">Nachname</label>
		<input type="text" id="lastname" name="lastname">

		<label for="email">E-Mail</label>
		<input type="email" id="email" name="email">

		<label for="message">Nachricht</label>
		<textarea name="message" id="message" cols="30" rows="7"></textarea>

		<input type="submit" value="Senden">
	</form>
	<div class="contact__address">
		<p>
			<strong>frei.Raum Abtenau</strong><br>
			Markt 220 G5 <br>
			Abtenau
		</p>
		<p>
			+43664 28 18 644 <br>
			<a href="mailto:info@freiraum-abtenau.at">info@freiraum-abtenau.at</a><br>
			
		</p>
	</div>
</div>
