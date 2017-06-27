<?php $events = get_sub_field('events'); ?>

<div class="calendar">
	<ul class="calendar__list">
		<?php foreach ($events as $i => $event) { 
			$image = $event['image'];
			?>
			<li class="calendar__item">
				<div class="calendar__head js-calendar-head">

					<div class="calendar__date"><?= $event['date'] ?></div>
					<div class="calendar__title"><?= $event['title'] ?></div>
				</div>
				<div class="calendar__description">
					<?= $event['description'] ?>
					<div class="calendar__image js-gallery-item" style="background-image: url('<?= $image['sizes']['gallery_image'] ?>')" data-image="<?= $image['sizes']['gallery_image'] ?>"></div>
				</div>
			</li>
			<?php } ?>
		</ul>
	</div>