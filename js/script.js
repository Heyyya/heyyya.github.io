// theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function getStoredTheme(){
  try {
    return localStorage.getItem('theme');
  } catch (error) {
    return null;
  }
}

function setTheme(mode){
  root.setAttribute('data-theme', mode);
  try {
    localStorage.setItem('theme', mode);
  } catch (error) {}
  setIcon();
}

function setIcon(){
  const isDark = root.getAttribute('data-theme') === 'dark';
  if(themeToggle) themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
}

const savedTheme = getStoredTheme();
if(savedTheme === 'light' || savedTheme === 'dark'){
  root.setAttribute('data-theme', savedTheme);
} else if(!root.hasAttribute('data-theme')){
  root.setAttribute('data-theme', 'dark');
}
setIcon();

if(themeToggle){
  themeToggle.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(cur === 'dark' ? 'light' : 'dark');
  });
}

// header scroll state
const header = document.getElementById('header');
if(header){
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, {passive:true});
}

// mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
function openMenu(){ mobileMenu.classList.add('open'); menuOverlay.classList.add('open'); }
function closeMenu(){ mobileMenu.classList.remove('open'); menuOverlay.classList.remove('open'); }
if(hamburger){
  hamburger.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.mnav').forEach(a => a.addEventListener('click', closeMenu));
}

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      revealIO.unobserve(entry.target);
    }
  });
}, {threshold:0.15});
revealEls.forEach(el => revealIO.observe(el));

// typing animation (home page only)
const typedEl = document.getElementById('typed');
if(typedEl){
  const roles = [
    "Computer Science Student",
    "Aspiring Full-Stack Developer",
    "Web & Mobile App Builder",
    "UI/UX Enthusiast"
  ];
  let ri = 0, ci = 0, deleting = false;
  function typeLoop(){
    const current = roles[ri];
    if(!deleting){
      ci++;
      typedEl.textContent = current.slice(0, ci);
      if(ci === current.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
    } else {
      ci--;
      typedEl.textContent = current.slice(0, ci);
      if(ci === 0){ deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();
}

// resume button placeholder
const resumeBtn = document.getElementById('resumeBtn');
if(resumeBtn){
  resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Add your resume PDF and link it here — e.g. href="resume.pdf" download.');
  });
}

// contact form -> mailto (contact page only)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('femail').value;
    const subject = document.getElementById('fsubject').value || 'Portfolio Contact';
    const message = document.getElementById('fmessage').value;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:rbeljot1212@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// ===== Navbar Dropdown Menu (Vanilla JS) =====
const dropdownButton = document.querySelector('#dropdownBtn');
const dropdownMenu = document.querySelector('#dropdownMenu');

if (dropdownButton && dropdownMenu) {
  dropdownButton.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
    const isOpen = dropdownMenu.classList.contains('show');
    dropdownButton.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', function (e) {
    if (!dropdownMenu.contains(e.target) && !dropdownButton.contains(e.target)) {
      dropdownMenu.classList.remove('show');
      dropdownButton.setAttribute('aria-expanded', 'false');
    }
  });
}

const projectsDropdownButton = document.querySelector('#projectsDropdownBtn');
const projectsDropdownMenu = document.querySelector('#projectsDropdownMenu');

if (projectsDropdownButton && projectsDropdownMenu) {
  projectsDropdownButton.addEventListener('click', function (e) {
    e.stopPropagation();
    projectsDropdownMenu.classList.toggle('show');
    const isOpen = projectsDropdownMenu.classList.contains('show');
    projectsDropdownButton.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', function (e) {
    if (!projectsDropdownMenu.contains(e.target) && !projectsDropdownButton.contains(e.target)) {
      projectsDropdownMenu.classList.remove('show');
      projectsDropdownButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// ===== Mobile Navbar Dropdown Menu (Vanilla JS) =====
const mDropdownButton = document.querySelector('#mDropdownBtn');
const mDropdownMenu = document.querySelector('#mDropdownMenu');

if (mDropdownButton && mDropdownMenu) {
  mDropdownButton.addEventListener('click', function (e) {
    e.stopPropagation();
    mDropdownMenu.classList.toggle('show');
  });
}

const mProjectsDropdownButton = document.querySelector('#mProjectsDropdownBtn');
const mProjectsDropdownMenu = document.querySelector('#mProjectsDropdownMenu');

if (mProjectsDropdownButton && mProjectsDropdownMenu) {
  mProjectsDropdownButton.addEventListener('click', function (e) {
    e.stopPropagation();
    mProjectsDropdownMenu.classList.toggle('show');
  });
}
