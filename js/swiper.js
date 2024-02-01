var swiper = new Swiper('.swiper-container-loveLCH1', {
    pagination: '.swiper-pagination-loveLCH1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-loveLCH2', {
    pagination: '.swiper-pagination-loveLCH2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-loveLCH3', {
    pagination: '.swiper-pagination-loveLCH3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-loveLCH3',
    prevButton: '.swiper-button-prev-loveLCH3'
});