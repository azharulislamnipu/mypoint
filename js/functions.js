;(function ($,body, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    $doc.click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

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

        // slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        //     $(slick.$slides).removeClass('is-animating');
        // });
        //
        // slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
        //     $(slick.$slides.get(currentSlide)).addClass('is-animating');
        // });



        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 2
            }
        });

        $('.masnory-grid').isotope({
            itemSelector: '.gallery-item',
            percentPosition: true,
            masonry: {
                columnWidth: 1,

            }
        });

        $('.self-grid').isotope({
            itemSelector: '.self-item',
            percentPosition: true,
            masonry: {
                columnWidth: 1,

            }
        });

        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
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


           $( ".sing-modal-btn" ).click(function() {
               if ($('#sign').length > 0) {
                   $('#sign').modal('show');
               }
            });

        $body.on("click", '.btn-sign', function (e) {
            e.preventDefault();
            var username = $('#sign-in-form').find('input[name="username"]');
            var password = $('#sign-in-form').find('input[name="password"]');
            var error = $('#sign-in-form').find('.error-text');

            if (username.val() === 'Jordan' && password.val() === '1111') {
                $('#sign-in-form').submit();
            }else{
                error.addClass('d-block');
            }

            return true;
        });



        if ($('#welcome').length > 0) {
            $('#welcome').modal('show');

        }

        $('#gender_content').hide();
        $('#age-box').hide();
        // $('.welcome_content').hide();
        $( ".btn-next" ).click(function() {
            $(this).parents('.welcome_content').hide();
            $('#gender_content').show();
        });

        $( "#male" ).click(function() {
            if ($(this).is(":checked")) {
                $('#gender_content').hide();
                $('#age-box').show();
            }
        });
        $( "#female" ).click(function() {
            if ($(this).is(":checked")) {
                $('#gender_content').hide();
                $('#age-box').show();
            }
        });

        $( "#notimportant" ).click(function() {
            if ($(this).is(":checked")) {
                $('#gender_content').hide();
                $('#age-box').show();
            }
        });


        if ($('#interestmodal').length > 0) {
            $('#interestmodal').modal('show');
        }

        $('#menu-action').click(function() {
            $('.sidebar').toggleClass('active');
            $('.main').toggleClass('active');
            $(this).toggleClass('active');

            if ($('.sidebar').hasClass('active')) {
                $(this).find('i').addClass('fa-close');
                $(this).find('i').removeClass('fa-bars');
            } else {
                $(this).find('i').addClass('fa-bars');
                $(this).find('i').removeClass('fa-close');
            }
        });

// Add hover feedback on menu
        $('#menu-action').hover(function() {
            $('.sidebar').toggleClass('hovered');
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
