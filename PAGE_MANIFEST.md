# AISF Website — Page & Branch File Manifest

This document maps every file, component, stylesheet, and asset in `my-react-app` to its respective website page and Git branch.

---

## 🏠 1. HOME PAGE (`/` & `main` / `home-page` branch)

The official landing page with the 70% dead-centered logo docking animation, background video loop, 3D Neural Constellation sphere (`#00e5ff`), Who We Are, Pillars, Community gallery, and Footer.

### Source Code & Components
- `src/App.jsx` *(Main Home page application container)*
- `src/components/NeuralGlobeBackground.jsx` *(Three.js 3D Neural Fibonacci Sphere matching Events model with `#00e5ff` initial color)*
- `src/index.css` *(Global Tailwind CSS configuration & tokens)*

### Assets (`src/assets/` & `public/`)
- `src/assets/AISF_Logo_NoBG.png` *(Official transparent emblem for docking logo)*
- `src/assets/bg_video_AISF_cut.mp4` *(Hero background looping video)*
- `src/assets/AISF_WhoWeAre_Photo.jpeg` *(Who We Are section media photo)*
- `src/assets/AISF_GetInvolved.jpeg` *(Get Involved gallery photo 1)*
- `src/assets/AISF_GetInvolved_2.jpg` *(Get Involved gallery photo 2)*
- `src/assets/AISF_GetInvolved_3.jpg` *(Get Involved gallery photo 3)*
- `public/AISF_Logo_NoBG.png` *(Static favicon/logo URL used by the HTML shell and events footer)*
- `public/favicon.png` *(Tab Favicon asset)*
- `public/favicon.svg` *(Fallback icon)*
- `public/icons.svg` *(Fallback icon)*

---

## 👥 2. TEAM DIRECTORY PAGE (`/team` & `team-page` branch)

The official directory for the Faculty Advisory Board, Core Executive Board, and Department Secretaries with real-time search, category filtering, 3D Neural Fibonacci WebGL canvas (`#00e5ff`), and member modal dialogs.

### Source Code & Components
- `src/pages/Team.jsx` *(Complete interactive Team Directory page & modal logic)*
- `src/components/NeuralGlobeBackground.jsx` *(Shared 3D Neural Fibonacci Sphere with constant `#00e5ff` color)*
- `src/team.css` *(Scoped styles for cards, search, pills, modals, and typography)*

### Assets (`src/assets/team/`)
- `src/assets/team/ns.jpg` *(Dr. Nilesh Sable)*
- `src/assets/team/rpp.jpg` *(Prof. Roshani Pawar)*
- `src/assets/team/jb.jpg` *(Prof. Jayshree Bedade)*
- `src/assets/team/sm.jpg` *(Samarth Mahajan - President)*
- `src/assets/team/vn.jpg` *(Vedant Nehe - Vice President)*
- `src/assets/team/rm.jpg`, `sp.jpg`, `sc.jpg`, `sg.jpg`, `n.jpg`, `sr.jpg`, `ct.jpg`, `pr.jpg`, `Atharva.jpg`, `nitish.jpg`, `riya.jpg`, `Rushi.jpg`, `Soha .jpg`, `pra.jpg`, `rb.jpg`, `Ojas.png`, `p.jpg`, `r.jpg`, `d.jpg`, `vj.jpg` *(Secretary profile photos)*

---

## 🚀 3. EVENTS & HACKATHONS PAGE (`/events` & `events-page` branch)

The official events showcase for Code Apex 2.0 and Code Apex 1.0 with interactive timeline, 3D HoloModel neural canvas (with section theme color transitions), and hackathon galleries.

### Source Code & Components
- `src/pages/Events.jsx` *(Main Events page controller & theme morphing)*
- `src/events.css` *(Scoped Events page styling)*
- `src/components/events/EventsNavbar.jsx` *(Events sticky navigation)*
- `src/components/events/EventHero.jsx` *(Events hero banner & typography)*
- `src/components/events/EventTimeline.jsx` *(Interactive event milestones)*
- `src/components/events/EventSection.jsx` *(Event card showcase with media grids)*
- `src/components/events/EventBackgroundModel.jsx` *(Three.js 3D Neural Sphere with dynamic section color transitions)*
- `src/components/events/EventsFooter.jsx` *(Events dedicated footer)*

