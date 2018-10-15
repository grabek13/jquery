const btn = $('#count-sum');

btn.click(function () {
    let employeeSalaries = $('div span.salary').toArray();
    let toPay = 0;
    console.log(employeeSalaries);

    employeeSalaries.forEach(function (elem, ind) {
        toPay += parseInt(elem.innerHTML);
    });


    $('#sum').html($.number(toPay,2));
});
