// ========== TYPING ANIMATION ==========
function startTypingAnimation() {
    const greetingElement = document.getElementById('typed-greeting');
    const nameElement = document.getElementById('typed-name');
    if (!greetingElement || !nameElement) return;

    const greetingText = "Hello, I'm";
    const nameText = "K. Asiya Fazmina";

    let greetingIndex = 0, nameIndex = 0;
    greetingElement.textContent = '';
    nameElement.textContent = '';

    greetingElement.style.borderRight = '2px solid #667eea';
    nameElement.style.borderRight = '2px solid #667eea';
    greetingElement.style.animation = 'blinkCursor 0.75s step-end infinite';
    nameElement.style.animation = 'blinkCursor 0.75s step-end infinite';

    function typeGreeting() {
        if (greetingIndex < greetingText.length) {
            greetingElement.textContent += greetingText.charAt(greetingIndex);
            greetingIndex++;
            setTimeout(typeGreeting, 100);
        } else {
            greetingElement.style.borderRight = 'none';
            setTimeout(typeName, 500);
        }
    }

    function typeName() {
        if (nameIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, 100);
        } else {
            nameElement.style.borderRight = 'none';
            nameElement.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            nameElement.style.backgroundClip = 'text';
            nameElement.style.webkitBackgroundClip = 'text';
            nameElement.style.color = 'transparent';
        }
    }
    typeGreeting();
}

