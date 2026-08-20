/**
 * Live Game & DLC App ID Search Module
 */
import { STEAM_DLC_DATABASE } from '../data/dlc-db.js';
import { getGameDrmInfo } from '../data/drm-db.js';
import { getCurrentLanguage } from './i18n.js';
import { showToast } from './clipboard.js';
import { updateSlidingPill } from './navigation.js';

let apiSearchTimeout = null;
let activeSearchAbortController = null;
let currentSearchMode = 'game'; // 'game' or 'dlc'

export function setSearchMode(mode) {
    currentSearchMode = mode;
    const btnGame = document.getElementById('search-mode-btn-game');
    const btnDlc = document.getElementById('search-mode-btn-dlc');
    const modeContainer = document.getElementById('search-mode-container');
    const input = document.getElementById('game-search-input');
    const lang = getCurrentLanguage();

    const activeBtn = mode === 'game' ? btnGame : btnDlc;

    if (mode === 'game') {
        if (btnGame) {
            btnGame.classList.add('text-zinc-100');
            btnGame.classList.remove('text-zinc-400');
        }
        if (btnDlc) {
            btnDlc.classList.remove('text-zinc-100');
            btnDlc.classList.add('text-zinc-400');
        }
        if (input) input.placeholder = lang === 'id' ? 'Cari judul game (GTA, Wukong...)' : 'Search game title (GTA, Wukong...)';
    } else {
        if (btnDlc) {
            btnDlc.classList.add('text-zinc-100');
            btnDlc.classList.remove('text-zinc-400');
        }
        if (btnGame) {
            btnGame.classList.remove('text-zinc-100');
            btnGame.classList.add('text-zinc-400');
        }
        if (input) input.placeholder = lang === 'id' ? 'Cari nama DLC (Phantom Liberty...)' : 'Search DLC name (Phantom Liberty...)';
    }

    if (modeContainer && activeBtn) {
        updateSlidingPill(modeContainer, activeBtn);
    }

    if (input) input.value = '';
    const activeDetail = document.getElementById('game-active-detail');
    if (activeDetail) activeDetail.classList.add('hidden');

    handleGameSearchInput();
    if (input) input.focus();
}

export function handleGameSearchInput() {
    const query = (document.getElementById('game-search-input')?.value || '').trim();
    const resultsContainer = document.getElementById('game-search-results');
    const lang = getCurrentLanguage();

    if (apiSearchTimeout) clearTimeout(apiSearchTimeout);
    if (activeSearchAbortController) {
        activeSearchAbortController.abort();
        activeSearchAbortController = null;
    }

    if (query.length < 2) {
        const wrapper = document.getElementById('game-search-wrapper');
        if (wrapper) wrapper.classList.remove('is-loading');

        if (resultsContainer) {
            if (currentSearchMode === 'game') {
                resultsContainer.innerHTML = `
                    <div class="p-3 text-center bg-zinc-950/40 rounded-lg text-zinc-500 text-[11px] leading-relaxed">
                        ${lang === 'id' ? 'Ketik nama game untuk mencari App ID & Manifest.' : 'Type game name to search for App ID & Manifest.'}
                    </div>
                `;
            } else {
                resultsContainer.innerHTML = `
                    <div class="p-3 text-center bg-zinc-950/40 rounded-lg text-zinc-500 text-[11px] leading-relaxed">
                        ${lang === 'id' ? 'Ketik nama DLC untuk mencari App ID DLC.' : 'Type DLC name to search for DLC App ID.'}
                    </div>
                `;
            }
        }
        return;
    }

    const wrapper = document.getElementById('game-search-wrapper');
    if (wrapper) wrapper.classList.add('is-loading');

    apiSearchTimeout = setTimeout(() => {
        fetchLiveSteamGames(query);
    }, 300);
}

