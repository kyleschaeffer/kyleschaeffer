<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	
	<head>
		<meta charset="<?php bloginfo('charset'); ?>" />
		<meta name="description" content="<?php bloginfo('description'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		<title><?php wp_title(' / ', true, 'right'); ?>Kyle Schaeffer<?php if(is_front_page()){ echo " / Web Design and SharePoint Branding"; } ?></title>
		<link rel="profile" href="https://gmpg.org/xfn/11" />
		<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
        <script type="text/javascript" src="//use.typekit.net/raf0wfn.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
		<?php if(is_singular() && get_option('thread_comments')) wp_enqueue_script('comment-reply'); ?>
		<?php wp_head(); ?>
	</head>
	
	<body <?php body_class(); ?>>
	
		<div id="wrapper">
			
            <canvas id="lights" width="400" height="100"></canvas>
            <header id="header" role="banner">
                <h2 id="brand"><a href="<?php bloginfo('url'); ?>"><?php bloginfo('name'); ?> <span><?php bloginfo('description'); ?></span></a></h2>
                <?php if(!is_page('contact')){ ?>
                <div id="contact">
                    <a id="contact-toggle" href="#contact-form"><span class="light"></span>Available for work</a>
                    <div id="contact-form"><?php dynamic_sidebar('header1'); ?></div>
                </div>
                <?php } ?>
            </header>
			
            <div id="page">
                
                <nav id="nav" role="navigation">
                    <?php wp_nav_menu(array('theme_location' => 'header')); ?>
                    <ul class="connect">
                        <li><a href="https://twitter.com/kyleschaeffer"><img src="<?php echo bloginfo('stylesheet_directory'); ?>/twitter.png" alt="Twitter" /></a></li>
                        <li><a href="https://dribbble.com/kyleschaeffer"><img src="<?php echo bloginfo('stylesheet_directory'); ?>/dribbble.png" alt="Dribbble" /></a></li>
                    </ul>
                </nav>
            
                <article id="content">