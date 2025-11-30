import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
const Imprint = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Impressum</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="mb-2">
                <strong>DermaScan360 - Privatärztliche Berufsausübungsgemeinschaft</strong><br />
                Judith Reuther, Leon Hardung, Alexander Lucas
              </p>
              <p className="mb-4">
                Möserstraße 2-3<br />
                49074 Osnabrück
              </p>
              <p className="mb-4">
                <strong>Vertreten durch:</strong><br />
                Judith Reuther<br />
                Leon Hardung<br />
                Alexander Lucas
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p>
                <strong>Telefon:</strong> 0172 5436394<br />
                <strong>E-Mail:</strong> <a href="mailto:info@dermascan360.de" className="text-primary hover:underline">info@dermascan360.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Aufsichtsbehörde</h2>
              <p>
                Ärztekammer Niedersachsen<br />
                Berliner Allee 20<br />
                30175 Hannover<br />
                <a href="https://www.aekn.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.aekn.de/</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="mb-4">
                <strong>Berufsbezeichnung:</strong><br />
                Arzt
              </p>
              <p className="mb-4">
                <strong>Zuständige Kammer:</strong><br />
                Ärztekammer Westfalen-Lippe<br />
                Gartenstraße 210 – 214<br />
                48147 Münster
              </p>
              <p className="mb-4">
                <strong>Verliehen in:</strong><br />
                Deutschland
              </p>
              <p>
                Es gelten folgende berufsrechtliche Regelungen:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
              <p>
                <strong>Name und Sitz des Versicherers:</strong><br />
                ​AXA-Verischerung AG <br />
                Köln
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 break-words">Verbraucherstreitbeilegung/<wbr />Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Imprint;