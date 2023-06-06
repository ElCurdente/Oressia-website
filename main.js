import Swiper, { Navigation } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';

Swiper.use([Navigation]);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1.8,
    initialSlide: 0,
    slideActiveClass: 'swiper-slide-active',

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: (swiper) => {
            const $textSwiper = document.querySelector(".swiper-text")

            if ($textSwiper) {
                $textSwiper.swiper.slideTo(swiper.activeIndex)
            }
        },
    },
});

const swiperText = new Swiper('.swiper-text', {
    // Optional parameters
    loop: false,
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1.8,
    initialSlide: 0,
    on: {
        slideChange: (swiper) => {
            const $Swiper = document.querySelector(".swiper")

            if ($Swiper) {
                $Swiper.swiper.slideTo(swiper.activeIndex)
            }
        },
    },
});


