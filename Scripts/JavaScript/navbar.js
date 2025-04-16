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

function toggleNavbar() {
    const navBar = document.querySelector('.navBar');
    navBar.classList.toggle('expanded');
}

document.addEventListener('DOMContentLoaded', loadNavbar);
