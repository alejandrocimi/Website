/* ============================================================
   Consorcio D.C. — Lógica de la web
   ------------------------------------------------------------
   Aquí NO necesitas cambiar nada normalmente.
   El contenido se edita en content.js.
   ============================================================ */

const projectGrid = document.querySelector('[data-project-grid]');
const tabs = document.querySelectorAll('[data-filter]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const year = document.querySelector('[data-year]');
const upcomingList = document.querySelector('[data-upcoming-list]');

/* ---- Año automático en el footer ---- */
if (year) year.textContent = new Date().getFullYear();

/* ---- Tarjetas de proyecto ---- */
function projectCard(project) {
  return `
    <article class="project-card" data-category="${project.category}">
      <div class="project-image">
        <img src="assets/projects/${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-body">
        <p class="project-kicker">${project.category} · ${project.year}</p>
        <h3>${project.title}</h3>
        <p><strong>${project.type}</strong></p>
        <p>${project.meta}</p>
        <span class="status">${project.status}</span>
      </div>
    </article>
  `;
}

function renderProjects(filter = 'Todos') {
  const list = filter === 'Todos'
    ? SITE_CONTENT.projects
    : SITE_CONTENT.projects.filter(p => p.category === filter);
  projectGrid.innerHTML = list.map(projectCard).join('');
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    renderProjects(tab.dataset.filter);
  });
});

/* ---- Próximos proyectos ---- */
function renderUpcoming() {
  upcomingList.innerHTML = SITE_CONTENT.upcoming
    .map(item => `<article class="upcoming-item">${item}</article>`)
    .join('');
}

/* ---- Menú móvil ---- */
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

/* ---- Slider "Parte de la familia" ---- */
const featureSlides = document.querySelector('[data-feature-slides]');
const featureCount = document.querySelector('[data-feature-count]');
const featurePrev = document.querySelector('[data-feature-prev]');
const featureNext = document.querySelector('[data-feature-next]');
let featureIndex = 0;

function renderFeature() {
  const images = SITE_CONTENT.familia || [];
  if (!images.length || !featureSlides) return;
  featureSlides.innerHTML = `<img src="assets/familia/${images[featureIndex]}" alt="Equipo Consorcio D.C.">`;
  featureCount.textContent = `${featureIndex + 1} | ${images.length}`;
}
if (featurePrev && featureNext) {
  featurePrev.addEventListener('click', () => {
    const images = SITE_CONTENT.familia || [];
    featureIndex = (featureIndex - 1 + images.length) % images.length;
    renderFeature();
  });
  featureNext.addEventListener('click', () => {
    const images = SITE_CONTENT.familia || [];
    featureIndex = (featureIndex + 1) % images.length;
    renderFeature();
  });
}

/* ---- Inicializar ---- */
renderProjects();
renderUpcoming();
renderFeature();
