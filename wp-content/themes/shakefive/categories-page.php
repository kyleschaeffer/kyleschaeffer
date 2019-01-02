<?php
/**
 * Template Name: Categories page
 */
get_header(); ?>

		<div id="container" class="one-column">
			<div id="content" role="main">

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<h1 class="entry-title"><?php the_title(); ?></h1>
					<div class="entry-content topics">
						<ul id="topics-list">
							<?php wp_list_categories('orderby=name&exclude=1,5,6&show_count=1&title_li='); ?>
						</ul>
					</div>
				</article>

				

<?php endwhile; ?>

			</div>
		</div>

<?php get_footer(); ?>