### Assets (`public/images/`)
- `public/images/events/ca-1/VCA1.1.jpeg` *(Code Apex 1.0 photo 1)*
- `public/images/events/ca-1/VCA1.2.jpeg` *(Code Apex 1.0 photo 2)*
- `public/images/events/ca-1/VCA1.3.jpeg` *(Code Apex 1.0 photo 3)*
- `public/images/events/ca-1/VCA1.4.jpeg` *(Code Apex 1.0 photo 4)*
- `public/images/events/ca-2/VCA2.1.jpeg` *(Code Apex 2.0 photo 1)*
- `public/images/events/ca-2/VCA2.2.jpeg` *(Code Apex 2.0 photo 2)*
- `public/images/events/ca-2/VCA2.3.jpeg` *(Code Apex 2.0 photo 3)*
- `public/images/events/ca-2/VCA2.4.jpeg` *(Code Apex 2.0 photo 4)*
- `public/images/events/ca-2/VCA2.5.jpeg` *(Code Apex 2.0 photo 5)*

---

## ⚡ 4. CODE APEX 3.0 DOOMSDAY PAGE (`/vca3` & `vca3-page` branch)

The official Doctor Doom / Marvel Doomsday themed teaser page for Code Apex 3.0 with 3D Emerald Incursion Singularity canvas (`#00643D`), multiversal cosmic dust particles, and coming soon announcements.

### Source Code & Components
- `src/pages/Vca3.jsx` *(Main VCA 3.0 Doomsday teaser page)*
- `src/components/vca3/DoomsdayGlobe.jsx` *(Three.js 3D Emerald Incursion Singularity & Cosmic Dust)*
- `src/vca3.css` *(Doctor Doom Emerald & Incursion styling rules)*

---

## ⚙️ 5. SHARED CORE & CONFIGURATION FILES (Needed on ALL branches)

These files configure Vite, Tailwind CSS, project packages, HTML headers, and the central client-side router.

- `index.html` *(Root HTML template, fonts & favicon declarations)*
- `package.json` *(Project dependencies: React, Three.js, Lucide, Tailwind)*
- `package-lock.json` *(Dependency lockfile)*
- `vite.config.js` *(Vite + Tailwind plugin build settings)*
- `src/main.jsx` *(Client-side router with React.lazy code splitting)*
- `README.md` *(Project overview & quickstart guide)*
- `PAGE_MANIFEST.md` *(File-to-page & branch mapping matrix)*
- `.gitignore` *(Node modules & dist ignores)*
- `.oxlintrc.json` *(Linter configuration)*

---

## 📌 Summary Mapping Matrix

| Page | Branch / Route | Key 3D Background Component | Dedicated CSS | Asset Folder |
| :--- | :--- | :--- | :--- | :--- |
| **Home Page** | `main` / `/` | `src/components/NeuralGlobeBackground.jsx` (Constant `#00e5ff`) | `src/index.css` | `src/assets/` |
| **Team Directory** | `team-page` / `/team` | `src/components/NeuralGlobeBackground.jsx` (Constant `#00e5ff`) | `src/team.css` | `src/assets/team/` |
| **Events Page** | `events-page` / `/events` | `src/components/events/EventBackgroundModel.jsx` (Dynamic `#00e5ff` $\rightarrow$ `#ff3344` $\rightarrow$ `#2f7dff`) | `src/events.css` | `public/images/` |
| **Code Apex 3.0** | `vca3-page` / `/vca3` | `src/components/vca3/DoomsdayGlobe.jsx` (Emerald `#00643D` & Cosmic Dust) | `src/vca3.css` | `src/assets/` |
| **Shared Core** | *All Branches* | `src/main.jsx`, `index.html`, `vite.config.js` | — | `public/AISF_Logo_NoBG.png` |
