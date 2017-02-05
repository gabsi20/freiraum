<?php 

if ( function_exists( 'add_image_size' ) ) {
	add_image_size( 'image_fullwidth', 785, 332, true );
	add_image_size( 'gallery_image', 1024, 768, false );
}

/*function sortFunction( $a, $b ) {
	return strtotime($a["date"]) - strtotime($b["date"]);
}



function my_acf_load_value( $value, $post_id, $field ) {
	$order = array();

	print_r($value);

	if( empty($value) ) {
		return $value;
	}

	foreach( $value as $i => $row ) {
		$order[ $i ] = $row['field_5895ca84a00f0'];
	}

	var_dump($order);

	usort($order, "sortFunction");

	return $order;
	
}

add_filter('acf/load_value', 'my_acf_load_value', 10, 3);*/

?>