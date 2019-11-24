let dots = 3;
let sliderElem = document.querySelector('.homepage-slider');
let dotElems = sliderElem.querySelectorAll('.block-slider__dots');
let indicatorElem = sliderElem.querySelector('.dot-active');

Array.prototype.forEach.call(dotElems, (dotElem) => {

    dotElem.addEventListener('click', (e) => {

        let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
        let newPos = parseInt(dotElem.getAttribute('data-pos'))

        let newDirection = (newPos > currentPos ? 'right' : 'left')
        let currentDirection = (newPos < currentPos ? 'right' : 'left')

        indicatorElem.classList.remove(`slider__indicator--${currentDirection}`)
        indicatorElem.classList.add(`slider__indicator--${newDirection}`)
        sliderElem.setAttribute('data-pos', newPos)

    })

})