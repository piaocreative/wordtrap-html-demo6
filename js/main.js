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

    if ( $( '.posts-slider' ).length ) {
        $('.posts-slider').slick({
            infinite: true,
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: $('.post-prev-arrow'),
            nextArrow: $('.post-next-arrow'),
            responsive: [
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

    if ( $( '.products-slider' ).length ) {
        $('.products-slider').slick({
            infinite: true,
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: $('.product-prev-arrow'),
            nextArrow: $('.product-next-arrow'),
            responsive: [
              {
                breakpoint: 991,
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