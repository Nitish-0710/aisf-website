import React, { useState, useMemo } from "react";
import {
  Search,
  X,
  ArrowRight,
  Mail,
  Phone,
  FilterX,
} from "lucide-react";

import heroBgVideo from "../assets/bg_video_AISF_cut.mp4";
import aisfLogoImg from "../assets/AISF_Logo_NoBG.png";
import NeuralGlobeBackground from "../components/NeuralGlobeBackground";
import "../team.css";
import Footer from "../components/Footer";

// ============================================================================
// TEAM IMAGE IMPORTS
// ============================================================================

// Faculty
import nsImg from "../assets/team/ns.jpg";
import rppImg from "../assets/team/rpp.jpg";
import jbImg from "../assets/team/jb.jpg";

// Executive
import smImg from "../assets/team/sm.jpg";
import vnImg from "../assets/team/vn.jpg";

// Secretaries
import rmImg from "../assets/team/rm.jpg";
import spImg from "../assets/team/sp.jpg";
import scImg from "../assets/team/sc.jpg";
import sgImg from "../assets/team/sg.jpg";
import nImg from "../assets/team/n.jpg";
import srImg from "../assets/team/sr.jpg";
import ctImg from "../assets/team/ct.jpg";
import prImg from "../assets/team/pr.jpg";
import atharvaImg from "../assets/team/Atharva.jpg";
import nitishImg from "../assets/team/nitish.jpg";
import riyaImg from "../assets/team/riya.jpg";
import rushikeshImg from "../assets/team/Rushi.jpg";
import sohaImg from "../assets/team/Soha .jpg";
import praImg from "../assets/team/pra.jpg";
import rbImg from "../assets/team/rb.jpg";
import ojasImg from "../assets/team/Ojas.png";
import pImg from "../assets/team/p.jpg";
import rImg from "../assets/team/r.jpg";
import dImg from "../assets/team/d.jpg";
import vjImg from "../assets/team/vj.jpg";


// ============================================================================
// AISF TEAM DIRECTORY DATA
// ============================================================================

export const FACULTY_MEMBERS = [
  {
    id: "dr-nilesh-sable",
    name: "Dr. Nilesh Sable",
    initials: "NS",
    role: "Professor & Head of Department (HOD)",
    category: "faculty",
    badge: "HOD & CHIEF ADVISOR",
    dept: "Dept. of CSE (Artificial Intelligence) · VIT Pune",
    avatar: nsImg,
    phone: "+91 75880 19070",
    email: "nilesh.sable@vit.edu",
    quote:
      '"AISF empowers students to transition from core computational theory to scalable, real-world artificial intelligence engineering."',
    bio:
      "Professor and Head of the Department of Computer Science & Engineering (Artificial Intelligence) at Vishwakarma Institute of Technology, Pune. Senior Member of IEEE with extensive research leadership in Machine Learning, IoT, Cognitive Computing, Data Mining, and Network Security.",
    skills: [
      "Machine Learning",
      "Cognitive Computing",
      "IoT & Networking",
      "AI Research Strategy",
      "IEEE Senior Member",
    ],
  },

  {
    id: "prof-roshani-pawar",
    name: "Prof. Roshani Pawar",
    initials: "RP",
    role: "Assistant Professor & Faculty Coordinator",
    category: "faculty",
    badge: "HACKATHON COORDINATOR",
    dept: "Dept. of CSE (Artificial Intelligence) · VIT Pune",
    avatar: rppImg,
    phone: "+91 99229 35955",
    email: "roshani.pawar@vit.edu",
    quote:
      '"Fostering student innovation through competitive hackathons, project-based engineering, and deep industry-aligned mentorship."',
    bio:
      "Assistant Professor in the Department of Computer Science & Engineering (Artificial Intelligence) at VIT Pune. Official Faculty Coordinator for AISF and flagship national hackathons like CodeVerse and Code Apex, researching Machine Learning, Data Mining, and Applied AI systems.",
    skills: [
      "Machine Learning",
      "Data Mining",
      "Hackathon Mentorship",
      "Applied AI Systems",
      "Academic Coordination",
    ],
  },

  {
    id: "prof-jayshree-bedade",
    name: "Prof. Jayshree Bedade",
    initials: "JB",
    role: "Faculty Coordinator",
    category: "faculty",
    badge: "FACULTY COORDINATOR",
    dept: "Dept. of CSE (Artificial Intelligence) · VIT Pune",
    avatar: jbImg,
    phone: "+91 80074 75672",
    email: "",
    quote:
      '"Inspiring future AI researchers and software architects to build ethical, robust, and transformative technologies."',
    bio:
      "Assistant Professor in the Department of Computer Science & Engineering (Artificial Intelligence) at VIT Pune. Guiding student technical development, academic research initiatives, and specialized symposiums in AI and Deep Learning.",
    skills: [
      "Artificial Intelligence",
      "Deep Learning",
      "Cloud Computing",
      "Student Research",
      "Technical Mentorship",
    ],
  },
];


