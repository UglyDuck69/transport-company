const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.getElementById("menu-links");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});



var myDiv = document.getElementById('arrow-left');
function gadartva() {
  window.alert("Div Clicked");
};

var image = document.getElementById('myImage');
    
    // Add a click event listener to the image
    image.addEventListener('click', function() {
      // Change the window location to the desired URL
      window.location.href = 'https://www.facebook.com';
    });