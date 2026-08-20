/**
 * SteamTools Guide - Application Configuration
 */

// Initialize Tailwind CSS Configuration dynamically if tailwind object exists
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                fontFamily: {
                    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                    mono: ['JetBrains Mono', 'monospace'],
                },
                colors: {
                    zinc: {
                        850: '#141417',
                        900: '#18181b',
                        950: '#09090b',
                    },
                    accent: {
                        50: '#ecfdf5',
                        500: '#10b981',
                        600: '#059669',
                    }
                }
            }
        }
    };
}
