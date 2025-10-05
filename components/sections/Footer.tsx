"use client";

import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Shopify Development", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className='bg-black/20 border-t border-white/5'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* Brand */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-br from-accent-orange to-accent-muted rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>A</span>
              </div>
              <span className='text-white font-bold text-xl'>Akreon</span>
            </div>
            <p className='text-white/60 text-sm leading-relaxed mb-6'>
              Transforming ideas into exceptional digital experiences through
              innovative app development, web solutions, and design excellence.
            </p>
            <div className='flex space-x-4'>
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href='#'
                  className='w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:text-accent-orange hover:bg-white/10 transition-all duration-200'
                  aria-label={social}>
                  <span className='text-sm font-medium'>{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Services</h3>
            <ul className='space-y-3'>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-white/60 hover:text-accent-orange transition-colors duration-200 text-sm'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Company</h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-white/60 hover:text-accent-orange transition-colors duration-200 text-sm'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Support</h3>
            <ul className='space-y-3'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-white/60 hover:text-accent-orange transition-colors duration-200 text-sm'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between'>
          <p className='text-white/60 text-sm'>
            © {currentYear} Akreon. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className='mt-4 sm:mt-0 w-12 h-12 bg-gradient-to-br from-accent-orange/20 to-accent-muted/10 rounded-full flex items-center justify-center text-white hover:bg-accent-orange/30 transition-all duration-200 hover:-translate-y-1'
            aria-label='Scroll to top'>
            <ArrowUp className='w-5 h-5' />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