// ============================================================================
// CORE EXECUTIVE BOARD
// ============================================================================

export const EXECUTIVE_MEMBERS = [
  {
    id: "samarth-mahajan",
    name: "Samarth Mahajan",
    initials: "SM",
    role: "President",
    category: "leadership",
    badge: "EXECUTIVE BOARD · PRESIDENT",
    dept: "Dept. of CS (Artificial Intelligence) · VIT Pune",
    avatar: smImg,
    phone: "+91 70280 44996",
    email: "samarth.mahajan241@vit.edu",
    bio:
      "Leading AISF with a clear mission: turn theoretical AI concepts into production-grade systems and foster an elite engineering culture. Overseeing the national hackathon Code Apex 2.0, open-source model releases, and student research cohorts across VIT Pune.",
    skills: [
      "Deep Learning",
      "Leadership",
      "Hackathon Architecture",
      "Computer Vision",
      "Strategic AI Planning",
      "System Design",
    ],
  },

  {
    id: "vedant-nehe",
    name: "Vedant Nehe",
    initials: "VN",
    role: "Vice President",
    category: "leadership",
    badge: "EXECUTIVE BOARD · VICE PRESIDENT",
    dept: "Dept. of CS (Artificial Intelligence) · VIT Pune",
    avatar: vnImg,
    phone: "+91 97675 59932",
    email: "vedant.nehe24@vit.edu",
    bio:
      "Driving core club operations, technical sprint coordination, event logistics, and student research cohorts across the Artificial Intelligence Student Forum at Vishwakarma Institute of Technology.",
    skills: [
      "Machine Learning",
      "Operations Management",
      "Team Coordination",
      "AI Pipelines",
      "Event Execution",
      "Python",
    ],
  },
];


// ============================================================================
// DEPARTMENT SECRETARIES
// ============================================================================

