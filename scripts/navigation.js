//github repo link: https://github.com/cscie12/assignment07-mobile-navigation-emerald-01//

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
  
    let headerNav = document.querySelector("header nav");
  
    let headerUl = document.querySelector("header ul");
  
    headerNav.addEventListener("click", function() {
      console.log("Nav was clicked");
  
      headerUl.classList.toggle("collapsed");
      headerNav.classList.toggle("expanded");
    })
  })
  
