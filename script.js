// ==========================================================================
// Ansu Kumar R - Portfolio JavaScript
// Interactive UX, Form Validation, Smooth Typing Animation, Scroll Effects
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initNavbarScrollEffect();
    initActiveNavLink();
    initBackToTop();
    initTypingAnimation();
    initFormValidation();
    initScrollAnimations();
    setCurrentYear();
});

// Smooth scrolling with proper navbar offset
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                const headerOffset = 75;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile navbar dropdown if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    } else {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });
}

// Navbar styling on scroll
function initNavbarScrollEffect() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;

    function checkScroll() {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
}

// Highlight active navbar link on scroll
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.pageYOffset + 110;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
}

// Back to Top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 280) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth, subtle & minimal typing animation for hero role
function initTypingAnimation() {
    const typedElement = document.getElementById('typedRole');
    if (!typedElement) return;

    const titles = [
        "Software Developer | Web Application",
        "Software Developer | Backend",
        "Software Developer | C# & .NET",
        "Software Developer | React.js & PostgreSQL"
    ];

    let titleIndex = 0;
    let charIndex = titles[0].length;
    let isDeleting = true;

    // Start after reading initial title for a moment
    function type() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            typedElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 30 : 65;

        if (!isDeleting && charIndex === currentTitle.length) {
            speed = 2600; // Pause at end of title
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            speed = 450; // Pause before starting next title
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 2200);
}

// Contact Form submission with mailto and notifications
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const subjectVal = subjectInput ? subjectInput.value.trim() : 'Portfolio Contact';
        const message = messageInput ? messageInput.value.trim() : '';
        
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        const mailSubject = encodeURIComponent(`Portfolio Inquiry: ${subjectVal} (from ${name})`);
        const mailBody = encodeURIComponent(`Hello Ansu,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`);
        const mailtoUrl = `mailto:ansukumar5207@gmail.com?subject=${mailSubject}&body=${mailBody}`;
        
        showNotification('Opening your email client to send the message...', 'success');
        
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 500);
        
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Toast notification
function showNotification(message, type) {
    const existing = document.querySelector('.custom-toast-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `custom-toast-notification alert alert-${type === 'error' ? 'danger' : 'success'}`;
    notification.style.cssText = `
        position: fixed;
        top: 85px;
        right: 20px;
        z-index: 10000;
        min-width: 260px;
        max-width: 90vw;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        background: ${type === 'error' ? 'rgba(220, 53, 69, 0.95)' : 'rgba(16, 185, 129, 0.95)'};
        backdrop-filter: blur(12px);
        color: #ffffff;
        font-weight: 500;
        font-size: 0.88rem;
        padding: 0.75rem 1.15rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        opacity: 0;
        transform: translateY(-8px);
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    notification.innerHTML = `<i class="bi bi-${type === 'error' ? 'exclamation-triangle-fill' : 'check-circle-fill'} me-2"></i>${message}`;
    
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    });
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-8px)';
        setTimeout(() => notification.remove(), 250);
    }, 4000);
}

// Scroll Intersection Observer for subtle reveal
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.glass-card, .highlight-item, .timeline-item').forEach(el => {
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

// Current Year in footer
function setCurrentYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}