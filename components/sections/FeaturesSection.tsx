"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Zap, Globe, BarChart3, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/registry/magicui/marquee";
import AnimatedListDemo from "@/components/registry/example/animated-list-demo";
import AnimatedBeamMultipleOutputs from "@/components/registry/example/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "@/components/registry/magicui/bento-grid";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    name: "ecommerce-app.jpg",
    body: "Modern e-commerce platform built with Next.js, featuring real-time inventory management and seamless payment integration.",
  },
  {
    name: "mobile-app.png",
    body: "Cross-platform mobile application for iOS and Android, delivering native performance with React Native.",
  },
  {
    name: "shopify-store.jpg",
    body: "Custom Shopify store with advanced product filtering, automated inventory sync, and conversion-optimized checkout flow.",
  },
  {
    name: "ui-design.sketch",
    body: "Comprehensive UI/UX design system with 50+ components, accessibility guidelines, and interactive prototypes.",
  },
  {
    name: "web-portal.pdf",
    body: "Enterprise web portal with role-based access control, real-time analytics dashboard, and API integrations.",
  },
];

const features = [
  {
    Icon: Code,
    name: "Web Development",
    description:
      "Build responsive, high-performance websites with modern technologies and best practices.",
    href: "#services",
    cta: "View Portfolio",
    className: "col-span-3 lg:col-span-6",
    background: (
      <Marquee
        pauseOnHover
        className='absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]'>
        {projects.slice(0, 3).map((project, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-white/10 bg-gradient-to-b from-white/5 to-black/60",
              "hover:border-accent-orange/30 hover:bg-gradient-to-b hover:from-white/10 hover:to-black/80",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}>
            <div className='flex flex-row items-center gap-2'>
              <div className='flex flex-col'>
                <figcaption className='text-sm font-medium text-white'>
                  {project.name}
                </figcaption>
              </div>
            </div>
            <blockquote className='mt-2 text-xs text-white/70'>
              {project.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Zap,
    name: "Performance Optimization",
    description:
      "Lightning-fast applications with advanced caching, code splitting, and performance monitoring.",
    href: "#services",
    cta: "Learn More",
    className: "col-span-3 lg:col-span-3",
    background: (
      <AnimatedListDemo className='absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90' />
    ),
  },
  {
    Icon: Globe,
    name: "Full-Stack Solutions",
    description:
      "End-to-end development services covering frontend, backend, database, and deployment.",
    href: "#services",
    cta: "Get Started",
    className: "col-span-3 lg:col-span-3",
    background: (
      <AnimatedBeamMultipleOutputs className='absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105' />
    ),
  },
  {
    Icon: BarChart3,
    name: "Analytics & Insights",
    description:
      "Data-driven development with comprehensive analytics and performance insights.",
    href: "#services",
    cta: "View Reports",
    className: "col-span-3 lg:col-span-6",
    background: (
      <div className='absolute top-10 right-0 origin-top scale-75 rounded-md border border-white/10 bg-gradient-to-b from-white/5 to-black/60 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90 p-4'>
        <div className='space-y-2'>
          <div className='h-2 bg-accent-orange rounded w-3/4'></div>
          <div className='h-2 bg-accent-light rounded w-1/2'></div>
          <div className='h-2 bg-accent-orange/70 rounded w-2/3'></div>
          <div className='h-2 bg-accent-light/70 rounded w-4/5'></div>
        </div>
      </div>
    ),
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='features'
      className='relative min-h-screen py-20 lg:py-32 overflow-hidden'
      style={{ backgroundColor: "#171717" }}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16 lg:mb-20'>
          <h2
            ref={titleRef}
            className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6'
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}>
            Our Development
            <span className='gradient-text-enhanced block mt-2'>Services</span>
          </h2>
          <p className='text-white/70 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed font-light'>
            From concept to deployment, we provide end-to-end development
            services that transform your ideas into powerful digital solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>

        {/* Bottom CTA */}
        <div className='text-center mt-16 lg:mt-20'>
          <a
            href='#contact'
            className='group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1'
            style={{
              backgroundColor: "rgba(138, 138, 138, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.38)",
              borderRadius: "50px",
              backdropFilter: "blur(5px)",
              boxShadow: "inset 0px 0px 6px 3px rgba(138, 138, 138, 0.3)",
              color: "#ffffff",
            }}>
            <span>View Our Portfolio</span>
            <ArrowUpRight className='w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300' />
          </a>

          <p className='text-white/50 text-sm mt-4'>
            Join 500+ businesses we&apos;ve helped grow
          </p>
        </div>
      </div>
    </section>
  );
}
