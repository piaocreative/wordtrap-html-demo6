$( document ).ready( function() {
    
    if ( $( '.logos' ).length ) {
        $( '.logos' ).slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 7,
            dots: false,
            arrows: false,
            responsive: [
                {   
                    breakpoint: 1200,
                    settings: {
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },

                {   
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    } 

    if ( $( '.posts' ).length ) {
        $('.posts').slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });
    }    

} );