<?php

// menu
function lights_menu(){
  register_nav_menu('header', 'Header');
}
add_action('init', 'lights_menu');

// widgets
function lights_widgets() {
  register_sidebar([
    'name' => 'Header',
    'id' => 'header1',
    'before_widget' => '<div class="widgets">',
    'after_widget' => '</div>',
    'before_title' => '<h3>',
    'after_title' => '</h3>',
  ]);
}
add_action( 'widgets_init', 'lights_widgets' );

// jquery
function lights_jquery(){
  wp_deregister_script('jquery');
  wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', false, '1.10.2');
  wp_enqueue_script('jquery');
}
add_action('init', 'lights_jquery');

?>
