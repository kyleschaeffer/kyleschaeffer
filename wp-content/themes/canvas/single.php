<?php
get_header();
?>

<?php get_sidebar(); ?>
	
	<div class="page-top">
	<div class="page-bottom">
	<div id="content" class="widecolumn" role="main">
	<div class="paper-top">
	<div class="paper-bottom">

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div <?php post_class() ?> id="post-<?php the_ID(); ?>">
			<p class="post-date"><span class="day"><?php the_time('j') ?></span><span class="month"><?php the_time('M \'y') ?></span></p>
			<h2><?php the_title(); ?></h2>
			<div class="entry">
				<?php the_content('<p class="serif">Read the rest of this entry &raquo;</p>'); ?>
				<?php wp_link_pages(array('before' => '<p><strong>Pages:</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>
			</div>
		</div>

	<?php comments_template(); ?>

	<?php endwhile; else: ?>

		<p>Sorry, no posts matched your criteria.</p>

<?php endif; ?>
	
	</div>
	</div>
	</div>
	</div>
	</div>

<?php get_footer(); ?>
