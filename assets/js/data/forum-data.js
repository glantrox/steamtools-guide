/**
 * Community Forum / Problem Solver Threads Data
 */
export const FORUM_THREADS = [
    {
        id: "thread-1",
        category: "cache",
        keywords: "purchase beli cache packageinfo lua",
        badge: {
            text: { id: "Cache / License Issue", en: "Cache / License Issue" },
            color: "amber"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "[Tanya] Tombol Steam Masih Bertulisan \"Beli / Purchase\" Padahal File .LUA Sudah Di-drag?",
            en: "[Q] Steam Button Still Says \"Purchase / Buy\" Even After Dragging .LUA File?"
        },
        description: {
            id: "Setelah mendownload file `.lua` dari KernelOS dan men-drag-nya ke overlay SteamTools, tombol di library Steam masih berwarna hijau bertuliskan \"Beli / Purchase\" bukannya \"Install\".",
            en: "After downloading the `.lua` file from KernelOS and dragging it into the SteamTools overlay, the Steam library button remains green with \"Purchase / Buy\" instead of \"Install\"."
        },
        solutionTitle: {
            id: "Solusi Komunitas (Reddit Tested):",
            en: "Community Solution (Reddit Tested):"
        },
        solutionSteps: [
            {
                id: "Buka menu <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">Steam Settings &gt; Downloads &gt; Clear Download Cache</code>.",
                en: "Open menu <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">Steam Settings &gt; Downloads &gt; Clear Download Cache</code>."
            },
            {
                id: "Atau buka folder instalasi Steam, masuk ke folder <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">appcache</code> lalu hapus file <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">packageinfo.vdf</code>.",
                en: "Or open your Steam installation directory, go to the <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">appcache</code> folder, and delete <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">packageinfo.vdf</code>."
            },
            {
                id: "Klik kanan overlay SteamTools lalu pilih <strong>Restart Steam</strong>. Tombol akan berubah jadi <em>Install / Play</em>.",
                en: "Right-click the SteamTools overlay and select <strong>Restart Steam</strong>. The button will change to <em>Install / Play</em>."
            }
        ]
    },
    {
        id: "thread-2",
        category: "depot",
        keywords: "content still encrypted depot manifest key error download",
        badge: {
            text: { id: "Depot & Encryption", en: "Depot & Encryption" },
            color: "red"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "Error \"Content Still Encrypted\" Saat Memulai Download Game",
            en: "\"Content Still Encrypted\" Error When Starting Game Download"
        },
        description: {
            id: "Mengalami pesan error \"Content Still Encrypted\" pada status unduhan Steam saat menekan tombol Install.",
            en: "Encountering the \"Content Still Encrypted\" error message on Steam download status when clicking Install."
        },
        solutionTitle: {
            id: "Solusi Komunitas:",
            en: "Community Solution:"
        },
        solutionSteps: [
            {
                id: "Unduh full depot manifest cadangan melalui situs <a href=\"https://ahd-manifest.lovable.app/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-emerald-400 underline\">AHD Manifest Mirror</a>.",
                en: "Download the full backup depot manifest via <a href=\"https://ahd-manifest.lovable.app/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-emerald-400 underline\">AHD Manifest Mirror</a>."
            },
            {
                id: "Copy semua file manifest hasil unduhan ke dalam direktori <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">Steam/steamapps/depotcache</code>.",
                en: "Copy all downloaded manifest files into the <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">Steam/steamapps/depotcache</code> directory."
            },
            {
                id: "Matikan Steam secara penuh lewat Task Manager lalu buka kembali SteamTools.",
                en: "Completely close Steam via Task Manager and re-launch SteamTools."
            }
        ]
    },
    {
        id: "thread-3",
        category: "permission",
        keywords: "powershell administrator overlay defender antivirus missing",
        badge: {
            text: { id: "Permission / Defender", en: "Permission / Defender" },
            color: "amber"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "Window Overlay SteamTools Tidak Muncul Sama Sekali di Atas Window Steam",
            en: "SteamTools Overlay Window Does Not Appear At All Above Steam Window"
        },
        description: {
            id: "Sudah eksekusi script di PowerShell tetapi window kotak melayang (overlay) SteamTools tidak kunjung tampil.",
            en: "Executed script in PowerShell but the floating SteamTools overlay window is missing."
        },
        solutionTitle: {
            id: "Solusi Komunitas:",
            en: "Community Solution:"
        },
        solutionSteps: [
            {
                id: "Tutup aplikasi Steam secara menyeluruh di <strong>Task Manager</strong> (<code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">End Task steam.exe</code>).",
                en: "Close Steam completely via <strong>Task Manager</strong> (<code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">End Task steam.exe</code>)."
            },
            {
                id: "Buka terminal PowerShell dengan mode <strong>Run as Administrator</strong>.",
                en: "Open PowerShell terminal with <strong>Run as Administrator</strong> mode."
            },
            {
                id: "Ketik perintah bypass permission berikut: <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">Set-ExecutionPolicy Unrestricted -Scope Process</code> lalu tekan <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded\">Y</code>.",
                en: "Type the following execution policy bypass command: <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">Set-ExecutionPolicy Unrestricted -Scope Process</code> and press <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded\">Y</code>."
            },
            {
                id: "Jalankan ulang perintah installer utama: <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">irm steam.run | iex</code>.",
                en: "Re-run the main installer command: <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">irm steam.run | iex</code>."
            }
        ]
    },
    {
        id: "thread-4",
        category: "cloud",
        keywords: "steam cloud sync error save game sync failed",
        badge: {
            text: { id: "Steam Cloud Mismatch", en: "Steam Cloud Mismatch" },
            color: "sky"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "Pesan Warning Merah \"Steam Cloud Error\" / Gagal Sync Save File",
            en: "Red Warning Message \"Steam Cloud Error\" / Cloud Save Sync Failure"
        },
        description: {
            id: "Terdapat tulisan error berwarna merah \"Unable to sync cloud save\" saat mencoba meluncurkan game.",
            en: "Red error message \"Unable to sync cloud save\" pops up when attempting to launch the game."
        },
        solutionTitle: {
            id: "Solusi Komunitas:",
            en: "Community Solution:"
        },
        solutionSteps: [
            {
                id: "Buka menu <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">Steam Settings &gt; Cloud</code>.",
                en: "Open menu <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded break-all sm:break-normal\">Steam Settings &gt; Cloud</code>."
            },
            {
                id: "Matikan opsi <strong>\"Enable Steam Cloud synchronization\"</strong> (Toggle Off).",
                en: "Disable option <strong>\"Enable Steam Cloud synchronization\"</strong> (Toggle Off)."
            },
            {
                id: "Restart Steam. Warning merah akan hilang dan game dapat menyimpan progres secara lokal.",
                en: "Restart Steam. The red warning will disappear and game progress will save locally."
            }
        ]
    },
    {
        id: "thread-5",
        category: "depot",
        keywords: "denuvo drm crash play anti cheat bypass crack",
        badge: {
            text: { id: "DRM / Denuvo Restriction", en: "DRM / Denuvo Restriction" },
            color: "rose"
        },
        status: {
            text: { id: "Info Thread", en: "Info Thread" },
            isSolved: false
        },
        title: {
            id: "Game Crash saat Klik \"Play\" atau Minta Denuvo Activation Key",
            en: "Game Crashes on \"Play\" or Asks for Denuvo Activation Key"
        },
        description: {
            id: "Game sudah selesai di-download 100%, tetapi ketika di-play game langsung tertutup atau meminta lisensi Denuvo.",
            en: "Game is 100% downloaded, but closing instantly or asking for a Denuvo license key when clicking Play."
        },
        solutionTitle: {
            id: "Catatan Penting Batasan SteamTools:",
            en: "Important SteamTools Limitation Note:"
        },
        solutionSteps: [
            {
                id: "SteamTools <em>hanya berfungsi mengunduh file asli game dari server CDN Steam</em>. SteamTools <strong>tidak melakukan crack/bypass Denuvo DRM server-side</strong>. Untuk game bersistem Denuvo, kamu tetap memerlukan executable crack/bypass terpisah secara manual.",
                en: "SteamTools <em>only downloads legitimate raw files from Steam CDN servers</em>. It does <strong>NOT crack or bypass server-side Denuvo DRM</strong>. For Denuvo protected games, a separate manual crack/bypass executable is required."
            }
        ]
    },
    {
        id: "thread-6",
        category: "cache",
        keywords: "dlc lock locked unlock smokeapi creamapi paradox capcom bandai",
        badge: {
            text: { id: "Cache & DLC Unlock", en: "Cache & DLC Unlock" },
            color: "amber"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "DLC Tercentang di Library Steam, Tetapi di Dalam Game Konten Masih Terkunci?",
            en: "DLC Checked in Steam Library, But Content Still Locked In-Game?"
        },
        description: {
            id: "Setelah menambahkan file LUA DLC (seperti Tekken 8, Monster Hunter, ETS2, Persona, HOI4), Steam menampilkan status DLC sebagai \"Installed\", namun menu di dalam game tetap menganggap DLC belum dibeli.",
            en: "After adding LUA DLC files (e.g. Tekken 8, Monster Hunter, ETS2, Persona), Steam shows DLC as \"Installed\", but the in-game store/menu still considers DLC unowned."
        },
        solutionTitle: {
            id: "Solusi Komunitas (SmokeAPI / CreamAPI):",
            en: "Community Solution (SmokeAPI / CreamAPI):"
        },
        solutionSteps: [
            {
                id: "Beberapa game (terutama Capcom, Paradox, Bandai) memiliki verifikasi runtime internal pada file <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">steam_api64.dll</code>.",
                en: "Certain games (especially Capcom, Paradox, Bandai) perform internal runtime checks on <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">steam_api64.dll</code>."
            },
            {
                id: "Pasang <strong>SmokeAPI</strong> atau <strong>CreamAPI</strong> ke dalam folder instalasi executable game utama.",
                en: "Install <strong>SmokeAPI</strong> or <strong>CreamAPI</strong> into the main game executable installation folder."
            },
            {
                id: "Salin App ID DLC dari menu pencarian di sebelah kanan panduan ini, lalu masukkan ke dalam file konfigurasi <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">smokeapi.config.json</code> atau <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">cream_api.ini</code>.",
                en: "Copy the DLC App ID from the right sidebar widget on this guide and add it to <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">smokeapi.config.json</code> or <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">cream_api.ini</code>."
            },
            {
                id: "Jalankan game secara langsung dari Steam.",
                en: "Launch the game directly from Steam."
            }
        ]
    },
    {
        id: "thread-7",
        category: "depot",
        keywords: "stuck 0 b/s download slow no internet connection timeout cdn speed",
        badge: {
            text: { id: "Depot & Download", en: "Depot & Download" },
            color: "red"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "Download Game Stuck di 0 B/s atau Muncul Pesan \"No Internet Connection\"",
            en: "Game Download Stuck at 0 B/s or \"No Internet Connection\" Error"
        },
        description: {
            id: "Kecepatan download Steam tiba-tiba drop menjadi 0 B/s dan tidak bergerak, atau Steam melaporkan error koneksi saat mengunduh file game besar.",
            en: "Steam download speed suddenly drops to 0 B/s or reports connection timeout while fetching game files."
        },
        solutionTitle: {
            id: "Solusi Komunitas:",
            en: "Community Solution:"
        },
        solutionSteps: [
            {
                id: "Buka menu <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Steam Settings &gt; Downloads</code> dan ubah <strong>Download Region</strong> ke <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Singapore</code> atau <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Germany - Frankfurt</code>.",
                en: "Go to <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Steam Settings &gt; Downloads</code> and change <strong>Download Region</strong> to <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Singapore</code> or <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Germany - Frankfurt</code>."
            },
            {
                id: "Nonaktifkan sementara protokol <strong>IPv6</strong> pada pengaturan Network Adapter Windows kamu.",
                en: "Temporarily disable <strong>IPv6</strong> protocol in Windows Network Adapter Settings."
            },
            {
                id: "Jika depot manifest kadaluarsa, unduh manual file manifest via <a href=\"https://ahd-manifest.lovable.app/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-emerald-400 underline\">AHD Manifest Mirror</a> lalu paste ke folder <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Steam/steamapps/depotcache</code>.",
                en: "If the depot manifest is outdated, manually download manifest via <a href=\"https://ahd-manifest.lovable.app/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-emerald-400 underline\">AHD Manifest Mirror</a> and paste into <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Steam/steamapps/depotcache</code>."
            }
        ]
    },
    {
        id: "thread-8",
        category: "permission",
        keywords: "update klien hilang overlay re-inject reinject powershell hook hilang",
        badge: {
            text: { id: "Permission & Injection", en: "Permission & Injection" },
            color: "amber"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "Overlay SteamTools Hilang Setelah Steam Melakukan Auto-Update Klien",
            en: "SteamTools Overlay Missing After Steam Client Auto-Update"
        },
        description: {
            id: "Setelah Steam mengunduh update klien otomatis dari Valve dan restart, window overlay SteamTools tidak lagi muncul dan menu game kembali normal.",
            en: "After Steam performs an automatic client update and restarts, SteamTools overlay disappears."
        },
        solutionTitle: {
            id: "Solusi Komunitas (Re-inject Hook):",
            en: "Community Solution (Re-inject Hook):"
        },
        solutionSteps: [
            {
                id: "Update klien Steam sering menimpa file dynamic library (<code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">chrome_elf.dll</code> / <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">steamui.dll</code>) yang di-hook oleh SteamTools.",
                en: "Steam client updates often overwrite injected dynamic libraries (<code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">chrome_elf.dll</code> / <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">steamui.dll</code>)."
            },
            {
                id: "Tutup Steam sepenuhnya dari Task Manager.",
                en: "Close Steam completely via Task Manager."
            },
            {
                id: "Buka terminal PowerShell Administrator dan jalankan ulang perintah installer satu baris: <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded\">irm steam.run | iex</code>.",
                en: "Open Administrator PowerShell terminal and re-run one-line installer command: <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded\">irm steam.run | iex</code>."
            },
            {
                id: "Buka kembali Steam. Semua file game dan konfigurasi LUA yang sudah terpasang <strong>tetap aman dan tidak hilang</strong>.",
                en: "Re-open Steam. All previously installed games and LUA configurations remain <strong>completely safe and intact</strong>."
            }
        ]
    },
    {
        id: "thread-9",
        category: "permission",
        keywords: "easy anti-cheat eac battleye vac multiplayer online kick untrusted",
        badge: {
            text: { id: "Anti-Cheat & Multiplayer", en: "Anti-Cheat & Multiplayer" },
            color: "rose"
        },
        status: {
            text: { id: "Security Advisory", en: "Security Advisory" },
            isSolved: false
        },
        title: {
            id: "Error \"Easy Anti-Cheat Untrusted System File\" atau Game Online Menolak Masuk Server",
            en: "Error \"Easy Anti-Cheat Untrusted System File\" or Online Game Connection Kick"
        },
        description: {
            id: "Saat meluncurkan game multiplayer (seperti Dead by Daylight, Rust, Apex, atau game ber-EAC lainnya), game langsung force close dengan notifikasi \"Untrusted system file\".",
            en: "When launching online games (e.g., Dead by Daylight, Rust, Apex), game force-closes with an \"Untrusted system file\" error."
        },
        solutionTitle: {
            id: "Panduan Keamanan Akun:",
            en: "Account Safety Advisory:"
        },
        solutionSteps: [
            {
                id: "Anti-cheat level kernel (seperti Easy Anti-Cheat dan BattlEye) mendeteksi injeksi runtime memory pada Steam client.",
                en: "Kernel-level anti-cheats (like EAC & BattlEye) detect runtime memory injection on Steam client."
            },
            {
                id: "SteamTools <strong>hanya ditujukan untuk game singleplayer, offline, atau local co-op</strong>.",
                en: "SteamTools is <strong>intended ONLY for singleplayer, offline, or local co-op games</strong>."
            },
            {
                id: "Jangan pernah mencoba mengakses server resmi game ber-anti-cheat ketat menggunakan akun Steam utama untuk menghindari risiko ban akun (VAC/Game Ban).",
                en: "Never attempt joining official servers of strict anti-cheat games on main accounts to avoid account bans (VAC/Game Ban)."
            },
            {
                id: "Untuk game dengan fitur multiplayer, gunakan komunitas server terpisah (Spacewar fix / Goldberg LAN emulator).",
                en: "For multiplayer features, use dedicated community fixes (Spacewar fix / Goldberg LAN emulator)."
            }
        ]
    },
    {
        id: "thread-10",
        category: "cache",
        keywords: "update loop update required loop infinite loop acf stateflags",
        badge: {
            text: { id: "License & Cache", en: "License & Cache" },
            color: "amber"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "Game Terjebak di Status \"Update Required\" dan Masuk Infinite Update Loop",
            en: "Game Stuck in \"Update Required\" Status and Infinite Update Loop"
        },
        description: {
            id: "Tombol di Library Steam terus meminta \"Update\", dan setiap kali tombol Update ditekan, proses selesai seketika (0 detik) namun tombol kembali lagi menjadi \"Update\" bukannya \"Play\".",
            en: "Steam Library button constantly prompts \"Update\", finishes in 0 seconds, but immediately recurs back to \"Update\" instead of \"Play\"."
        },
        solutionTitle: {
            id: "Solusi Komunitas (Edit ACF StateFlags):",
            en: "Community Solution (Edit ACF StateFlags):"
        },
        solutionSteps: [
            {
                id: "Tutup Steam sepenuhnya dari Task Manager.",
                en: "Close Steam completely via Task Manager."
            },
            {
                id: "Buka folder <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">C:\\Program Files (x86)\\Steam\\steamapps\\</code>.",
                en: "Open directory <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">C:\\Program Files (x86)\\Steam\\steamapps\\</code>."
            },
            {
                id: "Cari file <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">appmanifest_[APPID].acf</code> sesuai App ID game yang bermasalah, lalu buka dengan Notepad.",
                en: "Find <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">appmanifest_[APPID].acf</code> matching target App ID, open with Notepad."
            },
            {
                id: "Cari baris <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">\"StateFlags\"</code> dan ubah nilainya menjadi <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded\">\"4\"</code> (Status: Fully Installed).",
                en: "Locate <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">\"StateFlags\"</code> and change value to <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded\">\"4\"</code> (Fully Installed)."
            },
            {
                id: "Pastikan baris <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">\"BytesToDownload\"</code> dan <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">\"BytesDownloaded\"</code> keduanya bernilai <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded\">\"0\"</code>.",
                en: "Ensure <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">\"BytesToDownload\"</code> and <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">\"BytesDownloaded\"</code> are both set to <code class=\"font-mono text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded\">\"0\"</code>."
            },
            {
                id: "Simpan file (<kbd class=\"font-mono bg-zinc-900 px-1 rounded text-zinc-300\">Ctrl+S</kbd>) lalu buka kembali Steam. Status game akan langsung berubah menjadi <strong>Play</strong>.",
                en: "Save file (<kbd class=\"font-mono bg-zinc-900 px-1 rounded text-zinc-300\">Ctrl+S</kbd>) and re-open Steam. Status changes to <strong>Play</strong>."
            }
        ]
    },
    {
        id: "thread-11",
        category: "cloud",
        keywords: "save hilang progress savegame reset permission uac document",
        badge: {
            text: { id: "Steam Cloud & Save", en: "Steam Cloud & Save" },
            color: "sky"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "Progres / Save File Game Tidak Tersimpan Setelah Menutup Game atau Restart PC",
            en: "Game Save Files Not Persisting After Closing Game or Restarting PC"
        },
        description: {
            id: "Progres gameplay yang sudah dimainkan berjam-jam tidak tersimpan dan selalu memulai permainan baru (New Game) setiap kali game dibuka kembali.",
            en: "Hours of gameplay progress fail to save, forcing a New Game on every restart."
        },
        solutionTitle: {
            id: "Solusi Komunitas:",
            en: "Community Solution:"
        },
        solutionSteps: [
            {
                id: "Karena Steam Cloud dinonaktifkan, game menyimpan data secara lokal pada direktori <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">%USERPROFILE%\\Saved Games</code>, <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">%APPDATA%</code>, atau <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Documents</code>.",
                en: "With Steam Cloud disabled, game saves locally to <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">%USERPROFILE%\\Saved Games</code>, <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">%APPDATA%</code>, or <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">Documents</code>."
            },
            {
                id: "Pastikan folder penyimpanan tersebut tidak berada dalam status <em>Read-Only</em> dan antivirus tidak mengunci izin tulis folder (Ransomware Protection).",
                en: "Ensure save folders are not set to <em>Read-Only</em> and Antivirus Ransomware Protection isn't blocking folder write access."
            },
            {
                id: "Jalankan shortcut executable game dengan opsi <strong>\"Run as Administrator\"</strong> agar game memiliki hak akses menulis file save data.",
                en: "Launch the game executable with <strong>\"Run as Administrator\"</strong>."
            },
            {
                id: "Cek lokasi penyimpanan spesifik tiap game melalui situs <a href=\"https://www.pcgamingwiki.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-emerald-400 underline\">PCGamingWiki</a>.",
                en: "Verify specific game save file locations via <a href=\"https://www.pcgamingwiki.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-emerald-400 underline\">PCGamingWiki</a>."
            }
        ]
    },
    {
        id: "thread-12",
        category: "depot",
        keywords: "invalid manifest lua corrupted archive extract gzip drop",
        badge: {
            text: { id: "Depot & Extraction", en: "Depot & Extraction" },
            color: "red"
        },
        status: {
            text: { id: "Solved Thread", en: "Solved Thread" },
            isSolved: true
        },
        title: {
            id: "Error \"Invalid Manifest Structure\" atau \"Corrupted File\" saat Drag & Drop File LUA",
            en: "\"Invalid Manifest Structure\" or \"Corrupted File\" Error on LUA Drag & Drop"
        },
        description: {
            id: "Muncul notifikasi error pada overlay SteamTools saat mencoba men-drag file konfigurasi LUA atau manifest yang baru diunduh.",
            en: "Error pop-up appears on SteamTools overlay when attempting to drag a freshly downloaded LUA file."
        },
        solutionTitle: {
            id: "Solusi Komunitas:",
            en: "Community Solution:"
        },
        solutionSteps: [
            {
                id: "Pastikan file yang di-drag adalah file mentah berekstensi <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">.lua</code> atau <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">.manifest</code>, <strong>bukan file arsip terkompresi (.zip / .rar / .7z)</strong>. Ekstrak terlebih dahulu jika berformat zip.",
                en: "Ensure dragged file is raw <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">.lua</code> or <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">.manifest</code>, <strong>NOT compressed archives (.zip / .rar / .7z)</strong>. Extract zip files first."
            },
            {
                id: "Gunakan sumber file resmi terverifikasi dari <strong>KernelOS</strong> atau <strong>AHD Manifest Mirror</strong>.",
                en: "Source files exclusively from verified mirrors: <strong>KernelOS</strong> or <strong>AHD Manifest Mirror</strong>."
            },
            {
                id: "Hindari mengedit struktur tabel kode di dalam file <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">.lua</code> secara manual jika format string belum dipahami.",
                en: "Avoid manually editing code table structures inside <code class=\"font-mono text-zinc-200 bg-zinc-900 px-1 py-0.5 rounded\">.lua</code> files."
            }
        ]
    }
];
