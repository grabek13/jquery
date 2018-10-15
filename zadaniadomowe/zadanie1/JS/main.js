const btn = $('#btn');

const square = $('.square');

let letsTry = true;


function callback2() {
    let addhtml = "<h2>Animacja zakończona</h2>";
    square.append(addhtml);
    
}


function callback() {
    square.animate({
        backgroundColor: 'blue'
    },5000, callback2);
    

}

btn.click(function () {
    console.log("wcisnłes przycisk");
    if (letsTry) {
        letsTry = false;
    square.animate({
        height: "100px",
        width: "100px",
        marginLeft: "+=100px",
    }, 3000, callback);
    }
});
