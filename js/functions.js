;(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);


    $doc.ready(function () {
         var slider =  $(".slider");
        slider.slick({
            autoplay:false,
            autoplaySpeed: 10000,
            vertical: true,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            arrows: false,
            infinite: true,
            pauseOnDotsHover:true,
            cssEase:'linear',
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>',
        });

        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides).removeClass('is-animating');
        });

        slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides.get(currentSlide)).addClass('is-animating');
        });


        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let slidesLength = slick.$slides.length - 1,
                isCurrentFirstOrLast = currentSlide === 0 || currentSlide === slidesLength,
                isNextFirstOrLast = nextSlide === 0 || nextSlide === slidesLength;

            if (isCurrentFirstOrLast && isNextFirstOrLast){
                let nextClone = $(event.currentTarget).find('.slick-cloned.slick-active');
                setTimeout(function(){
                    nextClone.addClass('slick-current');
                }, 100)
            }
        });




        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 3000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

    });


})(jQuery, window, document);
