<?
/*
Template Name: Topics
*/
?>
<?php get_header(); ?>

<?php if(have_posts()): while(have_posts()): the_post(); ?>
    <?php get_template_part('content', 'topics'); ?>
<?php endwhile; else: ?>
    <?php get_template_part('content', 'none'); ?>
<?php endif; ?>

<?php get_footer(); ?>