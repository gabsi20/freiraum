
<?php /* Template Name: CONTACT */ ?>
<?php 

include "inc/header.php";
include "inc/nav.php";

?>
<div class="content js-content">
	<?php

	if($_SERVER['REQUEST_METHOD'] === 'POST') {
		$firstname = trim(htmlspecialchars($_POST['firstname'])); 
		$lastname = trim(htmlspecialchars($_POST['lastname'])); 
		$email = trim(htmlspecialchars($_POST['email'])); 
		$text = trim(htmlspecialchars($_POST['message'])); 

		$fullname = $lastname.' '.$firstname;


		$subject = "Contact Form: ".$email;
		$message = $text;
		$headers = 'From: info@freiraum-abtenau.at' . "\r\n" .
		'Reply-To: ' . $email . "\r\n" .
		'X-Mailer: PHP/' . phpversion();


		if(!mail('info@freiraum-abtenau.at',$subject,$message,$headers)){
			echo '<div class="mailerror">Leider ist ein Fehler aufgetreten, versuchen Sie es bitte später erneut.</div>';
		}else{
			echo '<div class="mailsuccess">Ihre Anfrage wurde erfolgreich Versandt.</div>';
		}
	}else{

		?>

		<div class="contact__text">
			<p>Hier kannst du uns jederzeit eine unverbindliche Anfrage schicken.</p>
		</div>
		<div class="contact">
			<form class="contact__form" name="contact" method="post" action="<?php echo get_permalink(); ?>">
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
		<?php } ?>

	</div>

	<?php include "inc/footer.php"; ?>
