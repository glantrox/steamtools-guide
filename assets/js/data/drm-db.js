/**
 * DRM & Anti-Cheat Compatibility Database
 * Categorizes games into 3 clean developer-grade online status tags (Linear / Raycast Style):
 * 1. SP Only (Muted Zinc/Neutral) -> Works natively out of the box (Single Player via Lua/Manifest)
 * 2. Online Fix (Emerald/Cyan) -> Supports community multiplayer patch (online-fix.me / Spacewar 480)
 * 3. Denuvo / DRM (Rose/Amber) -> Denuvo protected or Kernel Anti-Cheat (Severely restricted / unplayable)
 */

export const ONLINE_FIX_GAMES = new Set([
    "1551360", // Forza Horizon 5
    "271590",  // GTA V
    "218620",  // Payday 2
    "582010",  // Monster Hunter: World
    "1446780", // Monster Hunter Rise
    "1245620", // Elden Ring
    "1086940", // Baldur's Gate 3
    "1623730", // Palworld
    "1942630", // Lethal Company
    "739630",  // Phasmophobia
    "632360",  // Risk of Rain 2
    "1426210", // It Takes Two
    "447040"   // Watch Dogs 2
]);

export const DENUVO_GAMES = new Set([
    "2358720", // Black Myth: Wukong
    "2161700", // Persona 3 Reload
    "1687950", // Persona 5 Royal
    "2050650", // Resident Evil 4
    "1693980", // Dead Space
    "2054970", // Dragon's Dogma 2
    "2195250", // EA Sports FC 24
    "2669320", // EA Sports FC 25
    "1142710", // Total War Warhammer 3
    "1364780", // Street Fighter 6
    "1627720", // Lies of P
    "990080",  // Hogwarts Legacy
    "1774580", // STAR WARS Jedi: Survivor
    "1235140", // Yakuza: Like a Dragon
    "2072450", // Like a Dragon: Infinite Wealth
    "2246340"  // Monster Hunter Wilds
]);

export const KERNEL_AC_GAMES = new Set([
    "1172470", // Apex Legends
    "252490",  // Rust
    "359550",  // Tom Clancy's Rainbow Six Siege
    "381210",  // Dead by Daylight
    "578080",  // PUBG: BATTLEGROUNDS
    "1085660"  // Destiny 2
]);

export function getGameDrmInfo(appId, gameName) {
    const appIdStr = String(appId);
    const nameLower = (gameName || '').toLowerCase();

    // 1. Check Denuvo or Kernel Anti-Cheat (Rose / Amber Tag)
    if (DENUVO_GAMES.has(appIdStr) || KERNEL_AC_GAMES.has(appIdStr) ||
        nameLower.includes('wukong') || nameLower.includes('persona 3 reload') || nameLower.includes('persona 5') ||
        nameLower.includes('fc 24') || nameLower.includes('fc 25') || nameLower.includes('fifa') ||
        nameLower.includes('denuvo') || nameLower.includes('jedi survivor') || nameLower.includes('apex') ||
        nameLower.includes('rust') || nameLower.includes('rainbow six') || nameLower.includes('pubg') ||
        nameLower.includes('destiny 2')) {
        return {
            status: 'denuvo',
            category: 'denuvo',
            label: 'Denuvo / DRM',
            badgeText: 'Denuvo / DRM',
            badgeClass: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
            dotClass: 'bg-rose-400',
            desc: { id: 'Server-Sided / Denuvo Protection', en: 'Server-Sided / Denuvo Protection' }
        };
    }

    // 2. Check Online Fix Games (Emerald / Cyan Tag)
    if (ONLINE_FIX_GAMES.has(appIdStr) ||
        nameLower.includes('forza') || nameLower.includes('gta') || nameLower.includes('payday') ||
        nameLower.includes('palworld') || nameLower.includes('lethal company') || nameLower.includes('phasmophobia') ||
        nameLower.includes('it takes two') || nameLower.includes('elden ring') || nameLower.includes('baldur') ||
        nameLower.includes('monster hunter: world') || nameLower.includes('online-fix') || nameLower.includes('multiplayer')) {
        return {
            status: 'online-fix',
            category: 'online-fix',
            label: 'Online Fix',
            badgeText: 'Online Fix',
            badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
            dotClass: 'bg-emerald-400',
            desc: { id: 'Dukungan Multiplayer via Online-Fix / Spacewar', en: 'Multiplayer Supported via Online-Fix / Spacewar' }
        };
    }

    // 3. Default SP Only (Muted Zinc/Neutral Tag)
    return {
        status: 'sp-only',
        category: 'sp-only',
        label: 'SP Only',
        badgeText: 'SP Only',
        badgeClass: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/60',
        dotClass: 'bg-zinc-400',
        desc: { id: 'Plug & Play Singleplayer via Lua/Manifest', en: 'Plug & Play Singleplayer via Lua/Manifest' }
    };
}
