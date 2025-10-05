"use client";

import { useEffect, useRef } from "react";
import {
  Monitor,
  Smartphone,
  Palette,
  ShoppingCart,
  ArrowUpRight,
  BarChart3,
  Target,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([titleRef.current, leftCardRef.current, rightCardRef.current], {
        opacity: 0,
        y: 80,
      });

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
      }).to(
        [leftCardRef.current, rightCardRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies",
      features: [
        "React/Next.js",
        "TypeScript",
        "Tailwind CSS",
        "API Integration",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "React Native",
        "Flutter",
        "iOS/Android",
        "App Store Optimization",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description: "E-commerce solutions that drive sales and growth",
      features: [
        "Custom Themes",
        "App Development",
        "Store Optimization",
        "Payment Integration",
      ],
    },
  ];

  return (
    <section
      id='services'
      ref={sectionRef}
      className='py-20 px-4 sm:px-6 lg:px-8 site-bg'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h2
            ref={titleRef}
            className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>
            Our
            <span className='gradient-text'> Services</span>
          </h2>
          <p className='text-white/70 text-lg max-w-3xl mx-auto'>
            From concept to launch, we provide end-to-end digital solutions that
            help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16'>
          {/* Left Card - Performance Tracking */}
          <div
            ref={leftCardRef}
            className='group bg-gradient-to-b from-white/5 to-black/50 border border-white/5 rounded-2xl p-8 card-hover hover:border-accent-orange/20 transition-all duration-300'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-16 bg-gradient-to-br from-accent-orange/20 to-accent-muted/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <BarChart3 className='w-8 h-8 text-accent-orange' />
              </div>
              <div>
                <h3 className='text-xl font-bold text-white group-hover:text-accent-light transition-colors duration-300'>
                  Transparent Project Tracking
                </h3>
                <p className='text-white/70'>
                  Real-time updates and comprehensive analytics for every
                  project
                </p>
              </div>
            </div>

            {/* Performance Cards */}
            <div className='space-y-4 mb-8'>
              {[
                {
                  label: "Project Completion",
                  value: "95%",
                  color: "bg-green-500",
                },
                {
                  label: "Client Satisfaction",
                  value: "98%",
                  color: "bg-accent-orange",
                },
                {
                  label: "On-Time Delivery",
                  value: "92%",
                  color: "bg-accent-muted",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5'>
                  <span className='text-white/80 font-medium'>
                    {item.label}
                  </span>
                  <div className='flex items-center gap-3'>
                    <div className='text-white font-bold'>{item.value}</div>
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  </div>
                </div>
              ))}
            </div>

            <button className='group/btn bg-gradient-to-r from-accent-orange to-primary-start text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-orange/25 transition-all duration-200 hover:-translate-y-1 flex items-center gap-2'>
              Learn More
              <ArrowUpRight className='w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200' />
            </button>
          </div>

          {/* Right Card - Service Portfolio */}
          <div
            ref={rightCardRef}
            className='group bg-gradient-to-b from-white/5 to-black/50 border border-white/5 rounded-2xl p-8 card-hover hover:border-accent-orange/20 transition-all duration-300'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-16 bg-gradient-to-br from-accent-orange/20 to-accent-muted/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Target className='w-8 h-8 text-accent-orange' />
              </div>
              <div>
                <h3 className='text-xl font-bold text-white group-hover:text-accent-light transition-colors duration-300'>
                  Comprehensive Solutions
                </h3>
                <p className='text-white/70'>
                  Full-stack expertise across all digital platforms
                </p>
              </div>
            </div>

            {/* Service Categories */}
            <div className='grid grid-cols-2 gap-4 mb-8'>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className='p-4 bg-white/5 rounded-lg border border-white/5 hover:border-accent-orange/20 transition-all duration-300 group/item'>
                    <div className='flex items-center gap-3 mb-3'>
                      <IconComponent className='w-5 h-5 text-accent-orange group-hover/item:scale-110 transition-transform duration-300' />
                      <h4 className='text-white font-semibold text-sm group-hover/item:text-accent-light transition-colors duration-300'>
                        {service.title}
                      </h4>
                    </div>
                    <p className='text-white/60 text-xs leading-relaxed'>
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <button className='group/btn bg-gradient-to-r from-accent-orange to-primary-start text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-orange/25 transition-all duration-200 hover:-translate-y-1 flex items-center gap-2'>
              View Portfolio
              <ArrowUpRight className='w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200' />
            </button>
          </div>
        </div>

        {/* Bottom Section - Process */}
        <div className='text-center'>
          <h3 className='text-2xl font-bold text-white mb-8'>Our Process</h3>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your vision",
              },
              { step: "02", title: "Design", desc: "Creating the blueprint" },
              { step: "03", title: "Develop", desc: "Building with precision" },
              { step: "04", title: "Deploy", desc: "Launching to success" },
            ].map((item, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 bg-gradient-to-br from-accent-orange/20 to-accent-muted/10 rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <span className='text-accent-orange font-bold text-lg'>
                    {item.step}
                  </span>
                </div>
                <h4 className='text-white font-semibold mb-2'>{item.title}</h4>
                <p className='text-white/60 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
