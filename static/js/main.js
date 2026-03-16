// ============================================================
// MOHIT PORTFOLIO — main.js
// Premium Futuristic Portfolio JavaScript
// ============================================================

// ──────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────
const SKILLS = [
    { name: "Python",           icon: "fab fa-python",        color: "#3b82f6", bg: "rgba(59,130,246,0.15)",   level: 90 },
    { name: "SQL",              icon: "fa fa-database",        color: "#8b5cf6", bg: "rgba(139,92,246,0.15)",  level: 85 },
    { name: "Power BI",         icon: "fa fa-chart-pie",       color: "#f59e0b", bg: "rgba(245,158,11,0.15)", level: 88 },
    { name: "Excel",            icon: "fa fa-table",           color: "#22c55e", bg: "rgba(34,197,94,0.15)",  level: 80 },
    { name: "Pandas",           icon: "fa fa-layer-group",     color: "#06b6d4", bg: "rgba(6,182,212,0.15)",  level: 88 },
    { name: "Machine Learning", icon: "fa fa-brain",           color: "#a78bfa", bg: "rgba(167,139,250,0.15)",level: 82 },
    { name: "Data Visualization",icon:"fa fa-chart-line",      color: "#ec4899", bg: "rgba(236,72,153,0.15)", level: 86 },
    { name: "Statistics",       icon: "fa fa-square-root-variable", color: "#34d399", bg: "rgba(52,211,153,0.15)", level: 80 },
];

const PROJECTS = [
    {
        id: "fraud",
        title: "Credit Card Fraud Detection",
        desc: "ML-powered system to detect fraudulent transactions using ensemble methods (Random Forest + XGBoost) achieving 99.2% accuracy on imbalanced dataset.",
        image: "/static/images/project_fraud.png",
        tags: [
            { label: "Python", cls: "tag-blue" },
            { label: "Scikit-learn", cls: "tag-purple" },
            { label: "XGBoost", cls: "tag-cyan" },
        ],
        categories: ["ml"],
        github: "https://github.com",
        demo: "http://localhost:5001",
    },
    {
        id: "airquality",
        title: "Air Quality Prediction",
        desc: "Machine learning web app that predicts AQI and air quality levels using environmental sensor data — with real-time input, model explanations, and interactive charts.",
        image: "/static/images/project_airquality.png",
        tags: [
            { label: "Python", cls: "tag-blue" },
            { label: "ML", cls: "tag-purple" },
            { label: "Flask", cls: "tag-cyan" },
        ],
        categories: ["ml", "ai"],
        github: "https://github.com",
        demo: "http://localhost:5002",
    },
    {
        id: "amazon",
        title: "Amazon Sales Dashboard",
        desc: "Interactive Power BI dashboard analyzing Amazon sales data with KPIs, revenue trends, category breakdown, and geographic distribution of orders.",
        image: "/static/images/project_amazon.png",
        tags: [
            { label: "Power BI", cls: "tag-blue" },
            { label: "DAX", cls: "tag-purple" },
            { label: "Excel", cls: "tag-cyan" },
        ],
        categories: ["dashboard"],
        github: "https://github.com",
        demo: null,
    },
    {
        id: "realtime_pipeline",
        title: "Real-Time Analytics Dashboard & Pipeline",
        desc: "Automated data pipeline connected to a real-time analytics dashboard. Features live data streaming, anomaly detection, and data aggregation on a dark-themed UI.",
        image: "/static/images/project_realtime_dashboard.png",
        tags: [
            { label: "Data Pipeline", cls: "tag-cyan" },
            { label: "Real-Time", cls: "tag-blue" },
            { label: "Analytics", cls: "tag-purple" },
        ],
        categories: ["dashboard", "analysis"],
        github: "https://github.com",
        demo: "http://localhost:5003",
    },
    {
        id: "segmentation",
        title: "Customer Segmentation",
        desc: "Applied K-Means clustering to segment customers based on RFM analysis (Recency, Frequency, Monetary), enabling targeted marketing strategies.",
        image: "/static/images/project_segmentation.png",
        tags: [
            { label: "Python", cls: "tag-blue" },
            { label: "K-Means", cls: "tag-purple" },
            { label: "Matplotlib", cls: "tag-pink" },
        ],
        categories: ["ml", "analysis"],
        github: "https://github.com",
        demo: null,
    },
    {
        id: "attrition",
        title: "Employee Attrition Analysis",
        desc: "Power BI dashboard uncovering attrition drivers across departments with predictive risk scoring and actionable HR insights for retention.",
        image: "/static/images/project_attrition.png",
        tags: [
            { label: "Power BI", cls: "tag-blue" },
            { label: "Python", cls: "tag-purple" },
            { label: "HR Analytics", cls: "tag-cyan" },
        ],
        categories: ["dashboard", "analysis"],
        github: "https://github.com",
        demo: null,
    },
    {
        id: "aisql",
        title: "AI SQL Data Analyzer",
        desc: "Streamlit-powered AI app that converts natural language to SQL queries, auto-generates visualizations, and provides business insights from any dataset.",
        image: "/static/images/project_ai_sql.png",
        tags: [
            { label: "AI", cls: "tag-cyan" },
            { label: "LLM", cls: "tag-purple" },
            { label: "Streamlit", cls: "tag-blue" },
        ],
        categories: ["ai"],
        github: "https://github.com",
        demo: null,
    },
];

