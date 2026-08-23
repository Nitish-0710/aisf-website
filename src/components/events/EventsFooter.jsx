   {/* ========================================================= */}
      {/* 7. FOOTER (Matching Reference Layout & Structure) */}
      {/* ========================================================= */}
      <footer id="contact" className="relative bg-[#05070A]/85 border-t border-white/10 pt-16 pb-12 px-6 sm:px-12 lg:px-20 z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
            
            {/* Column 1: Logo, Tagline & Embedded Google Maps */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src={aisfLogoImg}
                  alt="AISF Logo"
                  className="h-8 w-auto object-contain bg-transparent"
                />
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm font-normal">
                Fostering innovation, learning, and collaboration in AI and technology.
              </p>

              {/* Functional Google Maps Card */}
              <div className="relative mt-5 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#030406] w-full max-w-[340px] h-[190px] group">
                <iframe
                  title="VIT Pune Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4419999786675!2d73.86566817595514!3d18.46362697091535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2ca9f083a!2sVishwakarma%20Institute%20of%20Technology%20(VIT)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.google.com/?q=Vishwakarma+Institute+of+Technology,+Bibwewadi,+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#05070A]/90 hover:bg-[#2563EB] text-[#F8FAFC] text-[11px] font-medium border border-white/15 backdrop-blur-md transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Open in Maps</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Column 2: Connect with us (Centered Glass Buttons) */}
            <div className="md:col-span-3 flex flex-col items-start md:items-center">
              <div className="space-y-4 w-full max-w-[200px]">
                <h4 className="text-base sm:text-lg font-mono font-bold tracking-tight text-[#F8FAFC]">
                  Connect with us
                </h4>
                
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/csai_aisf/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#2563EB]/15 transition-all duration-200"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/artificial-intelligence-student-forum-aisf/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#2563EB]/15 transition-all duration-200"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="mailto:aisf@vit.edu"
                    aria-label="Email"
                    className="w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#2563EB]/15 transition-all duration-200"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Details & Leadership */}
            <div className="md:col-span-4 space-y-4 font-mono">
              <h4 className="text-base sm:text-lg font-mono font-bold tracking-tight text-[#F8FAFC]">
                Contact
              </h4>

              {/* Location & Email info */}
              <div className="space-y-2 text-xs sm:text-sm text-[#94A3B8]">
                <a
                  href="https://maps.google.com/?q=Vishwakarma+Institute+of+Technology,+Bibwewadi,+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 hover:text-[#3B82F6] transition-colors"
                >
                  <MapPin size={15} className="text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>VIT Bibwewadi, Pune, Maharashtra, India</span>
                </a>
                <a
                  href="mailto:aisf@vit.edu"
                  className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
                >
                  <Mail size={15} className="text-[#3B82F6] shrink-0" />
                  <span>aisf@vit.edu</span>
                </a>
              </div>

              {/* Team Contacts */}
              <div className="pt-3 border-t border-white/10 space-y-2 text-xs leading-relaxed text-[#94A3B8]">
                <div>
                  <span className="text-[#F8FAFC] font-medium">Om Kumar Garg: </span>
                  <a href="tel:+918305261866" className="hover:text-[#3B82F6] transition-colors">
                    +91-8305261866
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Ruturaj Bhome: </span>
                  <a href="tel:+918468812201" className="hover:text-[#3B82F6] transition-colors">
                    +91-8468812201
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Samarth Mahajan (President): </span>
                  <a href="tel:+917028044996" className="hover:text-[#3B82F6] transition-colors">
                    +91-7028044996
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Pratham Shelke (PR &amp; Branding Secretary): </span>
                  <a href="tel:+918767852276" className="hover:text-[#3B82F6] transition-colors">
                    +91-8767852276
                  </a>
                </div>
                <div>
                  <span className="text-[#F8FAFC] font-medium">Shreya Ranjan (Technical Secretary): </span>
                  <a href="mailto:samir.shreya24@vit.edu" className="hover:text-[#3B82F6] transition-colors">
                    samir.shreya24@vit.edu
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-mono">
            <p>© 2026 AISF VIT Pune. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="text-xs uppercase tracking-widest text-[#94A3B8]">AI Student Forum</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#3B82F6] transition-colors group cursor-pointer"
              >
                <span>Back to top</span>
                <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </footer>