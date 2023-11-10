//github repo link: https://github.com/cscie12/assignment07-mobile-navigation-emerald-01//


//--------INSTRUCTIONS--------//
/*Create navigation appropriate for a small screen, with the menu not visible 
until the "pancake" bar is clicked.  When clicked, the menu should display, and 
hide again when clicked.
Create navigation appropriate for wide screen menu as well.
Use a "mobile first" approach, with the CSS media query to define styles for wide screens.
The "hover" state (a:hover) should be visually different*/

//Use JavaScript to respond to the "click" events.                              //
//Use JavaScript to toggle class values to change the visibility of the menu.   //
//Suggested Strategy for Approaching this Assignment                //
//Tackle the small screen version first, in the "expanded" state.   //
//Then, tackle the "hidden" version of the menu                     //
//[You could do either the expanded or hidden versions first]       //
//After the small screen, then tackle the wide screen version.      //

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM loaded");

    let headerNav = document.querySelector("header nav");

    let headerUl = document.querySelector("header ul");

    headerNav.addEventListener("click", function () {
        console.log("Nav was clicked");

        headerUl.classList.toggle("collapsed");
        headerNav.classList.toggle("expanded");
    })
})
