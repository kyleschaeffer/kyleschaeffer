<div id="comments">
    
    <h2><?php comments_number( 'No comments', 'One comment', '<strong>%</strong> comments' ); ?></h2>
    
    <ol class="comments-list">
        <?php wp_list_comments(array('avatar_size' => '48')); ?>
    </ol>
    
    <?php if(comments_open()): ?>
        <?php comment_form(array( 'title_reply' => 'Post a comment', 'comment_notes_after' => '' )); ?>
    <?php endif; ?>
    
</div>