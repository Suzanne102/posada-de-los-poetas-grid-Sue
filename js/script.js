$(document).ready(function() {

// //  click on h3, and change his color to red. 
//     $('h3').click(function() {
//         $(this).css('background-color','#ff0000');
//     })

//     $('.services__box').click(function() {
//         $(this).css('background-color','#ff0000');
//     })

//     // WAYPOINTS EXAMPLE
//     var waypoints = $('services__box').waypoint(function(direction) {
//         notify(this.element.id + ' hit 25% from top of window') 
//     }, {
//      offset: '25%'
//     })


/*For the sticky navigation */
    $('.js--section-services').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
            $('.js--container-nav').removeClass('hide-mobile');
            $('.js--container-nav').addClass('show-mobile');
        } else {
            $('nav').removeClass('sticky');
            $('.js--container-nav').addClass('hide-mobile');
            $('.js--container-nav').removeClass('show-mobile');
        }
    }, { /*para que empiece 80px antes de donde le digo */
        offset: '50px'
       });
/*END Sticky navigation */

/*Navigation Scroll*/
    // Select all links with hashes
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
        }, 1000, function() {
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
/*END Navigation Scroll*/    
    
});