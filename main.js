import Swiper, { Navigation } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/css/navigation';

Swiper.use([Navigation]);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1.8,
    initialSlide: 2,
    slideActiveClass: 'swiper-slide-active',

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});