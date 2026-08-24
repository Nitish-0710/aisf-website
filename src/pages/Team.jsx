import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Search,
  X,
  ArrowRight,
  Mail,
  Phone,
  FilterX,
  ExternalLink,
  ChevronDown,
  MapPin,
  ChevronUp
} from "lucide-react";
import * as THREE from "three";
import heroBgVideo from "../assets/bg_video_AISF_cut.mp4";
import aisfLogoImg from "../assets/AISF_Logo_NoBG.png";
import NeuralGlobeBackground from "../components/NeuralGlobeBackground";
import "../team.css";
import Footer from "../components/Footer"; 

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// ============================================================================
// COMPLETE AISF TEAM DIRECTORY DATA MODEL
// ============================================================================

export const FACULTY_MEMBERS = [
  {
    id: 'faculty-deshmukh',
    name: 'Prof. Dr. S. K. Deshmukh',
    initials: 'SD',
    role: 'HOD & Chief Faculty Advisor',
    category: 'faculty',
    badge: 'CHIEF ADVISOR',
    dept: 'Dept. of AI & Data Science · VIT Pune',
    avatar: '/assets/team/faculty_mentor_1.jpg',
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
    avatar: '/assets/team/faculty_mentor_2.jpg',
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
    avatar: '/assets/team/faculty_mentor_3.jpg',
    phone: '+91 20 2420 2185',
    email: 'joshi.aisf@vit.edu',
    quote: '"Our forum instills teamwork, ethical AI leadership, and hands-on problem solving that prepares our student members to lead top global technology companies."',
    bio: 'Faculty In-Charge overseeing student governance, club initiatives, intercollegiate symposiums, and student career mentorship in emerging Generative AI technologies.',
    skills: ['Generative AI', 'NLP Pipelines', 'Student Mentorship', 'AI Ethics', 'Intercollegiate Relations']
  }
];

export const EXECUTIVE_MEMBERS = [
  {
    id: 'samarth-mahajan',
    name: 'Samarth Mahajan',
    initials: 'SM',
    role: 'President',
    category: 'leadership',
    badge: 'EXECUTIVE BOARD',
    dept: 'Dept. of Computer Science & AI · VIT Pune',
    avatar: '/assets/team/lead_samarth.jpg',
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
    avatar: '/assets/team/lead_ruturaj.jpg',
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
    avatar: '/assets/team/lead_om.jpg',
    phone: '+91 83052 61866',
    email: 'aisf@vit.edu',
    bio: 'Spearheading technological roadmaps, institutional alignments, high-throughput AI research initiatives, and strategic sponsorships across collegiate and national technology symposiums.',
    skills: ['Deep Learning', 'System Architecture', 'Corporate Relations', 'Research Strategy', 'CUDA & GPU Computing']
  }
];

export const SECRETARY_MEMBERS = [
  {
    id: 'aryan-deshpande',
    name: 'Aryan Deshpande',
    initials: 'AD',
    role: 'General Secretary',
    category: 'secretary',
    badge: 'GENERAL SECRETARY',
    dept: 'Vishwakarma Institute of Technology',
    avatar: '/assets/team/hero_neural_core.jpg',
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
    avatar: '/assets/team/lead_shreya.jpg',
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
    avatar: '/assets/team/hero_neural_core.jpg',
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
    avatar: '/assets/team/lead_pratham.jpg',
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
    avatar: '/assets/team/hero_neural_core.jpg',
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
    avatar: '/assets/team/hero_neural_core.jpg',
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
    avatar: '/assets/team/hero_neural_core.jpg',
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
    avatar: '/assets/team/hero_neural_core.jpg',
    phone: '+91 98330 55120',
    email: 'corporate.aisf@vit.edu',
    bio: 'Driving industry partnerships, managing prize pools and student compute credits with leading AI tech companies and alumni networks.',
    skills: ['Corporate Outreach', 'Sponsorship Proposals', 'Industry Liaisons', 'Negotiation', 'Grant Acquisition']
  }
];

export const ALL_DIRECTORY_MEMBERS = [
  ...FACULTY_MEMBERS,
  ...EXECUTIVE_MEMBERS,
  ...SECRETARY_MEMBERS
];



