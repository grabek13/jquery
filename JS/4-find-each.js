let body = $('body');

let p = body.find('.paragraf').eq(0);

p.css({
    'margin': '20px',
    'color': 'green',
    'font-size': '3rem'
});

$('.paragraf').each(function(index, element){
//   $(this).append(`<spam style='color: orange'> Index elementu ${index}</span>`);
    var txt = $(this).text();
    body.prepend(`<strong class="decor-bold">${txt}</strong><hr>`);
});

console.log(p);