// ──────────────────────────────────────────────
// INIT ON DOM READY
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    initVanta();
    initAOS();
    initNavbar();
    initTypingEffect();
    initHamburger();
    initThemeToggle();
    renderSkills();
    renderProjects();
    initProjectFilter();
    initScrollProgress();
    initCounters();
    initParticles();
    initTiltEffect();
    initGithubContrib();
    initSkillBars();
    initMouseParallax();
});

// ──────────────────────────────────────────────
// VANTA.js ANIMATED BACKGROUND
// ──────────────────────────────────────────────
function initVanta() {
    if (typeof VANTA === 'undefined' || !VANTA.NET) return;
    VANTA.NET({
        el: document.body,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3b62f6,
        backgroundColor: 0x030712,
        points: 9.0,
        maxDistance: 22.0,
        spacing: 18.0,
        showDots: true,
    });
}

// ──────────────────────────────────────────────
// AOS
// ──────────────────────────────────────────────
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic', offset: 60 });
    }
}

// ──────────────────────────────────────────────
// NAVBAR — shrink on scroll
// ──────────────────────────────────────────────
function initNavbar() {
    const nav = document.getElementById('navbar');
    const updateNav = () => {
        if (window.scrollY > 60) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
}

// ──────────────────────────────────────────────
// TYPING ANIMATION
// ──────────────────────────────────────────────
function initTypingEffect() {
    const words = ['Data Analyst', 'Python Developer', 'Dashboard Builder', 'ML Enthusiast', 'AI Tools Architect'];
    const el = document.getElementById('typing-text');
    if (!el) return;
    let wordIdx = 0, charIdx = 0, deleting = false, paused = false;

    function type() {
        const current = words[wordIdx];
        if (paused) { setTimeout(type, 1800); paused = false; return; }

        if (!deleting) {
            el.textContent = current.slice(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) { paused = true; deleting = true; setTimeout(type, 60); return; }
            setTimeout(type, 85);
        } else {
            el.textContent = current.slice(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                wordIdx = (wordIdx + 1) % words.length;
                setTimeout(type, 400);
            } else {
                setTimeout(type, 45);
            }
        }
    }
    type();
}

// ──────────────────────────────────────────────
// HAMBURGER MOBILE MENU
// ──────────────────────────────────────────────
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');

    if (hamburger) hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
    if (mobileClose) mobileClose.addEventListener('click', closeMobile);
}

