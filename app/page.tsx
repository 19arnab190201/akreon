import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import OurServiceSection from "@/components/sections/OurServiceSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <main>
        <HeroSection />
        <OurServiceSection />
      </main>
      <Footer />
    </div>
  );
}
