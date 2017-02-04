<div class="gallery">
	<?php $images = get_sub_field('gallery'); ?>
	<?php
	foreach($images as $image){
		?>
		<div class="gallery__item js-gallery-item" style="background-image: url('<?= $image['sizes']['gallery_image'] ?>')" data-image="<?= $image['sizes']['gallery_image'] ?>"></div>
		<?php
	}

	?>
</div>