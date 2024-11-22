import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const initSwiper = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // breakpoints: {
        //     640: {
        //         slidesPerView: 2,
        //     },
        //     1024: {
        //         slidesPerView: 3,
        //     },
        // }
    });

    return swiper;
};