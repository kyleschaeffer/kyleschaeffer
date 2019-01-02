<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	
	<head>
		<meta charset="<?php bloginfo('charset'); ?>" />
		<meta name="description" content="<?php bloginfo('description'); ?>" />
		<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
		<title><?php wp_title(' / ', true, 'right'); ?>Kyle Schaeffer<?php if(is_front_page()){ echo " / Web Design and SharePoint Branding"; } ?></title>
		<link rel="profile" href="http://gmpg.org/xfn/11" />
		<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
		<?php if(is_singular() && get_option('thread_comments')) wp_enqueue_script('comment-reply'); ?>
		<?php wp_head(); ?>
		<script src="<?php echo bloginfo('stylesheet_directory'); ?>/six.js"></script>
	</head>
	
	<body <?php body_class(); ?>>
	
		<div class="wrapper">
			
			<header class="header" role="banner">
				<h2><a href="<?php bloginfo('url'); ?>"><img src="<?php echo bloginfo('stylesheet_directory'); ?>/ks.png" alt="<?php bloginfo('name'); ?>" /></a></h2>
				<nav class="nav" role="navigation">
					<?php wp_nav_menu(array('theme_location' => 'header')); ?>
				</nav>
			</header>
			
			<article class="content">
