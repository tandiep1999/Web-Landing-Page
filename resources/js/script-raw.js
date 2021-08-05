$(document).ready(
    function() {
        //sticky navigation
        $('.about-section').waypoint(
            function(direction) {
                if (direction == 'down') {
                    $('nav').addClass('sticky')
                }
                else {
                    $('nav').removeClass('sticky')
                }
            },
            {
                offset : '900px'
            }
        )
        // Smooth scrolling
        $('a').click(
            function(){
            $('html, body').animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
          })
         
        //mobile navigation
        $('.mobile-nav-icon').click(
            function() {
            $('.main-navigation').slideToggle(200);

            if ($('.mobile-nav-icon').hasClass('fa-bars')) {
                $('.mobile-nav-icon').addClass('fa-times');
                $('.mobile-nav-icon').removeClass('fa-bars');
            }
            else {
                $('.mobile-nav-icon').addClass('fa-bars');
                $('.mobile-nav-icon').removeClass('fa-times');
            }
        }
        )
    }
)