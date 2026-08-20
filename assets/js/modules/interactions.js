/**
 * Unified Technical Docs Interactions & ScrollSpy
 */

export function initSpotlightCards() {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

export function initScrollSpy() {
    const sections = document.querySelectorAll('section[id^="section-"]');
    const navLinks = document.querySelectorAll('#sidebar-guides-nav .nav-link');
    if (sections.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-15% 0px -55% 0px',
        threshold: 0
    };

    const activeClasses = 'nav-link w-full text-left block px-2.5 py-2 rounded-md text-emerald-400 bg-zinc-900/80 transition';
    const inactiveClasses = 'nav-link w-full text-left block px-2.5 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 transition';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const stepBadge = entry.target.querySelector('.step-number-badge');

            if (entry.isIntersecting) {
                // 1. Shift left sidebar active link state with matching category button styles
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.className = activeClasses;
                    } else {
                        link.className = inactiveClasses;
                    }
                });

                // 2. Section Step Badge Activation
                if (stepBadge) {
                    stepBadge.classList.add('active-step');
                }
            } else {
                if (stepBadge) {
                    stepBadge.classList.remove('active-step');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

export function initInteractions() {
    initSpotlightCards();
    initScrollSpy();
}
