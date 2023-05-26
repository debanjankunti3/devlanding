let togglebutton=document.getElementsByClassName("toggle-button")[0]
let navbarlinks=document.getElementsByClassName("navbar-links")[0]

togglebutton.addEventListener("click", () =>{
    navbarlinks.classList.toggle("active")
})