$(document).ready(function(){
	
	/*$('.js-navigation-link').click(function(e){
		e.preventDefault();
		if (($(window).width() <= 1200) && !$(this).hasClass('js-footer-link')){	
			$('.js-navigation').slideToggle();
			$('.js-burger-icon').toggleClass('open');
		}	
		$('.js-navigation-link').removeClass('active');
		var page = $(this).data('page');
		var $theLink = $(this);

		if(page == ""){
			page = 'home';
		}
		$.ajax({
			url: page+'.php'
		})
		.done(function(data){
			$('.js-content').slideUp('fast',function(){
				$('.js-content').html(data);
				window.history.pushState(page,page,page);
				$(this).slideDown('fast');
				$theLink.addClass('active')
			});

		})
		.error(function(error){
			console.log(error.status + ' ' + error.statusText);
		});

	});*/

	$('.js-burger-icon').click(function(){
		$('.js-navigation').slideToggle();
		$(this).toggleClass('open');
	});
});