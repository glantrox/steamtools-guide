/**
 * Tab Navigation & Mobile Drawer Management Module
 */

export function switchTab(tab) {
    const btnGuides = document.getElementById('tab-btn-guides');
    const btnForums = document.getElementById('tab-btn-forums');

    const contentGuides = document.getElementById('tab-content-guides');
    const contentForums = document.getElementById('tab-content-forums');

    const sidebarGuides = document.getElementById('sidebar-guides-nav');
    const sidebarForums = document.getElementById('sidebar-forums-nav');

    if (tab === 'guides') {
        if (btnGuides) {
            btnGuides.classList.add('active', 'text-zinc-100');
            btnGuides.classList.remove('text-zinc-400');
        }
        if (btnForums) {
            btnForums.classList.remove('active', 'text-zinc-100');
            btnForums.classList.add('text-zinc-400');
        }

        if (contentGuides) contentGuides.classList.remove('hidden');
        if (contentForums) contentForums.classList.add('hidden');

        if (sidebarGuides) sidebarGuides.classList.remove('hidden');
        if (sidebarForums) sidebarForums.classList.add('hidden');
    } else {
        if (btnForums) {
            btnForums.classList.add('active', 'text-zinc-100');
            btnForums.classList.remove('text-zinc-400');
        }
        if (btnGuides) {
            btnGuides.classList.remove('active', 'text-zinc-100');
            btnGuides.classList.add('text-zinc-400');
        }

        if (contentForums) contentForums.classList.remove('hidden');
        if (contentGuides) contentGuides.classList.add('hidden');

        if (sidebarForums) sidebarForums.classList.remove('hidden');
        if (sidebarGuides) sidebarGuides.classList.add('hidden');
    }

    const activeContent = tab === 'guides' ? contentGuides : contentForums;
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
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const overlay = document.getElementById('sidebar-overlay');

    if (btnGuides) btnGuides.addEventListener('click', () => switchTab('guides'));
    if (btnForums) btnForums.addEventListener('click', () => switchTab('forums'));
    if (mobileBtn) mobileBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    // Clean up any leftover segmented-pill elements if present
    document.querySelectorAll('.segmented-pill').forEach(el => el.remove());

    window.switchTab = switchTab;
    window.toggleSidebar = toggleSidebar;
    window.closeSidebarOnMobile = closeSidebarOnMobile;
}
