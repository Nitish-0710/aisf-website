/**
 * AISF VIT PUNE - OFFICIAL TEAM DIRECTORY SCRIPTS
 * Interactive Systems: Search & Filtering, Live 3D Neural Sphere Canvas, Magnetic Dual Cursor, Web Audio FX, Glassmorphic Modal
 */

(function () {
  "use strict";

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  /* ==========================================================================
     1. COMPREHENSIVE TEAM DATA MODEL (FACULTY -> CORE EXECUTIVE -> SECRETARIES)
     ========================================================================== */
  
  // 1. FACULTY MENTORS & ADVISORS (Updated with LinkedIn / VIT Pune AI Dept info)
  const facultyMembers = [
    {
      id: 'dr-nilesh-sable',
      name: 'Dr. Nilesh Sable',
      initials: 'NS',
      role: 'Professor & Head of Department (HOD)',
      category: 'faculty',
      badge: 'HOD & CHIEF ADVISOR',
      dept: 'Dept. of CSE (Artificial Intelligence) Â· VIT Pune',
      avatar: 'assets/ns.jpg',
      phone: '+91 75880 19070',
      email: 'nilesh.sable@vit.edu',
      quote: '"AISF empowers students to transition from core computational theory to scalable, real-world artificial intelligence engineering."',
      bio: 'Professor and Head of the Department of Computer Science & Engineering (Artificial Intelligence) at Vishwakarma Institute of Technology, Pune. Senior Member of IEEE with extensive research leadership in Machine Learning, IoT, Cognitive Computing, Data Mining, and Network Security.',
      skills: ['Machine Learning', 'Cognitive Computing', 'IoT & Networking', 'AI Research Strategy', 'IEEE Senior Member']
    },
    {
      id: 'prof-roshani-pawar',
      name: 'Prof. Roshani Pawar',
      initials: 'RP',
      role: 'Assistant Professor & Faculty Coordinator',
      category: 'faculty',
      badge: 'Hackathon Coordinator',
      dept: 'Dept. of CSE (Artificial Intelligence) Â· VIT Pune',
      avatar: 'assets/rpp.jpg',
      phone: '+91 99229 35955',
      email: 'roshani.pawar@vit.edu',
      quote: '"Fostering student innovation through competitive hackathons, project-based engineering, and deep industry-aligned mentorship."',
      bio: 'Assistant Professor in the Department of Computer Science & Engineering (Artificial Intelligence) at VIT Pune. Official Faculty Coordinator for AISF and flagship national hackathons like CodeVerse and Code Apex, researching Machine Learning, Data Mining, and Applied AI systems.',
      skills: ['Machine Learning', 'Data Mining', 'Hackathon Mentorship', 'Applied AI Systems', 'Academic Coordination']
    },
    {
      id: 'Prof. Jayshree Bedade',
      name: 'Prof. Jayshree Bedade',
      initials: 'JB',
      role: 'Faculty Coordinator',
      category: 'faculty',
      badge: 'Faculty Coordinator',
      dept: 'Dept. of CSE (Artificial Intelligence) Â· VIT Pune',
      avatar: 'assets/jb.jpg',
      phone: '+91 80074 75672',
      email: '',
      quote: '"Inspiring future AI researchers and software architects to build ethical, robust, and transformative technologies."',
      bio: 'Assistant Professor in the Department of Computer Science & Engineering (Artificial Intelligence) at VIT Pune. Guiding student technical development, academic research initiatives, and specialized symposiums in AI and Deep Learning.',
      skills: ['Artificial Intelligence', 'Deep Learning', 'Cloud Computing', 'Student Research', 'Technical Mentorship']
    }
  ];

  // 2. CORE EXECUTIVE BOARD (Only President and VP)
  const executiveMembers = [
    {
      id: 'samarth-mahajan',
      name: 'Samarth Mahajan',
      initials: 'SM',
      role: 'President',
      category: 'leadership',
      badge: 'EXECUTIVE BOARD Â· PRESIDENT',
      dept: 'Dept. of CS (Artificial Intelligence) Â· VIT Pune',
      avatar: 'assets/sm.jpg',
      phone: '+91 70280 44996',
      email: 'aisf@vit.edu',
      bio: 'Leading AISF with a clear mission: turn theoretical AI concepts into production-grade systems and foster an elite engineering culture. Overseeing the national hackathon Code Apex 2.0, open-source model releases, and student research cohorts across VIT Pune.',
      skills: ['Deep Learning', 'Leadership', 'Hackathon Architecture', 'Computer Vision', 'Strategic AI Planning', 'System Design']
    },
    {
      id: 'vedant-nehe',
      name: 'Vedant Nehe',
      initials: 'VN',
      role: 'Vice President',
      category: 'leadership',
      badge: 'EXECUTIVE BOARD Â· VICE PRESIDENT',
      dept: 'Dept. of CS (Artificial Intelligence) Â· VIT Pune',
      avatar: 'assets/vn.jpg',
      phone: '+91 97675 59932',
      email: 'aisf@vit.edu',
      bio: 'Driving core club operations, technical sprint coordination, event logistics, and student research cohorts across the Artificial Intelligence Student Forum at Vishwakarma Institute of Technology.',
      skills: ['Machine Learning', 'Operations Management', 'Team Coordination', 'AI Pipelines', 'Event Execution', 'Python']
    }
  ];

  // 3. DEPARTMENT SECRETARIES (exactly as listed in Team Reveal 2026-27)
  const secretaryMembers = [
    { id: 'sec-raghav-mulay', name: 'Raghav Mulay', role: 'Event & Operations Secretary', category: 'secretary', avatar: 'assets/rm.jpg' },
    { id: 'sec-shreyas-patil', name: 'Shreyas Patil', role: 'Event & Operations Secretary', category: 'secretary', avatar: 'assets/sp.jpg' },
    { id: 'sec-soham-chavan', name: 'Soham Chavan', role: 'Event & Operations Secretary', category: 'secretary', avatar: 'assets/sc.jpg' },
    { id: 'sec-swapnil-gulbhile', name: 'Swapnil Gulbhile', role: 'Social Media Secretary', category: 'secretary', avatar: 'assets/sg.jpg' },
    { id: 'sec-nisha-ughade', name: 'Nisha Ughade', role: 'Finance Secretary', category: 'secretary', avatar: 'assets/n.jpg' },
    { id: 'sec-shreya-ranjan', name: 'Shreya Ranjan', role: 'Technical Secretary', category: 'secretary', avatar: 'assets/sr.jpg' },
    { id: 'sec-chinmay-tidke', name: 'Chinmay Tidke', role: 'Technical Secretary', category: 'secretary', avatar: 'assets/ct.jpg' },
    { id: 'sec-pranav-raut', name: 'Pranav Raut', role: 'Technical Secretary', category: 'secretary', avatar: 'assets/pr.jpg' },
    { id: 'sec-atharva-mulik', name: 'Atharva Mulik', role: 'Technical Secretary', category: 'secretary', avatar: 'assets/Atharva.jpg' },
    { id: 'sec-nitish-sahu', name: 'Nitish Sahu', role: 'Technical Secretary', category: 'secretary', avatar: 'assets/nitish.jpg' },
    { id: 'sec-riya-somani', name: 'Riya Somani', role: 'Design Secretary', category: 'secretary', avatar: 'assets/riya.jpg' },
    { id: 'sec-rushikesh-rathod', name: 'Rushikesh Rathod', role: 'Design Secretary', category: 'secretary', avatar: 'assets/Rushi.jpg' },
    { id: 'sec-soha-jamadar', name: 'Soha Jamadar', role: 'Industrial Relations Secretary', category: 'secretary', avatar: 'assets/Soha .jpg' },
    { id: 'sec-pratham-shelke', name: 'Pratham Shelke', role: 'Public Relations & Outreach Secretary', category: 'secretary', avatar: 'assets/pra.jpg' },
    { id: 'sec-ruturaj-bhome', name: 'Ruturaj Bhome', role: 'Public Relations & Outreach Secretary', category: 'secretary', avatar: 'assets/rb.jpg' },
    { id: 'sec-ojas-kulkarni', name: 'Ojas Kulkarni', role: 'Photography Secretary', category: 'secretary', avatar: 'assets/Ojas.png' },
    { id: 'sec-prathisthta-yadav', name: 'Prathisthta Yadav', role: 'Photography Secretary', category: 'secretary', avatar: 'assets/p.jpg' },
    { id: 'sec-ragini-kengale', name: 'Ragini Kengale', role: 'Aesthetics Secretary', category: 'secretary', avatar: 'assets/r.jpg' },
    { id: 'sec-devyani-shingane', name: 'Devyani Shingane', role: 'Documentation Secretary', category: 'secretary', avatar: 'assets/d.jpg' },
    { id: 'sec-vidhan-jain', name: 'Vidhan Jain', role: 'Sponsorship Secretary', category: 'secretary', avatar: 'assets/vj.jpg' }
  ];

  const allDirectoryMembers = [...facultyMembers, ...executiveMembers, ...secretaryMembers];

  /* ==========================================================================
     2. PRELOADER
     ========================================================================== */
  function initPreloader() {
    const plCount = document.getElementById('plCount');
    const plBar = document.getElementById('plBar');
    const preloader = document.getElementById('preloader');
    
    if (!preloader || !plCount || !plBar) return;

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.ceil(Math.random() * 22);
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      plCount.textContent = `LOADING_TEAM_DIRECTORY Â· ${progress}%`;
      plBar.style.width = `${progress}%`;

      if (progress === 100) {
        setTimeout(() => {
          preloader.style.transition = 'opacity 0.6s var(--ease), visibility 0.6s var(--ease)';
          preloader.style.opacity = '0';
          preloader.style.visibility = 'hidden';
          if (typeof gsap !== 'undefined' && !isReducedMotion) {
            gsap.to('[data-reveal]', { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'expo.out' });
          }
        }, 220);
      }
    }, 70);
  }

  /* ==========================================================================
     3. 3D FIBONACCI NEURAL SPHERE WEBGL ENGINE (ELEVATED & VISIBLE FROM TOP)
     - 400 Nodes on Fibonacci Sphere with Golden Angle Distribution
     - Interconnected neural synaptic lines (<0.26 threshold)
     - Additive glow points & pulsing line materials
     - Positioned higher up and visible right in the hero section!
     - Dynamic scroll-velocity rotation & multi-section color morphing
     ========================================================================== */
  function initHoloShapeshifter3D() {
    const canvas = document.getElementById('holoShapeshifterCanvas');
    const wrap = document.getElementById('team3dWrap');
    if (!canvas || typeof THREE === 'undefined') return;

    // 1. Scene, Camera, and WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Master Neural Group (Elevated higher up to be visible in hero)
    const group = new THREE.Group();
    group.position.set(0, 0.4, 0);
    group.scale.setScalar(2.5);
    scene.add(group);

    // Ensure the 3D canvas wrapper is immediately visible right at the top
    if (wrap) {
      wrap.style.opacity = '0.92';
    }

    // 2. Mathematical Fibonacci Sphere Node Distribution (COUNT = 400)
    const COUNT = 400;
    const RADIUS = 1.0;
    const CONNECTION_THRESHOLD = 0.26;
    const goldenAngle = 2.399963;

    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const t = i / (COUNT - 1);
      const theta = i * goldenAngle;
      const phi = Math.acos(1 - 2 * t);

      positions[i * 3] = RADIUS * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = RADIUS * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = RADIUS * Math.cos(phi);
    }

    // 3. Neural Synaptic Connections Calculation
    const connections = [];
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < CONNECTION_THRESHOLD) {
          connections.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
        }
      }
    }
    const connectionPositions = new Float32Array(connections);

    // 4. Geometries & Additive Materials
    const COLOR_CYAN = new THREE.Color("#00e5ff");
    const COLOR_RED = new THREE.Color("#ff3344");
    const COLOR_BLUE = new THREE.Color("#2f7dff");

    const currentColor = COLOR_CYAN.clone();
    const targetColor = COLOR_CYAN.clone();

    // A) Soft Glow Neural Points
    const glowGeo = new THREE.BufferGeometry();
    glowGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const glowMat = new THREE.PointsMaterial({
      color: COLOR_CYAN,
      size: 0.12,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    const glowPoints = new THREE.Points(glowGeo, glowMat);
    group.add(glowPoints);

    // B) Main Bright Neural Points
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: COLOR_CYAN,
      size: 0.055,
      transparent: true,
      opacity: 1.0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    group.add(nodePoints);

    // C) Interconnected Neural Lines
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(connectionPositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: COLOR_CYAN,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lineSegments);

    // 5. Scroll Interaction: Enlargement, Horizontal Rotation & Color Dynamics
    let targetRotationY = 0;
    let targetScale = 2.5;
    let currentScale = 2.5;
    let lastScrollY = window.scrollY || window.pageYOffset;

    function handleScroll() {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const delta = currentScrollY - lastScrollY;

      // Scroll horizontal rotation (Y-axis only to keep sphere straight and upright)
      targetRotationY += delta * 0.006;

      lastScrollY = currentScrollY;

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

      // Dynamic Scale: Enlarges from 2.5x in hero up to 5.5x across directory
      const zoomProgress = THREE.MathUtils.clamp(currentScrollY / maxScroll, 0, 1);
      targetScale = THREE.MathUtils.lerp(2.5, 5.5, zoomProgress);

      // Dynamic Section Color Switching
      const switchLine = window.innerHeight * 0.55;
      const execSection = document.getElementById('executiveSection');
      const secSection = document.getElementById('secretariesSection');

      let activeColor = COLOR_CYAN;
      if (execSection && execSection.getBoundingClientRect().top <= switchLine) {
        activeColor = COLOR_RED;
      }
      if (secSection && secSection.getBoundingClientRect().top <= switchLine) {
        activeColor = COLOR_BLUE;
      }
      targetColor.copy(activeColor);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 6. Viewport Resize Handler
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize, { passive: true });

    // 7. Render Loop with Straight Upright Alignment, Lerp Scaling & Pulse
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Continuous gentle horizontal rotation
      targetRotationY += delta * 0.14;

      // Smooth Rotation Lerp (Keeps X and Z at 0 for straight upright orientation)
      const rotationSmoothness = 1 - Math.exp(-7 * delta);
      group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetRotationY, rotationSmoothness);
      group.rotation.x = 0;
      group.rotation.z = 0;

      // Smooth Scale Lerp
      const scaleSmoothness = 1 - Math.exp(-6 * delta);
      currentScale = THREE.MathUtils.lerp(currentScale, targetScale, scaleSmoothness);
      group.scale.setScalar(currentScale);

      // Smooth Color Transitions
      const colorSmoothness = 1 - Math.exp(-4 * delta);
      currentColor.lerp(targetColor, colorSmoothness);
      glowMat.color.copy(currentColor);
      nodeMat.color.copy(currentColor);
      lineMat.color.copy(currentColor);

      // Dynamic line opacity pulse
      lineMat.opacity = 0.20 + 0.05 * Math.sin(elapsedTime * 0.6);

      renderer.render(scene, camera);
    }

    animate();
  }

  /* ==========================================================================
     4. RENDERING FUNCTIONS (FACULTY -> CORE EXECUTIVE -> SECRETARIES)
     ========================================================================== */
  
  function renderFacultyRoster(items) {
    const container = document.getElementById('facultyRosterGrid');
    const section = document.getElementById('facultySection');
    if (!container || !section) return;

    container.innerHTML = '';
    if (items.length === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = 'block';

    items.forEach(member => {
      const card = document.createElement('div');
      card.className = 'faculty-card-premium hover-glow-card';
      card.setAttribute('data-reveal', '');

      const isContactPhone = member.phone !== 'Email Preferred';
      const contactHref = isContactPhone ? `tel:${member.phone.replace(/\s+/g, '')}` : `mailto:${member.email}`;
      const contactText = isContactPhone ? member.phone : member.email;

      const tagsHtml = member.skills.slice(0, 3).map(s => `<span class="faculty-card-premium__tag">${s}</span>`).join('');

      card.innerHTML = `
        <div>
          <div class="faculty-card-premium__header">
            <img src="${member.avatar}" alt="${member.name}" class="faculty-card-premium__avatar" onerror="this.src='assets/hero_neural_core.jpg'">
            <div class="faculty-card-premium__meta">
              <span class="faculty-card-premium__badge">${member.badge}</span>
              <h3>${member.name}</h3>
              <div class="faculty-card-premium__dept">${member.dept}</div>
            </div>
          </div>
          <p class="faculty-card-premium__quote">${member.quote}</p>
          <div class="faculty-card-premium__tags">${tagsHtml}</div>
        </div>
        <div class="faculty-card-premium__footer">
          <a class="faculty-card-premium__contact" href="${contactHref}" title="Contact ${member.name}">
            <i class="fa-solid fa-envelope"></i> ${contactText}
          </a>
          <button class="btn btn-sm btn--ghost detail-trigger magnetic" data-id="${member.id}">
            Profile â†—
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function renderExecutiveRoster(items) {
    const container = document.getElementById('executiveRosterGrid');
    const section = document.getElementById('executiveSection');
    if (!container || !section) return;

    container.innerHTML = '';
    if (items.length === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = 'block';

    items.forEach((member, idx) => {
      const card = document.createElement('div');
      card.className = 'executive-card hover-glow-card';
      card.setAttribute('data-reveal', '');

      const isContactPhone = member.phone !== 'Email Preferred';
      const contactHref = isContactPhone ? `tel:${member.phone.replace(/\s+/g, '')}` : `mailto:${member.email}`;
      const contactText = isContactPhone ? member.phone : member.email;
      const skillsHtml = member.skills.slice(0, 4).map(s => `<span class="executive-card__skill">${s}</span>`).join('');

      card.innerHTML = `
        <div class="executive-card__top">
          <div class="executive-card__avatar-wrap">
            <img src="${member.avatar}" alt="${member.name}" class="executive-card__avatar" onerror="this.src='assets/hero_neural_core.jpg'">
          </div>
          <span class="executive-card__num">// 0${idx + 1}</span>
        </div>
        <div class="executive-card__body">
          <span class="executive-card__badge">${member.badge}</span>
          <h3 class="executive-card__name">${member.name}</h3>
          <div class="executive-card__role">${member.role}</div>
          <p class="executive-card__bio">${member.bio}</p>
          <div class="executive-card__skills">${skillsHtml}</div>
        </div>
        <div class="executive-card__footer">
          <a class="executive-card__contact" href="${contactHref}" title="Connect with ${member.name}">
            <i class="fa-solid fa-address-card"></i> ${contactText}
          </a>
          <button class="executive-card__modal-btn detail-trigger" data-id="${member.id}">
            Full Profile â†—
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Render Department Secretaries (Photos and Names Only)
  function renderSecretariesRoster(items) {
    const container = document.getElementById('secretariesRosterGrid');
    const secContainer = document.getElementById('secretariesPhotoContainer');
    if (!container || !secContainer) return;

    container.innerHTML = '';
    if (items.length === 0) {
      secContainer.style.display = 'none';
      return;
    }
    secContainer.style.display = 'block';

    items.forEach(member => {
      const card = document.createElement('div');
      card.className = 'secretary-photo-card hover-glow-card';
      card.setAttribute('data-reveal', '');

      card.innerHTML = `
        <div class="secretary-photo-card__avatar-wrap">
          <img src="${member.avatar}" alt="${member.name}" class="secretary-photo-card__avatar" onerror="this.src='assets/hero_neural_core.jpg'">
          <div class="secretary-photo-card__glow"></div>
        </div>
        <div class="secretary-photo-card__content">
          <span class="secretary-photo-card__role">${member.role}</span>
          <h4 class="secretary-photo-card__name">${member.name}</h4>
        </div>
        <button class="secretary-photo-card__detail-btn detail-trigger" data-id="${member.id}" title="View ${member.name}">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      `;
      container.appendChild(card);
    });
  }

  /* ==========================================================================
     5. DIRECTORY FILTERING & SEARCH CONTROLS
     ========================================================================== */
  let currentCategory = 'all';
  let searchQuery = '';

  function applyDirectoryFilters() {
    const query = searchQuery.trim().toLowerCase();
    const noResultsBox = document.getElementById('noResultsBox');
    const secSection = document.getElementById('secretariesSection');

    function filterList(list, explicitCategory) {
      return list.filter(member => {
        const cat = member.category;
        const matchesCategory = currentCategory === 'all'
          || currentCategory === explicitCategory
          || currentCategory === cat;
        
        if (!matchesCategory) return false;
        if (!query) return true;

        const nameMatch = member.name.toLowerCase().includes(query);
        const roleMatch = (member.role || '').toLowerCase().includes(query);
        const deptMatch = (member.dept || '').toLowerCase().includes(query);
        const skillsMatch = (member.skills || []).some(s => s.toLowerCase().includes(query));
        const bioMatch = (member.bio || '').toLowerCase().includes(query);
        const domainMatch = (member.domain || '').toLowerCase().includes(query);

        return nameMatch || roleMatch || deptMatch || skillsMatch || bioMatch || domainMatch;
      });
    }

    const filteredFaculty = filterList(facultyMembers, 'faculty');
    const filteredExec = filterList(executiveMembers, 'leadership');
    const filteredSecretaries = filterList(secretaryMembers, 'secretary');

    renderFacultyRoster(filteredFaculty);
    renderExecutiveRoster(filteredExec);
    renderSecretariesRoster(filteredSecretaries);

    if (secSection) {
      secSection.style.display = filteredSecretaries.length > 0 ? 'block' : 'none';
    }

    const totalVisible = filteredFaculty.length + filteredExec.length + filteredSecretaries.length;
    if (noResultsBox) {
      noResultsBox.classList.toggle('is-visible', totalVisible === 0);
    }

    // Force-reveal all dynamically rendered cards with a staggered fade-in.
    // GSAP only runs once on DOMContentLoaded and never re-animates newly inserted elements,
    // so [data-reveal] cards stay at opacity:0 after each search/filter re-render.
    const dynamicContainers = [
      '#facultyRosterGrid', '#executiveRosterGrid', '#secretariesRosterGrid'
    ];
    dynamicContainers.forEach(selector => {
      const el = document.querySelector(selector);
      if (!el) return;
      const cards = el.querySelectorAll('[data-reveal]');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'none';
        // Stagger each card reveal by 60ms
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 60);
      });
    });

    if (window.bindHoverables) window.bindHoverables();
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }

  function initFilterControls() {
    const searchInput = document.getElementById('directorySearch');
    const clearBtn = document.getElementById('searchClearBtn');
    const filterPills = document.querySelectorAll('.filter-pill');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (clearBtn) clearBtn.classList.toggle('is-visible', searchQuery.length > 0);
        applyDirectoryFilters();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        clearBtn.classList.remove('is-visible');
        applyDirectoryFilters();
        if (searchInput) searchInput.focus();
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        currentCategory = pill.dataset.category || 'all';
        playUiSound('click');
        applyDirectoryFilters();
      });
    });
  }

  /* ==========================================================================
     6. GLASSMORPHIC DETAIL MODAL
     ========================================================================== */
  function initMemberModal() {
    const overlay = document.getElementById('memberModalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (!overlay || !closeBtn) return;

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.detail-trigger');
      if (trigger) {
        const id = trigger.dataset.id;
        const member = allDirectoryMembers.find(m => m.id === id);
        if (member) {
          openModal(member);
        }
      }
    });

    function openModal(member) {
      const avatarEl = document.getElementById('modalAvatar');
      avatarEl.src = member.avatar || 'assets/hero_neural_core.jpg';
      avatarEl.onerror = () => { avatarEl.src = 'assets/hero_neural_core.jpg'; };

      document.getElementById('modalName').textContent = member.name;
      document.getElementById('modalRole').textContent = `${member.badge || member.role} Â· ${member.domain || member.dept || 'AISF'}`;
      document.getElementById('modalBio').textContent = member.bio || 'Core representative driving artificial intelligence initiatives, hackathons, and technical sprints at VIT Pune.';

      const phoneLink = document.getElementById('modalPhoneLink');
      const phoneSpan = document.getElementById('modalPhone');
      const phoneVal = member.phone || (member.contactType === 'phone' ? member.contact : 'Email Preferred');
      phoneSpan.textContent = phoneVal;
      phoneLink.href = phoneVal !== 'Email Preferred' && phoneVal ? `tel:${phoneVal.replace(/\s+/g, '')}` : '#';

      const emailLink = document.getElementById('modalEmailLink');
      const emailSpan = document.getElementById('modalEmail');
      const emailVal = member.email || (member.contactType === 'email' ? member.contact : 'aisf@vit.edu');
      emailSpan.textContent = emailVal;
      emailLink.href = `mailto:${emailVal}`;

      const skillsContainer = document.getElementById('modalSkills');
      skillsContainer.innerHTML = '';
      const skills = member.skills || ['Machine Learning', 'AI Systems', 'Team Leadership'];
      skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'modal-skill-tag';
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
      });

      overlay.classList.add('is-active');
      playUiSound('popup');
    }

    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('is-active');
      playUiSound('click');
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('is-active');
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
        overlay.classList.remove('is-active');
      }
    });
  }

  /* ==========================================================================
     7. CUSTOM DUAL MAGNETIC CURSOR
     ========================================================================== */
  function initCustomCursor() {
    if (!isFinePointer || isReducedMotion) return;

    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function renderLoop() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(renderLoop);
    }
    renderLoop();

    function bindHoverables() {
      const hoverables = document.querySelectorAll('a, button, .filter-pill, .faculty-card-premium, .executive-card, .secretary-photo-card');
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
          ring.classList.add('is-active');
          playUiSound('hover');
        });
        el.addEventListener('mouseleave', () => {
          ring.classList.remove('is-active');
        });
      });
    }
    bindHoverables();

    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${relX * 0.28}px, ${relY * 0.35}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 0.84, 0.44, 1)';
        setTimeout(() => { btn.style.transition = ''; }, 400);
      });
    });

    window.bindHoverables = bindHoverables;
  }

  /* ==========================================================================
     8. WEB AUDIO SYNTHESIZER
     ========================================================================== */
  let audioCtx = null;
  let isAudioMuted = false;

  function initAudioFX() {
    const audioBtn = document.getElementById('audioToggleBtn');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', () => {
      isAudioMuted = !isAudioMuted;
      audioBtn.classList.toggle('is-active', !isAudioMuted);
      audioBtn.innerHTML = isAudioMuted 
        ? '<i class="fa-solid fa-volume-xmark"></i>' 
        : '<i class="fa-solid fa-volume-high"></i>';
      if (!isAudioMuted) playUiSound('popup');
    });
  }

  function playUiSound(type) {
    if (isAudioMuted) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.07);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.linearRampToValueAtTime(0.0001, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.07);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(740, now);
        osc.frequency.exponentialRampToValueAtTime(1180, now + 0.1);
        gain.gain.setValueAtTime(0.035, now);
        gain.gain.linearRampToValueAtTime(0.0001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'popup') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(460, now);
        osc.frequency.exponentialRampToValueAtTime(920, now + 0.18);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.linearRampToValueAtTime(0.0001, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    } catch (e) {}
  }

  /* ==========================================================================
     9. FOOTER PARTICLES & NAVIGATION SCROLL
     ========================================================================== */
  function initFooterDots() {
    const dotsHost = document.getElementById('footerDots');
    if (!dotsHost) return;

    const dotCount = window.innerWidth < 760 ? 22 : 46;
    for (let i = 0; i < dotCount; i++) {
      const d = document.createElement('span');
      const size = 2 + Math.random() * 7;
      d.style.width = `${size}px`;
      d.style.height = `${size}px`;
      d.style.left = `${Math.random() * 100}%`;
      d.style.top = `${Math.random() * 100}%`;
      d.style.opacity = (0.15 + Math.random() * 0.45).toFixed(2);
      dotsHost.appendChild(d);
    }
  }

  function initNavigation() {
    const nav = document.getElementById('siteNav');
    const burger = document.getElementById('burgerBtn');
    const mm = document.getElementById('mobileMenu');
    const mmClose = document.getElementById('mobileMenuClose');

    window.addEventListener('scroll', () => {
      if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 40);
    });

    if (burger && mm && mmClose) {
      burger.addEventListener('click', () => {
        mm.classList.add('is-open');
        playUiSound('popup');
      });
      mmClose.addEventListener('click', () => {
        mm.classList.remove('is-open');
        playUiSound('click');
      });
      mm.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mm.classList.remove('is-open'));
      });
    }
  }

  /* ==========================================================================
     INITIALIZATION ON DOM LOAD
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initHoloShapeshifter3D();
    initFooterDots();
    initFilterControls();
    applyDirectoryFilters();
    initMemberModal();
    initNavigation();
    initAudioFX();
  });
})();