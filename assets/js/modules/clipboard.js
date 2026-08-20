/**
 * Clipboard & Toast Notification Helper Module
 */
import { getCurrentLanguage } from './i18n.js';

export function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    if (!toast || !toastMsg) return;

    toastMsg.innerText = msg;
    toast.classList.remove('translate-y-10', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-10', 'opacity-0');
    }, 2500);
}

export function copyCode(elementId, btnElement) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const textToCopy = el.innerText;
    copyTextToClipboard(textToCopy);

    const lang = getCurrentLanguage();
    const copiedText = lang === 'id' ? 'Tersalin!' : 'Copied!';
    const defaultText = lang === 'id' ? 'Salin Perintah' : 'Copy Command';

    // Trigger container pulse glow around terminal code box
    const codeContainer = el.closest('.rounded-lg');
    if (codeContainer) {
        codeContainer.classList.remove('pulse-border-emerald');
        void codeContainer.offsetWidth; // Force reflow
        codeContainer.classList.add('pulse-border-emerald');
        setTimeout(() => codeContainer.classList.remove('pulse-border-emerald'), 850);
    }

    if (btnElement) {
        const textSpan = btnElement.querySelector('.btn-text');
        const icon = btnElement.querySelector('i');

        if (textSpan) textSpan.innerText = copiedText;
        if (icon) {
            icon.className = 'fa-solid fa-check text-emerald-400 icon-pop-spring';
        }

        setTimeout(() => {
            if (textSpan) textSpan.innerText = defaultText;
            if (icon) icon.className = 'fa-regular fa-copy';
        }, 2000);
    }

    const toastMsg = lang === 'id' ? 'Perintah disalin ke clipboard' : 'Command copied to clipboard';
    showToast(toastMsg);
}

export function copyWinRPath(pathCommand, label, btnElement) {
    copyTextToClipboard(pathCommand);
    const lang = getCurrentLanguage();
    const toastMsg = lang === 'id' 
        ? `Perintah ${label} disalin! (Buka via Win + R)`
        : `${label} command copied! (Open via Win + R)`;

    if (btnElement) {
        const icon = btnElement.querySelector('.copy-icon-slide');
        if (icon) {
            const origClass = icon.className;
            icon.className = 'fa-solid fa-check text-emerald-400 icon-pop-spring shrink-0 ml-1';
            setTimeout(() => {
                icon.className = origClass;
            }, 1800);
        }

        btnElement.classList.remove('pulse-border-emerald');
        void btnElement.offsetWidth;
        btnElement.classList.add('pulse-border-emerald');
        setTimeout(() => btnElement.classList.remove('pulse-border-emerald'), 850);
    }

    showToast(toastMsg);
}

export function copyCurrentUrl() {
    copyTextToClipboard(window.location.href);
    const lang = getCurrentLanguage();
    const toastMsg = lang === 'id' ? 'Link halaman disalin' : 'Page link copied';
    showToast(toastMsg);
}

export function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
}

export function initClipboard() {
    window.copyCode = copyCode;
    window.copyWinRPath = copyWinRPath;
    window.copyCurrentUrl = copyCurrentUrl;
    window.showToast = showToast;
}
