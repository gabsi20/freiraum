$(function(){
	if($('.socialhub').length > 0	){	
		$.ajax({
			method: 'get',
			url: '../../../social.php',
			success: function(result){
				var colors = ['82bf5b','7DBF94','BEBF73'];
				var posts = JSON.parse(result).data;
				console.log(posts);
				for(var index in posts){
					var appender = '';
					var post = posts[index];
					var randomcolor = colors[Math.floor(Math.random()*3)];
					switch(post.type){
						case 'photo':
						appender = '<div class="socialtile" style="background-image: url('+post.full_picture+')">'+
						''+
						'<div class="message"><a href="'+post.link+'" target="_blank"><p>Öffnen</p></a></div>'+
						//'</a>'+
						'</div>';
						break;
						case 'event':
						appender = '<div class="socialtile" style="background-image: url('+post.full_picture+')">'+
						//'<a href="'+post.link+'" target="_blank">'+
						'<div class="message"><a href="'+post.link+'" target="_blank"><p>Öffnen</p></a></div>'+
						//'</a>'+
						'</div>';
						break;
						case 'status':
						appender = '<div class="socialtile" style="background-color: #'+randomcolor+'">'+
						//'<a href="'+post.link+'" target="_blank">'+
						'<div class="message"><a href="'+post.link+'" target="_blank"><p>Öffnen</p></a></div>'+
						//'</a>'+
						'</div>';
						break;

					}
					$('.socialhub').append(appender);
				}
			},
			error: function(error){
				console.log(error);
			}
		});	
	}
});

