var navMenu = document.getElementById("nav-menu");
var navBurger = document.getElementById("nav-burger");
var navList = navMenu.querySelectorAll("li");
console.log(navList);
navBurger.addEventListener("click", (event) => {
    navList.forEach((element) => {
        element.style.display = "inline-block";
    })
    navBurger.style.display = "none";
})
