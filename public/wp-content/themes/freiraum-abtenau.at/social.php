<?php

$settings = array();
$settings['facebook_app_id'] = '1798113670409723';
$settings['facebook_app_secret'] = '7565905c77bdf827e1a8a8c6c0da1475';



getFB(generateFacebookToken($settings));

function generateFacebookToken($settings){

	$curl = curl_init();
	$requestURL = "https://graph.facebook.com/v2.5/oauth/access_token?client_id=".$settings['facebook_app_id']."&client_secret=".$settings['facebook_app_secret']."&grant_type=client_credentials";

	

	curl_setopt_array($curl, array(
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_HEADER => false,
		CURLOPT_URL => $requestURL,
		CURLOPT_SSL_VERIFYPEER => false,
		));

	$resp = json_decode(curl_exec($curl));

	return $resp->access_token;
}





function getFB($token){
	$url = 'https://graph.facebook.com/1645290745709615/feed?access_token='.$token.'&format=json&fields=full_picture,link,type,message,created_time';

	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_URL =>  $url,
		CURLOPT_SSL_VERIFYPEER => false,
		));

	$resp = curl_exec($curl);

	echo $resp;

}

?>