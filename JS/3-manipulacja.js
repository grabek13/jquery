// pobranie tekstu

let h1Text = $("h1").text();
//console.log(h1Text);

// ustawienie tekstu

/*setTimeout(function(){
    $('h2').text("Nowa tresc h2");
},4000);*/

//pobieranie HTML

let html = $('body').html();
console.log(html);

//setTimeout(function(){
//    $('body').html("<h3>nowa zawartosc elementu body</h3><div>lorem lorem</div>");
//},4000);

// dodawanie do elementu tresci jak i html

$('h2').append("<span style='color: red;'> Span w H2</span>");

$('h2').prepend("<span style='color: red;'> Span w H2</span>");

// dodawanie za i przed element tresci jak i html

$('a').after('<div style="padding: 30px; background: green"></div>');

//usuwanie zawartosci wraz z wybranym elementem
$('h1').remove();

// usuwanie zawartosci

$('h2').empty();

//style
$('p').css({
    'font-size': '2rem',
    'color': 'blue',
    'padding': '20px',
});

//dodawanie i usuwanie klas
setTimeout(function(){
//    $('body').addClass('decor');
    $('body').removeClass('page');
},4000);