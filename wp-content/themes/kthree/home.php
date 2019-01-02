<?php get_header(); ?>

		<div id="highlight" role="main">
			<div class="page-width">
				<?php get_template_part( 'loop', 'home-highlight' ); ?>
			</div>
		</div>
		<div id="page">
			<div class="page-width">
				<div id="content" role="main">
					<?php rewind_posts(); get_template_part( 'loop', 'home' ); ?>
				</div>
				<?php get_sidebar(); ?>
			</div>
		</div>

<?php get_footer(); ?>
