var swiper = new Swiper(".popular-item", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 755500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        750: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        751: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1050: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
