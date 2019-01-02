<?php $count = 0; while ( have_posts() ) : the_post(); $count++; if($count == 1) : ?>
	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<h2 class="article-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'twentyten' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a> <span class="comments"><?php comments_popup_link( '0', '1', '%' ); ?></span></h2>
		<div class="article-content">
			<?php the_content( 'Continue reading <span class="meta-nav">&raquo;</span>' ); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-link">Pages:', 'after' => '</div>' ) ); ?>
		</div>
	</div>
<?php endif; endwhile; ?>
