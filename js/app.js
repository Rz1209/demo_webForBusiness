
// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// EmailJS initialization and form submission
(function() {
    emailjs.init("RXghfleMsW6jhcIOY"); // Llave pública
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    emailjs.sendForm('service_uku7jfo', 'template_oyz3hzn', this)
        .then(function() {
            alert('Correo enviado correctamente!');
        }, function(error) {
            alert('Hubo un error al enviar el correo: ' + JSON.stringify(error));
        });
});

// Carrusel
$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

// Seleccionamos el icono del menú hamburguesa y el menú
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Agregamos un evento de clic al botón hamburguesa
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Alterna la clase 'show' en el menú
});