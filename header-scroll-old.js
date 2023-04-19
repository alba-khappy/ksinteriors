window.addEventListener('scroll', function() {

    let header = document.querySelector(".header__section");
    let whatsapp = document.querySelector(".hero-banner__whatsapp");

    if(pageYOffset >= 100) {
        whatsapp.classList.remove("hero-banner__whatsapp--to-top");
        header.classList.remove("header__section--background-hide");
        header.classList.add("header__section--background-show");
        whatsapp.classList.add("hero-banner__whatsapp--to-bottom");
    }

    if(pageYOffset < 100) {
        header.classList.remove("header__section--background-show");
        header.classList.add("header__section--background-hide");
        whatsapp.classList.remove("hero-banner__whatsapp--to-bottom");
        whatsapp.classList.add("hero-banner__whatsapp--to-top");
    }
  });