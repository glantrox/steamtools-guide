/**
 * SteamTools Guide - Main Application Entry Point
 */
import { initI18n, registerLanguageChangeListener } from './modules/i18n.js';
import { initNavigation } from './modules/navigation.js';
import { initClipboard } from './modules/clipboard.js';
import { initForum, renderForumThreads } from './modules/forum.js';
import { initGameSearch, handleGameSearchInput } from './modules/game-search.js';
import { initInteractions } from './modules/interactions.js';

document.addEventListener('DOMContentLoaded', () => {
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
});
