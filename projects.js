/* ================================================================
   PROJECTS — projects.js
   Handles: card clicks → overlay detail view, carousel, scroll reveal
   ================================================================ */

/* ── Project Data ── */
const PROJECTS = {
    weather: {
        title: 'Weather App',
        shortDesc: 'Real-time weather updates with location detection and dynamic UI.',
        fullDesc:
            'A fully functional weather app built in Flutter that fetches live data from the OpenWeatherMap API. The UI dynamically changes its colour palette and background animations based on the current weather condition — sunny, rainy, cloudy, and stormy each look completely different. The app detects the user\'s GPS location on startup and also supports manual city search.',
        gradient: 'linear-gradient(135deg, #1a6eb5 0%, #36a2e8 40%, #74c0fc 100%)',
        accentColor: '#36a2e8',
        tags: ['Flutter', 'Dart', 'REST API'],
        tech: [
            { name: 'Flutter 3.x',      dot: '#54c5f8' },
            { name: 'Dart',             dot: '#00b4d8' },
            { name: 'OpenWeatherMap API', dot: '#f48c06' },
            // { name: 'Provider',         dot: '#7c4dff' },
            { name: 'Geolocator',       dot: '#4caf50' },
            { name: 'HTTP package',     dot: '#e84393' },
        ],
        features: [
            'Real-time weather data via REST API',
            'GPS-based auto location detection',
            'Manual city search with suggestions',
            // '7-day weather forecast',
            'Dynamic UI themes per weather',
            // 'Hourly temperature graph',
            'Wind speed & humidity display',
            // 'Offline cached last fetch',
        ],
        screenshots: [
            'assets/images/weather1.jpg',
            'assets/images/weather2.jpg',
            'assets/images/weather3.jpg',
            'assets/images/weather4.jpg',
        ], // Add real screenshot paths here e.g. ['img/weather-1.png', 'img/weather-2.png']
        github: 'https://github.com/rajnish-09/Flutter_projects/tree/main/weather_app',
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="20" r="10" fill="rgba(255,255,255,0.9)"/>
            <path d="M12 38c0-8 8-14 20-14s20 6 20 14" stroke="rgba(255,255,255,0.7)" stroke-width="3" fill="none" stroke-linecap="round"/>
            <ellipse cx="32" cy="40" rx="18" ry="10" fill="rgba(255,255,255,0.85)"/>
            <path d="M20 52 l2 6 M28 54 l2 6 M36 54 l2 6 M44 52 l2 6" stroke="rgba(100,180,255,0.9)" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`,
    },
    notes: {
        title: 'Notes App',
        shortDesc: 'Clean note-taking with rich text, and local persistence.',
        fullDesc:
            'A polished notes application with a Material You-inspired design. Users can create, edit, and organise notes. Notes are stored locally using SQLite, a lightweight database — so everything works completely offline. Tap to edit, delete button to delete.',
        gradient: 'linear-gradient(135deg, #4c2885 0%, #7c4dff 50%, #b388ff 100%)',
        accentColor: '#7c4dff',
        tags: ['Flutter', 'Dart', 'SQLite',],
        tech: [
            { name: 'Flutter 3.x',  dot: '#54c5f8' },
            { name: 'Dart',         dot: '#00b4d8' },
            { name: 'SQLite',      dot: '#ff9800' },
            // { name: 'Riverpod',     dot: '#7c4dff' },
            // { name: 'flutter_quill', dot: '#4caf50' },
            // { name: 'Shared Prefs', dot: '#e84393' },
        ],
        features: [
            'Rich text editor',
            // 'Colour-coded note categories',
            'Offline-first with SQLite storage',
            // 'Pin important notes to top',
            'Tap to delete',
            'Delete button for deleting',
            'Search across all notes',
            // 'Dark & light theme support',
        ],
        screenshots: [
            'assets/images/note1.jpg',
            'assets/images/note2.jpg',
            'assets/images/note3.jpg',
            'assets/images/note4.jpg',
        ],
        github: 'https://github.com/rajnish-09/Flutter_projects/tree/main/notes_app',
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="10" width="40" height="48" rx="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2.5"/>
            <path d="M20 22h24M20 30h24M20 38h16" stroke="rgba(255,255,255,0.9)" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="46" cy="46" r="8" fill="rgba(255,255,255,0.9)"/>
            <path d="M43 46h6M46 43v6" stroke="#7c4dff" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
    },
    tasks: {
        title: 'Task Management App',
        shortDesc: 'Productivity app with easy management of tasks',
        fullDesc:
            'A comprehensive task manager designed to boost personal productivity. Users can create tasks, edit and delete them. A home screen dashboard displays all the saved tasks along with their status.',
        gradient: 'linear-gradient(135deg, #00695c 0%, #00b894 50%, #55efc4 100%)',
        accentColor: '#00b894',
        tags: ['Flutter', 'Bloc', 'Firebase', ],
        tech: [
            { name: 'Flutter 3.x',       dot: '#54c5f8' },
            { name: 'Dart',              dot: '#00b4d8' },
            { name: 'Bloc',              dot: '#00b894' },
            // { name: 'Firebase Firestore',dot: '#ff9800' },
            // { name: 'Local Notifications', dot: '#e84393' },
            // { name: 'fl_chart',          dot: '#7c4dff' },
        ],
        features: [
            // 'High / Medium / Low priority levels',
            'Easy addition and update of task',
            // 'Custom task categories & tags',
            'Swipe to delete',
            // 'Animated progress charts',
            // 'Subtasks & checklists',
            'Firebase cloud sync',
            // 'Filter & sort by any attribute',
            // 'Daily & weekly summary view',
        ],
        screenshots: [
            'assets/images/task1.jpg',
            'assets/images/task2.jpg',
            'assets/images/task3.jpg',
            'assets/images/task4.jpg',
        ],
        github: 'https://github.com/rajnish-09/Flutter_projects/tree/main/task_management',
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="14" width="44" height="8" rx="4" fill="rgba(255,255,255,0.85)"/>
            <rect x="10" y="28" width="44" height="8" rx="4" fill="rgba(255,255,255,0.6)"/>
            <rect x="10" y="42" width="28" height="8" rx="4" fill="rgba(255,255,255,0.4)"/>
            <circle cx="50" cy="46" r="8" fill="rgba(255,255,255,0.9)"/>
            <path d="M46 46l3 3 5-5" stroke="#00b894" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    },
    ecommerce: {
        title: 'Ecommerce App',
        shortDesc: 'Full-featured shopping app with cart, auth, and checkout.',
        fullDesc:
            'A feature-rich ecommerce application that delivers a smooth end-to-end shopping experience. Product listings are fetched from a backend. Users can browse by category, search product by name, add items to a persistent cart, and complete purchases through an integrated payment flow. Firebase Authentication handles secure sign-up, sign-in, and Google OAuth.',
        gradient: 'linear-gradient(135deg, #b5381a 0%, #e84393 50%, #fd79a8 100%)',
        accentColor: '#e84393',
        tags: ['Flutter', 'Bloc', 'Firebase Auth', 'Firebase cloud'],
        tech: [
            { name: 'Flutter 3.x',       dot: '#54c5f8' },
            { name: 'Dart',              dot: '#00b4d8' },
            { name: 'Flutter Bloc',      dot: '#e84393' },
            { name: 'Firebase Auth',     dot: '#ff9800' },
            { name: 'Firebase cloud',    dot: '#7c4dff' },
            { name: 'Stripe / Payment',  dot: '#4caf50' },
        ],
        features: [
            'Product listing with infinite scroll',
            // 'Category filters',
            'Search product by name',
            'Wishlist & persistent cart',
            'Firebase email & Google auth',
            'Order history & tracking',
            'Product detail with image gallery',
            'Payment gateway integration',
            // 'Push notifications for orders',
        ],
        screenshots: [
            'assets/images/ecommerce1.jpg',
            'assets/images/ecommerce2.jpg',
            'assets/images/ecommerce3.jpg',
            'assets/images/ecommerce4.jpg',
            'assets/images/ecommerce5.jpg',
            'assets/images/ecommerce6.jpg',
            'assets/images/ecommerce7.jpg',
            'assets/images/ecommerce8.jpg',
            'assets/images/ecommerce9.jpg',
            'assets/images/ecommerce10.jpg',
            'assets/images/ecommerce11.jpg',
        ],
        github: 'https://github.com/rajnish-09/Flutter_projects/tree/main/ecommerce_app',
        icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12h4l6 28h28l4-18H18" stroke="rgba(255,255,255,0.9)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="26" cy="46" r="3.5" fill="rgba(255,255,255,0.9)"/>
            <circle cx="42" cy="46" r="3.5" fill="rgba(255,255,255,0.9)"/>
            <path d="M30 28v-8M26 24h8" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
    },
};

/* ── Overlay state ── */
let currentCarouselIndex = 0;
let currentSlides = [];
let activeProject = null;

/* ── Build the overlay HTML ── */
function buildOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'pd-overlay';
    overlay.id = 'pdOverlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = `
        <div class="pd-panel" id="pdPanel">
            <div class="pd-hero" id="pdHero">
                <div class="pd-hero-icon" id="pdHeroIcon"></div>
                <button class="pd-close" id="pdClose" aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
            </div>
            <div class="pd-content">
                <div class="pd-header">
                    <div class="pd-tags" id="pdTags"></div>
                    <h2 class="pd-title" id="pdTitle"></h2>
                    <p class="pd-desc" id="pdDesc"></p>
                </div>
                <hr class="pd-divider">

                <p class="pd-section-label">Tech Stack</p>
                <div class="pd-tech-grid" id="pdTechGrid"></div>

                <p class="pd-section-label">Key Features</p>
                <ul class="pd-features" id="pdFeatures"></ul>

                <hr class="pd-divider">

                <p class="pd-screenshots-label">Screenshots</p>
                <div class="pd-carousel" id="pdCarousel">
                    <div class="pd-carousel-track" id="pdTrack"></div>
                    <button class="pd-carousel-btn pd-carousel-btn--prev" id="pdPrev" aria-label="Previous">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                    <button class="pd-carousel-btn pd-carousel-btn--next" id="pdNext" aria-label="Next">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                    <div class="pd-carousel-dots" id="pdDots"></div>
                </div>

                <div class="pd-actions" id="pdActions"></div>
            </div>
        </div>
        <span class="pd-esc-hint">Press ESC to close</span>
    `;
    document.body.appendChild(overlay);

    /* Close triggers */
    document.getElementById('pdClose').addEventListener('click', closeOverlay);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeOverlay();
    });
    document.getElementById('pdPrev').addEventListener('click', () => moveCarousel(-1));
    document.getElementById('pdNext').addEventListener('click', () => moveCarousel(1));
}

/* ── Populate & open overlay ── */
function openOverlay(projectKey) {
    const data = PROJECTS[projectKey];
    if (!data) return;
    activeProject = projectKey;

    const overlay  = document.getElementById('pdOverlay');
    const hero     = document.getElementById('pdHero');
    const heroIcon = document.getElementById('pdHeroIcon');
    const tagsEl   = document.getElementById('pdTags');
    const titleEl  = document.getElementById('pdTitle');
    const descEl   = document.getElementById('pdDesc');
    const techEl   = document.getElementById('pdTechGrid');
    const featEl   = document.getElementById('pdFeatures');
    const actEl    = document.getElementById('pdActions');
    const track    = document.getElementById('pdTrack');
    const dots     = document.getElementById('pdDots');

    /* Hero gradient */
    hero.style.background = data.gradient;

    /* Icon */
    heroIcon.innerHTML = data.icon;

    /* Tags */
    tagsEl.innerHTML = data.tags.map(t => `<span class="pd-tag">${t}</span>`).join('');

    /* Title & description */
    titleEl.textContent = data.title;
    descEl.textContent  = data.fullDesc;

    /* Tech chips */
    techEl.innerHTML = data.tech.map(t =>
        `<div class="pd-tech-chip">
            <span class="pd-tech-chip-dot" style="background:${t.dot}"></span>
            ${t.name}
        </div>`
    ).join('');

    /* Features */
    featEl.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

    /* Screenshots carousel */
    currentCarouselIndex = 0;
    currentSlides = data.screenshots && data.screenshots.length > 0
        ? data.screenshots
        : ['placeholder', 'placeholder', 'placeholder'];

    track.innerHTML = currentSlides.map((src, i) => {
        if (src === 'placeholder') {
            return `<div class="pd-carousel-slide pd-carousel-slide--placeholder">
                <div class="pd-ss-placeholder">
                    <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/><circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M21 15l-5-5L5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                    <span>Screenshot ${i + 1} — Add your image here</span>
                </div>
            </div>`;
        }
        return `<div class="pd-carousel-slide">
            <img src="${src}" alt="${data.title} screenshot ${i + 1}" loading="lazy">
        </div>`;
    }).join('');

    /* Dots */
    dots.innerHTML = currentSlides.map((_, i) =>
        `<button class="pd-dot${i === 0 ? ' pd-dot--active' : ''}" data-index="${i}" aria-label="Slide ${i+1}"></button>`
    ).join('');

    dots.querySelectorAll('.pd-dot').forEach(dot => {
        dot.addEventListener('click', () => goToSlide(+dot.dataset.index));
    });

    /* Action buttons */
    actEl.innerHTML = `
        <a href="${data.github}" class="pd-btn pd-btn--primary" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            View on GitHub
        </a>
        <button class="pd-btn pd-btn--outline" id="pdCloseBottom">
            <svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            Close
        </button>
    `;
    document.getElementById('pdCloseBottom').addEventListener('click', closeOverlay);

    /* Scroll panel to top */
    const panel = document.getElementById('pdPanel');
    panel.scrollTop = 0;
    overlay.scrollTop = 0;

    /* Open */
    overlay.classList.add('pd-overlay--open');
    document.body.classList.add('pd-locked');
    overlay.focus();
}

function closeOverlay() {
    const overlay = document.getElementById('pdOverlay');
    overlay.classList.remove('pd-overlay--open');
    document.body.classList.remove('pd-locked');
    activeProject = null;
}

/* ── Carousel controls ── */
function goToSlide(index) {
    currentCarouselIndex = Math.max(0, Math.min(index, currentSlides.length - 1));
    const track = document.getElementById('pdTrack');
    const dots  = document.querySelectorAll('.pd-dot');
    track.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('pd-dot--active', i === currentCarouselIndex));
}

function moveCarousel(dir) {
    let next = currentCarouselIndex + dir;
    if (next < 0) next = currentSlides.length - 1;
    if (next >= currentSlides.length) next = 0;
    goToSlide(next);
}

/* ── Keyboard navigation ── */
document.addEventListener('keydown', e => {
    if (!document.getElementById('pdOverlay')?.classList.contains('pd-overlay--open')) return;
    if (e.key === 'Escape')      closeOverlay();
    if (e.key === 'ArrowLeft')   moveCarousel(-1);
    if (e.key === 'ArrowRight')  moveCarousel(1);
});

/* ── Glow effect on cards ── */
function initCardGlow() {
    document.querySelectorAll('.pj-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width)  * 100;
            const y = ((e.clientY - rect.top)  / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });
}

/* ── Scroll-reveal for cards ── */
function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.pj-card').forEach(c => c.classList.add('pj-card--visible'));
        return;
    }
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pj-card--visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.pj-card').forEach(c => obs.observe(c));
}

/* ── Attach click / keyboard handlers to cards ── */
function initCardHandlers() {
    document.querySelectorAll('.pj-card').forEach(card => {
        const key = card.dataset.project;
        card.addEventListener('click', () => openOverlay(key));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openOverlay(key);
            }
        });
    });
}

/* ── Swipe support on carousel ── */
function initCarouselSwipe() {
    const carousel = () => document.getElementById('pdCarousel');
    let startX = 0;
    const onTouchStart = e => { startX = e.touches[0].clientX; };
    const onTouchEnd   = e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) moveCarousel(diff > 0 ? 1 : -1);
    };
    document.addEventListener('touchstart', e => {
        if (carousel() && carousel().contains(e.target)) onTouchStart(e);
    }, { passive: true });
    document.addEventListener('touchend', e => {
        if (carousel() && carousel().contains(e.target)) onTouchEnd(e);
    }, { passive: true });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
    buildOverlay();
    initCardHandlers();
    initCardGlow();
    initScrollReveal();
    initCarouselSwipe();
});
