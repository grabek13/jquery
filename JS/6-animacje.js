$('p').on('click',function(){
//    $(this).hide(1500);
//    $(this).fadeOut(1500);
    $(this).slideUp(1500);
});

$('h1').on('click', function() {
//    $('p').fadeIn(1500);
    $('p').slideDown(1500);
});

$('.anim').on('click', function() {
    $(this).animate(
        {
            'width': '600px',
            'height': '600px',
            'left': '300px'
        }, 2500, function() {
            $('body').addClass('decor');
        }
    );
});