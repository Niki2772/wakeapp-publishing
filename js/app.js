$(document).ready(function () {
    jarallax(document.querySelectorAll('.masthead'), {
        speed: 1.2,
        type: 'scroll',
        imgSize: 'cover',
        //keepImg: true,
        //imgSize: 'contain',
        imgPosition: '100% 100%',
        onScroll: function(calculations) {
            console.log(calculations);
        }
    });

    jarallax(document.querySelectorAll('.developers'), {
        speed: 1.2,
        type: 'scroll',
        //keepImg: true,
        imgSize: 'cover',
        imgPosition: '100% 100%',
        onScroll: function(calculations) {
            console.log(calculations);
        }
    });
    // jarallax(document.querySelectorAll('.benefits'), {
    //     speed: 1.6  ,
    //     type: 'scroll',
    //     //keepImg: true,
    //     imgSize: 'initial',
    //     imgPosition: '100% 100%',
    //     onScroll: function(calculations) {
    //         console.log(calculations);
    //     }
    // });
    $('.slider').slick({
        autoplay: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll:1,
        autoplaySpeed: 2000,
        dots: true
    });
});
