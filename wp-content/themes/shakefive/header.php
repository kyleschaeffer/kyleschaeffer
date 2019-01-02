<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php
	global $page, $paged;
	
	wp_title( '|', true, 'right' );
	
	bloginfo( 'name' );
	
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";
	
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );
	
	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
<link rel="stylesheet" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php wp_enqueue_script("jquery"); ?>
<?php wp_enqueue_script( 'shakefive', get_bloginfo('template_directory').'/js/shakefive.js'); ?>
<script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
<script type="text/javascript" src="//use.typekit.net/bbf3jcm.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<?php
	if ( is_singular() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );
	
	wp_head();
?>
</head>

<body <?php body_class(); ?>>

<div id="wrapper" class="hfeed">
	<header id="header">
		<section id="shake-down">
			<div id="banner" class="page-width" role="banner">
				<hgroup>
					<?php $heading_tag = ( is_home() || is_front_page() ) ? 'h1' : 'div'; ?><<?php echo $heading_tag; ?> id="site-title"><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></<?php echo $heading_tag; ?>>
					<div id="site-description"><span class="slogan"><span class="quote-l"></span><?php bloginfo( 'description' ); ?><span class="quote-r"></span></span></div>
				</hgroup>
			</div>
		</section>
	</header>
	<div id="main" class="page-width">
		<nav id="access" role="navigation">
			<div class="skip-link screen-reader-text"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentyten' ); ?>"><?php _e( 'Skip to content', 'twentyten' ); ?></a></div>
			<?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary' ) ); ?>
			<ul id="social">
				<li class="rss"><a href="https://kyleschaeffer.com/feed/" target="_blank" title="RSS Feed">RSS Feed</a></li>
				<li class="twitter"><a href="http://twitter.com/#!/kyleschaeffer" target="_blank" title="@kyleschaeffer on Twitter">@kyleschaeffer on Twitter</a></li>
				<li class="dribbble"><a href="http://dribbble.com/kyleschaeffer" target="_blank" title="kyleschaeffer on Dribbble">kyleschaeffer on Dribbble</a></li>
			</ul>
		</nav>