// ========== PROJECTS DATA (Only 4 projects) ==========
const projects = [
    {
        title: "ECE Parameter Calculator",
        desc: "Comprehensive calculator for 30+ electronic parameters and formulas for ECE students and professionals.",
        detailedDesc: "This powerful calculator tool includes over 30 essential ECE parameters including: Ohm's Law calculations, Resistor Color Code decoder, Capacitance and Inductance calculators, Frequency and Wavelength converters, Power calculations (dBm, dBW), Voltage dividers, RC/RL time constants, Transformer ratios, Filter cutoff frequencies, Antenna parameters, Semiconductor formulas, and many more. Features real-time validation, unit conversion, and instant results with detailed explanations.",
        tech: ["HTML5", "CSS3", "JavaScript", "Mathematics", "Real-time Validation"],
        icon: "fas fa-calculator",
        features: ["30+ Electronic Parameters", "Real-time Calculations", "Unit Converters", "Formula Explanations", "Mobile Responsive"]
    },
    {
        title: "LearnHub UI/UX",
        desc: "Mobile-first learning platform prototype in Figma, improving user engagement and accessibility.",
        detailedDesc: "LearnHub is a comprehensive e-learning platform UI/UX design focused on creating an engaging, accessible, and user-friendly experience for students of all ages. The design includes personalized dashboards, progress tracking, interactive course cards, video lecture layouts, quiz interfaces, and community discussion forums. User research and usability testing resulted in a 40% increase in user engagement metrics.",
        tech: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Wireframing"],
        icon: "fas fa-graduation-cap",
        features: ["Mobile-first Design", "Interactive Prototypes", "User Personas", "Accessibility Focus", "Design System"]
    },
    {
        title: "Furniture Store Website",
        desc: "Modern e-commerce website for a furniture brand with product catalogs, shopping cart, and seamless checkout.",
        detailedDesc: "Complete furniture store website with product filtering by category, price range, and material type; detailed product pages with image galleries; shopping cart functionality; wishlist feature; user reviews and ratings; fully responsive design.",
        tech: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Responsive Design"],
        icon: "fas fa-couch",
        features: ["Product Catalog", "Shopping Cart", "Price Filters", "Wishlist Feature", "Image Gallery"]
    },
    {
        title: "Fashion E-Commerce Website",
        desc: "Full-featured online fashion store with user authentication, product management, and order tracking system.",
        detailedDesc: "Complete e-commerce solution with user registration/login, product search and filters (size, color, brand, price), product recommendations, shopping cart with quantity management, secure checkout process, order history, payment gateway integration (demo), admin dashboard, and email notifications.",
        tech: ["HTML5", "CSS3", "JavaScript", "Local Storage API", "REST API Integration"],
        icon: "fas fa-shopping-bag",
        features: ["User Authentication", "Product Management", "Secure Checkout", "Order Tracking", "Admin Dashboard"]
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
                <div class="project-features">${proj.features.map(f => `<span class="feature-badge">✓ ${f}</span>`).join('')}</div>
            </div>
        `;
        card.addEventListener('click', () => showProjectDetails(proj, idx));
        container.appendChild(card);
    });
}

function showProjectDetails(project, index) {
    const modal = document.createElement('div');
    modal.style.cssText = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); backdrop-filter:blur(5px); display:flex; align-items:center; justify-content:center; z-index:2000; animation:fadeIn 0.3s ease;`;
    const content = document.createElement('div');
    content.style.cssText = `background:white; max-width:700px; width:90%; max-height:85vh; overflow-y:auto; border-radius:24px; padding:2rem; position:relative; animation:slideUp 0.3s ease;`;
    let detailsHtml = '';
    if (index === 0) {
        detailsHtml = `
            <h3 style="color:#667eea; font-size:1.8rem;">${project.title}</h3>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin:0.5rem 0 1rem;">${project.tech.map(t => `<span style="background:#f0efff; padding:0.3rem 1rem; border-radius:20px;">${t}</span>`).join('')}</div>
            <h4>📊 30+ ECE Parameters Include:</h4>
          
            <p>${project.detailedDesc}</p>
        `;
    } else {
        detailsHtml = `
            <h3 style="color:#667eea; font-size:1.8rem;">${project.title}</h3>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin:0.5rem 0 1rem;">${project.tech.map(t => `<span style="background:#f0efff; padding:0.3rem 1rem; border-radius:20px;">${t}</span>`).join('')}</div>
            <div style="margin:1rem 0;">${project.features.map(f => `<p><i class="fas fa-check-circle" style="color:#27ae60;"></i> ${f}</p>`).join('')}</div>
            <p>${project.detailedDesc}</p>
        `;
    }
    content.innerHTML = `<button class="close-modal" style="position:sticky; top:0; float:right; background:#ff6b6b; border:none; width:35px; height:35px; border-radius:50%; cursor:pointer; color:white; font-size:1.2rem;">&times;</button>${detailsHtml}`;
    modal.appendChild(content);
    document.body.appendChild(modal);
    content.querySelector('.close-modal').onclick = () => modal.remove();
    modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
    document.addEventListener('keydown', function(e) { if(e.key === 'Escape' && document.body.contains(modal)) modal.remove(); });
}

// ========== EMAILJS CONTACT FORM (Real email sending) ==========
// ✅ Your public key is already inserted below.
// 🔴 IMPORTANT: Replace the placeholders with your actual Service ID and Template ID from EmailJS.

// Initialize EmailJS with your Public Key
emailjs.init("xVEZ8xC4yGoqFSPO7");   // Your public key is now set

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const feedback = document.getElementById('formFeedback');

        if (!name || !email || !subject || !message) {
            feedback.innerHTML = '<span style="color:#e74c3c;">❌ Please fill all fields</span>';
            setTimeout(() => feedback.innerHTML = '', 3000);
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            feedback.innerHTML = '<span style="color:#e74c3c;">❌ Enter a valid email address</span>';
            return;
        }

        const btn = document.getElementById('submitBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        // ---------- REAL EMAIL SENDING (REPLACE THE IDs BELOW) ----------
        try {
            const result = await emailjs.send(
                'YOUR_SERVICE_ID',      // 🔴 REPLACE with your EmailJS Service ID (e.g., 'service_abc123')
                'YOUR_TEMPLATE_ID',     // 🔴 REPLACE with your EmailJS Template ID (e.g., 'template_xyz789')
                {
                    from_name: name,
                    from_email: email,
                    subject: subject,
                    message: message,
                    to_email: "asiyafazmina2004@gmail.com"
                }
            );
            if (result.status === 200) {
                feedback.innerHTML = '<span style="color:#27ae60;">✓ Message sent successfully! I\'ll reply soon.</span>';
                form.reset();
            } else {
                throw new Error();
            }
        } catch (error) {
            console.error("EmailJS error:", error);
            feedback.innerHTML = '<span style="color:#e74c3c;">❌ Failed to send. Please try again later or email me directly.</span>';
        }

        btn.innerHTML = originalText;
        btn.disabled = false;
        setTimeout(() => feedback.innerHTML = '', 5000);
    });
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
    const elements = document.querySelectorAll('.exp-card, .skill-badge, .project-card, .contact-container');
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
    initializeContactForm();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeScrollAnimations();
    updateFooterYear();
    updateActiveNavOnScroll();
});