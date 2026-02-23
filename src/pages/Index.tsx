import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";

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
    window.scrollTo(0, 0);
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
      
      <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
