/**
 * AISF VIT PUNE - OFFICIAL TEAM DIRECTORY SCRIPTS
 * Interactive Systems: Search & Filtering, Live Neural Canvas, Magnetic Dual Cursor, Web Audio FX, Glassmorphic Modal
 */

(function () {
  "use strict";

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  /* ==========================================================================
     1. COMPREHENSIVE TEAM DATA MODEL (FACULTY -> CORE EXECUTIVE -> SECRETARIES)
     ========================================================================== */
  
  // 1. FACULTY MENTORS & ADVISORS
  const facultyMembers = [
    {
      id: 'faculty-deshmukh',
      name: 'Prof. Dr. S. K. Deshmukh',
      initials: 'SD',
      role: 'HOD & Chief Faculty Advisor',
      category: 'faculty',
      badge: 'CHIEF ADVISOR',
      dept: 'Dept. of AI & Data Science · VIT Pune',
      avatar: 'assets/faculty_mentor_1.jpg',
      phone: '+91 20 2420 2180',
      email: 'hod.aids@vit.edu',
      quote: '"AISF bridges the vital gap between theoretical neural algorithms and impactful engineering solutions. Our students continuously redefine excellence in AI innovation."',
      bio: 'Distinguished Professor and Head of the Artificial Intelligence & Data Science Department at Vishwakarma Institute of Technology. Guiding institutional research programs, IEEE publications, and fostering high-impact industry collaboration for student builders.',
      skills: ['Deep Learning', 'Neural Systems', 'AI Governance', 'Academic Mentorship', 'Research Strategy']
    },
    {
      id: 'faculty-kulkarni',
      name: 'Prof. P. V. Kulkarni',
      initials: 'PK',
      role: 'Club Faculty Mentor & Coordinator',
      category: 'faculty',
      badge: 'FACULTY MENTOR',
      dept: 'Dept. of AI & DS · VIT Pune',
      avatar: 'assets/faculty_mentor_2.jpg',
      phone: '+91 20 2420 2182',
      email: 'mentor.aisf@vit.edu',
      quote: '"Watching AISF students construct end-to-end computer vision systems and national hackathon platforms reflects the dedication and technical depth cultivated at VIT."',
      bio: 'Associate Professor and Official Faculty Coordinator for AISF. Facilitating research laboratory infrastructures, clearances for national-level hackathons like Code Apex, and evaluating student applied machine learning prototypes.',
      skills: ['Computer Vision', 'Autonomous Robotics', 'Edge AI', 'Student Coordination', 'Project Review']
    },
    {
      id: 'faculty-joshi',
      name: 'Prof. R. M. Joshi',
      initials: 'RJ',
      role: 'Faculty In-Charge & Student Affairs',
      category: 'faculty',
      badge: 'FACULTY IN-CHARGE',
      dept: 'Dept. of AI & DS · VIT Pune',
      avatar: 'assets/faculty_mentor_3.jpg',
      phone: '+91 20 2420 2185',
      email: 'joshi.aisf@vit.edu',
      quote: '"Our forum instills teamwork, ethical AI leadership, and hands-on problem solving that prepares our student members to lead top global technology companies."',
      bio: 'Faculty In-Charge overseeing student governance, club initiatives, intercollegiate symposiums, and student career mentorship in emerging Generative AI technologies.',
      skills: ['Generative AI', 'NLP Pipelines', 'Student Mentorship', 'AI Ethics', 'Intercollegiate Relations']
    }
  ];

  // 2. CORE EXECUTIVE BOARD
  const executiveMembers = [
    {
      id: 'samarth-mahajan',
      name: 'Samarth Mahajan',
      initials: 'SM',
      role: 'President',
      category: 'leadership',
      badge: 'EXECUTIVE BOARD',
      dept: 'Dept. of Computer Science & AI · VIT Pune',
      avatar: 'assets/lead_samarth.jpg',
      phone: '+91 70280 44996',
      email: 'aisf@vit.edu',
      bio: 'Leading AISF with a clear mission: turn theoretical AI concepts into production-grade systems and foster an elite engineering culture. Overseeing the national hackathon Code Apex 2.0, open-source model releases, and student research cohorts across VIT Pune.',
      skills: ['Deep Learning', 'Leadership', 'Hackathon Architecture', 'Computer Vision', 'Strategic AI Planning', 'System Design']
    },
    {
      id: 'ruturaj-bhome',
      name: 'Ruturaj Bhome',
      initials: 'RB',
      role: 'Vice President',
      category: 'leadership',
      badge: 'EXECUTIVE BOARD',
      dept: 'Dept. of CS (Artificial Intelligence) · VIT Pune',
      avatar: 'assets/lead_ruturaj.jpg',
      phone: '+91 84680 12201',
      email: 'aisf@vit.edu',
      bio: 'Third-year Computer Science & Engineering (Artificial Intelligence) student at Vishwakarma Institute of Technology. Driven by curiosity and rigorous self-development, overseeing operational workflows, team synchronizations, and technical sprint schedules for AISF.',
      skills: ['Machine Learning', 'Operations Management', 'NLP Pipelines', 'Team Mentorship', 'AI Ethics', 'Python & PyTorch']
    },
    {
      id: 'om-kumar-garg',
      name: 'Om Kumar Garg',
      initials: 'OG',
      role: 'Chief Leadership Advisor',
      category: 'leadership',
      badge: 'CHIEF ADVISOR',
      dept: 'Dept. of AI & Data Science · VIT Pune',
      avatar: 'assets/lead_om.jpg',
      phone: '+91 83052 61866',
      email: 'aisf@vit.edu',
      bio: 'Spearheading technological roadmaps, institutional alignments, high-throughput AI research initiatives, and strategic sponsorships across collegiate and national technology symposiums.',
      skills: ['Deep Learning', 'System Architecture', 'Corporate Relations', 'Research Strategy', 'CUDA & GPU Computing']
    }
  ];

  // 3. SECRETARIES & CORE DEPARTMENT HEADS
  const secretaryMembers = [
    {
      id: 'aryan-deshpande',
      name: 'Aryan Deshpande',
      initials: 'AD',
      role: 'General Secretary',
      category: 'secretary',
      badge: 'GENERAL SECRETARY',
      dept: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 98221 44550',
      email: 'secretary.aisf@vit.edu',
      bio: 'Managing internal forum administration, official student representations, university regulatory coordination, and executive secretarial documentation.',
      skills: ['Student Governance', 'Administration', 'Executive Strategy', 'Public Speaking', 'Institutional Affairs']
    },
    {
      id: 'shreya-ranjan',
      name: 'Shreya Ranjan',
      initials: 'SR',
      role: 'Technical Secretary / Head',
      category: 'tech',
      badge: 'TECH SECRETARY',
      dept: 'Vishwakarma Institute of Technology',
      avatar: 'assets/lead_shreya.jpg',
      phone: 'Email Preferred',
      email: 'samir.shreya24@vit.edu',
      bio: 'Directing core machine learning codebases, open-source AI projects, model benchmarks, and leading hands-on technical workshops in computer vision and transformers.',
      skills: ['PyTorch & TensorFlow', 'Generative AI', 'Full Stack AI Apps', 'Transformer Models', 'MLOps']
    },
    {
      id: 'yash-vardhan',
      name: 'Yash Vardhan',
      initials: 'YV',
      role: 'Hackathon & Events Secretary',
      category: 'events',
      badge: 'EVENT SECRETARY',
      dept: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 94150 88210',
      email: 'events.aisf@vit.edu',
      bio: 'Directing Code Apex 2.0 hackathon lifecycle, ideation sprint design, judge panel coordination, and organizing nationwide 36-hour coding sprints.',
      skills: ['Hackathon Management', 'Event Architecture', 'Judging Protocols', 'Logistics Planning', 'Track Coordination']
    },
    {
      id: 'pratham-shelke',
      name: 'Pratham Shelke',
      initials: 'PS',
      role: 'PR & Branding Secretary / Head',
      category: 'pr-branding',
      badge: 'PR SECRETARY',
      dept: 'Vishwakarma Institute of Technology',
      avatar: 'assets/lead_pratham.jpg',
      phone: '+91 87678 52276',
      email: 'pratham.aisf@vit.edu',
      bio: 'Crafting the dynamic brand identity, media campaigns, press releases, and external digital communications for AISF across student and industry channels.',
      skills: ['Brand Identity', 'Public Relations', 'Community Outreach', 'Strategic Marketing', 'Content Strategy']
    },
    {
      id: 'atharva-kulkarni',
      name: 'Atharva Kulkarni',
      initials: 'AK',
      role: 'AI / ML Research Secretary',
      category: 'tech',
      badge: 'RESEARCH SECRETARY',
      dept: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 98230 11422',
      email: 'research.aisf@vit.edu',
      bio: 'Guiding specialized research sprints in reinforcement learning, multimodal LLM fine-tuning, retrieval augmented generation, and paper submissions.',
      skills: ['LLM Fine-Tuning', 'Reinforcement Learning', 'CUDA', 'Python', 'Diffusion Models']
    },
    {
      id: 'ananya-sharma',
      name: 'Ananya Sharma',
      initials: 'AS',
      role: 'Design & Creative Media Secretary',
      category: 'design',
      badge: 'DESIGN SECRETARY',
      dept: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 98711 23450',
      email: 'design.aisf@vit.edu',
      bio: 'Designing futuristic UI/UX experiences, interactive digital assets, motion graphics, and visual design systems for all AISF initiatives and hackathons.',
      skills: ['Figma', 'Motion Graphics', 'Generative AI Art', 'Creative Direction', 'Web Aesthetics']
    },
    {
      id: 'rohan-patil',
      name: 'Rohan Patil',
      initials: 'RP',
      role: 'Logistics & Operations Secretary',
      category: 'events',
      badge: 'OPERATIONS SECRETARY',
      dept: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 91234 56780',
      email: 'operations.aisf@vit.edu',
      bio: 'Overseeing smooth execution of on-campus AI symposiums, technical labs, computing hardware allocation, venue infrastructures, and hospitality for visiting dignitaries.',
      skills: ['Resource Allocation', 'Event Scheduling', 'Vendor Management', 'Hardware Labs', 'Crisis Operations']
    },
    {
      id: 'tanvi-mehta',
      name: 'Tanvi Mehta',
      initials: 'TM',
      role: 'Corporate & Sponsorship Secretary',
      category: 'pr-branding',
      badge: 'SPONSORSHIP SECRETARY',
      dept: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 98330 55120',
      email: 'corporate.aisf@vit.edu',
      bio: 'Driving industry partnerships, managing prize pools and student compute credits with leading AI tech companies and alumni networks.',
      skills: ['Corporate Outreach', 'Sponsorship Proposals', 'Industry Liaisons', 'Negotiation', 'Grant Acquisition']
    }
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
      plCount.textContent = `LOADING_TEAM_DIRECTORY · ${progress}%`;
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
     3. 3D FIBONACCI NEURAL SPHERE WEBGL ENGINE (FROM TRY 2)
     - 400 Nodes on Fibonacci Sphere with Golden Angle Distribution
     - Interconnected neural synaptic lines (<0.26 threshold)
     - Double-layer additive glow points & pulsing line materials
     - Activates strictly after hero section and enlarges on scroll down
     - Dynamic scroll-velocity rotation & multi-section color morphing
     ========================================================================== */
  function initHoloShapeshifter3D() {
    const canvas = document.getElementById('holoShapeshifterCanvas');
    const wrap = document.getElementById('team3dWrap');
    if (!canvas || typeof THREE === 'undefined') return;

    // 1. Scene, Camera, and WebGL Renderer matching try (2)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Master Neural Group
    const group = new THREE.Group();
    group.position.set(0, 0, 0);
    group.scale.setScalar(2.6);
    scene.add(group);

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
      size: 0.11,
      transparent: true,
      opacity: 0.32,
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
      size: 0.052,
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
      opacity: 0.22,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lineSegments);

    // 5. Scroll Interaction: Enlargement, Horizontal Rotation (Kept straight upright) & Color Dynamics
    let targetRotationY = 0;
    let targetScale = 2.6;
    let currentScale = 2.6;
    let lastScrollY = window.scrollY || window.pageYOffset;

    function handleScroll() {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const delta = currentScrollY - lastScrollY;

      // Scroll horizontal rotation (Y-axis only to keep sphere straight and upright)
      targetRotationY += delta * 0.006;

      lastScrollY = currentScrollY;

      // Hero containment & Fade-in after hero section
      const hero = document.querySelector('.team-hero');
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

      // Opacity: 0 inside hero, smoothly 1.0 once scrolled past hero (persisting through recruitment banner)
      const fadeStart = heroHeight * 0.35;
      const fadeEnd = heroHeight * 0.85;
      let opacity = 0;
      if (currentScrollY > fadeStart) {
        opacity = Math.min(1, (currentScrollY - fadeStart) / (fadeEnd - fadeStart));
      }
      if (wrap) {
        wrap.style.opacity = opacity.toFixed(3);
      }

      // Dynamic Scale: Enlarges from 2.6x past hero up to 6.0x across directory & recruitment section
      const zoomStart = heroHeight * 0.35;
      const zoomEnd = maxScroll;
      const zoomProgress = THREE.MathUtils.clamp(
        (currentScrollY - zoomStart) / Math.max(1, zoomEnd - zoomStart),
        0,
        1
      );
      targetScale = THREE.MathUtils.lerp(2.6, 6.0, zoomProgress);

      // Dynamic Section Color Switching
      const switchLine = window.innerHeight * 0.55;
      const execSection = document.getElementById('executiveSection');
      const secSection = document.getElementById('secretariesSection');
      const recSection = document.getElementById('joinTeam');

      let activeColor = COLOR_CYAN;
      if (execSection && execSection.getBoundingClientRect().top <= switchLine) {
        activeColor = COLOR_RED;
      }
      if (secSection && secSection.getBoundingClientRect().top <= switchLine) {
        activeColor = COLOR_BLUE;
      }
      if (recSection && recSection.getBoundingClientRect().top <= switchLine) {
        activeColor = COLOR_CYAN;
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

      // Smooth Scale Lerp (Enlargement on scroll down)
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
      lineMat.opacity = 0.18 + 0.05 * Math.sin(elapsedTime * 0.6);

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
            Profile ↗
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

      const cardNum = String(idx + 1).padStart(2, '0');
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
            Full Profile ↗
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function renderSecretariesRoster(items) {
    const container = document.getElementById('secretariesRosterGrid');
    const section = document.getElementById('secretariesSection');
    if (!container || !section) return;

    container.innerHTML = '';
    if (items.length === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = 'block';

    items.forEach((member, idx) => {
      const card = document.createElement('div');
      card.className = 'secretary-card';
      card.setAttribute('data-reveal', '');

      const isContactPhone = member.phone !== 'Email Preferred';
      const contactHref = isContactPhone ? `tel:${member.phone.replace(/\s+/g, '')}` : `mailto:${member.email}`;
      const contactText = isContactPhone ? member.phone : member.email;
      const avatarAltClass = idx % 2 === 0 ? '' : 'alt';

      card.innerHTML = `
        <div>
          <div class="secretary-card__top">
            <div class="secretary-card__avatar ${avatarAltClass}">${member.initials}</div>
            <span class="secretary-card__tag">${member.category.toUpperCase()}</span>
          </div>
          <div class="secretary-card__role">${member.role}</div>
          <h3 class="secretary-card__name">${member.name}</h3>
          <p class="secretary-card__desc">${member.bio}</p>
        </div>
        <div class="secretary-card__bottom">
          <a class="secretary-card__contact" href="${contactHref}">${contactText}</a>
          <button class="secretary-card__btn detail-trigger" data-id="${member.id}">
            Bio ↗
          </button>
        </div>
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

    function filterList(list) {
      return list.filter(member => {
        const matchesCategory = currentCategory === 'all' 
          || member.category === currentCategory 
          || (currentCategory === 'secretary' && (member.category === 'secretary' || member.category === 'tech' || member.category === 'events' || member.category === 'pr-branding' || member.category === 'design'));
        
        if (!matchesCategory) return false;

        if (!query) return true;

        const nameMatch = member.name.toLowerCase().includes(query);
        const roleMatch = member.role.toLowerCase().includes(query);
        const deptMatch = (member.dept || '').toLowerCase().includes(query);
        const skillsMatch = member.skills.some(s => s.toLowerCase().includes(query));
        const bioMatch = (member.bio || '').toLowerCase().includes(query);

        return nameMatch || roleMatch || deptMatch || skillsMatch || bioMatch;
      });
    }

    const filteredFaculty = filterList(facultyMembers);
    const filteredExec = filterList(executiveMembers);
    const filteredSecretaries = filterList(secretaryMembers);

    renderFacultyRoster(filteredFaculty);
    renderExecutiveRoster(filteredExec);
    renderSecretariesRoster(filteredSecretaries);

    const totalVisible = filteredFaculty.length + filteredExec.length + filteredSecretaries.length;
    if (noResultsBox) {
      noResultsBox.classList.toggle('is-visible', totalVisible === 0);
    }

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
      document.getElementById('modalAvatar').src = member.avatar;
      document.getElementById('modalName').textContent = member.name;
      document.getElementById('modalRole').textContent = `${member.badge} · ${member.role}`;
      document.getElementById('modalBio').textContent = member.bio;

      const phoneLink = document.getElementById('modalPhoneLink');
      const phoneSpan = document.getElementById('modalPhone');
      phoneSpan.textContent = member.phone;
      phoneLink.href = member.phone !== 'Email Preferred' ? `tel:${member.phone.replace(/\s+/g, '')}` : '#';

      const emailLink = document.getElementById('modalEmailLink');
      const emailSpan = document.getElementById('modalEmail');
      emailSpan.textContent = member.email;
      emailLink.href = `mailto:${member.email}`;

      const skillsContainer = document.getElementById('modalSkills');
      skillsContainer.innerHTML = '';
      member.skills.forEach(skill => {
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
      const hoverables = document.querySelectorAll('a, button, .filter-pill, .faculty-card-premium, .executive-card, .secretary-card');
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
