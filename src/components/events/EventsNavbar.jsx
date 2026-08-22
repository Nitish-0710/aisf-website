import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import aisfLogoImg from "../../assets/AISF_Logo_NoBG.png";

function EventsNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      {/* Floating navbar */}
      <header className="fixed top-4 sm:top-6 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
        <nav
          className="
            pointer-events-auto
            rounded-full
            px-3.5 sm:px-4
            py-2
            flex
            items-center
            gap-2 sm:gap-3
            bg-[rgba(10,14,22,0.75)]
            backdrop-blur-[18px]
            border
            border-white/[0.12]
            shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)]
          "
          aria-label="Main Navigation"
        >
          {/* AISF Logo */}
          <a
            href="/"
            className="inline-flex items-center px-1"
          >
            <img
              src={aisfLogoImg}
              alt="AISF - Artificial Intelligence Student Forum"
              className="h-7 sm:h-8 w-auto object-contain"
              draggable={false}
            />
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isContact = item.name === "Contact Us";
              const isActive = item.name === "Events";

              if (isContact) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="
                      ml-2
                      bg-[#2563EB]
                      hover:bg-[#1D4ED8]
                      text-white
                      font-semibold
                      text-xs sm:text-sm
                      px-4
                      py-2
                      rounded-full
                      transition-colors
                      active:scale-95
                      flex
                      items-center
                      gap-1.5
                    "
                  >
                    {item.name}
                    <ArrowRight size={13} />
                  </a>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    text-xs sm:text-sm
                    font-medium
                    px-3.5
                    py-1.5
                    rounded-full
                    transition-colors
                    ${
                      isActive
                        ? "text-[#F8FAFC] bg-white/[0.08]"
                        : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06]"
                    }
                  `}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-full
              text-[#94A3B8]
              hover:text-[#F8FAFC]
              hover:bg-white/[0.06]
              transition-colors
              focus:outline-none
            "
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div
        className={`
          fixed
          top-20
          inset-x-4
          z-[99]
          md:hidden
          transition-all
          duration-300
          origin-top
          ${
            menuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="glass-nav-scrolled rounded-2xl p-4 border border-white/10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isContact = item.name === "Contact Us";
              const isActive = item.name === "Events";

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-medium
                    transition-colors
                    flex
                    items-center
                    justify-between
                    ${
                      isContact
                        ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold"
                        : isActive
                        ? "text-[#F8FAFC] bg-white/[0.08]"
                        : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06]"
                    }
                  `}
                >
                  {item.name}

                  <ArrowRight size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsNavbar;