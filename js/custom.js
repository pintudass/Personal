jQuery(document).ready(function() {
    //initialize mixitup
    var workGaller = $('.work-gallery');
    var mixer = mixitup(workGaller);

    //fancybox initialize
    $('[data-fancybox="images"]').fancybox({
        buttons: [
            'zoom',
            'fullScreen',
            'share',
            'slideShow',
            'close'
        ],
        thumbs: {
            autoStart: true
        }
    });
    //initialize type script
    var typed = new Typed('.typing', {
        strings: ["Full stack web-developer.", "E-commerce website.", "Wordpress Expert"],
        typeSpeed: 30,
        loop: true
    });


});