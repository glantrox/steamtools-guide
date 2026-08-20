/**
 * Tab Navigation & Mobile Drawer Management Module
 */

export function updateSlidingPill(container, activeBtn) {
    if (!container || !activeBtn) return;
    let pill = container.querySelector('.segmented-pill');
    if (!pill) {
        pill = document.createElement('div');
        pill.className = 'segmented-pill';
        container.prepend(pill);
    }
    
    pill.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    pill.style.width = `${activeBtn.offsetWidth}px`;
}

export function switchTab(tab) {
    const btnGuides = document.getElementById('tab-btn-guides');
    const btnForums = document.getElementById('tab-btn-forums');
    const topContainer = document.getElementById('top-tab-container');

    const contentGuides = document.getElementById('tab-content-guides');
    const contentForums = document.getElementById('tab-content-forums');

    const sidebarGuides = document.getElementById('sidebar-guides-nav');
    const sidebarForums = document.getElementById('sidebar-forums-nav');

    const activeBtn = tab === 'guides' ? btnGuides : btnForums;
    const activeContent = tab === 'guides' ? contentGuides : contentForums;

    if (tab === 'guides') {
        if (btnGuides) {
            btnGuides.classList.add('text-zinc-100');
            btnGuides.classList.remove('text-zinc-400');
        }
        if (btnForums) {
            btnForums.classList.remove('text-zinc-100');
            btnForums.classList.add('text-zinc-400');
        }

        if (contentGuides) contentGuides.classList.remove('hidden');
        if (contentForums) contentForums.classList.add('hidden');

        if (sidebarGuides) sidebarGuides.classList.remove('hidden');
        if (sidebarForums) sidebarForums.classList.add('hidden');
    } else {
        if (btnForums) {
            btnForums.classList.add('text-zinc-100');
            btnForums.classList.remove('text-zinc-400');
        }
        if (btnGuides) {
            btnGuides.classList.remove('text-zinc-100');
            btnGuides.classList.add('text-zinc-400');
        }

        if (contentForums) contentForums.classList.remove('hidden');
        if (contentGuides) contentGuides.classList.add('hidden');

        if (sidebarForums) sidebarForums.classList.remove('hidden');
        if (sidebarGuides) sidebarGuides.classList.add('hidden');
    }

    if (topContainer && activeBtn) {
        updateSlidingPill(topContainer, activeBtn);
    }

    // Trigger fast staggered reveal for active content children
    if (activeContent) {
        triggerStaggerReveal(activeContent);
    }
}

export function triggerStaggerReveal(container) {
    if (!container) return;
    const items = container.querySelectorAll('section, .forum-thread-card, .p-3.5, .p-4');
    items.forEach((item, idx) => {
        item.style.setProperty('--stagger-idx', idx % 15);
        item.classList.remove('stagger-item');
        void item.offsetWidth; // Force reflow
        item.classList.add('stagger-item');
    });
}

export function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-nav');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar || !overlay) return;

    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden', !sidebar.classList.contains('-translate-x-full'));
}

export function closeSidebarOnMobile() {
    const sidebar = document.getElementById('sidebar-nav');
    if (!sidebar) return;

    if (window.innerWidth < 1024 && !sidebar.classList.contains('-translate-x-full')) {
        toggleSidebar();
    }
}

export function initNavigation() {
    const btnGuides = document.getElementById('tab-btn-guides');
    const btnForums = document.getElementById('tab-btn-forums');
    const topContainer = document.getElementById('top-tab-container');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const overlay = document.getElementById('sidebar-overlay');

    if (btnGuides) btnGuides.addEventListener('click', () => switchTab('guides'));
    if (btnForums) btnForums.addEventListener('click', () => switchTab('forums'));
    if (mobileBtn) mobileBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    // Initial pill placement
    if (topContainer && btnGuides) {
        setTimeout(() => updateSlidingPill(topContainer, btnGuides), 50);
    }

    // Recalculate pill on window resize
    window.addEventListener('resize', () => {
        const currentActive = document.querySelector('#top-tab-container .segmented-btn.text-zinc-100');
        if (topContainer && currentActive) {
            updateSlidingPill(topContainer, currentActive);
        }
    });

    window.switchTab = switchTab;
    window.toggleSidebar = toggleSidebar;
    window.closeSidebarOnMobile = closeSidebarOnMobile;
}
