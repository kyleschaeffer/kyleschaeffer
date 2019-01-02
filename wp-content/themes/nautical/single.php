<?php get_header(); ?>

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<div id="highlight" role="main">
			<div class="page-width">
				<h2 class="article-title"><?php the_title(); ?></h2>
				<p class="article-date">Posted on <?php the_date(); ?> by <cite><?php the_author(); ?></cite></p>
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
						<p class="article-meta">
							<a href="http://twitter.com/share" class="twitter-share-button" data-url="<?php the_permalink(); ?>" data-via="kyleschaeffer" data-text="<?php the_title(); ?>" data-count="horizontal">Tweet</a>
						</p>
						<?php if ( get_the_author_meta( 'description' ) ) : ?>
						<div id="article-author-info">
							<div id="author-avatar">
								<?php echo get_avatar( get_the_author_meta( 'user_email' ), apply_filters( 'twentyten_author_bio_avatar_size', 60 ) ); ?>
							</div>
							<div id="author-description">
								<h4>About the Author</h4>
								<p><?php the_author_meta( 'description' ); ?></p>
							</div>
						</div>
						<?php endif; ?>
					</div>
					<div id="nav-below" class="navigation">
						<div class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'twentyten' ) . '</span> %title' ); ?></div>
						<div class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'twentyten' ) . '</span>' ); ?></div>
						<div class="clear"></div>
					</div>
					<?php comments_template( '', true ); ?>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<?php endwhile; ?>

<?php get_footer(); ?>
