//Selecting Side Navbar
var sideNav = document.getElementById("side-navbar")
var menuIcon = document.getElementById("menu-icon")
var closeIcon = document.getElementById("close-icon")

menuIcon.addEventListener("click",function()
{
    sideNav.style.right = 0
    sideNav.style.transitionDuration = "2s"
})

closeIcon.addEventListener("click",function()
{
    sideNav.style.right = "-50%"
})