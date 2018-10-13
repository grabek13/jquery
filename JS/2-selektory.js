// pobieranie po tagu html

var pAll = $('div p');
console.log(pAll);

// pobieranie po klasie ID

var pclass = $('.paragraf');
console.log(pclass);

let link = $("[href^='mailto:']");
console.log(link);

let p = $('.paragraf:not(.paragraf-next)');

console.log(p);