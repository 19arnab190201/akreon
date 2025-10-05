"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          ctaRef.current,
          badgeRef.current,
        ],
        {
          opacity: 0,
          y: 60,
        }
      );

      // Initial state for individual subtitle words
      const subtitleWords = subtitleRef.current?.querySelectorAll("span");
      if (subtitleWords) {
        gsap.set(subtitleWords, {
          opacity: 0,
          y: 30,
          rotateX: -90,
        });
      }

      // Hero animation timeline
      const tl = gsap.timeline();

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          subtitleWords || [],
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='home'
      ref={heroRef}
      className='relative flex items-center justify-center overflow-hidden'
      style={{ minHeight: "calc(100vh - 3.5rem)" }}>
      {/* Fade out gradient at bottom for smooth transition */}
      {/* <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#171717] to-transparent z-20 pointer-events-none' /> */}
      <div
        className='absolute inset-0'
        style={{
          zIndex: 1,
          backgroundImage:
            "url(https://framerusercontent.com/images/cMSxpaeXFJBvmYAzlldwCL2f25E.png)",
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          backgroundSize: "65px auto",
        }}
      />

      {/* Noise grain effect - only in hero */}
      <div
        ref={grainRef}
        className='absolute'
        style={{
          top: "-50%",
          left: "-50%",
          right: "-50%",
          bottom: "-50%",
          width: "200%",
          height: "200vh",
          zIndex: 2,
          background:
            "transparent url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png') repeat 0 0",
          backgroundRepeat: "repeat",
          animation: "bg-animation .2s infinite",
          opacity: 0.08,
          visibility: "visible",
        }}
      />

      {/* Glowing orb effect */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          zIndex: 1.5,
          background:
            "radial-gradient(22% 34% at 0% 26.8%, #3e2013 10.44481981981982%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Fast overlay effects for dynamic brightness */}
      <div
        className='absolute inset-0 overflow-hidden pointer-events-none'
        style={{ zIndex: 2 }}>
        {/* Fast moving overlay 1 */}
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-fast-sweep' />

        {/* Fast moving overlay 2 */}
        <div
          className='absolute top-1/4 right-0 w-1 h-full bg-gradient-to-b from-transparent via-white/3 to-transparent animate-fast-sweep-vertical'
          style={{ animationDelay: "0.5s" }}
        />

        {/* Fast moving overlay 3 */}
        <div
          className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/4 to-transparent animate-fast-sweep'
          style={{ animationDelay: "1s" }}
        />

        {/* Fast moving overlay 4 */}
        <div
          className='absolute top-1/2 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white/2 to-transparent animate-fast-sweep-vertical'
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Hero Background Image - Orange Element with fade effects */}
      <div
        className='absolute inset-0 flex items-center justify-center'
        style={{ zIndex: -1 }}>
        <div className='relative w-full h-full max-w-6xl mx-auto'>
          <div
            className='w-full h-auto'
            style={{
              transform: "scale(1.1)",
              mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 92%, rgba(0, 0, 0, 0) 98%)",
              WebkitMask:
                "linear-gradient(0deg, rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 92%, rgba(0, 0, 0, 0) 98%)",
            }}>
            <img
              src='/images/hero-bg.png'
              alt='Hero Background'
              className='w-full h-auto object-contain'
              style={{
                transform: "translateY(0)", // Ensure vertical centering
                opacity: 0.9,
              }}
            />
          </div>
        </div>
      </div>

      <div className='relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Enhanced Badge */}
        <div
          ref={badgeRef}
          className='inline-flex items-center mb-8'
          style={{
            borderBottomWidth: "1px",
            borderColor: "rgb(184, 92, 0)",
            borderLeftWidth: "1px",
            borderRightWidth: "1px",
            borderStyle: "solid",
            borderTopWidth: "1px",
            backdropFilter: "blur(5px)",
            borderRadius: "50px",
            boxShadow: "0px 3px 10px 0px rgba(209, 63, 0, 0.7)",

            opacity: 1,
          }}>
          <div className='px-4 py-1.5 flex items-center gap-3'>
            <p className='text-accent-white/80 text-sm'>
              Full-Stack Development
            </p>
          </div>
        </div>

        {/* Main Title with enhanced styling */}
        <div
          ref={titleRef}
          className='flex flex-col justify-start flex-shrink-0 mb-8'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white flex flex-col gap-2'>
            <div>Building Digital</div>
            <div>Solutions That Grow</div>
            <div>Your Business</div>
          </h1>
        </div>

        {/* Enhanced Subtitle with individual word animations */}
        <div
          ref={subtitleRef}
          className='flex flex-col justify-start flex-shrink-0 mb-8 max-w-3xl mx-auto'
          style={{
            willChange: "transform",
            transform: "perspective(1200px)",
          }}>
          <p className='text-lg sm:text-xl text-white/90 leading-relaxed'>
            <span style={{ display: "inline-block", willChange: "transform" }}>
              We
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              specialize
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              in
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              web
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              development,
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              mobile
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              apps,
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              Shopify
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              stores,
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              and
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              UI/UX
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              design
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              that
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              delivers
            </span>{" "}
            <span style={{ display: "inline-block", willChange: "transform" }}>
              results.
            </span>
          </p>
        </div>

        {/* CTA Buttons matching screenshot */}
        <div
          ref={ctaRef}
          className='flex flex-col sm:flex-row items-center justify-center gap-2 mb-16'>
          {/* Primary Button - Get Started */}
          <a
            href='#'
            className='group relative inline-flex items-center gap-2 px-3 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-1'
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              borderRadius: "50px",
              color: "#000000",
            }}>
            <span>Start Your Project</span>
            <div className='w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300'>
              <ArrowRight className='w-3 h-3 text-white' />
            </div>
          </a>

          {/* Secondary Button - Learn More */}
          <a
            href='#'
            className='group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-1'
            style={{
              backgroundColor: "rgba(138, 138, 138, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.38)",
              borderRadius: "50px",
              backdropFilter: "blur(5px)",
              boxShadow: "inset 0px 0px 6px 3px rgba(138, 138, 138, 0.3)",
              color: "#ffffff",
            }}>
            <span>View Our Work</span>
          </a>
        </div>

        {/* Enhanced Social Proof */}
        <div className='flex items-center justify-center gap-6 text-white/70'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center'>
              {[
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
              ].map((avatarUrl, i) => (
                <div
                  key={i}
                  className='relative w-8 h-8 rounded-full overflow-hidden border-2 border-white/30 shadow-lg'
                  style={{
                    marginLeft: i > 0 ? "-8px" : "0",
                    zIndex: 10 - i,
                  }}>
                  <img
                    src={avatarUrl}
                    alt={`User ${i + 1}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>
            <div className='flex flex-col'>
              <p className='text-sm font-semibold text-white'>
                Trusted by 500+
              </p>
              <p className='text-xs text-white/60'>Businesses worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
