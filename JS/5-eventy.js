$('p').on('click',function(){
   $(this).toggleClass('decor-bold'); 
});

$(window).on('scroll', function() {
    console.log( parseInt ( $(window).scrollTop() ));
});

$('h1').on({
    'mouseenter': function() {
        $('body').addClass('decor');
        
    },
    'mouseleave': function() {
        $('body').removeClass('decor');
    }
});