export const SECRETARY_MEMBERS = [
  {
    id: "sec-raghav-mulay",
    name: "Raghav Mulay",
    initials: "RM",
    role: "Event & Operations Secretary",
    category: "secretary",
    badge: "EVENT & OPERATIONS",
    avatar: rmImg,
  },

  {
    id: "sec-shreyas-patil",
    name: "Shreyas Patil",
    initials: "SP",
    role: "Event & Operations Secretary",
    category: "secretary",
    badge: "EVENT & OPERATIONS",
    avatar: spImg,
  },

  {
    id: "sec-soham-chavan",
    name: "Soham Chavan",
    initials: "SC",
    role: "Event & Operations Secretary",
    category: "secretary",
    badge: "EVENT & OPERATIONS",
    avatar: scImg,
  },

  {
    id: "sec-swapnil-gulbhile",
    name: "Swapnil Gulbhile",
    initials: "SG",
    role: "Social Media Secretary",
    category: "secretary",
    badge: "SOCIAL MEDIA",
    avatar: sgImg,
  },

  {
    id: "sec-nisha-ughade",
    name: "Nisha Ughade",
    initials: "NU",
    role: "Finance Secretary",
    category: "secretary",
    badge: "FINANCE",
    avatar: nImg,
  },

  {
    id: "sec-shreya-ranjan",
    name: "Shreya Ranjan",
    initials: "SR",
    role: "Technical Secretary",
    category: "secretary",
    badge: "TECHNICAL SECRETARY",
    avatar: srImg,
  },

  {
    id: "sec-chinmay-tidke",
    name: "Chinmay Tidke",
    initials: "CT",
    role: "Technical Secretary",
    category: "secretary",
    badge: "TECHNICAL SECRETARY",
    avatar: ctImg,
  },

  {
    id: "sec-pranav-raut",
    name: "Pranav Raut",
    initials: "PR",
    role: "Technical Secretary",
    category: "secretary",
    badge: "TECHNICAL SECRETARY",
    avatar: prImg,
  },

  {
    id: "sec-atharva-mulik",
    name: "Atharva Mulik",
    initials: "AM",
    role: "Technical Secretary",
    category: "secretary",
    badge: "TECHNICAL SECRETARY",
    avatar: atharvaImg,
  },

  {
    id: "sec-nitish-sahu",
    name: "Nitish Sahu",
    initials: "NS",
    role: "Technical Secretary",
    category: "secretary",
    badge: "TECHNICAL SECRETARY",
    avatar: nitishImg,
  },

  {
    id: "sec-riya-somani",
    name: "Riya Somani",
    initials: "RS",
    role: "Design Secretary",
    category: "secretary",
    badge: "DESIGN SECRETARY",
    avatar: riyaImg,
  },

  {
    id: "sec-rushikesh-rathod",
    name: "Rushikesh Rathod",
    initials: "RR",
    role: "Design Secretary",
    category: "secretary",
    badge: "DESIGN SECRETARY",
    avatar: rushikeshImg,
  },

  {
    id: "sec-soha-jamadar",
    name: "Soha Jamadar",
    initials: "SJ",
    role: "Industrial Relations Secretary",
    category: "secretary",
    badge: "INDUSTRIAL RELATIONS",
    avatar: sohaImg,
  },

  {
    id: "sec-pratham-shelke",
    name: "Pratham Shelke",
    initials: "PS",
    role: "Public Relations & Outreach Secretary",
    category: "secretary",
    badge: "PR & OUTREACH",
    avatar: praImg,
  },

  {
    id: "sec-ruturaj-bhome",
    name: "Ruturaj Bhome",
    initials: "RB",
    role: "Public Relations & Outreach Secretary",
    category: "secretary",
    badge: "PR & OUTREACH",
    avatar: rbImg,
  },

  {
    id: "sec-ojas-kulkarni",
    name: "Ojas Kulkarni",
    initials: "OK",
    role: "Photography Secretary",
    category: "secretary",
    badge: "PHOTOGRAPHY SECRETARY",
    avatar: ojasImg,
  },

  {
    id: "sec-prathisthta-yadav",
    name: "Prathisthta Yadav",
    initials: "PY",
    role: "Photography Secretary",
    category: "secretary",
    badge: "PHOTOGRAPHY SECRETARY",
    avatar: pImg,
  },

  {
    id: "sec-ragini-kengale",
    name: "Ragini Kengale",
    initials: "RK",
    role: "Aesthetics Secretary",
    category: "secretary",
    badge: "AESTHETICS SECRETARY",
    avatar: rImg,
  },

  {
    id: "sec-devyani-shingane",
    name: "Devyani Shingane",
    initials: "DS",
    role: "Documentation Secretary",
    category: "secretary",
    badge: "DOCUMENTATION SECRETARY",
    avatar: dImg,
  },

  {
    id: "sec-vidhan-jain",
    name: "Vidhan Jain",
    initials: "VJ",
    role: "Sponsorship Secretary",
    category: "secretary",
    badge: "SPONSORSHIP SECRETARY",
    avatar: vjImg,
  },
];

export const ALL_DIRECTORY_MEMBERS = [
  ...FACULTY_MEMBERS,
  ...EXECUTIVE_MEMBERS,
  ...SECRETARY_MEMBERS,
];