window.closeMobile = function () {
    document.getElementById('hamburger')?.classList.remove('open');
    document.getElementById('mobileMenu')?.classList.remove('open');
};

// ──────────────────────────────────────────────
// THEME TOGGLE
// ──────────────────────────────────────────────
function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    if (!btn) return;

    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light') applyLight();

    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        icon.className = isLight ? 'fa fa-sun' : 'fa fa-moon';
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    });

    function applyLight() {
        document.body.classList.add('light-mode');
        icon.className = 'fa fa-sun';
    }
}

// ──────────────────────────────────────────────
// RENDER SKILLS
// ──────────────────────────────────────────────
function renderSkills() {
    const grid = document.querySelector('.skills-grid');
    if (!grid) return;

    SKILLS.forEach((skill, i) => {
        const card = document.createElement('div');
        card.className = 'skill-card glass-card';
        card.setAttribute('data-aos', 'zoom-in');
        card.setAttribute('data-aos-delay', (i * 60).toString());

        card.innerHTML = `
            <div class="skill-icon" style="background:${skill.bg};color:${skill.color};">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">
                <div class="skill-level-fill" data-level="${skill.level}" style="background:linear-gradient(90deg,${skill.color},${skill.color}99);"></div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ──────────────────────────────────────────────
// ANIMATE SKILL BARS (triggered on scroll)
// ──────────────────────────────────────────────
function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-level-fill');
                fills.forEach(fill => {
                    const level = fill.getAttribute('data-level');
                    fill.style.width = level + '%';
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
}

// ──────────────────────────────────────────────
// RENDER PROJECTS
// ──────────────────────────────────────────────
function renderProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    PROJECTS.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = `project-card glass-card`;
        card.setAttribute('data-categories', p.categories.join(','));
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (i % 3 * 100).toString());
        card.setAttribute('data-tilt', '');

        const tagsHTML = p.tags.map(t => `<span class="tag ${t.cls}">${t.label}</span>`).join('');

        // Build the Live Demo button depending on whether a real URL exists
        const demoBtn = p.demo
            ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Open live project">
                   <i class="fa fa-external-link-alt"></i> Live Demo
               </a>`
            : `<button class="btn btn-primary btn-sm btn-coming-soon" disabled title="Live demo coming soon">
                   <i class="fa fa-clock"></i> Coming Soon
               </button>`;

        card.innerHTML = `
            <div class="project-img-wrap">
                <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">
                <div class="project-overlay"></div>
            </div>
            <div class="project-body">
                <div class="project-tags">${tagsHTML}</div>
                <div class="project-title">${p.title}</div>
                <p class="project-desc">${p.desc}</p>
                <div class="project-links">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${demoBtn}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ──────────────────────────────────────────────
// PROJECT FILTER
// ──────────────────────────────────────────────
function initProjectFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            document.querySelectorAll('.project-card').forEach(card => {
                const cats = card.getAttribute('data-categories') || '';
                if (filter === 'all' || cats.includes(filter)) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ──────────────────────────────────────────────
// SCROLL PROGRESS BAR
// ──────────────────────────────────────────────
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = (window.scrollY / total) * 100;
        bar.style.width = pct + '%';
    }, { passive: true });
}

// ──────────────────────────────────────────────
// ANIMATED COUNTERS
// ──────────────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
    let start = 0;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) { el.textContent = target + '+'; clearInterval(timer); }
        else el.textContent = Math.floor(start) + '+';
    }, step);
}

function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const els = entry.target.querySelectorAll('[data-count]');
                els.forEach(el => {
                    animateCounter(el, parseInt(el.getAttribute('data-count')));
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    document.querySelectorAll('#hero, #about').forEach(sec => observer.observe(sec));
}

// ──────────────────────────────────────────────
// FLOATING PARTICLES
// ──────────────────────────────────────────────
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#a78bfa'];
    const count = 18;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 5 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 20;

        p.style.cssText = `
            width:${size}px; height:${size}px;
            background:${color};
            left:${left}vw;
            animation-duration:${duration}s;
            animation-delay:-${delay}s;
            filter:blur(${size > 5 ? 1 : 0}px);
        `;
        container.appendChild(p);
    }
}

// ──────────────────────────────────────────────
// 3D TILT EFFECT ON PROJECT CARDS
// ──────────────────────────────────────────────
function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotX = -(y / rect.height) * 8;
            const rotY = (x / rect.width) * 8;
            card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
            setTimeout(() => { card.style.transition = ''; }, 500);
        });
    });
}

// ──────────────────────────────────────────────
// GITHUB CONTRIBUTION GRID (visual simulation)
// ──────────────────────────────────────────────
function initGithubContrib() {
    const grid = document.getElementById('contribGrid');
    if (!grid) return;

    const weeks = 52;
    const days = 7;
    const intensities = [0.05, 0.2, 0.4, 0.65, 1.0];

    for (let w = 0; w < weeks; w++) {
        for (let d = 0; d < days; d++) {
            const cell = document.createElement('div');
            cell.className = 'contrib-cell';
            // Weighted random — more activity in recent months
            const rnd = Math.random();
            let intensity;
            if (rnd < 0.30) intensity = intensities[0];
            else if (rnd < 0.52) intensity = intensities[1];
            else if (rnd < 0.72) intensity = intensities[2];
            else if (rnd < 0.87) intensity = intensities[3];
            else intensity = intensities[4];

            const alpha = intensity;
            cell.style.background = `rgba(59,130,246,${alpha})`;
            cell.title = `${Math.floor(intensity * 8)} contributions`;
            grid.appendChild(cell);
        }
    }
}

// ──────────────────────────────────────────────
// MOUSE PARALLAX (subtle on hero section)
// ──────────────────────────────────────────────
function initMouseParallax() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

        const heroImg = hero.querySelector('.hero-image');
        const glow = hero.querySelector('.hero-img-glow');

        if (heroImg) heroImg.style.transform = `translateY(-15px) rotateY(${x * 5}deg) rotateX(${-y * 3}deg)`;
        if (glow) glow.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
}

// ──────────────────────────────────────────────
// CONTACT FORM SUBMIT
// ──────────────────────────────────────────────
window.handleSubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('message').value;

    if (!name || !email || !msg) {
        showToast('⚠️ Please fill in all fields.', 'error');
        return;
    }

    const btn = document.querySelector('.btn-send');
    btn.disabled = true;
    btn.querySelector('span').innerHTML = '<i class="fa fa-spinner fa-spin"></i> &nbsp;Sending...';

    setTimeout(() => {
        btn.disabled = false;
        btn.querySelector('span').innerHTML = '<i class="fa fa-paper-plane"></i> &nbsp;Send Message';
        document.getElementById('contactForm').reset();
        showToast('✅ Message sent! I\'ll get back to you soon.', 'success');
    }, 1800);
};

// ──────────────────────────────────────────────
// TOAST NOTIFICATION
// ──────────────────────────────────────────────
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = `show ${type}`;
    setTimeout(() => { toast.className = ''; }, 4000);
}

// ──────────────────────────────────────────────
// SMOOTH SECTION REVEAL (parallax scroll layers)
// ──────────────────────────────────────────────
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const particles = document.querySelectorAll('.particle');
    particles.forEach((p, i) => {
        const speed = 0.04 + (i % 5) * 0.01;
        p.style.marginTop = `${scrolled * speed}px`;
    });
}, { passive: true });

// ──────────────────────────────────────────────
// CSS KEYFRAME INJECTION (fade-in-up for filter)
// ──────────────────────────────────────────────
const styleEl = document.createElement('style');
styleEl.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleEl);
