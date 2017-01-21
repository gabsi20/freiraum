<?php
$path = ltrim($_SERVER['REQUEST_URI'], '/');    // Trim leading slash(es)
$elements = explode('/', $path);                // Split path on slashes

if(empty($elements[0])) {                       // No path elements means home
	$page = 'home';
} else             // Pop off first item and switch
{
	$filename = $elements[0];
	if (file_exists ($filename.'.php')){
		$page = $filename;
	}else{
		$page = '404';
	}
}
?>