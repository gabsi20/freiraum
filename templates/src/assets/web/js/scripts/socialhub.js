$(document).ready(function(){
	if($('.socialhub').length > 0	){
		
		/*$.ajax({
			method: 'get',
			url: 'data',
			success: function(result){
				console.log(result);
				
			}
		});*/

		var colors = ['82bf5b','7DBF94','BEBF73'];
		var posts = result.data;
		for(var index in posts){

			var appender = '';
			var post = posts[index];
			var randomcolor = colors[Math.floor(Math.random()*3)];
			console.log(randomcolor);

			switch(post.type){
				case 'photo':
				appender = '<div class="socialtile" style="background-image: url('+post.full_picture+')">'+
				'<div class="message"><p>Öffnen</p></div>'+
				'</div>';
				break;
				case 'event':
				appender = '<div class="socialtile" style="background-image: url('+post.full_picture+')">'+
				'<div class="message"><p>Öffnen</p></div>'+
				'</div>';
				break;
				case 'status':
				appender = '<div class="socialtile" style="background-color: #'+randomcolor+'">'+
				'<div class="message"><p>Öffnen</p></div>'+
				'</div>';
				break;

			}
			$('.socialhub').append(appender);



		}
	}
});


var result = {
	"data": [
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/14915279_1784270058478349_6585009880870009782_n.jpg?oh=768afeaf64ccf9de2c0bb996ce03634d&oe=58C6DE85",
		"type": "photo",
		"message": "Ich bin wütend, traurig und entsetzt! WER macht so etwas in Abtenau!Mutwillige Zerstörung. Das freiRaum Team freut sich auf sachdienliche Hinweise. Danke für die Unterstützung.",
		"created_time": "2016-11-03T07:47:41+0000",
		"link": "https://www.facebook.com/freiRaumAbtenau/photos/a.1645433505695339.1073741828.1645290745709615/1784270058478349/?type=3",
		"id": "1645290745709615_1784271068478248"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/t31.0-8/s720x720/14713055_1777427779162577_4410629654974427785_o.jpg",
		"type": "photo",
		"message": "Für den PILATES-Kurs am Freitag, 9:30 - 10:30 Uhr, sind noch Plätze frei! Kursstart: 4.11. (10 EH), Schnuppereinheit möglich!Anmeldung unter: 0680/40 120 38 oder www.balanced-body.at",
		"created_time": "2016-10-21T12:15:29+0000",
		"link": "https://www.facebook.com/freiRaumAbtenau/photos/a.1656614497910573.1073741829.1645290745709615/1777427779162577/?type=3",
		"id": "1645290745709615_1777427779162577"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/14680522_1772362979669057_8831382919776624729_n.jpg?oh=d88450d7f95711ee840b00ea5a3755b6&oe=58916EAF",
		"type": "photo",
		"message": "Kursübersicht Herbst 2016 Bei einigen Kursen ist es möglich noch einzusteigen!!!Anmeldung bitte direkt bei den Kursleiter/innen.:):):) Kontakt Telefon Nr. findest du unter INFO.",
		"created_time": "2016-10-11T07:09:28+0000",
		"link": "https://www.facebook.com/freiRaumAbtenau/photos/a.1656614497910573.1073741829.1645290745709615/1772362979669057/?type=3",
		"id": "1645290745709615_1772362979669057"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/c176.0.609.609/14291635_633841280123341_5121466756116257481_n.jpg?oh=f6c63d6a2586950cd120885de8d41d1b&oe=5893A6E6",
		"type": "event",
		"created_time": "2016-09-20T07:27:04+0000",
		"link": "https://www.facebook.com/events/1228348690518605/",
		"id": "1645290745709615_1763556647216357"
	},
	{
		"full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQBAkjPdIN8GG6_N&url=http%3A%2F%2Fkongress.fitsportaustria.at%2Fimages%2Flayout%2Flogo_fb.jpg",
		"type": "link",
		"message": "Von 21. - 23. Oktober in Saalfeld! NIA vertreten durch Sylvia Edlinger! Ein super interessantes und inspirierendes Wochenende! http://kongress.fitsportaustria.at/main.asp?VID=1&kat1=114&kat2=742&kat3=598",
		"created_time": "2016-09-09T12:23:07+0000",
		"link": "http://kongress.fitsportaustria.at/main.asp?VID=1&kat1=114&kat2=742&kat3=598",
		"id": "1645290745709615_1759311724307516"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/14212728_1759175840987771_453668292193748698_n.png?oh=9800480c25a9faabb578b953e25d9ff1&oe=589860DE",
		"type": "photo",
		"message": "Für den PILATES-Kurs am Freitag, 9:30 - 10:30 Uhr, sind noch Restplätze frei! Kursstart: 16.9. Anmeldung unter: 0680/40 120 38 oder www.balanced-body.at",
		"created_time": "2016-09-09T06:13:25+0000",
		"link": "https://www.facebook.com/freiRaumAbtenau/photos/a.1656614497910573.1073741829.1645290745709615/1759175840987771/?type=3",
		"id": "1645290745709615_1759175840987771"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/13631419_1733363810235641_2181331776207404161_n.jpg?oh=9d97842db75b0ea7b33f5c36b786ceeb&oe=58985C46",
		"type": "photo",
		"message": "So im September starten die meisten Kurse. Anmeldung bei den jeweiligen Kursleiter/innen....Bis dann CU im freiRaum Abtenau",
		"created_time": "2016-08-28T19:46:44+0000",
		"link": "https://www.facebook.com/freiRaumAbtenau/photos/a.1656614497910573.1073741829.1645290745709615/1733363810235641/?type=3",
		"id": "1645290745709615_1754432368128785"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/14088580_1752277068344315_5345574161130292254_n.jpg?oh=a1d142eabd9555fac097b2ee8abf5b9f&oe=58D36FB1",
		"type": "event",
		"created_time": "2016-08-23T16:01:38+0000",
		"link": "https://www.facebook.com/events/244925719240999/",
		"id": "1645290745709615_244925719240999"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/c162.0.636.636/14079991_1752265618345460_5593396175819944105_n.jpg?oh=aaf17641dcda072a685b492c6844a811&oe=589026FD",
		"type": "event",
		"created_time": "2016-08-23T15:06:48+0000",
		"link": "https://www.facebook.com/events/313953842285632/",
		"id": "1645290745709615_313953842285632"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/t31.0-8/c170.0.700.700/13908911_1752261735012515_2479547986391460422_o.jpg",
		"type": "event",
		"created_time": "2016-08-23T14:56:39+0000",
		"link": "https://www.facebook.com/events/275934922792180/",
		"id": "1645290745709615_275934922792180"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/14046092_1752197371685618_5651946405349753178_n.jpg?oh=cd8fd407bf40a1f6d68036b410927d1f&oe=588C3020",
		"type": "event",
		"created_time": "2016-08-23T11:28:30+0000",
		"link": "https://www.facebook.com/events/554284624773082/",
		"id": "1645290745709615_554284624773082"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/c162.0.636.636/14079857_1752193518352670_4786743272799325494_n.jpg?oh=21496a1bc683d0909e503ab367e5c7c6&oe=58874F20",
		"type": "event",
		"created_time": "2016-08-23T11:07:38+0000",
		"link": "https://www.facebook.com/events/511702645701038/",
		"id": "1645290745709615_511702645701038"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/t31.0-8/c170.0.700.700/14054378_1752188491686506_5583607639321557741_o.jpg",
		"type": "event",
		"created_time": "2016-08-23T10:44:49+0000",
		"link": "https://www.facebook.com/events/549924638528754/",
		"id": "1645290745709615_549924638528754"
	},
	{
		"type": "status",
		"message": "****ACHTUNG KURSANMELDUNGEN bodyART*****NEUE Handy Nr. von SONJA 0664 2190501*************************************************************",
		"created_time": "2016-08-05T09:58:25+0000",
		"id": "1645290745709615_1745054072399948"
	},
	{
		"full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQCwyNuyVqA9iRNI&url=https%3A%2F%2Fscontent.xx.fbcdn.net%2Ft31.0-8%2Fc168.0.664.664%2F13765958_1739109966327692_2014417843674299097_o.jpg",
		"type": "link",
		"created_time": "2016-07-21T06:01:29+0000",
		"link": "https://www.facebook.com/events/1777885809165227/",
		"id": "1645290745709615_1777885809165227"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/13631419_1733363810235641_2181331776207404161_n.jpg?oh=9d97842db75b0ea7b33f5c36b786ceeb&oe=58985C46",
		"type": "photo",
		"message": "die Kurse ab Herbst sind fixiert! Anmeldung jederzeit möglich!",
		"created_time": "2016-07-06T09:18:42+0000",
		"link": "https://www.facebook.com/freiRaumAbtenau/photos/a.1656614497910573.1073741829.1645290745709615/1733363810235641/?type=3",
		"id": "1645290745709615_1733363810235641"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/t31.0-8/c167.0.667.667/13528108_1730606233844732_5962959050128297881_o.jpg",
		"type": "event",
		"created_time": "2016-06-28T10:26:07+0000",
		"link": "https://www.facebook.com/events/1788539898098854/",
		"id": "1645290745709615_1788539898098854"
	},
	{
		"type": "status",
		"message": "bei 31 Grad und gefühlte 50 auf unserer Sonnenterasse war gestern unser freiRaum Sommerfest.Mit musikalischen Klängen auf Gitarre, Key Board und Gesang haben wir unser Fest ausklingen lassen. Wir werden uns jetzt nach und nach in die kreative Sommerpause zurückziehen!Danke an alle, die unseren schönen freiRaum Abtenau das ganze Jahr so toll beleben!2 sportliche Sommertermine die das Warten bis September verkürzen...Pilates Sommer Schnupperstunden* MI 20.7. 19:30 Uhr* FR 26.8. 09:30 UhrAnmeldung erbeten....Durchführung ab 7 Personen gesichert!Herzliche Grüsse Kati vom freiRaum Abtenau Team",
		"created_time": "2016-06-25T10:58:31+0000",
		"id": "1645290745709615_1729453683959987"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/13240538_1713731365531444_3767920763635709123_n.jpg?oh=c4a68911bb91bedc2f577322d7fad2b5&oe=5888F94C",
		"type": "photo",
		"message": "Die Trainerinnen der SU Sektion Aktivsport bei der Weiterbildung Teamgeist. Es war eine tolle Veranstaltung und sehr lehrreich...diverse Kurse im freiRaum werden davon mit Sicherheit in Zukunft auch davon profitieren! :) :)",
		"created_time": "2016-05-21T09:50:40+0000",
		"link": "https://www.facebook.com/SportunionAbtenauAktivsport/photos/a.1666159363621978.1073741835.1664862673751647/1713731365531444/?type=3",
		"id": "1645290745709615_1716644615240894"
	},
	{
		"full_picture": "https://external.xx.fbcdn.net/safe_image.php?d=AQC6XEvlxqP-OiQS&w=720&h=720&url=http%3A%2F%2Fwww.ardmediathek.de%2Fimage%2F00%2F35%2F25%2F70%2F86%2F1638525158%2F16x9%2F1280&cfs=1&sx=435&sy=0&sw=720&sh=720",
		"type": "video",
		"message": "dieser Beitrag ist echt sehenswert und vor allem es stimmt!",
		"created_time": "2016-05-14T13:25:24+0000",
		"link": "http://www.ardmediathek.de/tv/Visite/%C3%9Cberholte-Ern%C3%A4hrungsempfehlungen/NDR-Fernsehen/Video?bcastId=14049224&documentId=35257080",
		"id": "1645290745709615_571214666386003"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-0/p180x540/13240159_1714300865475269_4418236217082493213_n.jpg?oh=d6d3e81923d72a02108f4dfbf54ad931&oe=58CA2867",
		"type": "photo",
		"message": "der aktuelle Belegungsplan....gleich vormerken 24.06. freiRaum Mitt-Sommer Fest mit einigen Showeinlagen unserer freiRaum Teilnehmer!!!",
		"created_time": "2016-05-14T13:11:58+0000",
		"link": "https://www.facebook.com/freiRaumAbtenau/photos/a.1656614497910573.1073741829.1645290745709615/1714300865475269/?type=3",
		"id": "1645290745709615_1714300865475269"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/c0.0.720.720/13173671_1709956532575594_3697497585628843862_n.jpg?oh=5c1d2691bd24dd60157bd5a6851dc20f&oe=58CD774F",
		"type": "event",
		"created_time": "2016-05-10T14:11:15+0000",
		"link": "https://www.facebook.com/events/993319477417439/",
		"id": "1645290745709615_1709957622575485"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/c0.0.720.720/13166103_1709953562575891_5487373170171652904_n.jpg?oh=cc243ae09f32ebd25ef1d4026249acd6&oe=5886B862",
		"type": "event",
		"created_time": "2016-05-10T14:10:36+0000",
		"link": "https://www.facebook.com/events/1091911450879005/",
		"id": "1645290745709615_1712909275614428"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/c0.0.720.720/13179108_1709952809242633_5862094629104557427_n.jpg?oh=8f121bba463969a14a5c8a468177022b&oe=5886E9FA",
		"type": "event",
		"created_time": "2016-05-10T14:09:49+0000",
		"link": "https://www.facebook.com/events/1615713082081552/",
		"id": "1645290745709615_1712909068947782"
	},
	{
		"full_picture": "https://scontent.xx.fbcdn.net/t31.0-8/c161.0.720.720/p720x720/13131240_1711846125720743_5425028225434681272_o.jpg",
		"type": "event",
		"created_time": "2016-05-07T17:21:58+0000",
		"link": "https://www.facebook.com/events/266002593744637/",
		"id": "1645290745709615_266002593744637"
	}
	],
	"paging": {
		"previous": "https://graph.facebook.com/v2.8/1645290745709615/feed?fields=full_picture,type,message,created_time,link&format=json&since=1478159261&access_token=EAAZAjXZCaXLfsBABnzeUdZBUqTwczONdHZApVyxxbz4HAxCYZBuynPNe6XSKoxmfXSCwt1oGSEzgsALZCZChFEL3fCnHJJI93TsDaZBamEC9CpsLJC5zDCdgOu2P88loZC2vxlZB8D2ZBV3CC7MBHBOtJGz0N1AlRAuS8Jym2ksvuDE9QZDZD&limit=25&__paging_token=enc_AdAcj5Yoa1aDoGPGsjACRc2wLrP5RKl6CmaJBaDYxo7LWTROt27GWDbC3GcLNGbPScYNIiN2QI9ZCvpw3k6yJ6g9vMuNmL3HxqYZA4VufNGlrkogZDZD&__previous=1",
		"next": "https://graph.facebook.com/v2.8/1645290745709615/feed?fields=full_picture,type,message,created_time,link&format=json&access_token=EAAZAjXZCaXLfsBABnzeUdZBUqTwczONdHZApVyxxbz4HAxCYZBuynPNe6XSKoxmfXSCwt1oGSEzgsALZCZChFEL3fCnHJJI93TsDaZBamEC9CpsLJC5zDCdgOu2P88loZC2vxlZB8D2ZBV3CC7MBHBOtJGz0N1AlRAuS8Jym2ksvuDE9QZDZD&limit=25&until=1462641718&__paging_token=enc_AdCPsprGZA1KAru150ZAV7CsI6CGbDPi2dzkFytyqCP5HOLZAx1lwzhXaLT4Quvp6I9XXsltpKH6haeTkLJs42HcmaRsJAaBJNFSRAWjJnrLSeKNQZDZD"
	}
};