// ============================================================================
// MAIN TEAM PAGE
// ============================================================================

export default function Team() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalMember, setActiveModalMember] = useState(null);

  // --------------------------------------------------------------------------
  // FILTER CATEGORIES
  // --------------------------------------------------------------------------

  const filterPills = [
    {
      id: "all",
      label: "All Directory",
    },
    {
      id: "faculty",
      label: "Faculty Mentors",
    },
    {
      id: "leadership",
      label: "Core Executive",
    },
    {
      id: "secretary",
      label: "Secretaries & Leads",
    },
  ];

  // --------------------------------------------------------------------------
  // FILTERING
  // --------------------------------------------------------------------------

  const filterList = (list) => {
    const q = searchQuery.trim().toLowerCase();

    return list.filter((member) => {
      const matchesCategory =
        selectedCategory === "all" ||
        member.category === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!q) {
        return true;
      }

      const nameMatch =
        member.name?.toLowerCase().includes(q);

      const roleMatch =
        member.role?.toLowerCase().includes(q);

      const deptMatch =
        (member.dept || "").toLowerCase().includes(q);

      const skillsMatch =
        (member.skills || []).some((skill) =>
          skill.toLowerCase().includes(q)
        );

      const bioMatch =
        (member.bio || "").toLowerCase().includes(q);

      const badgeMatch =
        (member.badge || "").toLowerCase().includes(q);

      return (
        nameMatch ||
        roleMatch ||
        deptMatch ||
        skillsMatch ||
        bioMatch ||
        badgeMatch
      );
    });
  };

  const filteredFaculty = useMemo(
    () => filterList(FACULTY_MEMBERS),
    [searchQuery, selectedCategory]
  );

  const filteredExec = useMemo(
    () => filterList(EXECUTIVE_MEMBERS),
    [searchQuery, selectedCategory]
  );

  const filteredSecretaries = useMemo(
    () => filterList(SECRETARY_MEMBERS),
    [searchQuery, selectedCategory]
  );

  const totalVisible =
    filteredFaculty.length +
    filteredExec.length +
    filteredSecretaries.length;


  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <div className="team-page-wrapper bg-[#030408] text-[#f0f6fc] min-h-screen relative font-sans selection:bg-[#00d2ff] selection:text-black">

      {/* ====================================================================
          3D BACKGROUND
          ==================================================================== */}

      <NeuralGlobeBackground />


      {/* ====================================================================
          NAVBAR
          ==================================================================== */}

      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">

        <nav className="pointer-events-auto rounded-full px-4 py-2 flex items-center gap-3 bg-[#0a1020]/80 backdrop-blur-xl border border-white/10 shadow-2xl">

          <a
            href="/"
            className="flex items-center gap-2 pr-2 border-r border-white/10"
          >
            <img
              src={aisfLogoImg}
              alt="AISF Logo"
              className="h-7 w-auto object-contain"
            />
          </a>

          <div className="flex items-center gap-1">

            <a
              href="/"
              className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full text-[#94a3b8] hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              href="/events"
              className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full text-[#94a3b8] hover:text-white transition-colors"
            >
              Events
            </a>

            <a
              href="/team"
              className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-[#00d2ff]/15 text-[#00d2ff] border border-[#00d2ff]/30"
            >
              Team
            </a>

            <a
              href="#contact"
              className="ml-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
            >
              Contact Us
              <ArrowRight size={13} />
            </a>

          </div>

        </nav>

      </header>


      {/* ====================================================================
          HERO SECTION
          ==================================================================== */}

      <section
        className="team-hero"
        id="teamTop"
      >

        <div
          className="team-hero__video-wrap"
          aria-hidden="true"
        >

          <video
            className="team-hero__video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source
              src={heroBgVideo}
              type="video/mp4"
            />
          </video>

          <div className="team-hero__video-overlay" />

        </div>


        <div className="wrap">

          <div className="team-hero__content">

            <p className="eyebrow eyebrow--center">
              // Official Directory · VIT Pune
            </p>

            <h1 className="team-hero__title">
              THE MINDS BEHIND
              <br />
              <span className="glow-cyan">
                AISF
              </span>
            </h1>

            <p className="team-hero__sub">
              Guided by distinguished faculty advisors,
              steered by executive leadership, and powered
              by domain secretaries — bridging the gap
              between theoretical machine learning and
              production engineering at Vishwakarma
              Institute of Technology.
            </p>


            {/* ==============================================================
                STATS
                ============================================================== */}

            <div className="team-stats-bar">

              <div className="team-stat-box">
                <div className="team-stat-num">
                  {FACULTY_MEMBERS.length}
                </div>
                <div className="team-stat-label">
                  Faculty Advisors
                </div>
              </div>

              <div className="team-stat-box">
                <div className="team-stat-num">
                  {EXECUTIVE_MEMBERS.length}
                </div>
                <div className="team-stat-label">
                  Executive Board
                </div>
              </div>

              <div className="team-stat-box">
                <div className="team-stat-num">
                  {SECRETARY_MEMBERS.length}
                </div>
                <div className="team-stat-label">
                  Secretaries &amp; Leads
                </div>
              </div>

              <div className="team-stat-box">
                <div className="team-stat-num">
                  500<span>+</span>
                </div>
                <div className="team-stat-label">
                  Student Members
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ====================================================================
          SEARCH & FILTER CONTROLS
          ==================================================================== */}

      <div
        className="directory-controls sticky top-20 z-30"
        id="directoryControls"
      >

        <div className="wrap">

          <div className="directory-controls__inner">

            {/* Search */}

            <div className="search-wrapper">

              <Search
                className="search-icon text-[#00d2ff]"
                size={16}
              />

              <input
                type="text"
                className="search-input"
                placeholder="Search by name, role, department, skill..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
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


            {/* Filters */}

            <div className="filter-pills-row">

              {filterPills.map((pill) => (

                <button
                  key={pill.id}
                  className={`filter-pill ${
                    selectedCategory === pill.id
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedCategory(pill.id)
                  }
                >
                  {pill.label}
                </button>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ====================================================================
          MAIN CONTENT
          ==================================================================== */}

      <main className="relative z-10 pb-24">


        {/* ==================================================================
            FACULTY
            ================================================================== */}

        {filteredFaculty.length > 0 && (

          <section
            className="team-section"
            id="facultySection"
          >

            <div className="wrap">

              <div className="section-title-wrap">

                <p className="eyebrow">
                  // Mentorship &amp; Academic Guidance · 01
                </p>

                <h2>
                  Faculty Advisory Board
                </h2>

                <p>
                  Distinguished professors and researchers
                  at Vishwakarma Institute of Technology
                  providing strategic mentorship,
                  institutional resources, and industry
                  alignments.
                </p>

              </div>


              <div className="faculty-roster-grid">

                {filteredFaculty.map((member) => {

                  const contactHref =
                    member.phone
                      ? `tel:${member.phone.replace(
                          /\s+/g,
                          ""
                        )}`
                      : member.email
                      ? `mailto:${member.email}`
                      : "#";

                  const contactText =
                    member.phone ||
                    member.email ||
                    "Contact AISF";

                  return (

                    <div
                      key={member.id}
                      className="faculty-card-premium hover-glow-card"
                    >

                      <div>

                        <div className="faculty-card-premium__header">

                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="faculty-card-premium__avatar"
                          />

                          <div className="faculty-card-premium__meta">

                            <span className="faculty-card-premium__badge">
                              {member.badge}
                            </span>

                            <h3>
                              {member.name}
                            </h3>

                            <div className="faculty-card-premium__dept">
                              {member.dept}
                            </div>

                          </div>

                        </div>


                        <p className="faculty-card-premium__quote">
                          {member.quote}
                        </p>


                        <div className="faculty-card-premium__tags">

                          {member.skills
                            .slice(0, 3)
                            .map((skill) => (

                              <span
                                key={skill}
                                className="faculty-card-premium__tag"
                              >
                                {skill}
                              </span>

                            ))}

                        </div>

                      </div>


                      <div className="faculty-card-premium__footer">

                        <a
                          className="faculty-card-premium__contact"
                          href={contactHref}
                          title={`Contact ${member.name}`}
                        >
                          <Mail
                            size={14}
                            className="inline mr-1 text-[#00d2ff]"
                          />

                          {contactText}
                        </a>


                        <button
                          className="btn btn-sm btn--ghost detail-trigger"
                          onClick={() =>
                            setActiveModalMember(member)
                          }
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


        {/* ==================================================================
            EXECUTIVE BOARD
            ================================================================== */}

        {filteredExec.length > 0 && (

          <section
            className="team-section"
            id="executiveSection"
          >

            <div className="wrap">

              <div className="section-title-wrap">

                <p className="eyebrow">
                  // Executive Leadership · 02
                </p>

                <h2>
                  Core Executive Board
                </h2>

                <p>
                  The presidential leadership directing
                  AISF's strategic vision, national
                  hackathon platforms, and technical
                  innovation pipelines at VIT Pune.
                </p>

              </div>


              <div className="executive-roster-grid">

                {filteredExec.map((member, idx) => {

                  const contactHref =
                    member.phone
                      ? `tel:${member.phone.replace(
                          /\s+/g,
                          ""
                        )}`
                      : `mailto:${member.email}`;

                  const contactText =
                    member.phone ||
                    member.email;

                  return (

                    <div
                      key={member.id}
                      className="executive-card hover-glow-card"
                    >

                      <div className="executive-card__top">

                        <div className="executive-card__avatar-wrap">

                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="executive-card__avatar"
                          />

                        </div>

                        <span className="executive-card__num">
                          // 0{idx + 1}
                        </span>

                      </div>


                      <div className="executive-card__body">

                        <span className="executive-card__badge">
                          {member.badge}
                        </span>

                        <h3 className="executive-card__name">
                          {member.name}
                        </h3>

                        <div className="executive-card__role">
                          {member.role}
                        </div>

                        <p className="executive-card__bio">
                          {member.bio}
                        </p>


                        <div className="executive-card__skills">

                          {member.skills
                            .slice(0, 4)
                            .map((skill) => (

                              <span
                                key={skill}
                                className="executive-card__skill"
                              >
                                {skill}
                              </span>

                            ))}

                        </div>

                      </div>


                      <div className="executive-card__footer">

                        <a
                          className="executive-card__contact"
                          href={contactHref}
                          title={`Connect with ${member.name}`}
                        >

                          <Phone
                            size={13}
                            className="inline mr-1 text-[#00d2ff]"
                          />

                          {contactText}

                        </a>


                        <button
                          className="executive-card__modal-btn detail-trigger"
                          onClick={() =>
                            setActiveModalMember(member)
                          }
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


        {/* ==================================================================
            SECRETARIES
            ================================================================== */}

        {filteredSecretaries.length > 0 && (

          <section
            className="team-section"
            id="secretariesSection"
          >

            <div className="wrap">

              <div className="section-title-wrap">

                <p className="eyebrow">
                  // Departmental Leads · 03
                </p>

                <h2>
                  Secretaries &amp; Domain Heads
                </h2>

                <p>
                  Specialized student leaders heading
                  technical research, flagship hackathons,
                  creative design, public relations,
                  photography, documentation, and club
                  operations.
                </p>

              </div>


              <div className="secretaries-roster-grid">

                {filteredSecretaries.map(
                  (member, idx) => (

                    <div
                      key={member.id}
                      className="secretary-card"
                    >

                      <div>

                        <div className="secretary-card__top">

                          <div
                            className={`secretary-card__avatar ${
                              idx % 2 === 0
                                ? ""
                                : "alt"
                            }`}
                          >

                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="secretary-card__avatar-image rounded-2xl"
                            />

                          </div>


                          <span className="secretary-card__tag">
                            SECRETARY
                          </span>

                        </div>


                        <div className="secretary-card__role">
                          {member.role}
                        </div>

                        <h3 className="secretary-card__name">
                          {member.name}
                        </h3>

                        <p className="secretary-card__desc">
                          {member.badge}
                        </p>

                      </div>


                      <div className="secretary-card__bottom">

                        <span className="secretary-card__contact">
                          AISF · VIT Pune
                        </span>

                        <button
                          className="secretary-card__btn detail-trigger"
                          onClick={() =>
                            setActiveModalMember(member)
                          }
                        >
                          Profile ↗
                        </button>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </section>

        )}


        {/* ==================================================================
            NO RESULTS
            ================================================================== */}

        {totalVisible === 0 && (

          <div className="no-results-box is-visible">

            <FilterX
              size={36}
              className="text-[#00d2ff] mb-3"
            />

            <h3>
              No Directory Matches Found
            </h3>

            <p>
              We couldn't find any team members
              matching your search query. Try
              searching by another keyword or
              reset the category filter.
            </p>

          </div>

        )}


        {/* ==================================================================
            RECRUITMENT CTA
            ================================================================== */}

        <section
          className="team-recruitment"
          id="joinTeam"
        >

          <div className="wrap">

            <div className="team-recruitment__box">

              <p className="eyebrow eyebrow--center">
                // Join the Forum
              </p>

                            <div className="team-recruitment__actions">

                <a
                  href="https://instagram.com/aisf.vit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Connect on Instagram ↗
                </a>

                <a
                  href="https://www.linkedin.com/company/artificial-intelligence-student-forum-aisf/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  Connect on LinkedIn→
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* ====================================================================
          MEMBER DETAIL MODAL
          ==================================================================== */}

      {activeModalMember && (

        <div
          className="modal-overlay is-active"
          onClick={() =>
            setActiveModalMember(null)
          }
        >

          <div
            className="modal-box"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setActiveModalMember(null)
              }
              aria-label="Close modal"
            >
              &times;
            </button>


            <div className="modal-header">

              <img
                src={activeModalMember.avatar}
                alt={activeModalMember.name}
                className="modal-avatar"
              />

              <div>

                <h3 className="modal-name">
                  {activeModalMember.name}
                </h3>

                <div className="modal-role">
                  {activeModalMember.badge}
                  {" · "}
                  {activeModalMember.role}
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--steel-dim)",
                    marginTop: "2px",
                  }}
                >
                  AISF · Vishwakarma Institute of
                  Technology
                </div>

              </div>

            </div>


            {/* Faculty / Executive Bio */}

            {activeModalMember.bio && (

              <p className="modal-bio">
                {activeModalMember.bio}
              </p>

            )}


            {/* Skills */}

            {activeModalMember.skills &&
              activeModalMember.skills.length > 0 && (

                <>

                  <div className="modal-skills-title">
                    Core Competencies &amp;
                    Research Focus
                  </div>

                  <div className="modal-skills">

                    {activeModalMember.skills.map(
                      (skill) => (

                        <span
                          key={skill}
                          className="modal-skill-tag"
                        >
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                </>

              )}


            {/* Contact */}

            <div className="modal-contacts">

              {activeModalMember.phone && (

                <div>

                  Phone:{" "}

                  <a
                    href={`tel:${activeModalMember.phone.replace(
                      /\s+/g,
                      ""
                    )}`}
                  >
                    <span>
                      {activeModalMember.phone}
                    </span>
                  </a>

                </div>

              )}


              {activeModalMember.email && (

                <div>

                  Email:{" "}

                  <a
                    href={`mailto:${activeModalMember.email}`}
                  >
                    <span>
                      {activeModalMember.email}
                    </span>
                  </a>

                </div>

              )}


              {/* Secretary fallback */}

              {!activeModalMember.phone &&
                !activeModalMember.email && (

                  <div>
                    AISF · Vishwakarma Institute
                    of Technology
                  </div>

                )}

            </div>

          </div>

        </div>

      )}


      {/* ====================================================================
          FOOTER
          ==================================================================== */}

      <Footer />

    </div>
  );
}
