const btnBegin = $('#btn1');
const btnEnd = $('#btn2');

const output = $('.output');

btnBegin.click(function() {
   console.log("Przenieś na początek");
    let lastItem = $("div p:last-child");
    lastItem.remove();
    output.prepend(lastItem);
});

btnEnd.click(function() {
   console.log("Przenieś na koniec");
    let firstItem = $("div p:first-child");
    firstItem.remove();
    output.append(firstItem);
});