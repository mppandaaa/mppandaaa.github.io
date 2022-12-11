
const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination', clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});








//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  //javascript for responsive navigation sidebar menu
  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');
  var sign = document.querySelector('.sign');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
    sign.style.display = "";
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });



  
  window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle('sticky', window.scrollY>0);

})






