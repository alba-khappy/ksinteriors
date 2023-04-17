window.addEventListener('scroll', function() {

    let header = document.querySelector(".header__section");

    if(pageYOffset >= 100) {
        header.classList.remove("header__section--background-hide");
        header.classList.add("header__section--background-show");
    }

    if(pageYOffset < 100) {
        header.classList.remove("header__section--background-show");
        header.classList.add("header__section--background-hide");
    }
    
  });