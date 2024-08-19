// Getting Elements
let slider = document.querySelector('#slider');
let beforeImg = document.querySelector('.img-compare-before');
let sliderLine = document.querySelector('.slider-line');
let sliderIcon = document.querySelector('.slider-icon');
let beforeLabel = document.querySelector('.img-label-before');
let afterLabel = document.querySelector('.img-label-after');

slider.addEventListener('input', (e) => {
    let value = e.target.value+'%';
    beforeImg.style.width = value;
    sliderLine.style.left = value;
    sliderIcon.style.left = value;

    // Calculate opacity based on slider position
    let afterOpacity = (100 - e.target.value) / 100; // Decreases as slider moves right
    let beforeOpacity = e.target.value / 100; // Increases as slider moves right

    beforeLabel.style.opacity = beforeOpacity;
    afterLabel.style.opacity = afterOpacity;

    // Optionally hide the labels completely if they're fully transparent
    beforeLabel.style.display = beforeOpacity > 0 ? 'block' : 'none';
    afterLabel.style.display = afterOpacity > 0 ? 'block' : 'none';
});
