<?php get_header(); ?>

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<div id="highlight" role="main">
			<div class="page-width">
				<h2><?php the_title(); ?></h2>
			</div>
		</div>
		<div id="page">
			<div class="page-width">
				<?php get_sidebar(); ?>
				<div id="content" role="main">
					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<div class="article-content">
							<?php the_content(); ?>
							<?php wp_link_pages( array( 'before' => '<div class="page-link">Pages:', 'after' => '</div>' ) ); ?>
						</div>
					</div>
					<?php comments_template( '', true ); ?>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<?php endwhile; ?>

<?php get_footer(); ?>
