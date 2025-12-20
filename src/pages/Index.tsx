import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Team } from "@/components/Team";
import { Location } from "@/components/Location";
import { CorporateCTA } from "@/components/CorporateCTA";
import { MunicipalityCTA } from "@/components/MunicipalityCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WelcomeDialog } from "@/components/WelcomeDialog";
import { useEffect, useState } from "react";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      // Handle hash navigation after page content has loaded
      const hash = window.location.hash.substring(1);
      const scrollToHash = () => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = window.innerWidth < 768 ? 64 : 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "instant"
          });
        }
      };
      
      // Wait for document to be fully ready, then scroll multiple times
      // to handle lazy-loaded images causing layout shifts
      const attemptScroll = (attempts: number) => {
        scrollToHash();
        if (attempts > 0) {
          setTimeout(() => attemptScroll(attempts - 1), 200);
        }
      };
      
      // Initial delay for first render, then re-scroll a few times
      setTimeout(() => attemptScroll(3), 50);
    }
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <WelcomeDialog open={showWelcome} onOpenChange={setShowWelcome} />
      <Header />
      <main className="overflow-x-hidden">
      <Hero />
      <Technology />
      <Process />
      <Pricing />
      <Location />
      <CorporateCTA />
      <MunicipalityCTA />
      <Team />
      <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