// ============================================================================
// MAIN TEAM DIRECTORY PAGE COMPONENT
// ============================================================================
export default function Team() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalMember, setActiveModalMember] = useState(null);

  // Filter Categories Configuration
  const filterPills = [
    { id: "all", label: "All Directory" },
    { id: "faculty", label: "Faculty Mentors" },
    { id: "leadership", label: "Core Executive" },
    { id: "secretary", label: "Secretaries & Leads" },
    { id: "tech", label: "Technical & AI" },
    { id: "events", label: "Events & Hackathons" },
    { id: "pr-branding", label: "PR & Sponsorship" },
    { id: "design", label: "Design & UI/UX" },
  ];

  // Filtering function
  const filterList = (list) => {
    const q = searchQuery.trim().toLowerCase();
    return list.filter((member) => {
      const matchesCategory =
        selectedCategory === "all" ||
        member.category === selectedCategory ||
        (selectedCategory === "secretary" &&
          (member.category === "secretary" ||
            member.category === "tech" ||
            member.category === "events" ||
            member.category === "pr-branding" ||
            member.category === "design"));

      if (!matchesCategory) return false;
      if (!q) return true;

      const nameMatch = member.name.toLowerCase().includes(q);
      const roleMatch = member.role.toLowerCase().includes(q);
      const deptMatch = (member.dept || "").toLowerCase().includes(q);
      const skillsMatch = member.skills.some((s) => s.toLowerCase().includes(q));
      const bioMatch = (member.bio || "").toLowerCase().includes(q);

      return nameMatch || roleMatch || deptMatch || skillsMatch || bioMatch;
    });
  };

  const filteredFaculty = useMemo(() => filterList(FACULTY_MEMBERS), [searchQuery, selectedCategory]);
  const filteredExec = useMemo(() => filterList(EXECUTIVE_MEMBERS), [searchQuery, selectedCategory]);
  const filteredSecretaries = useMemo(() => filterList(SECRETARY_MEMBERS), [searchQuery, selectedCategory]);
  const totalVisible = filteredFaculty.length + filteredExec.length + filteredSecretaries.length;

  return (
    <div className="team-page-wrapper bg-[#030408] text-[#f0f6fc] min-h-screen relative font-sans selection:bg-[#00d2ff] selection:text-black">
      
      {/* 3D Neural Sphere Background Layer */}
      <NeuralGlobeBackground />

      {/* Floating Header Navbar */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto rounded-full px-4 py-2 flex items-center gap-3 bg-[#0a1020]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          <a href="/" className="flex items-center gap-2 pr-2 border-r border-white/10">
            <img src="/AISF_Logo_NoBG.png" alt="AISF Logo" className="h-7 w-auto object-contain" />
          </a>

          <div className="flex items-center gap-1">
            <a href="/" className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full text-[#94a3b8] hover:text-white transition-colors">
              Home
            </a>
            <a href="/events" className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full text-[#94a3b8] hover:text-white transition-colors">
              Events
            </a>
            <a href="/team" className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-[#00d2ff]/15 text-[#00d2ff] border border-[#00d2ff]/30">
              Team
            </a>
            <a href="#contact" className="ml-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5">
              Contact Us <ArrowRight size={13} />
            </a>
          </div>
        </nav>
      </header>

      {/* ======================================================================
          HERO SECTION (Directory Opening)
          ====================================================================== */}
      <section className="team-hero" id="teamTop">
        <div className="team-hero__video-wrap" aria-hidden="true">
          <video className="team-hero__video" autoPlay loop muted playsInline preload="metadata">
            <source src={heroBgVideo} type="video/mp4" />
          </video>
          <div className="team-hero__video-overlay" />
        </div>

        <div className="wrap">
          <div className="team-hero__content">
            <p className="eyebrow eyebrow--center">// Official Directory · VIT Pune</p>
            <h1 className="team-hero__title">
              THE MINDS BEHIND <br /><span className="glow-cyan">AISF FORUM</span>
            </h1>
            <p className="team-hero__sub">
              Guided by distinguished faculty advisors, steered by executive leadership, and powered by domain secretaries — bridging the gap between theoretical machine learning and production engineering at Vishwakarma Institute of Technology.
            </p>

            {/* Dynamic Stats Bar */}
            <div className="team-stats-bar">
              <div className="team-stat-box">
                <div className="team-stat-num">03<span></span></div>
                <div className="team-stat-label">Faculty Advisors</div>
              </div>
              <div className="team-stat-box">
                <div className="team-stat-num">03<span></span></div>
                <div className="team-stat-label">Executive Board</div>
              </div>
              <div className="team-stat-box">
                <div className="team-stat-num">08<span>+</span></div>
                <div className="team-stat-label">Secretaries &amp; Leads</div>
              </div>
              <div className="team-stat-box">
                <div className="team-stat-num">500<span>+</span></div>
                <div className="team-stat-label">Student Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SEARCH & FILTER CONTROLS
          ====================================================================== */}
      <div className="directory-controls sticky top-20 z-30" id="directoryControls">
        <div className="wrap">
          <div className="directory-controls__inner">
            {/* Search Bar */}
            <div className="search-wrapper">
              <Search className="search-icon text-[#00d2ff]" size={16} />
              <input
                type="text"
                className="search-input"
                placeholder="Search by name, role, department, or skill (e.g., Computer Vision, PyTorch, Leadership)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search directory"
              />
              {searchQuery && (
                <button
                  className="search-clear-btn is-visible"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="filter-pills-row">
              {filterPills.map((pill) => (
                <button
                  key={pill.id}
                  className={`filter-pill ${selectedCategory === pill.id ? "is-active" : ""}`}
                  onClick={() => setSelectedCategory(pill.id)}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 pb-24">
        {/* ======================================================================
            1. FACULTY ADVISORY BOARD
            ====================================================================== */}
        {filteredFaculty.length > 0 && (
          <section className="team-section" id="facultySection">
            <div className="wrap">
              <div className="section-title-wrap">
                <p className="eyebrow">// Mentorship &amp; Academic Guidance · 01</p>
                <h2>Faculty Advisory Board</h2>
                <p>
                  Distinguished professors and researchers at Vishwakarma Institute of Technology providing strategic mentorship, institutional resources, and industry alignments.
                </p>
              </div>

              <div className="faculty-roster-grid">
                {filteredFaculty.map((member) => {
                  const isContactPhone = member.phone !== "Email Preferred";
                  const contactHref = isContactPhone ? `tel:${member.phone.replace(/\s+/g, '')}` : `mailto:${member.email}`;
                  const contactText = isContactPhone ? member.phone : member.email;

                  return (
                    <div key={member.id} className="faculty-card-premium hover-glow-card">
                      <div>
                        <div className="faculty-card-premium__header">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="faculty-card-premium__avatar"
                            onError={(e) => { e.currentTarget.src = '/assets/team/hero_neural_core.jpg'; }}
                          />
                          <div className="faculty-card-premium__meta">
                            <span className="faculty-card-premium__badge">{member.badge}</span>
                            <h3>{member.name}</h3>
                            <div className="faculty-card-premium__dept">{member.dept}</div>
                          </div>
                        </div>
                        <p className="faculty-card-premium__quote">{member.quote}</p>
                        <div className="faculty-card-premium__tags">
                          {member.skills.slice(0, 3).map((s) => (
                            <span key={s} className="faculty-card-premium__tag">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="faculty-card-premium__footer">
                        <a className="faculty-card-premium__contact" href={contactHref} title={`Contact ${member.name}`}>
                          <Mail size={14} className="inline mr-1 text-[#00d2ff]" /> {contactText}
                        </a>
                        <button
                          className="btn btn-sm btn--ghost detail-trigger"
                          onClick={() => setActiveModalMember(member)}
                        >
                          Profile ↗
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ======================================================================
            2. CORE EXECUTIVE BOARD
            ====================================================================== */}
        {filteredExec.length > 0 && (
          <section className="team-section" id="executiveSection">
            <div className="wrap">
              <div className="section-title-wrap">
                <p className="eyebrow">// Executive Leadership · 02</p>
                <h2>Core Executive Board</h2>
                <p>
                  The presidential leadership directing AISF's strategic vision, national hackathon platform Code Apex 2.0, and technical innovation pipelines at VIT Pune.
                </p>
              </div>

              <div className="executive-roster-grid">
                {filteredExec.map((member, idx) => {
                  const isContactPhone = member.phone !== "Email Preferred";
                  const contactHref = isContactPhone ? `tel:${member.phone.replace(/\s+/g, '')}` : `mailto:${member.email}`;
                  const contactText = isContactPhone ? member.phone : member.email;

                  return (
                    <div key={member.id} className="executive-card hover-glow-card">
                      <div className="executive-card__top">
                        <div className="executive-card__avatar-wrap">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="executive-card__avatar"
                            onError={(e) => { e.currentTarget.src = '/assets/team/hero_neural_core.jpg'; }}
                          />
                        </div>
                        <span className="executive-card__num">// 0{idx + 1}</span>
                      </div>
                      <div className="executive-card__body">
                        <span className="executive-card__badge">{member.badge}</span>
                        <h3 className="executive-card__name">{member.name}</h3>
                        <div className="executive-card__role">{member.role}</div>
                        <p className="executive-card__bio">{member.bio}</p>
                        <div className="executive-card__skills">
                          {member.skills.slice(0, 4).map((s) => (
                            <span key={s} className="executive-card__skill">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="executive-card__footer">
                        <a className="executive-card__contact" href={contactHref} title={`Connect with ${member.name}`}>
                          <Phone size={13} className="inline mr-1 text-[#00d2ff]" /> {contactText}
                        </a>
                        <button
                          className="executive-card__modal-btn detail-trigger"
                          onClick={() => setActiveModalMember(member)}
                        >
                          Full Profile ↗
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ======================================================================
            3. SECRETARIES & DOMAIN HEADS
            ====================================================================== */}
        {filteredSecretaries.length > 0 && (
          <section className="team-section" id="secretariesSection">
            <div className="wrap">
              <div className="section-title-wrap">
                <p className="eyebrow">// Departmental Leads · 03</p>
                <h2>Secretaries &amp; Domain Heads</h2>
                <p>
                  Specialized student leaders heading technical research, flagship hackathons, creative design, public relations, and club operations.
                </p>
              </div>

              <div className="secretaries-roster-grid">
                {filteredSecretaries.map((member, idx) => {
                  const isContactPhone = member.phone !== "Email Preferred";
                  const contactHref = isContactPhone ? `tel:${member.phone.replace(/\s+/g, '')}` : `mailto:${member.email}`;
                  const contactText = isContactPhone ? member.phone : member.email;
                  const avatarAltClass = idx % 2 === 0 ? '' : 'alt';

                  return (
                    <div key={member.id} className="secretary-card">
                      <div>
                        <div className="secretary-card__top">
                          <div className={`secretary-card__avatar ${avatarAltClass}`}>{member.initials}</div>
                          <span className="secretary-card__tag">{member.category.toUpperCase()}</span>
                        </div>
                        <div className="secretary-card__role">{member.role}</div>
                        <h3 className="secretary-card__name">{member.name}</h3>
                        <p className="secretary-card__desc">{member.bio}</p>
                      </div>
                      <div className="secretary-card__bottom">
                        <a className="secretary-card__contact" href={contactHref}>{contactText}</a>
                        <button
                          className="secretary-card__btn detail-trigger"
                          onClick={() => setActiveModalMember(member)}
                        >
                          Bio ↗
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* No Results Fallback */}
        {totalVisible === 0 && (
          <div className="no-results-box is-visible">
            <FilterX size={36} className="text-[#00d2ff] mb-3" />
            <h3>No Directory Matches Found</h3>
            <p>We couldn't find any team members matching your search query. Try searching by another keyword or reset the category filter.</p>
          </div>
        )}

        {/* ======================================================================
            4. RECRUITMENT CALL-TO-ACTION
            ====================================================================== */}
        <section className="team-recruitment" id="joinTeam">
          <div className="wrap">
            <div className="team-recruitment__box">
              <p className="eyebrow eyebrow--center">// Join the Forum</p>
              <h2 className="team-recruitment__title">WANT TO BUILD<br /><span className="glow-cyan">AI WITH US?</span></h2>
              <p className="team-recruitment__sub">
                Whether you are into computer vision, generative models, hackathon coordination, or UI/UX design — AISF welcomes passionate builders at VIT Pune.
              </p>
              <div className="team-recruitment__actions">
                <a href="https://instagram.com/aisf.vit" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Connect on Instagram ↗
                </a>
                <a href="mailto:aisf@vit.edu" className="btn btn--ghost">
                  Email Forum Inquiries →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================================
          MEMBER DETAIL MODAL
          ====================================================================== */}
      {activeModalMember && (
        <div className="modal-overlay is-active" onClick={() => setActiveModalMember(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalMember(null)} aria-label="Close modal">
              &times;
            </button>
            
            <div className="modal-header">
              <img
                src={activeModalMember.avatar}
                alt={activeModalMember.name}
                className="modal-avatar"
                onError={(e) => { e.currentTarget.src = '/assets/team/hero_neural_core.jpg'; }}
              />
              <div>
                <h3 className="modal-name">{activeModalMember.name}</h3>
                <div className="modal-role">{activeModalMember.badge} · {activeModalMember.role}</div>
                <div style={{ fontSize: '12px', color: 'var(--steel-dim)', marginTop: '2px' }}>
                  AISF · Vishwakarma Institute of Technology
                </div>
              </div>
            </div>

            <p className="modal-bio">{activeModalMember.bio}</p>

            <div className="modal-skills-title">Core Competencies &amp; Research Focus</div>
            <div className="modal-skills">
              {activeModalMember.skills.map((skill) => (
                <span key={skill} className="modal-skill-tag">{skill}</span>
              ))}
            </div>

            <div className="modal-contacts">
              <div>
                Phone:{" "}
                {activeModalMember.phone !== "Email Preferred" ? (
                  <a href={`tel:${activeModalMember.phone.replace(/\s+/g, '')}`}>
                    <span>{activeModalMember.phone}</span>
                  </a>
                ) : (
                  <span>{activeModalMember.phone}</span>
                )}
              </div>
              <div>
                Email: <a href={`mailto:${activeModalMember.email}`}><span>{activeModalMember.email}</span></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* FOOTER (50% Transparent Glassmorphic Footer) */}
      {/* ========================================================= */}
      <Footer />

    </div>
  );
}
