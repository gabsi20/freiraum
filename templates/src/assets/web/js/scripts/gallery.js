$(document).ready(function(){
	$('.pageoverlay').click(function(){
		$(this).fadeOut(function(){
			$(this).empty();
		});
	});

	$(document).on('click','.js-gallery-item',function(e){
		$container = $(document.createElement('div'));
		$container.addClass('container');

		/*$leftbutton = $(document.createElement('div'));
		$leftbutton.addClass('button button--back');*/

		$picture = $(document.createElement('img'));
		$picture.addClass('gallery__image');
		$picture.attr("src",$(this).data('image'));

		//$container.append($leftbutton);
		$container.append($picture);


		$('.pageoverlay').append($container);
		$('.pageoverlay').fadeIn();
	});

});