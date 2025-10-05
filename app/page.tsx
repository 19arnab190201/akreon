import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <main className='relative dots-pattern'>
        {/* Left Frame Border - positioned at max-w-7xl left edge */}
        <div
          className='absolute left-1/2 top-0 w-px h-full bg-white opacity-20 z-10'
          style={{ transform: "translateX(calc(-50% - 640px))" }}
        />

        {/* Right Frame Border - positioned at max-w-7xl right edge */}
        <div
          className='absolute left-1/2 top-0 w-px h-full bg-white opacity-20 z-10'
          style={{ transform: "translateX(calc(-50% + 640px))" }}
        />

        <HeroSection />

        {/* Horizontal Frame Border - full width */}
        <div className='absolute left-0 w-full h-px bg-white opacity-20 z-10' />

        <HowItWorksSection />

        {/* Horizontal Frame Border - full width */}
        <div className='absolute left-0 w-full h-px bg-white opacity-20 z-10' />

        <OurServicesSection />
      </main>
      <Footer />
    </div>
  );
}
