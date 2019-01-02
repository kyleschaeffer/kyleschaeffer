<?php get_header(); ?>

<article class="topics">
	
	<h1>Topic: <strong><?php echo single_cat_title('', false); ?></strong></h1>
	
	<?php if(have_posts()): ?>
		
		<?php while(have_posts()): the_post(); ?>
			<?php get_template_part('content', get_post_format()); ?>
		<?php endwhile; ?>
		
		<div class="paging row">
			<div class="paging-prev alignleft"><?php next_posts_link('&larr; Older'); ?></div>
			<div class="paging-next alignright"><?php previous_posts_link('Newer &rarr;'); ?></div>
		</div>
	
	<?php endif; ?>

<?php get_footer(); ?>