window.sr = ScrollReveal();
sr.reveal('#menu', {
  duration: 1500,
  origin: 'bottom'
});
window.sr = ScrollReveal();
sr.reveal('#carousel', {
  duration: 1500,
  origin: 'bottom',
});
window.sr = ScrollReveal();
sr.reveal('#portafolio', {
  duration: 1500,
  origin: 'right',
});
window.sr = ScrollReveal();
sr.reveal('#acerca', {
  duration: 1500,
  origin: 'left',
});
window.sr = ScrollReveal();
sr.reveal('#contacto', {
  duration: 1500,
  origin: 'top',
});
window.sr = ScrollReveal();
sr.reveal('#footer', {
  duration: 1500,
  origin: 'left',
});


// SMOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});
