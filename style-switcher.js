
const styleSwitcherToggler = $('.style-switcher-toggler');

styleSwitcherToggler.addEventListener('click', function(e) {
    $('.style-switcher').classList.toggle('open')
})

window.addEventListener('scroll', function() {
    if( $('.style-switcher').classList.contains('open')) {
        $('.style-switcher').classList.remove('open')
    }
})

const alternateStyle = $$('.alternate-style');

// change-color

function setActiveStyle(color) {
    localStorage.setItem('color', color);
    changeColor() ;
}

function changeColor() {
    alternateStyle.forEach(function(style){
        if (localStorage.getItem('color') === style.getAttribute('title'))
        {
            style.removeAttribute('disabled');
        }
        else 
        { 
            style.setAttribute('disabled','');
        }
    })
}

// theme day and night;

const dayNight = $('.day-night');

dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})

window.addEventListener('load',() => {
    if (document.body.classList.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('fa-sun')
    }
    else
    {
        dayNight.querySelector('i').classList.add('fa-moon')

    }
})



