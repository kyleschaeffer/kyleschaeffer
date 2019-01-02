<?php if ( ! have_posts() ) : ?>
	<h2>Not Found</h1>
	<div class="article-content">
		<p><strong>Oops!</strong> I can&rsquo;t find what you&rsquo;re looking for. Are you sure you have the correct address?</p>
	</div>
<?php endif; ?>

<?php $count = 0; while ( have_posts() ) : the_post(); $count++; if($count > 1): ?>
	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<h3 class="article-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'twentyten' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a> <span class="comments"><?php comments_popup_link( '0', '1', '%' ); ?></span></h3>
		<div class="article-content">
			<?php the_content( 'More' ); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-link">Pages:', 'after' => '</div>' ) ); ?>
		</div>
	</div>
<?php endif; endwhile; ?>

<?php if (  $wp_query->max_num_pages > 1 ) : ?>
				<div id="nav-below" class="navigation">
					<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'twentyten' ) ); ?></div>
					<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'twentyten' ) ); ?></div>
					<div class="clear"></div>
				</div>
<?php endif; ?>
