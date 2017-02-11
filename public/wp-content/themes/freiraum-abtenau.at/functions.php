<?php 

if ( function_exists( 'add_image_size' ) ) {
	add_image_size( 'image_fullwidth', 785, 332, true );
	add_image_size( 'gallery_image', 1024, 768, false );
}

add_role( 'custom_role', 'Freiraum Editor', array());

function add_theme_caps() {
    // gets the author role
	$role = get_role( 'custom_role' );

    // This only works, because it accesses the class instance.
    // would allow the author to edit others' posts for current theme only
	$role->add_cap( 'read' );  
	$role->add_cap( 'level_0' );  
	$role->add_cap( 'edit_pages' ); 
	$role->add_cap( 'edit_others_pages' ); 
	$role->add_cap( 'edit_published_pages' ); 
	// $role->remove_cap('edit_posts');
	$role->add_cap( 'upload_files' ); 
}
add_action( 'admin_init', 'add_theme_caps');

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