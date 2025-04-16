// Save this as navbar.js and include it in each HTML page
function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      const navbarContainer = document.createElement('div');
      navbarContainer.innerHTML = data;
      document.body.insertBefore(navbarContainer, document.body.firstChild);
    });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
