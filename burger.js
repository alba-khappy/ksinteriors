document.querySelector(".header__button-burger").addEventListener("click", function() {
    document.querySelector(".header__nav-list").classList.add("header__nav-list--show"); 
  });

document.querySelector(".header__nav-button-close").addEventListener("click", function() {
    document.querySelector(".header__nav-list").classList.remove("header__nav-list--show"); 
  });