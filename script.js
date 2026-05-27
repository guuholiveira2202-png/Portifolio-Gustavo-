
// NAVBAR EFFECT
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', ()=>{
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// LOGICA DO MENU HAMBURGUER MOBILE
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Fecha o menu automaticamente ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
    });
});

// TYPEWRITER
const texts = [
"Analista de Sistemas",
"Desenvolvedor Full Stack",
"UI Engineer"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];

    if(isDeleting){
        letter = currentText.slice(0, --index);
    }else{
        letter = currentText.slice(0, ++index);
    }

    document.getElementById('typewriter').textContent = letter;

    let speed = isDeleting ? 40 : 80;

    if(!isDeleting && letter.length === currentText.length){
        speed = 1800;
        isDeleting = true;
    }
    else if(isDeleting && letter.length === 0){
        isDeleting = false;
        count++;
        speed = 300;
    }
    setTimeout(type, speed);
})();

// REVEAL ANIMATION
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
},{
    threshold:0.12
});

reveals.forEach(el=>observer.observe(el));

