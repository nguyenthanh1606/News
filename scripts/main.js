$('.preloader').fadeIn();
$(document).ready(function () {
    $('.preloader').remove();
    //   ////////////////////////////////////////// 

    // $(function () {
    //     var menu = $('header').offset().top;
    //     $(window).scroll(function () {
    //         var winTop = $(window).scrollTop();
    //         if (winTop > menu) {
    //             $('header').addClass('is-fixed');
    //         } else {
    //             $('header').removeClass('is-fixed');
    //         }
    //     });
    // });

    //   ////////////////////////////////////////// 

    //   $(function () {
    //     var currentSlide = 0;
    //     var slides = document.querySelectorAll(".procedure-us .procedure-item");
    //     var controls = document.querySelectorAll(".controls-procedure");
    //     var next = document.getElementById("btn-next-procedure");
    //     var previous = document.getElementById("btn-prev-procedure");

    //     // for (var i = 0; i < controls.length; i++) {
    //     //     controls[i].style.display = "block";
    //     // }

    //     function slideActive(n) {
    //         slides[currentSlide].className = "procedure-item";
    //         currentSlide = (n + slides.length) % slides.length;
    //         slides[currentSlide].className = "procedure-item active";
    //     }

    //     function nextSlide() {
    //       slideActive(currentSlide + 1);
    //     }

    //     function previousSlide() {
    //       slideActive(currentSlide - 1);
    //     }

    //     next.onclick = function() {
    //         nextSlide();
    //     };
    //     previous.onclick = function() {
    //         previousSlide();
    //     };
    //   });

    // //////////////////////

    // $(function () {
    //   var path = window.location.href;
    //   $('a').each(function () {
    //       if (this.href === path) {
    //           $(this).addClass('active');
    //       }
    //   });
    // });

    // /////////hiden social network
    var hidden = $('.header').offset().top;
    $(window).on('scroll', function () {
        ($(window).scrollTop() > hidden) ? $('.social_networks').addClass('hidden') : $('.social_networks').removeClass('hidden');
    });

    // ///////////////////////
    $('.m-backtotop').click(function () {
        $('html, body')
            .stop()
            .animate({ scrollTop: 0 }, 'slow', 'swing');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.m-backtotop').addClass('active');
        } else {
            $('.m-backtotop').removeClass('active');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.social-mobile').addClass('show');
        } else {
            $('.social-mobile').removeClass('show');
        }
    });

    // smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
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
                        scrollTop: target.offset().top + (40)
                    }, 'slow', 'swing', function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $('.showOnPage').click(function () {
        $('.aboutUs .sumary').toggleClass("show");
    });
});


