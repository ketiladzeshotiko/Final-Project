let burgerEL = document.getElementById('burgerBar');
let navEl = document.getElementById('navBar');

burgerEL.addEventListener('click', function() {
    navEl.classList.toggle("activeNav")
});

