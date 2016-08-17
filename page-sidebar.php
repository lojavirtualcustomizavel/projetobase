<?php
/*
Template Name: Sidebar
*/
    /**
    * @hooked virtue_page_title - 20
    */
    do_action('kadence_page_title_container');
    ?>
	
    <div id="content" class="container">
   		<div class="row">
     		<div class="main <?php echo esc_attr(kadence_main_class()); ?>" id="ktmain" role="main">
				<div class="entry-content" itemprop="mainContentOfPage">
					<?php get_template_part('templates/content', 'page'); ?>
					</div>
				<?php 
                /**
                * @hooked virtue_page_comments - 20
                */
                do_action('kadence_page_footer');
                ?>
			</div><!-- /.main -->