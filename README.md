<img width="1024" height="572" alt="image" src="https://github.com/user-attachments/assets/bb1414a6-0556-434f-8555-7d8850ccf5c1" />
# SteamTools Setup & Client Cache Documentation

A static, client-side technical reference and troubleshooting guide documenting Steam directory architecture, manifest cache hierarchies (`depotcache`, `appcache`), and common local client resolution workflows.

---

## 📌 Project Overview

This repository hosts the source code for an open educational reference designed to assist users in understanding local Steam client directory structures, configuration caching, and diagnostic troubleshooting.

* **Format**: Pure static HTML/CSS/JS documentation.
* **Architecture**: Client-side only; no backend servers, database storage, or external payload hosting.
* **Scope**: Technical documentation of directory pathways, command execution policies, and public AppID metadata indexing.

---

## ⚖️ Legal Disclaimer & Non-Affiliation

1. **Non-Affiliation**: This project is an independent community documentation effort and is **not affiliated, associated, authorized, endorsed by, or in any way officially connected** with Valve Corporation, Steam, or any of their subsidiaries or affiliates. The official Steam website can be found at [https://store.steampowered.com](https://store.steampowered.com).
2. **Trademarks**: "Steam", the Steam logo, and related trademarks, assets, and service marks are the registered property of Valve Corporation.
3. **No File Hosting**: This repository **does not host, distribute, transmit, or store** copyrighted software binaries, modified dynamic link libraries (`.dll`), proprietary game data, license patches, or decrypted game files. 
4. **Third-Party References**: Any command-line snippets, external URLs, or utility names mentioned within this documentation are references to external third-party software managed independently by their respective creators.
5. **Research & Educational Use**: All material provided in this repository is intended strictly for local system diagnostics, file system interoperability research, and educational purposes.

---

## 🛡️ DMCA & Content Takedown Policy

We respect intellectual property rights and strive to comply with all copyright legislation (including DMCA / international copyright standards).

If you are a copyright owner or an authorized representative thereof and believe that any link, reference, or documentation in this repository inadvertently infringes upon your intellectual property:

* **Notice**: Please file a formal takedown or content modification request directly via email to: `[YOUR_CONTACT_EMAIL@DOMAIN.COM]`
* **Required Information**: Include specific details regarding the material in question, proof of authorization/ownership, and the requested remedy.
* **Turnaround**: Verified requests are processed and resolved within **24 to 48 hours** prior to any escalation.

---

## 🛠️ Local Development

```bash
# Clone the static guide
git clone [https://github.com/glantrox/steamtools-guide.git](https://github.com/glantrox/steamtools-guide.git)

# Navigate into directory
cd steamtools-guide

# Serve locally via any static server
npx serve .