/**
 * Community Forum / Problem Solver Module
 */
import { FORUM_THREADS } from '../data/forum-data.js';
import { getCurrentLanguage } from './i18n.js';

let currentCategory = 'all';

export function renderForumThreads() {
    const listContainer = document.getElementById('forum-thread-list');
    if (!listContainer) return;

    const lang = getCurrentLanguage();
    const searchInput = document.getElementById('forum-search-input');
    const query = (searchInput?.value || '').toLowerCase().trim();

    const filtered = FORUM_THREADS.filter(thread => {
        const matchesCategory = currentCategory === 'all' || thread.category === currentCategory;
        
        const titleText = (thread.title[lang] || thread.title['id']).toLowerCase();
        const descText = (thread.description[lang] || thread.description['id']).toLowerCase();
        const keywords = (thread.keywords || '').toLowerCase();

        const matchesQuery = !query || titleText.includes(query) || descText.includes(query) || keywords.includes(query);
        return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div id="forum-empty-state" class="p-6 text-center bg-zinc-900/40 rounded-lg border border-zinc-800 space-y-2">
                <i class="fa-solid fa-magnifying-glass-minus text-zinc-500 text-xl"></i>
                <p class="text-xs text-zinc-400">
                    ${lang === 'id' ? 'Tidak ada solusi forum yang cocok dengan pencarian kamu.' : 'No forum solutions match your search query.'}
                </p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = filtered.map(thread => {
        const badgeText = thread.badge.text[lang] || thread.badge.text['id'];
        const statusText = thread.status.text[lang] || thread.status.text['id'];
        const title = thread.title[lang] || thread.title['id'];
        const description = thread.description[lang] || thread.description['id'];
        const solutionTitle = thread.solutionTitle[lang] || thread.solutionTitle['id'];

        let badgeBgClass = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
        let badgeIcon = 'fa-circle-exclamation';
        if (thread.badge.color === 'red' || thread.badge.color === 'rose') {
            badgeBgClass = 'bg-red-500/10 text-red-400 border-red-500/20';
            badgeIcon = 'fa-lock';
        } else if (thread.badge.color === 'sky') {
            badgeBgClass = 'bg-sky-500/10 text-sky-400 border-sky-500/20';
            badgeIcon = 'fa-cloud';
        }

        const stepsHtml = thread.solutionSteps.map(step => {
            const stepText = step[lang] || step['id'];
            return `<li>${stepText}</li>`;
        }).join('');

        return `
            <div class="forum-thread-card border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/40 p-3.5 sm:p-4 space-y-3"
                data-category="${thread.category}" data-keywords="${thread.keywords}">
                <div class="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded ${badgeBgClass} border font-mono">
                        <i class="fa-solid ${badgeIcon} text-[9px]"></i> ${badgeText}
                    </span>
                    <span class="${thread.status.isSolved ? 'text-emerald-400' : 'text-zinc-400'} font-mono text-[10px] flex items-center gap-1">
                        <i class="fa-solid ${thread.status.isSolved ? 'fa-circle-check' : 'fa-info-circle'}"></i> ${statusText}
                    </span>
                </div>

                <h3 class="font-semibold text-zinc-100 text-xs sm:text-sm leading-snug">
                    ${title}
                </h3>

                <p class="text-zinc-400 leading-relaxed text-xs">
                    <strong class="text-zinc-300">${lang === 'id' ? 'Deskripsi Masalah:' : 'Issue Description:'}</strong> ${description}
                </p>

                <div class="p-3 sm:p-3.5 bg-zinc-950/80 rounded border border-zinc-800 space-y-2 text-zinc-300 text-[11px] sm:text-xs">
                    <div class="font-semibold ${thread.status.isSolved ? 'text-emerald-400' : 'text-amber-400'} flex items-center gap-1.5">
                        <i class="fa-solid ${thread.status.isSolved ? 'fa-wrench' : 'fa-circle-info'}"></i> ${solutionTitle}
                    </div>
                    <ol class="list-decimal list-inside space-y-1 text-zinc-400">
                        ${stepsHtml}
                    </ol>
                </div>
            </div>
        `;
    }).join('');
}

export function filterForumCategory(cat) {
    currentCategory = cat;

    // Update left sidebar buttons
    const sidebarBtns = document.querySelectorAll('.forum-cat-btn');
    sidebarBtns.forEach(btn => {
        const val = btn.getAttribute('data-cat-val');
        if (val === cat) {
            btn.className = 'forum-cat-btn w-full text-left flex items-center justify-between px-2.5 py-2 rounded-md text-emerald-400 bg-zinc-900/80 transition';
        } else {
            btn.className = 'forum-cat-btn w-full text-left flex items-center justify-between px-2.5 py-2 rounded-md text-zinc-400 hover:text-zinc-900/60 transition';
        }
    });

    // Update mobile/top chip buttons
    const chipBtns = document.querySelectorAll('.forum-mobile-cat-btn');
    chipBtns.forEach(btn => {
        const val = btn.getAttribute('data-cat-val');
        if (val === cat) {
            btn.className = 'forum-mobile-cat-btn active px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white whitespace-nowrap transition text-[11px]';
        } else {
            btn.className = 'forum-mobile-cat-btn px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white whitespace-nowrap transition text-[11px]';
        }
    });

    renderForumThreads();
}

export function initForum() {
    renderForumThreads();

    const searchInput = document.getElementById('forum-search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', renderForumThreads);
    }

    window.filterForumCategory = filterForumCategory;
}
