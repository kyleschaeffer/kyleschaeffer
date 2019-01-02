<?php get_header(); ?>

		<div id="container">
			<div id="content" role="main">

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<header>
						<p class="entry-meta"><span class="month"><?php the_time('M') ?></span><span class="day"><?php the_time('j') ?></span><span class="year"><?php the_time('Y') ?></span></p>
						<h1 class="entry-title"><?php the_title(); ?></h1>
					</header>

					<div class="entry-content">
						<?php the_content(); ?>
						<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'twentyten' ), 'after' => '</div>' ) ); ?>
					</div>

					<footer class="entry-utility">
						<span class="tweet-link">
							<a href="http://twitter.com/share" class="twitter-share-button" data-url="<?php the_permalink(); ?>" data-via="kyleschaeffer" data-text="<?php the_title(); ?>" data-count="horizontal">Tweet</a>
						</span>
						Posted in <?php the_category(', '); ?> on <?php the_time('F j, Y'); ?> by <?php the_author(); ?>.
					</footer>
				</article>
				
				<nav id="nav-below" class="navigation article-nav">
					<div class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'twentyten' ) . '</span> %title' ); ?></div>
					<div class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'twentyten' ) . '</span>' ); ?></div>
				</nav>

				<?php comments_template( '', true ); ?>

<?php endwhile; // end of the loop. ?>

			</div>
		</div>

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
