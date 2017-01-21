<h2>Der frei.Raum</h2>

<p>
	Bewegen und Begegnen.<br>
	Der Trainings-, Kurs- und Seminar- und Veranstaltungsraum in Abtenau. Für alle, die einen Platz für ihre Dienstleistung und für die Arbeit und den Dialog mit anderen suchen.
</p>

<p>
	Helle, freundliche und auf Deine Bedürfnisse abgestimmt und ausgestattete 95 m2. <br>
	Hier kannst Du turnen, tanzen, springen. Am warmen Holzboden liegen und Dich strecken und recken. Meditieren und sinnieren, kreativ oder besinnlich sein und Wege zur Selbsterkenntnis beschreiten.
</p>

<p>
	Anderen Menschen begegnen, mit ihnen arbeiten, Wissen vermehren und Informationen teilen. In einem Meeting, bei Besprechungen, im Rahmen eines Seminars oder eines Workshops. Bei Präsentationen, Vorträgen, Dialog- und Diskussionsrunden. 
</p>

<p>
	Große Projektionsflächen helfen beim Vermitteln, Verstehen und Sehen. An den großen weißen Wänden kommen Flipcharts und Bilder besonders gut zur Geltung. Im Stehen und Sitzen, im Gehen und Liegen - ganz wie es Dein Programm, Dein Workshop oder Dein Produkt, Dein Angebot verlangt. 
</p>

<p>
	Eine große Terrasse, nach Süden ausgerichtet, mit beeindruckendem Blick aufs Tennengebirge verschafft Dir, Deinen Freunden und Kunden frische Luft.
</p>



<p>
	Und für die „wirklich wichtigen Gespräche“, für Informelles und Persönliches, gibt´s die Lounge mit gemütlicher Ecke und Bar mit Kaffee, Erfrischung und Snacks. 
</p>

<div class="gallery">
	<?php
	foreach(glob('assets/web/img/galleries/der-freiraum/*.{jpg,JPG}',GLOB_BRACE) as $file){
		?>
		<div class="gallery__item js-gallery-item" style="background-image: url('<?= $file ?>')" data-image="<?= $file ?>"></div>
		<?php
	}

	?>
</div>