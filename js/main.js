/**
 * AISF VIT PUNE - OFFICIAL FORUM SCRIPTS
 * Interactive Systems: Neural Synapse Canvas, Magnetic Dual Cursor, GSAP ScrollTriggers, Audio FX
 */

(function () {
  "use strict";

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  /* ==========================================================================
     1. TEAM DATA MODEL (MATCHING REFERENCE IMAGE 2)
     ========================================================================== */
  const teamMembers = [
    // 1. FACULTY MENTORS & ADVISORS (FIRST)
    {
      id: 'faculty-deshmukh',
      name: 'Prof. Dr. S. K. Deshmukh',
      initials: 'SD',
      role: 'HOD & Chief Faculty Advisor',
      category: 'faculty',
      badge: 'FACULTY ADVISOR',
      institution: 'Dept. of AI & Data Science · VIT Pune',
      avatar: 'assets/faculty_mentor_1.jpg',
      phone: '+91 20 2420 2180',
      email: 'hod.aids@vit.edu',
      bio: 'Providing strategic academic and research mentorship, guiding AISF students in published IEEE research and industry-grade AI applications.',
      skills: ['Deep Learning', 'Neural Systems', 'AI Governance', 'Academic Mentorship', 'Research Strategy']
    },
    {
      id: 'faculty-kulkarni',
      name: 'Prof. P. V. Kulkarni',
      initials: 'PK',
      role: 'Faculty Mentor & Coordinator',
      category: 'faculty',
      badge: 'FACULTY MENTOR',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/faculty_mentor_2.jpg',
      phone: '+91 20 2420 2182',
      email: 'mentor.aisf@vit.edu',
      bio: 'Coordinating club initiatives, national hackathon clearances, and laboratory infrastructure for applied AI student projects.',
      skills: ['Computer Vision', 'Autonomous Robotics', 'Edge AI', 'Student Coordination', 'Project Review']
    },
    {
      id: 'faculty-joshi',
      name: 'Prof. R. M. Joshi',
      initials: 'RJ',
      role: 'Faculty In-Charge & Student Affairs',
      category: 'faculty',
      badge: 'FACULTY IN-CHARGE',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/faculty_mentor_3.jpg',
      phone: '+91 20 2420 2185',
      email: 'joshi.aisf@vit.edu',
      bio: 'Mentoring student development, ethics in artificial intelligence, and interdisciplinary student symposiums at VIT Pune.',
      skills: ['Generative AI', 'NLP Pipelines', 'Student Affairs', 'Research Ethics', 'Mentorship']
    },

    // 2. CORE EXECUTIVE BOARD (SECOND)
    {
      id: 'samarth-mahajan',
      name: 'Samarth Mahajan',
      initials: 'SM',
      role: 'President',
      category: 'leadership',
      badge: 'EXECUTIVE BOARD',
      institution: 'Vishwakarma Institute Of Technology',
      avatar: 'assets/lead_samarth.jpg',
      phone: '+91 70280 44996',
      email: 'aisf@vit.edu',
      bio: 'Leading AISF with a focus on student-driven AI innovation, research pipelines, and national hackathons. Passionate about neural networks, applied machine learning, and cultivating a high-impact developer culture at VIT Pune.',
      skills: ['Deep Learning', 'Leadership', 'Hackathon Architecture', 'Computer Vision', 'Strategic AI Planning']
    },
    {
      id: 'ruturaj-bhome',
      name: 'Ruturaj Bhome',
      initials: 'RB',
      role: 'Vice President',
      category: 'leadership',
      badge: 'EXECUTIVE BOARD',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/lead_ruturaj.jpg',
      phone: '+91 84680 12201',
      email: 'aisf@vit.edu',
      bio: 'Third-year Computer Science & Engineering (Artificial Intelligence) student at VIT Pune. Oversees technical project execution, team coordination, and student developer development across the forum.',
      skills: ['Machine Learning', 'Operations Management', 'NLP Pipelines', 'Team Mentorship', 'AI Ethics']
    },
    {
      id: 'om-kumar-garg',
      name: 'Om Kumar Garg',
      initials: 'OG',
      role: 'Chief Leadership Advisor',
      category: 'leadership',
      badge: 'CHIEF ADVISOR',
      institution: 'Dept. of AI & Data Science · VIT Pune',
      avatar: 'assets/lead_om.jpg',
      phone: '+91 83052 61866',
      email: 'aisf@vit.edu',
      bio: 'Spearheading technological roadmaps, institutional alignments, and high-throughput AI research initiatives across collegiate and national symposiums.',
      skills: ['Deep Learning', 'System Architecture', 'Corporate Relations', 'Research Strategy', 'CUDA']
    },

    // 3. SECRETARIES & CORE DEPARTMENT HEADS (THIRD)
    {
      id: 'aryan-deshpande',
      name: 'Aryan Deshpande',
      initials: 'AD',
      role: 'General Secretary',
      category: 'secretary',
      badge: 'GENERAL SECRETARY',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 98221 44550',
      email: 'aisf@vit.edu',
      bio: 'Managing club governance, student representation, administration, and inter-departmental communications across VIT Pune.',
      skills: ['Student Governance', 'Administration', 'Executive Strategy', 'Public Speaking', 'Liaison']
    },
    {
      id: 'shreya-ranjan',
      name: 'Shreya Ranjan',
      initials: 'SR',
      role: 'Technical Secretary / Head',
      category: 'tech',
      badge: 'TECH SECRETARY',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/lead_shreya.jpg',
      phone: 'Email Preferred',
      email: 'samir.shreya24@vit.edu',
      bio: 'Directing core machine learning codebases, open-source AI projects, and leading advanced student developer workshops in computer vision and transformers.',
      skills: ['PyTorch & TensorFlow', 'Generative AI', 'Full Stack AI Apps', 'Transformer Models', 'MLOps']
    },
    {
      id: 'pratham-shelke',
      name: 'Pratham Shelke',
      initials: 'PS',
      role: 'PR & Branding Secretary / Head',
      category: 'pr-branding',
      badge: 'PR SECRETARY',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/lead_pratham.jpg',
      phone: '+91 87678 52276',
      email: 'aisf@vit.edu',
      bio: 'Crafting the dynamic brand identity, media campaigns, and external communications for AISF across collegiate and global AI developer communities.',
      skills: ['Brand Identity', 'Public Relations', 'Community Outreach', 'Strategic Marketing', 'Content Strategy']
    },
    {
      id: 'yash-vardhan',
      name: 'Yash Vardhan',
      initials: 'YV',
      role: 'Hackathon & Events Secretary',
      category: 'events',
      badge: 'EVENT SECRETARY',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 94150 88210',
      email: 'events.aisf@vit.edu',
      bio: 'Directing Code Apex 2.0 hackathon lifecycle, ideation sprint design, judge management, and live hackathon coordination.',
      skills: ['Hackathon Management', 'Event Architecture', 'Judging Protocols', 'Sponsorship Fulfillment']
    },
    {
      id: 'atharva-kulkarni',
      name: 'Atharva Kulkarni',
      initials: 'AK',
      role: 'AI / ML Research Secretary',
      category: 'tech',
      badge: 'RESEARCH LEAD',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 98230 11422',
      email: 'aisf@vit.edu',
      bio: 'Guiding specialized research sprints in reinforcement learning, multimodal LLM fine-tuning, and neural network model compression.',
      skills: ['LLM Fine-Tuning', 'Reinforcement Learning', 'CUDA', 'Python', 'Diffusion Models']
    },
    {
      id: 'ananya-sharma',
      name: 'Ananya Sharma',
      initials: 'AS',
      role: 'Design & Creative Media Secretary',
      category: 'design',
      badge: 'CREATIVE SECRETARY',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 98711 23450',
      email: 'aisf@vit.edu',
      bio: 'Designing futuristic UI/UX experiences, interactive digital assets, motion graphics, and visual design systems for AISF events.',
      skills: ['Figma', 'Motion Design', 'Generative AI Art', 'Creative Direction', 'Web Aesthetics']
    },
    {
      id: 'rohan-patil',
      name: 'Rohan Patil',
      initials: 'RP',
      role: 'Logistics & Operations Secretary',
      category: 'events',
      badge: 'OPERATIONS SECRETARY',
      institution: 'Vishwakarma Institute of Technology',
      avatar: 'assets/hero_neural_core.jpg',
      phone: '+91 91234 56780',
      email: 'aisf@vit.edu',
      bio: 'Overseeing smooth execution of on-campus AI symposiums, technical labs, venue infrastructures, and hospitality for visiting delegates.',
      skills: ['Resource Allocation', 'Event Scheduling', 'Vendor Management', 'Crisis Management']
    }
  ];

  /* ==========================================================================
     2. PRELOADER & HERO INTRO
     ========================================================================== */
  function initPreloader() {
    const plCount = document.getElementById('plCount');
    const plBar = document.getElementById('plBar');
    const preloader = document.getElementById('preloader');
    
    if (!preloader || !plCount || !plBar) {
      runHeroIntro();
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.ceil(Math.random() * 18);
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      plCount.textContent = `INITIALIZING_AISF · ${progress}%`;
      plBar.style.width = `${progress}%`;

      if (progress === 100) {
        setTimeout(() => {
          preloader.style.transition = 'opacity 0.6s var(--ease), visibility 0.6s var(--ease)';
          preloader.style.opacity = '0';
          preloader.style.visibility = 'hidden';
          runHeroIntro();
        }, 250);
      }
    }, 85);
  }

  function runHeroIntro() {
    if (isReducedMotion || typeof gsap === 'undefined') {
      document.querySelectorAll('[data-reveal], [data-reveal-text]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('.hero__title [data-reveal-text]', {
      y: '0%',
      duration: 1.1,
      stagger: 0.12
    })
    .to('.hero [data-reveal]', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.1
    }, '-=0.6');
  }

  /* ==========================================================================
     3. CUSTOM MAGNETIC CURSOR
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

    // Attach active state on hoverables
    function bindHoverables() {
      const hoverables = document.querySelectorAll('a, button, .team-card, .focus-card, .faculty-card, .project-card, .team__filter-btn');
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

    // Magnetic buttons
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
     4. INTERACTIVE NEURAL SYNAPSE CANVAS
     ========================================================================== */
  function initNeuralCanvas() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hero = document.querySelector('.hero');

    let W, H;
    let nodes = [];
    let pulses = [];
    const pointer = { x: null, y: null, active: false };

    function resize() {
      W = canvas.width = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
      const count = Math.max(35, Math.min(85, Math.floor(W / 20)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          baseX: 0,
          baseY: 0,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: 1.2 + Math.random() * 2.2,
          pulseAngle: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          color: Math.random() > 0.4 ? '#00d2ff' : '#0066ff'
        });
      }
    }

    // Occasional synapse electric pulse
    function spawnPulse(a, b) {
      if (pulses.length > 15) return;
      pulses.push({
        x1: a.x, y1: a.y,
        x2: b.x, y2: b.y,
        progress: 0,
        speed: 0.02 + Math.random() * 0.025
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        a.pulseAngle += a.pulseSpeed;

        if (a.x < -10) a.x = W + 10;
        if (a.x > W + 10) a.x = -10;
        if (a.y < -10) a.y = H + 10;
        if (a.y > H + 10) a.y = -10;

        // Interactive mouse repulsion / vortex
        if (pointer.x !== null) {
          const dx = pointer.x - a.x;
          const dy = pointer.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && dist > 0) {
            const force = (1 - dist / 180) * 2.5;
            a.x -= (dx / dist) * force;
            a.y -= (dy / dist) * force;
          }
        }
      }

      // Draw filament lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 155) {
            const opacity = (1 - dist / 155);
            const isNearPointer = pointer.x !== null && Math.min(
              Math.hypot(a.x - pointer.x, a.y - pointer.y),
              Math.hypot(b.x - pointer.x, b.y - pointer.y)
            ) < 180;

            if (isNearPointer) {
              ctx.strokeStyle = `rgba(0, 210, 255, ${opacity * 0.75})`;
              ctx.lineWidth = 1.3;
            } else {
              ctx.strokeStyle = `rgba(0, 102, 255, ${opacity * 0.28})`;
              ctx.lineWidth = 0.9;
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            // Random synapse firing
            if (Math.random() < 0.0003) {
              spawnPulse(a, b);
            }
          }
        }
      }

      // Draw synapse pulses
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.progress += p.speed;
        if (p.progress >= 1) {
          pulses.splice(k, 1);
          continue;
        }
        const currX = p.x1 + (p.x2 - p.x1) * p.progress;
        const currY = p.y1 + (p.y2 - p.y1) * p.progress;

        ctx.fillStyle = '#00d2ff';
        ctx.shadowColor = '#00d2ff';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const pulse = 1 + Math.sin(a.pulseAngle) * 0.35;
        const radius = a.r * pulse;

        // Outer soft glow
        ctx.fillStyle = a.color === '#00d2ff' 
          ? 'rgba(0, 210, 255, 0.25)' 
          : 'rgba(0, 102, 255, 0.2)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = a.color === '#00d2ff' ? '#38bdf8' : '#60a5fa';
        ctx.beginPath();
        ctx.arc(a.x, a.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!isReducedMotion) {
        requestAnimationFrame(draw);
      }
    }

    resize();
    if (!isReducedMotion) {
      requestAnimationFrame(draw);
    } else {
      draw();
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      if (e.clientY < rect.bottom && e.clientY > rect.top) {
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
        pointer.active = true;
      } else {
        pointer.x = null;
        pointer.y = null;
        pointer.active = false;
      }
    });
  }

  /* ==========================================================================
     5. FOOTER FLOATING CRIMSON PARTICLES
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

  /* ==========================================================================
     6. GSAP SCROLL TRIGGERS & PHOTO CLIP REVEAL
     ========================================================================== */
  function initScrollTriggers() {
    if (isReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      document.querySelectorAll('[data-reveal]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.section [data-reveal], .showcase [data-reveal], .team [data-reveal], .footer [data-reveal]').forEach(el => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%'
        }
      });
    });

    const clip = document.querySelector('[data-photo-clip]');
    if (clip) {
      gsap.to(clip, {
        clipPath: 'inset(0% round 4px)',
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: clip,
          start: 'top 80%'
        }
      });

      const img = clip.querySelector('img');
      if (img) {
        gsap.to(img, {
          scale: 1,
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: clip,
            start: 'top 80%'
          }
        });
      }
    }
  }

  /* ==========================================================================
     7. TEAM GRID & DOMAIN FILTERING
     ========================================================================== */
  function initTeamGrid() {
    const grid = document.getElementById('teamGrid');
    const filterBtns = document.querySelectorAll('.team__filter-btn');
    if (!grid) return;

    function renderMembers(category = 'all') {
      grid.innerHTML = '';
      const filtered = category === 'all' 
        ? teamMembers 
        : teamMembers.filter(m => m.category === category);

      filtered.forEach((member, idx) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.setAttribute('data-reveal', '');

        const isContactPhone = member.phone !== 'Email Preferred';
        const contactHref = isContactPhone ? `tel:${member.phone.replace(/\s+/g, '')}` : `mailto:${member.email}`;
        const contactText = isContactPhone ? member.phone : member.email;

        // Alternate avatar color: red for odd index, blue for even
        const avatarColor = idx % 2 === 0 ? 'team-card__avatar--red' : 'team-card__avatar--blue';

        // Zero-padded card number
        const cardNum = String(idx + 1).padStart(2, '0');

        card.innerHTML = `
          <span class="team-card__num">${cardNum}</span>
          <div class="team-card__avatar ${avatarColor}">${member.initials}</div>
          <div class="team-card__role">${member.role}</div>
          <h3 class="team-card__name">${member.name}</h3>
          <div class="team-card__bottom">
            <a class="team-card__contact" href="${contactHref}" title="Contact ${member.name}">
              ${contactText}
            </a>
            <button class="team-card__detail-btn" data-id="${member.id}">Profile ↗</button>
          </div>
        `;

        grid.appendChild(card);
      });

      if (window.bindHoverables) window.bindHoverables();
      initScrollTriggers();
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        playUiSound('click');
        renderMembers(btn.dataset.filter);
      });
    });

    renderMembers('all');
  }

  /* ==========================================================================
     8. MEMBER DETAIL MODAL
     ========================================================================== */
  function initMemberModal() {
    const overlay = document.getElementById('memberModalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (!overlay || !closeBtn) return;

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.team-card__detail-btn');
      if (trigger) {
        const id = trigger.dataset.id;
        const member = teamMembers.find(m => m.id === id);
        if (member) {
          openModal(member);
        }
      }
    });

    function openModal(member) {
      document.getElementById('modalAvatar').src = member.avatar;
      document.getElementById('modalName').textContent = member.name;
      document.getElementById('modalRole').textContent = member.role;
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
      if (e.target === overlay) {
        overlay.classList.remove('is-active');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
        overlay.classList.remove('is-active');
      }
    });
  }

  /* ==========================================================================
     9. LIVE STATS COUNTER
     ========================================================================== */
  function initStatsCounter() {
    const stats = document.querySelectorAll('.hero__stat-num');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          stats.forEach(counter => {
            const target = parseInt(counter.dataset.count, 10) || 0;
            const suffix = counter.dataset.suffix || '';
            let count = 0;
            const duration = 1800;
            const stepTime = 30;
            const increment = target / (duration / stepTime);

            const timer = setInterval(() => {
              count += increment;
              if (count >= target) {
                counter.innerHTML = `${target}<span>${suffix}</span>`;
                clearInterval(timer);
              } else {
                counter.innerHTML = `${Math.floor(count)}<span>${suffix}</span>`;
              }
            }, stepTime);
          });
        }
      });
    }, { threshold: 0.4 });

    const statsContainer = document.querySelector('.hero__stats');
    if (statsContainer) observer.observe(statsContainer);
  }

  /* ==========================================================================
     10. NAVIGATION & MOBILE MENU
     ========================================================================== */
  function initNavigation() {
    const nav = document.getElementById('siteNav');
    const burger = document.getElementById('burgerBtn');
    const mm = document.getElementById('mobileMenu');
    const mmClose = document.getElementById('mobileMenuClose');

    window.addEventListener('scroll', () => {
      if (nav) {
        nav.classList.toggle('is-scrolled', window.scrollY > 40);
      }
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
     11. WEB AUDIO API SYNTHESIZER
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
    } catch (e) {
      // Audio context may require user gesture
    }
  }

  /* ==========================================================================
     INITIALIZATION ON DOM LOAD
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initNeuralCanvas();
    initFooterDots();
    initTeamGrid();
    initMemberModal();
    initStatsCounter();
    initNavigation();
    initAudioFX();
    initScrollTriggers();
  });
})();
