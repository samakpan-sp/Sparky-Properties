
// JavaScript

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', showPage); 
});

function showPage(event) {
  const pageId = event.target.id; // get id of clicked link
  
  // logic to show/hide pages based on id
}

// Swiper
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});






