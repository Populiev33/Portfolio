// Script minimal : année dynamique, menu mobile, formulaire simulé
(function(){
const yearEl = document.getElementById('annee');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('menu-principal');
if (toggle && nav){
toggle.addEventListener('click', () => {
const expanded = toggle.getAttribute('aria-expanded') === 'true';
toggle.setAttribute('aria-expanded', String(!expanded));
if (expanded) { nav.setAttribute('hidden', ''); }
else { nav.removeAttribute('hidden'); }
});
}


// Formulaire de contact (simulation côté client)
const form = document.getElementById('form-contact');
const status = document.getElementById('form-status');
if (form){
form.addEventListener('submit', (e) => {
e.preventDefault();
// Anti-spam : honeypot
const hp = form.querySelector('#website');
if (hp && hp.value) return; // bot probable


const data = Object.fromEntries(new FormData(form).entries());
if (!data.email || !data.nom){
status.textContent = 'Veuillez renseigner votre nom et une adresse e‑mail valide.';
return;
}
status.textContent = 'Merci ! Votre message a été envoyé (simulation).';
form.reset();
});
}
})();