// theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function setIcon(){
  const isDark = root.getAttribute('data-theme') === 'dark';
  if(themeToggle) themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
}
setIcon();
if(themeToggle){
  themeToggle.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    root.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
    setIcon();
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
