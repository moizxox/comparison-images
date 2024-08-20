// Getting Elements for the first slider
let slider1 = document.querySelector('#slider1');
let beforeImg1 = document.querySelector('.img-compare-before.first');
let sliderLine1 = document.querySelector('.slider-line.first');
let sliderIcon1 = document.querySelector('.slider-icon.first');
let beforeLabel1 = document.querySelector('.img-label-before.first');
let afterLabel1 = document.querySelector('.img-label-after.first');

// Slider 1 Event
slider1.addEventListener('input', (e) => {
    let value = e.target.value + '%';
    beforeImg1.style.width = value;
    sliderLine1.style.left = value;
    sliderIcon1.style.left = value;

    let afterOpacity = (100 - e.target.value) / 100;
    let beforeOpacity = e.target.value / 100;

    beforeLabel1.style.opacity = beforeOpacity;
    afterLabel1.style.opacity = afterOpacity;

    beforeLabel1.style.display = beforeOpacity > 0 ? 'block' : 'none';
    afterLabel1.style.display = afterOpacity > 0 ? 'block' : 'none';
});

// Getting Elements for the second slider
let slider2 = document.querySelector('#slider2');
let beforeImg2 = document.querySelector('.img-compare-before.second');
let sliderLine2 = document.querySelector('.slider-line.second');
let sliderIcon2 = document.querySelector('.slider-icon.second');
let beforeLabel2 = document.querySelector('.img-label-before.second');
let afterLabel2 = document.querySelector('.img-label-after.second');

// Slider 2 Event
slider2.addEventListener('input', (e) => {
    let value = e.target.value + '%';
    beforeImg2.style.width = value;
    sliderLine2.style.left = value;
    sliderIcon2.style.left = value;

    let afterOpacity = (100 - e.target.value) / 100;
    let beforeOpacity = e.target.value / 100;

    beforeLabel2.style.opacity = beforeOpacity;
    afterLabel2.style.opacity = afterOpacity;

    beforeLabel2.style.display = beforeOpacity > 0 ? 'block' : 'none';
    afterLabel2.style.display = afterOpacity > 0 ? 'block' : 'none';
});
