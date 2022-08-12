$(document).ready(function(){
    $('.btn-menu').on('click', function() {
        toggleMenu($('.header'))
    });
    $('.header').before().on('click', function() {
        toggleMenu($('.header'))
    });

    function toggleMenu(menu) {
        menu.toggleClass('active')
    }

    //Configurando o carrossel
    $('.videos .list').slick({
        dots: true,
        infinite: false,
        autoPlay: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.header .menu ul li a').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $('.'+id).offset().top;
        
        $('html, body').animate({
            scrollTop: targetOffset - 100}, 500);
    });
});