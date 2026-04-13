// ========== TYPING ANIMATION ==========
function startTypingAnimation() {
    const greetingElement = document.getElementById('typed-greeting');
    const nameElement = document.getElementById('typed-name');
    const descElement = document.getElementById('hero-description');
    
    if (!greetingElement || !nameElement || !descElement) return;

    const greetingText = "Hello, I'm";
    const nameText = "K. Asiya Fazmina";
    const descriptionText = "Enthusiastic professional with hands-on experience building responsive websites. Proficient in modern coding workflows and design tools. Eager to contribute to user-centered projects while growing technical and collaboration skills in a dynamic team setting. I turn ideas into interfaces that users love. Clean code, thoughtful design, real results.";

    let greetingIndex = 0, nameIndex = 0, descIndex = 0;
    let nameStarted = false;
    let descStarted = false;
    
    greetingElement.textContent = '';
    nameElement.textContent = '';
    descElement.textContent = '';

    greetingElement.style.borderRight = '2px solid #667eea';
    nameElement.style.borderRight = '2px solid #667eea';
    greetingElement.style.animation = 'blinkCursor 0.75s step-end infinite';
    nameElement.style.animation = 'blinkCursor 0.75s step-end infinite';

    function typeGreeting() {
        if (greetingIndex < greetingText.length) {
            greetingElement.textContent += greetingText.charAt(greetingIndex);
            greetingIndex++;
            setTimeout(typeGreeting, 80);
        } else {
            greetingElement.style.borderRight = 'none';
            setTimeout(() => {
                typeName();
            }, 400);
        }
    }

    function typeName() {
        if (!nameStarted) {
            nameStarted = true;
            nameElement.style.borderRight = '2px solid #667eea';
            nameElement.style.animation = 'blinkCursor 0.75s step-end infinite';
        }
        
        if (nameIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, 80);
        } else {
            nameElement.style.borderRight = 'none';
            nameElement.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            nameElement.style.backgroundClip = 'text';
            nameElement.style.webkitBackgroundClip = 'text';
            nameElement.style.color = 'transparent';
            setTimeout(() => {
                typeDescription();
            }, 500);
        }
    }

    function typeDescription() {
        if (!descStarted) {
            descStarted = true;
            descElement.style.borderRight = '2px solid #667eea';
            descElement.style.animation = 'blinkCursor 0.75s step-end infinite';
        }
        
        if (descIndex < descriptionText.length) {
            descElement.textContent += descriptionText.charAt(descIndex);
            descIndex++;
            setTimeout(typeDescription, 40);
        } else {
            descElement.style.borderRight = 'none';
        }
    }
    
    typeGreeting();
}

// ========== PROJECTS DATA ==========
const projects = [
    {
        title: "ECE Parameter Calculator",
        desc: "Comprehensive calculator for 30+ electronic parameters and formulas for ECE students.",
        detailedDesc: "This powerful calculator tool includes over 30 essential ECE parameters for Electronics & Communication Engineering students and professionals. Features real-time validation, unit conversion, and instant results with detailed explanations.",
        tech: ["HTML5", "CSS3", "JavaScript", "Mathematics"],
        icon: "fas fa-calculator"
    },
    {
        title: "LearnHub UI/UX",
        desc: "Mobile-first learning platform prototype in Figma, improving user engagement and accessibility.",
        detailedDesc: "LearnHub is a comprehensive e-learning platform UI/UX design that transforms online education. The design includes personalized learning dashboards with progress tracking, interactive course cards with visual progress indicators, video lecture layouts with note-taking features, quiz interfaces with instant feedback, community discussion forums, and achievement badges. User research and usability testing resulted in a 40% increase in user engagement metrics.",
        tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
        icon: "fas fa-graduation-cap"
    },
    {
        title: "Furniture Store Website",
        desc: "Modern e-commerce website for a furniture brand with product catalogs and shopping cart.",
        detailedDesc: "Complete furniture store website with product filtering by category; detailed product pages with image galleries; shopping cart functionality with quantity management; wishlist feature for saving favorite items; user reviews and ratings system; fully responsive design that works seamlessly on desktop, tablet, and mobile devices.",
        tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
        icon: "fas fa-couch"
    },
    {
        title: "Fashion E-Commerce Website",
        desc: "Front-end fashion store with product display, shopping cart, and wishlist features.",
        detailedDesc: "A complete front-end e-commerce solution built with HTML, CSS, JavaScript, and React. Features include product catalog with grid/list view, product search and filters by category, size, and color; shopping cart with add/remove items and quantity updates; wishlist functionality to save favorite products; product detail pages with image carousel; responsive design for all devices.",
        tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Local Storage"],
        icon: "fas fa-shopping-bag"
    }
];

function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = '';
    projects.forEach((proj, idx) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-icon"><i class="${proj.icon}"></i></div>
            <div class="project-info">
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
                <div class="project-tech">${proj.tech.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
        `;
        card.addEventListener('click', () => showProjectDetails(proj));
        container.appendChild(card);
    });
}

function showProjectDetails(project) {
    const modal = document.createElement('div');
    modal.style.cssText = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); backdrop-filter:blur(5px); display:flex; align-items:center; justify-content:center; z-index:2000; animation:fadeIn 0.3s ease;`;
    const content = document.createElement('div');
    content.style.cssText = `background:white; max-width:700px; width:90%; max-height:85vh; overflow-y:auto; border-radius:24px; padding:2rem; position:relative; animation:slideUp 0.3s ease;`;
    
    content.innerHTML = `
        <button class="close-modal" style="position:sticky; top:0; float:right; background:#ff6b6b; border:none; width:35px; height:35px; border-radius:50%; cursor:pointer; color:white; font-size:1.2rem;">&times;</button>
        <h3 style="color:#667eea; font-size:1.8rem; margin-bottom:0.5rem;">${project.title}</h3>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin:0.5rem 0 1.5rem;">${project.tech.map(t => `<span style="background:#f0efff; padding:0.3rem 1rem; border-radius:20px;">${t}</span>`).join('')}</div>
        <p style="line-height:1.7; color:#4a4a6a;">${project.detailedDesc}</p>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    content.querySelector('.close-modal').onclick = () => modal.remove();
    modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
    document.addEventListener('keydown', function(e) { if(e.key === 'Escape' && document.body.contains(modal)) modal.remove(); });
}

// ========== HELPER FUNCTIONS ==========
function initializeMobileMenu() {
    const toggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    if (toggle && navLinks) {
        toggle.onclick = () => navLinks.classList.toggle('active');
        document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));
    }
}

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initializeScrollAnimations() {
    const elements = document.querySelectorAll('.exp-card, .skill-badge, .project-card, .contact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function updateFooterYear() {
    const footerPara = document.querySelector('footer p');
    if (footerPara) footerPara.innerHTML = footerPara.innerHTML.replace('2025', new Date().getFullYear());
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop, height = section.clientHeight;
            if (scrollPos >= top && scrollPos < top + height) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) link.style.color = '#667eea';
        });
    });
}

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', () => {
    startTypingAnimation();
    renderProjects();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeScrollAnimations();
    updateFooterYear();
    updateActiveNavOnScroll();
});