async function fetchLiveSteamGames(query) {
    activeSearchAbortController = new AbortController();
    const signal = activeSearchAbortController.signal;

    try {
        let liveResults = [];
        const qLower = query.toLowerCase().trim();

        if (currentSearchMode === 'dlc') {
            const dlcMatches = STEAM_DLC_DATABASE.filter(item => 
                item.name.toLowerCase().includes(qLower) || 
                item.game.toLowerCase().includes(qLower) ||
                qLower.split(' ').every(word => item.name.toLowerCase().includes(word) || item.game.toLowerCase().includes(word))
            );

            dlcMatches.forEach(item => {
                liveResults.push({
                    name: item.name,
                    id: item.id,
                    logo: `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${item.id}/capsule_231x87.jpg`,
                    isDlc: true
                });
            });

            if (liveResults.length < 5) {
                try {
                    const cheapSharkUrl = `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(query)}&limit=15`;
                    const res = await fetch(cheapSharkUrl, { signal });
                    if (res.ok) {
                        const items = await res.json();
                        if (Array.isArray(items)) {
                            items.forEach(item => {
                                let appId = item.steamAppID;
                                if ((!appId || appId === "null") && item.thumb) {
                                    const match = item.thumb.match(/\/apps\/(\d+)\//);
                                    if (match && match[1]) appId = match[1];
                                }

                                const titleLower = item.external.toLowerCase();
                                const isExplicitDlc = titleLower.includes('dlc') || 
                                                     titleLower.includes('expansion') || 
                                                     titleLower.includes('season pass') || 
                                                     titleLower.includes('pack') || 
                                                     titleLower.includes('upgrade') || 
                                                     titleLower.includes('edition upgrade') ||
                                                     titleLower.includes('phantom liberty') ||
                                                     titleLower.includes('erdtree') ||
                                                     titleLower.includes('iceborne') ||
                                                     titleLower.includes('sunbreak');

                                if (appId && appId !== "null" && isExplicitDlc) {
                                    liveResults.push({
                                        name: item.external,
                                        id: appId,
                                        logo: item.thumb || `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/capsule_231x87.jpg`,
                                        isDlc: true
                                    });
                                }
                            });
                        }
                    }
                } catch (e) { }
            }
        } else {
            try {
                const cheapSharkUrl = `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(query)}&limit=15`;
                const res = await fetch(cheapSharkUrl, { signal });
                if (res.ok) {
                    const items = await res.json();
                    if (Array.isArray(items) && items.length > 0) {
                        items.forEach(item => {
                            let appId = item.steamAppID;
                            if ((!appId || appId === "null") && item.thumb) {
                                const match = item.thumb.match(/\/apps\/(\d+)\//);
                                if (match && match[1]) appId = match[1];
                            }

                            if (appId && appId !== "null") {
                                liveResults.push({
                                    name: item.external,
                                    id: appId,
                                    logo: item.thumb || `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/capsule_231x87.jpg`,
                                    isDlc: false
                                });
                            }
                        });
                    }
                }
            } catch (cheapSharkErr) {
                console.warn('CheapShark search error:', cheapSharkErr);
            }
        }

        const currentInput = (document.getElementById('game-search-input')?.value || '').trim().toLowerCase();
        if (currentInput.includes(query.toLowerCase()) || query.toLowerCase().includes(currentInput) || query.toLowerCase() === currentInput) {
            const seenIds = new Set();
            const uniqueResults = [];

            liveResults.forEach(item => {
                if (!seenIds.has(String(item.id))) {
                    seenIds.add(String(item.id));
                    uniqueResults.push(item);
                }
            });

            renderGameResults(uniqueResults, query);
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.warn('External live search error:', err);
        }
    } finally {
        const wrapper = document.getElementById('game-search-wrapper');
        if (wrapper) wrapper.classList.remove('is-loading');
    }
}

function renderGameResults(games, query) {
    const resultsContainer = document.getElementById('game-search-results');
    if (!resultsContainer) return;
    const lang = getCurrentLanguage();

    if (games.length === 0) {
        const searchTypeLabel = currentSearchMode === 'dlc' ? 'DLC / Game' : 'Game';
        resultsContainer.innerHTML = `
            <div class="p-3 text-center bg-zinc-950/40 rounded-lg space-y-1.5">
                <p class="text-zinc-500 text-[11px]">${searchTypeLabel} ${lang === 'id' ? 'tidak ditemukan.' : 'not found.'}</p>
                <a href="https://steamdb.info/search/?a=app&q=${encodeURIComponent(query)}" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 hover:underline">
                    <span>${lang === 'id' ? `Cari "${query}" di SteamDB` : `Search "${query}" on SteamDB`}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                </a>
            </div>
        `;
        return;
    }

    const isDlcMode = currentSearchMode === 'dlc';

    resultsContainer.innerHTML = games.slice(0, 10).map((game, idx) => {
        const isDlc = isDlcMode || game.isDlc;
        const drm = getGameDrmInfo(game.id, game.name);

        let badgeHtml = '';
        if (isDlc) {
            badgeHtml = `<span class="text-[9px] font-mono font-bold text-amber-300 bg-amber-500/30 px-1 py-0.2 rounded border border-amber-500/40 backdrop-blur-sm shrink-0">DLC</span>`;
        } else if (drm.status === 'denuvo') {
            const drmDesc = drm.desc[lang] || drm.desc['id'];
            badgeHtml = `<span class="text-[9px] font-mono font-medium px-1 py-0.2 rounded bg-amber-500/30 text-amber-300 border border-amber-500/40 backdrop-blur-sm shrink-0" title="${drmDesc}">Denuvo</span>`;
        } else if (drm.status === 'anticheat') {
            const drmDesc = drm.desc[lang] || drm.desc['id'];
            badgeHtml = `<span class="text-[9px] font-mono font-medium px-1 py-0.2 rounded bg-rose-500/30 text-rose-300 border border-rose-500/40 backdrop-blur-sm shrink-0" title="${drmDesc}">AC</span>`;
        }

        const safeTitle = game.name.replace(/'/g, "\\'");

        return `
        <div onclick="copyGameId(${game.id}, '${safeTitle}', ${isDlc})"
            style="--stagger-idx: ${idx};"
            class="stagger-item spotlight-card group relative overflow-hidden rounded-lg min-h-[58px] p-2 flex flex-col justify-end border border-zinc-800/80 hover:border-zinc-500 transition-all duration-200 cursor-pointer select-none bg-zinc-950 shadow-sm"
            title="${lang === 'id' ? 'Klik untuk memilih & salin ID:' : 'Click to select & copy ID:'} ${game.id}">
            
            ${game.logo ? `
                <img src="${game.logo}" alt="" 
                    class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                    onerror="this.style.display='none'">
            ` : ''}
            
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20 pointer-events-none"></div>

            <div class="relative z-10 space-y-0.5 w-full min-w-0">
                <div class="flex items-center gap-1.5 min-w-0">
                    ${badgeHtml}
                    <div class="marquee-wrapper min-w-0 flex-1">
                        <p class="marquee-content text-xs font-semibold text-white drop-shadow-md group-hover:text-emerald-300 transition">${game.name}</p>
                    </div>
                </div>
                <div class="flex items-center justify-between text-[11px] font-mono text-zinc-300 pt-0.5">
                    <span class="text-zinc-400">ID: <strong class="${isDlc ? 'text-amber-400' : 'text-emerald-400'}">${game.id}</strong></span>
                    <span class="text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition flex items-center gap-1">
                        <i class="fa-regular fa-copy text-[9px]"></i> ${lang === 'id' ? 'Salin' : 'Copy'}
                    </span>
                </div>
            </div>
        </div>
    `}).join('');
}

export function copyGameId(appId, gameName, isDlc = false) {
    const textArea = document.createElement("textarea");
    textArea.value = appId;
    document.body.appendChild(textArea);
    textArea.select();
    try { document.execCommand('copy'); } catch (err) { }
    document.body.removeChild(textArea);

    const lang = getCurrentLanguage();
    const prefix = isDlc ? 'DLC App ID' : 'App ID';
    const copiedMsg = lang === 'id' ? 'disalin!' : 'copied!';
    showToast(`${prefix} ${appId} (${gameName}) ${copiedMsg}`);

    const activeDetail = document.getElementById('game-active-detail');
    const activeTitleEl = document.getElementById('game-active-title');
    const activeIdEl = document.getElementById('game-active-id');
    const activeDrmEl = document.getElementById('game-active-drm');
    const linkSteamdb = document.getElementById('link-steamdb');
    const linkDlcs = document.getElementById('link-dlcs');
    const linkKernel = document.getElementById('link-kernel');
    const linkMirror = document.getElementById('link-mirror');

    if (activeDetail && activeIdEl) {
        if (activeTitleEl) {
            activeTitleEl.innerText = gameName;
            activeTitleEl.title = gameName;
        }
        activeIdEl.innerText = appId;
        if (linkSteamdb) linkSteamdb.href = `https://steamdb.info/app/${appId}/`;
        if (linkDlcs) linkDlcs.href = `https://steamdb.info/app/${appId}/dlc/`;
        if (linkKernel) linkKernel.href = `https://kernelos.org/games?search=${appId}`;
        if (linkMirror) linkMirror.href = `https://ahd-manifest.lovable.app/?appid=${appId}`;

        if (activeDrmEl) {
            if (isDlc) {
                activeDrmEl.innerText = 'DLC / Addon';
                activeDrmEl.className = 'text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20';
            } else {
                const drm = getGameDrmInfo(appId, gameName);
                activeDrmEl.innerText = drm.label;
                if (drm.status === 'denuvo') {
                    activeDrmEl.className = 'text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20';
                } else if (drm.status === 'anticheat') {
                    activeDrmEl.className = 'text-[9px] font-mono px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20';
                } else {
                    activeDrmEl.className = 'text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
                }
            }
        }

        activeDetail.classList.remove('hidden');
    }
}

export function initGameSearch() {
    const btnGame = document.getElementById('search-mode-btn-game');
    const btnDlc = document.getElementById('search-mode-btn-dlc');
    const modeContainer = document.getElementById('search-mode-container');
    const searchInput = document.getElementById('game-search-input');

    if (btnGame) btnGame.addEventListener('click', () => setSearchMode('game'));
    if (btnDlc) btnDlc.addEventListener('click', () => setSearchMode('dlc'));
    if (searchInput) searchInput.addEventListener('input', handleGameSearchInput);

    if (modeContainer && btnGame) {
        setTimeout(() => updateSlidingPill(modeContainer, btnGame), 50);
    }

    window.setSearchMode = setSearchMode;
    window.handleGameSearchInput = handleGameSearchInput;
    window.copyGameId = copyGameId;

    handleGameSearchInput();
}
