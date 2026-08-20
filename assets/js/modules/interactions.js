/**
 * Unified Technical Docs Interactions, Sticky Morphing Command Bar & Granular Substep Spy
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
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.className = activeClasses;
                    } else {
                        link.className = inactiveClasses;
                    }
                });

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

export function initSubstepSpy() {
    const substepTargets = document.querySelectorAll('[id^="substep-"]');
    if (substepTargets.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const matchingPills = document.querySelectorAll(`.substep-pill[href="#${id}"]`);
                
                const parentDock = entry.target.closest('.step-section')?.querySelector('.sticky-step-dock');
                if (parentDock) {
                    parentDock.querySelectorAll('.substep-pill').forEach(pill => {
                        pill.classList.remove('active-substep');
                    });
                }

                matchingPills.forEach(pill => {
                    pill.classList.add('active-substep');
                });
            }
        });
    }, observerOptions);

    substepTargets.forEach(target => observer.observe(target));
}

export function openLegalModal() {
    const modal = document.getElementById('legal-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

export function closeLegalModal() {
    const modal = document.getElementById('legal-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

export function initLegalModalEvents() {
    const modal = document.getElementById('legal-modal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLegalModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeLegalModal();
        }
    });

    window.openLegalModal = openLegalModal;
    window.closeLegalModal = closeLegalModal;
}

export function initInteractions() {
    initSpotlightCards();
    initScrollSpy();
    initSubstepSpy();
    initLegalModalEvents();
}
