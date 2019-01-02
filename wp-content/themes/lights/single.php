<?php get_header(); ?>

<?php if(have_posts()): while(have_posts()): the_post(); ?>
    
    <?php get_template_part('content', get_post_format()); ?>
    
    <div class="paging row">
        <div class="paging-prev alignleft"><?php echo next_post_link('&larr; %link'); ?></div>
        <div class="paging-next alignright"><?php echo previous_post_link('%link &rarr;'); ?></div>
    </div>
    
    <?php comments_template(); ?>
    
<?php endwhile; endif; ?>

<?php get_footer(); ?>