// js


$('.grid').isotope({
    itemSelector: '.col',
    layoutMode: 'fitRows'
});

$('menu ul li').click(function () {
    $('.menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.grid').isotope({
        filter: selector
    });
    return false;
});

$('.sidenav').sidenav();