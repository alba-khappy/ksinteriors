window.addEventListener('scroll', function() {

    let oldScrollY = 0;
    let header = document.querySelector(".header__section");
    let whatsapp = document.querySelector(".hero-banner__whatsapp");

    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let dY = scrolled - oldScrollY;

    if ( dY > 0 ){
        header.classList.add('header__section--bg');
    }
    else if ( window.pageYOffset == 0 ) {
        header.classList.remove('header__section--bg');
    } 

    if(pageYOffset >= 100) {
        whatsapp.classList.add("hero-banner__whatsapp--to-bottom");
    }

    if(pageYOffset < 100) {
        whatsapp.classList.remove("hero-banner__whatsapp--to-bottom");
    }

    oldScrollY = scrolled;
});