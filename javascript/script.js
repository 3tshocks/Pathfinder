
let menu = document.querySelector ('#menu-btn');

let navbar = document.querySelector('.header .navbar');
 menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 }

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
 }

document.onscroll = () =>{
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  }
  else {
    document.querySelector('.header').classList.remove('active');
  }
}


// Get all the navigation links
var navLinks = document.getElementsByClassName('price-nav-link');
 // Function to hide all box-containers
function hideAllBoxContainers() {
    var boxContainers = document.getElementsByClassName('price-box-container');
    for (var i = 0; i < boxContainers.length; i++) {
        boxContainers[i].style.display = 'none';
    }
}
 // Function to show a specific box-container
function showBoxContainer(id) {
    var boxContainer = document.getElementById(id);
    if (boxContainer) {
        boxContainer.style.display = 'block';
    }
}
 // Add event listeners to the navigation links
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        hideAllBoxContainers(); // Hide all box-containers
        showBoxContainer(this.getAttribute('href').substring(1)); // Show the clicked box-container
    });
}
 // Initially hide all box-containers
hideAllBoxContainers();
 // Show the first box-container by default
showBoxContainer('accounting-pricing');
