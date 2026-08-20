/**
 * SteamTools Guide - Main Application Entry Point
 */
import { initI18n, registerLanguageChangeListener, toggleLanguage, setLanguage } from './modules/i18n.js';
import { initNavigation, switchTab } from './modules/navigation.js';
import { initClipboard } from './modules/clipboard.js';
import { initForum, renderForumThreads } from './modules/forum.js';
import { initGameSearch, handleGameSearchInput, setSearchMode } from './modules/game-search.js';
import { initInteractions, openLegalModal, closeLegalModal } from './modules/interactions.js';

function startApp() {
    // Expose global functions to window so inline onclick handlers always work
    window.toggleLanguage = toggleLanguage;
    window.setLanguage = setLanguage;
    window.switchTab = switchTab;
    window.setSearchMode = setSearchMode;
    window.openLegalModal = openLegalModal;
    window.closeLegalModal = closeLegalModal;

    // 1. Initialize Internationalization (i18n) Engine
    initI18n();

    // 2. Initialize Core Modules
    initNavigation();
    initClipboard();
    initForum();
    initGameSearch();

    // 3. Initialize Micro-Interactions & Scroll Effects
    initInteractions();

    // 4. Register Language Change Listener to dynamically re-render content
    registerLanguageChangeListener((lang) => {
        renderForumThreads();
        handleGameSearchInput();
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}
