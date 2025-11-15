import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Team } from "@/components/Team";
import { Location } from "@/components/Location";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Technology />
        <Process />
        <Pricing />
        <Team />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
