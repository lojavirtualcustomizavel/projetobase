<div id="blog_carousel_container" class="carousel_outerrim">
	<?php global $post, $virtue_premium;
		$text = get_post_meta( $post->ID, '_kad_blog_carousel_title', true ); 
        if(!empty($text)) {
        	echo '<h3 class="title">'.$text.'</h3>'; 
        } else {
        	echo '<h3 class="title">';
        	echo apply_filters( 'recentposts_title', __('Recent Posts', 'virtue') );
        	echo ' </h3>';
        } ?>
    <div class="blog-carouselcase fredcarousel">
    	<?php 
    	if(isset($virtue_premium['post_carousel_columns']) ) {
      			$columns = $virtue_premium['post_carousel_columns'];
      		} else {
      			$columns = '3';
      		}
    	if ($columns == '4') {
    		$itemsize = 'tcol-md-3 tcol-sm-3 tcol-xs-4 tcol-ss-12';
    		if (kadence_display_sidebar()) {
	    		$catimgwidth = 240;
    			$catimgheight = 240;
	    	} else {
	    		$catimgwidth = 267;
	    		$catimgheight = 267;
	    	}
    		$md = 4;
    		$sm = 3;
    		$xs = 2;
    		$ss = 1; 
    	} else if($columns == '5') {
    		$itemsize = 'tcol-md-25 tcol-sm-3 tcol-xs-4 tcol-ss-6';
    		if (kadence_display_sidebar()) {
    			$catimgwidth = 240;
    			$catimgheight = 240;
    		} else {
    			$catimgwidth = 240;
    			$catimgheight = 240;
    		}
    		$md = 5;
    		$sm = 4;
    		$xs = 3;
    		$ss = 2;
    	} else if($columns == '6') {
    		$itemsize = 'tcol-md-2 tcol-sm-3 tcol-xs-4 tcol-ss-6';
    		if (kadence_display_sidebar()) {
    			$catimgwidth = 240;
    			$catimgheight = 240;
    		} else {
    			$catimgwidth = 240;
    			$catimgheight = 240;
    		}
    		$md = 6;
    		$sm = 4;
    		$xs = 3;
    		$ss = 2;
    	} else {
    		$itemsize = 'tcol-md-4 tcol-sm-4 tcol-xs-6 tcol-ss-12';
    		if (kadence_display_sidebar()) {
    			$catimgwidth = 266;
    			$catimgheight = 266;
    		} else {
    			$catimgwidth = 366;
    			$catimgheight = 366;
    		}
    		$md = 3;
    		$sm = 3;
    		$xs = 2;
    		$ss = 1;
    	} ?>
		<div id="carouselcontainer-blog" class="rowtight fadein-carousel">
    		<div id="blog_carousel" class="blog_carousel caroufedselclass initcaroufedsel clearfix" data-carousel-container="#carouselcontainer-blog" data-carousel-transition="400" data-carousel-scroll="1" data-carousel-auto="true" data-carousel-speed="9000" data-carousel-id="blog" data-carousel-md="<?php echo esc_attr($md);?>" data-carousel-sm="<?php echo esc_attr($sm);?>" data-carousel-xs="<?php echo esc_attr($xs);?>" data-carousel-ss="<?php echo esc_attr($ss);?>">
            <?php
				$temp = $wp_query; 
				$wp_query = null; 
				$wp_query = new WP_Query();
				$wp_query->query(array(
					'post__not_in' 		=> array($post->ID),
					'posts_per_page'	=> 8
					)
				);
				if ( $wp_query ) : while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>
				<div class="<?php echo esc_attr($itemsize);?>">
                	<div <?php post_class('blog_item grid_item'); ?>>
	                <?php if (has_post_thumbnail( $post->ID ) ) {
                            $image_id = get_post_thumbnail_id( $post->ID );
							$image_src = wp_get_attachment_image_src($image_id, 'full' ); 
							$image = aq_resize($image_src[0], $catimgwidth, $catimgheight, true, false, false, $image_id); 
						} else {
                            $image_id = null;
                            $image_src = array(virtue_post_default_placeholder(), $catimgwidth, $catimgheight);
                            $image = aq_resize($image_src[0], $catimgwidth, $catimgheight, true, false); 
                        } 
                        if(empty($image[0])) {$image = array($image_src[0], $image_src[1], $image_src[2]);}
                        ?>
							<div class="imghoverclass">
		                        <a href="<?php the_permalink()  ?>" title="<?php the_title(); ?>">
		                           	<img src="<?php echo esc_url($image[0]); ?>" alt="<?php the_title(); ?>" width="<?php echo esc_attr($image[1]);?> height="<?php echo esc_attr($image[2]);?> <?php echo kt_get_srcset_output($image[1], $image[2], $image_src[0], $image_id);?> class="iconhover" style="display:block;">
		                        </a> 
		                    </div>
                           	<?php $image = null; ?>

              				<a href="<?php the_permalink() ?>" class="bcarousellink">
				                <header>
                                    <?php 
                                    /**
                                    * @hooked virtue_post_carousel_title - 10
                                    * @hooked virtue_post_carousel_date - 20
                                    */
                                    do_action( 'kadence_post_carousel_small_excerpt_header' );
                                    ?> 
			                    </header>
		                        <div class="entry-content color_body">
		                          	<p><?php echo strip_tags(virtue_excerpt(16)); ?></p>
		                        </div>
                           	</a>
               		</div>
				</div>
				<?php endwhile; else: ?>
				<div class="error-not-found"><?php _e('Sorry, no blog entries found.', 'virtue');?></div>
				<?php endif; 
				$wp_query = null; 
			  	$wp_query = $temp;  // Reset
				wp_reset_query(); ?>								
			</div>
     		<div class="clearfix"></div>
	            <a id="prevport-blog" class="prev_carousel icon-arrow-left" href="#"></a>
				<a id="nextport-blog" class="next_carousel icon-arrow-right" href="#"></a>
            </div>
        </div>
</div><!-- Blog Container-->				