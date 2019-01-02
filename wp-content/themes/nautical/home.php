<?php get_header(); ?>

		<div id="highlight" role="main">
			<div class="page-width">
				<?php get_template_part( 'loop', 'home-highlight' ); ?>
			</div>
		</div>
		<div id="page">
			<div class="page-width">
				<?php get_sidebar(); ?>
				<div id="content" role="main">
					<div id="articles">
						<?php rewind_posts(); get_template_part( 'loop', 'home' ); ?>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>

<?php get_footer(); ?>
