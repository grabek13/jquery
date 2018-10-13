let p1 = document.getElementsByClassName('main-text');

let p2 = document.querySelectorAll('.main-text');

/*console.log(p1);

console.log(p2);*/
// sposob 1

/*var dlugosc = p1.length;
for(let i=0; i < dlugosc; i++) {
    console.log(p1[i].id);
}*/

//sposob 2 operator spread ES6

/*[...p1].forEach(function(el,ind) {
   console.log(el); 
});*/

// sposob 3 call

/*[].forEach.call(p1, function(el,ind) {
    console.log(el);
});*/

//4 sposob Array.from

Array.from(p1, function(el) {
    console.log(el);
});

p2.forEach(function (el,ind) {
   console.log(el);
});