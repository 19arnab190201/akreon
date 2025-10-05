"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
       
        bg-transparent`}
      style={{
        backdropFilter: "none",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(23, 23, 23) 100%)",
        width: "100%",
        opacity: 1,
      }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Enhanced Logo */}
          <div className='flex-shrink-0'>
            <a
              href='#home'
              className='group flex items-center space-x-3 text-white font-bold text-xl hover:scale-105 transition-transform duration-300'>
              <div className='relative w-10 h-10 bg-gradient-to-br from-accent-orange to-accent-muted rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-accent-orange/30 transition-all duration-300'>
                <span className='text-white font-bold text-lg'>A</span>
                <div className='absolute inset-0 bg-gradient-to-br from-accent-orange to-accent-muted rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
              <span className='group-hover:text-accent-light transition-colors duration-300'>
                Akreon
              </span>
            </a>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className='hidden lg:block'>
            <div className='ml-8 flex items-baseline space-x-0.5'>
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='group relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-accent-light text-white/90'>
                  <span className='relative z-10'>{item.name}</span>
                  <div className='absolute inset-0 bg-accent-orange/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300' />
                  <div className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent-orange group-hover:w-full group-hover:left-0 transition-all duration-300' />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className='hidden lg:block'>
            <button
              className='group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-1'
              style={{
                backgroundColor: "rgba(138, 138, 138, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.38)",
                borderRadius: "50px",
                backdropFilter: "blur(5px)",
                boxShadow: "inset 0px 0px 6px 3px rgba(138, 138, 138, 0.3)",
                color: "#ffffff",
              }}>
              <span>Start Project</span>
            </button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='relative p-2 text-white hover:text-accent-light transition-colors duration-300'
              aria-label='Toggle mobile menu'>
              <div className='relative w-6 h-6'>
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45" : "rotate-0"
                  }`}>
                  <div className='w-6 h-0.5 bg-current transform transition-all duration-300' />
                </div>
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}>
                  <div className='w-6 h-0.5 bg-current transform translate-y-1' />
                  <div className='w-6 h-0.5 bg-current transform -translate-y-1' />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='lg:hidden animate-in slide-in-from-top-4 duration-300'>
            <div className='px-4 pt-4 pb-6 space-y-2 bg-black/50 backdrop-blur-xl rounded-2xl mt-4 border border-white/10 shadow-2xl'>
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='group flex items-center px-4 py-3 text-white/90 hover:text-accent-light text-base font-medium transition-all duration-300 rounded-lg hover:bg-white/5'
                  onClick={() => setIsMobileMenuOpen(false)}>
                  <span className='group-hover:translate-x-2 transition-transform duration-300'>
                    {item.name}
                  </span>
                  <div className='ml-auto w-0 group-hover:w-2 h-0.5 bg-accent-orange transition-all duration-300' />
                </a>
              ))}
              <div className='pt-4 border-t border-white/10'>
                <button
                  className='w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-1'
                  style={{
                    backgroundColor: "rgba(138, 138, 138, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.38)",
                    borderRadius: "50px",
                    backdropFilter: "blur(5px)",
                    boxShadow: "inset 0px 0px 6px 3px rgba(138, 138, 138, 0.3)",
                    color: "#ffffff",
                  }}>
                  <span>Start Project</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
