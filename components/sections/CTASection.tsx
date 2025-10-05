"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          ctaRef.current,
          statsRef.current,
        ],
        {
          opacity: 0,
          y: 60,
        }
      );

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: Shield, value: "99%", label: "Success Rate" },
  ];

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='py-20 px-4 sm:px-6 lg:px-8 site-bg dots-pattern'>
      <div className='max-w-7xl mx-auto'>
        {/* Main CTA */}
        <div className='text-center mb-16'>
          <h2
            ref={titleRef}
            className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>
            Ready to Transform Your
            <span className='gradient-text block'>Digital Presence?</span>
          </h2>

          <p
            ref={subtitleRef}
            className='text-white/70 text-lg max-w-3xl mx-auto mb-12'>
            Join hundreds of satisfied clients who have elevated their business
            with our cutting-edge digital solutions. Let&apos;s build something
            extraordinary together.
          </p>

          <div
            ref={ctaRef}
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16'>
            <button className='group bg-gradient-to-r from-accent-orange to-primary-start text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-accent-orange/25 transition-all duration-200 hover:-translate-y-1 flex items-center gap-2'>
              Start Your Project
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-200' />
            </button>

            <button className='group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-1 flex items-center gap-2'>
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className='text-center group'>
                <div className='w-20 h-20 bg-gradient-to-br from-accent-orange/20 to-accent-muted/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <IconComponent className='w-10 h-10 text-accent-orange' />
                </div>
                <div className='text-3xl sm:text-4xl font-bold text-white mb-2'>
                  {stat.value}
                </div>
                <div className='text-white/70 font-medium'>{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className='bg-gradient-to-r from-white/5 to-black/50 border border-white/5 rounded-3xl p-8 lg:p-12 text-center'>
          <h3 className='text-2xl lg:text-3xl font-bold text-white mb-4'>
            Let&apos;s Discuss Your Project
          </h3>
          <p className='text-white/70 text-lg mb-8 max-w-2xl mx-auto'>
            Schedule a free consultation to explore how we can help bring your
            vision to life with our expert development and design services.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <button className='bg-gradient-to-r from-accent-orange to-primary-start text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-accent-orange/25 transition-all duration-200 hover:-translate-y-1'>
              Get Free Quote
            </button>
            <div className='text-white/60 text-sm'>
              <span className='text-white font-semibold'>
                Free consultation
              </span>{" "}
              • No commitment required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
