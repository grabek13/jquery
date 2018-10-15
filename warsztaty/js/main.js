const slideShow = $('.slide-show');

const slides = $('.single-slide');

const prev = $('.slider-nav-prev');

const next = $('.slider-nav-next');

console.log(prev);

function slide(newSlideIndex) {
    if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
        return;
    }
    let marginLeft = (newSlideIndex * (-100)) + '%';

    slideShow.animate({
        'margin-left': marginLeft
    }, 1000);

    slideIndex = newSlideIndex;
}

let slideCount = slides.length;

let slideWidth = 100 / slideCount;

let slideIndex = 0;
//console.log(slideCount);
slideShow.css({
    'width': slideCount + '00%'
});

slides.each(function (ind) {
    $(this).css({
        'width': slideWidth + '%',
        'margin-left': ind * slideWidth + '%'
    });
});

prev.on('click', function () {
    console.log("przycisk");
    slide(slideIndex - 1);
});

next.on('click', function () {
    console.log("przycisk");
    slide(slideIndex + 1);
});
