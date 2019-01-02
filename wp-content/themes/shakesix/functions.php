<?
function shakesix_menu(){
    register_nav_menu('header', 'Header');
}
add_action('init', 'shakesix_menu');

function shakesix_jquery(){
    wp_deregister_script('jquery');
    wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', false, '1.10.2');
    wp_enqueue_script('jquery');
}
add_action('init', 'shakesix_jquery');

?>