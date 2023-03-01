const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    nav.classList.toggle('nav-list__active');
    const bodyOverflowY = body.style.overflowY;
    body.style.overflowY = bodyOverflowY === 'hidden' ? 'auto' : 'hidden';
});

const breakpoint = window.matchMedia('(min-width:785px)');
let mySwiper;
const breakpointChecker = function () {
    if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
        return;
    } else if (breakpoint.matches === false) {
        return enableSwiper();
    }
};
const enableSwiper = function () {
    mySwiper = new Swiper('.swiper', {
        spaceBetween: 30,
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
    });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();

const tagsA = document.querySelectorAll(".nav__link");

const closeBurgerMenuOnClick = () => {
    body.style.overflowY = 'auto';
    nav.classList.remove('nav-list__active');
}

const checkBreckpointForNav = (e) => {
    if (!e.matches) {
        if (tagsA) {
            Array.from(tagsA).forEach((tagA) => {
                tagA.addEventListener("click", closeBurgerMenuOnClick)
            })
        }
    } else {
        Array.from(tagsA).forEach((tagA) => {
            tagA.removeEventListener("click", closeBurgerMenuOnClick)
        })
    }
}

breakpoint.addListener(checkBreckpointForNav)
