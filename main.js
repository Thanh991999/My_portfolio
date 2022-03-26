
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const nextBtn = $('.next-btn');
const preBtn= $('.pre-btn');
const boxImages = $$('.slider__item');
const mainSlide = $('.slider__wrapper');

// slide-dot

const slideDot = $$('.slider-dot');

const size = boxImages[0].offsetWidth;

function silderCustomer() {
    let counter = 1;
    let counterDot = 0;

    mainSlide.style.transform = `translateX(${-size * counter}px)`;
    
    nextBtn.addEventListener('click', function() {
        if(counter >= boxImages.length-1) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        mainSlide.style.transform = `translateX(${-size * counter}px)`;

        counterDot++;
        if(counterDot >= boxImages.length - 2) {
            counterDot = 0;
        }
        document.querySelector('.slider-dot.active').classList.remove('active');
        slideDot[counterDot].classList.add('active');
    });

    preBtn.addEventListener('click', function() {
        if(counter <= 0) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        mainSlide.style.transform = `translateX(${-size * counter}px)`
       
        counterDot--;
        if(counterDot < 0) {
            counterDot = boxImages.length - 3;
        }
        document.querySelector('.slider-dot.active').classList.remove('active');
        slideDot[counterDot].classList.add('active');
    });

    mainSlide.addEventListener('transitionend', function() {
        if(boxImages[counter].id === 'lastClone') {
            mainSlide.style.transition = "none";
            counter = boxImages.length - 2;
            mainSlide.style.transform = `translateX(${-size * counter}px)`

        }
        if(boxImages[counter].id === 'firstClone') {
            console.log(counter)
            mainSlide.style.transition = "none";
            counter = boxImages.length - counter;
            mainSlide.style.transform = `translateX(${-size * counter}px)`

        }
    })
}

silderCustomer();


// active trên menu

const menuActive = $$('.menu-link');

menuActive.forEach(function(item, index) {
    item.addEventListener('click',(e) => {
        document.querySelector('.menu-link.active').classList.remove('active');
        document.querySelector('.section.active').classList.remove('active');
        e.target.classList.add('active')
        showSection(e.target)
    })
})

function showSection(element) {
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}


const openMenu = $('.menu-toggler');

openMenu.addEventListener('click',(e) => {
    document.querySelector('.sidebar').classList.toggle('active');
})