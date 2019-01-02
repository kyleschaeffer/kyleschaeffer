<?php if(is_single()): ?>
    
    <article class="entry">
        <h1 class="entry-title"><?php the_title(); ?></h1>
        <div class="entry-content">
            <?php the_content(); ?>
        </div>
        <p class="entry-meta">
            Posted on <?php the_time('F jS, Y') ?> by <?php the_author(); ?> in <?php the_category(', ') ?>.
        </p>
    </article>
    
<?php else: ?>
    
    <article class="entry excerpt">
        <h3 class="entry-title">
            <a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
        </h3>
        <div class="entry-meta">
            <?php the_time('F jS, Y') ?>
        </div>
        <?php //if(!is_home()){ ?>
        <div class="entry-content">
            <?php the_content('Continue reading&hellip;'); ?>
        </div>
        <?php //} ?>
    </article>
    
<?php endif; ?>