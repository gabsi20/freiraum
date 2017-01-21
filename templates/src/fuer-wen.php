<h2>Für wen</h2>

<p>
	Der Trainings-, Kurs-, Seminar- und Veranstaltungsraum in Abtenau. Für alle, die einen Platz für ihre Dienstleistungen, Produkte, Angebote und für den Dialog und die Begegnung mit anderen suchen.
</p>
<p>
	Das ist der Raum für Trainer, Kursleiter, Lehrende. Moderatorinnen, Präsentatorinnen, Projektoren. Dienstleister, Veranstalter und Gestalter. Für Menschen, die etwas zu sagen haben, die teilen und mitteilen wollen. Für Kreative, die sich, Ihre Bilder und Exponate anderen zeigen wollen. 
</p>
<p>
	Für Dich, der physisch und psychisch beweglich bleiben möchte. Für Dich, die lieber in der Gemeinschaft mit anderen, Freude an Bewegung, Beweglichkeit und Stärkung der persönlichen Fitness findet. Die Partner und Nutzer des frei.Raum haben dafür das passende Angebot. Hier ist immer was los!
</p>

<div class="gallery">
	<?php
	foreach(glob('assets/web/img/galleries/fuer-wen/*.{jpg,JPG}',GLOB_BRACE) as $file){
		?>
		<div class="gallery__item js-gallery-item" style="background-image: url('<?= $file ?>')" data-image="<?= $file ?>"></div>
		<?php
	}

	?>
</div>