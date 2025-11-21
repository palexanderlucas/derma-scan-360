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
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
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
