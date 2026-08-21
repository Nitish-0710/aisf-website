import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import aisfLogo from "../assets/aisf-logo.png";

const leadership = [
  { role: "President", name: "Om Kumar Garg", contact: "+91-8305261866" },
  { role: "Vice President", name: "Ruturaj Bhome", contact: "+91-8468812201" },
  {
    role: "Event Head (Hackathon)",
    name: "Samarth Mahajan",
    contact: "+91-7028044996",
  },
  {
    role: "PR & Branding Head",
    name: "Pratham Shelke",
    contact: "+91-8767852276",
  },
  {
    role: "Technical Head",
    name: "Shreya Ranjan",
    contact: "samir.shreya24@vit.edu",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/csai_aisf",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/artificial-intelligence-student-forum-aisf/",
  },
  { icon: Mail, label: "Email", href: "mailto:aisf@vit.edu" },
];

const SiteFooter = () => {
  return (
    <footer className="bg-card/60 text-gray-300 border-t border-gray-700 relative z-20">
      <div className="container mx-auto px-6 py-12">
        {/* Change grid from 3 to 2 columns */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div>
            {/* AISF Logo */}
            <img
              src={aisfLogo}
              alt="AISF Logo"
              className="mb-4 max-w-[200px]"
            />
            {/* Tagline */}
            <p className="mb-6 max-w-xs">
              Fostering innovation, learning, and collaboration in AI and
              technology.
            </p>

            {/* Google Map Embed */}
            <div className="rounded overflow-hidden shadow-lg">
              <iframe
                title="VIT Pune Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.442016685598!2d73.86562341025981!3d18.463626970839634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2cea9f064!2sVishwakarma%20Institute%20of%20Technology%20(VIT)!5e0!3m2!1sen!2sin!4v1772115415931!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social Icons */}
          </div>

          <div>
            <h3 className="text-primary section-title-flicker font-semibold text-lg mb-6 lg:text-center">
              Connect with us 
            </h3>
            <div className="flex lg:flex-col lg:items-center gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-20 h-20 flex align-middle items-center justify-center border border-border rounded text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_15px_hsl(348_100%_50%_/_0.2)] transition-all"
                >
                  <Icon size={30} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="text-primary section-title-flicker font-semibold text-lg mb-6">
              Contact
            </h3>

            <div className="flex items-center gap-2 mb-3 text-gray-400 text-lg">
              <MapPin size={20} />
              <p>VIT Bibwewadi, Pune, Maharashtra, India</p>
            </div>

            <div className="flex items-center gap-2 mb-6 text-gray-400 text-lg">
              <Mail size={20} />
              <a
                href="mailto:aisf@vit.edu"
                className="hover:text-blue-500 transition"
              >
                aisf@vit.edu
              </a>
            </div>

            {/* Leadership */}
            <div className="space-y-2 text-gray-400 text-lg leading-relaxed">
              {leadership.map(({ role, name, contact }) => (
                <p key={role}>
                  <strong>
                    {" "}
                    {name} ({role}):
                  </strong>
                  {contact}
                  <br />
                  {/* <span className="text-gray-400"></span> */}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between text-gray-500 text-s">
          <p>© 2025 AISF VIT Pune. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">CODE APEX 2.0</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
