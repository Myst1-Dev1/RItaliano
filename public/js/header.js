

let body = document.getElementsByName('body');
let navbar = document.getElementById('nav-bar');
let menu = document.getElementById('menu-bar');

function show() {
    menu.classList.toggle('fa-times');
    
    if(navbar.style.display === 'block') {
        navbar.style.display = 'none';
    }else{
        navbar.style.display = 'block';
    }

}