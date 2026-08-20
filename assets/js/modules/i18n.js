/**
 * Internationalization (i18n) Engine Module
 */
import { TRANSLATIONS } from '../data/translations.js';

let currentLanguage = 'id';
try {
    currentLanguage = localStorage.getItem('preferred_language') || 'id';
} catch (e) {
    currentLanguage = 'id';
}

let onLanguageChangeCallbacks = [];

export function getCurrentLanguage() {
    return currentLanguage;
}

export function registerLanguageChangeListener(callback) {
    if (typeof callback === 'function') {
        onLanguageChangeCallbacks.push(callback);
    }
}

export function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLanguage = lang;

    try {
        localStorage.setItem('preferred_language', lang);
    } catch (e) {
        // Ignore localStorage error in restricted browsing modes
    }

    // Update document lang attribute
    document.documentElement.lang = lang;

    // Translate all static elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key] !== undefined) {
            el.innerHTML = TRANSLATIONS[lang][key];
        }
    });

    // Translate input placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[lang][key] !== undefined) {
            el.placeholder = TRANSLATIONS[lang][key];
        }
    });

    // Update Language Button Label & Indicator
    const langBtnText = document.getElementById('current-lang-text');
    if (langBtnText) {
        langBtnText.innerText = lang.toUpperCase();
    }

    const flagIcon = document.getElementById('current-lang-flag');
    if (flagIcon) {
        flagIcon.innerText = lang === 'id' ? '🇮🇩' : '🇬🇧';
    }

    // Trigger registered callbacks
    onLanguageChangeCallbacks.forEach(cb => {
        try {
            cb(lang);
        } catch (err) {
            console.error('Error in language change callback:', err);
        }
    });
}

let lastToggleTime = 0;
export function toggleLanguage() {
    const now = Date.now();
    if (now - lastToggleTime < 250) return; // Debounce double-invocations
    lastToggleTime = now;

    const nextLang = currentLanguage === 'id' ? 'en' : 'id';
    setLanguage(nextLang);
}

export function initI18n() {
    window.toggleLanguage = toggleLanguage;
    window.setLanguage = setLanguage;

    setLanguage(currentLanguage);

    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
        langBtn.onclick = (e) => {
            if (e && e.preventDefault) e.preventDefault();
            toggleLanguage();
        };
    }
}
