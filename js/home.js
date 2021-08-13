let swiperhome = new Swiper('.home-slide',{
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

let swiper_choose = new Swiper('.slide-chooseus',{
  spaceBetween: 10,
  breakpoints: {
    480:{
      slidesPerView: 1,
      slidesPerColumn: 1,
    },
    1366:{
      slidesPerView: 2,
      slidesPerColumn: 1,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// เปิดช่องค้นหา
function open_search(that){
  that.closest('.search').querySelector('.input-search').classList.toggle('show')
}