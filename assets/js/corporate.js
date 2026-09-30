
(function(){const header=document.querySelector('.site-header');const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.site-nav');
window.addEventListener('scroll',()=>header&&header.classList.toggle('scrolled',scrollY>20));
if(toggle)toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-group>a').forEach(a=>a.addEventListener('click',e=>{if(innerWidth<=991){const g=a.parentElement;if(g.querySelector('.dropdown-menu-custom')){e.preventDefault();g.classList.toggle('open')}}}));
document.querySelectorAll('.site-nav a[href]').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=991&&!a.parentElement.classList.contains('nav-group'))nav.classList.remove('open')}));
document.querySelectorAll('.faq-item button').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
})();
