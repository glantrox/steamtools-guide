<img width="1024" height="572" alt="image" src="https://github.com/user-attachments/assets/bb1414a6-0556-434f-8555-7d8850ccf5c1" />

# ⚡ SteamTools Guide & Forum Problem Solver

Panduan Lengkap Instalasi SteamTools, Manifest Mirror, 1-Click Game App ID Finder, DRM Compatibility Checker, & 12+ Forum Solusi Error Terverifikasi.

---

## 📁 Project Structure & Scalability Architecture

Project ini dirancang dengan struktur yang sangat modular, bersih, dan mudah dikembangkan (*scalable*), serta tetap kompatibel 100% dengan **GitHub Pages** (tanpa butuh build step / bundler).

```text
steamtools-guide/
├── index.html                    # HTML shell bersih dengan semantic elements & data-i18n
├── README.md                     # Dokumentasi project & arsitektur
└── assets/
    ├── css/
    │   └── styles.css            # Custom scrollbars, border-beam glowing effects & animations
    └── js/
        ├── config.js             # Tailwind CSS configuration & global settings
        ├── app.js                # Entry point utama aplikasi (DOM initialization & event bindings)
        ├── data/
        │   ├── dlc-db.js         # Database koleksi DLC & Addon game populer
        │   ├── drm-db.js         # Database proteksi DRM (Denuvo, EAC, BattlEye, Clean Steam)
        │   ├── forum-data.js     # Data 12+ thread forum solusi error (dukungan ID & EN)
        │   └── translations.js   # Kamus terjemahan Bahasa Indonesia & Inggris (i18n)
        └── modules/
            ├── i18n.js           # Engine pengganti bahasa (ID / EN) & simpan preferensi ke localStorage
            ├── navigation.js     # Navigasi tab (Guides vs Forums) & drawer mobile sidebar
            ├── forum.js          # Rendering dinamis forum thread cards, filter kategori & pencarian
            ├── game-search.js    # Live search App ID game & DLC via CheapShark API & SteamDB links
            └── clipboard.js      # Copy code helper, Win+R directory opener & toast notification
```

---

## 🌐 Feature: Multi-Language Switcher (i18n)

Aplikasi ini sudah dilengkapi dengan fitur **Switch Language** yang mendukung **Bahasa Indonesia (ID)** dan **English (EN)** secara langsung:

- **Toggle Button**: Tombol switch bahasa terdapat di kanan atas header (`🇮🇩 ID` / `🇬🇧 EN`).
- **Data Attribute**: Menggunakan atribut `data-i18n` dan `data-i18n-placeholder` untuk menerjemahkan elemen HTML secara instan.
- **Dynamic Content**: Data forum & pencarian game merender teks sesuai bahasa yang aktif secara otomatis.
- **Persistent Choice**: Pilihan bahasa disimpan secara otomatis di `localStorage` peramban pengguna.

---

## 🚀 Depoloyment on GitHub Pages

1. Commit dan push seluruh perubahan di branch utama (`main`).
2. Pastikan di opsi **Repository Settings -> Pages**, Source diatur ke **Deploy from a branch (`main` / root)**.
3. Website akan langsung aktif tanpa perlu proses kompilasi tambahan.
