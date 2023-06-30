const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.getElementById("menu-links");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});



var myDiv = document.getElementById('arrow-left');
function gadartva() {
  window.alert("Nice");
};

  const icon = document.getElementById('myIcon');
  icon.addEventListener('click', () => {
    window.location.href = 'https://example.com';
  });