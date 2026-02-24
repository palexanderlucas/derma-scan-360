import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Imprint = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Impressum</h1>

          <div className="prose prose-slate max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 DDG</h2>
              <p className="mb-2">
                <strong>DermaScan360 – Privatärztliche Berufsausübungsgemeinschaft (GbR)</strong><br />
                Judith Reuther, Leon Hardung, Alexander Lucas
              </p>
              <p className="mb-4">
                Möserstraße 2–3<br />
                49074 Osnabrück<br />
                Deutschland
              </p>
              <p className="mb-4">
                <strong>E-Mail:</strong>{" "}
                <a href="mailto:info@dermascan360.de" className="text-primary hover:underline">
                  info@dermascan360.de
                </a>
              </p>
              <p>
                <strong>Vertreten durch die Gesellschafter:</strong><br />
                Judith Reuther<br />
                Leon Hardung<br />
                Alexander Lucas
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Zuständige Aufsichtsbehörde</h2>
              <p>
                Ärztekammer Niedersachsen<br />
                Berliner Allee 20<br />
                30175 Hannover<br />
                Deutschland
              </p>
              <p className="mt-2">
                <a href="https://www.aekn.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://www.aekn.de
                </a>
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Berufsbezeichnungen und berufsrechtliche Regelungen</h2>
              <p className="mb-2">
                <strong>Judith Reuther</strong><br />
                Fachärztin für Dermatologie (verliehen in der Bundesrepublik Deutschland)
              </p>
              <p className="mb-2">
                <strong>Leon Hardung</strong><br />
                Arzt (verliehen in der Bundesrepublik Deutschland)
              </p>
              <p className="mb-4">
                <strong>Alexander Lucas</strong><br />
                Arzt (verliehen in der Bundesrepublik Deutschland)
              </p>
              <p className="mb-4">
                <strong>Zuständige Kammer:</strong><br />
                Ärztekammer Niedersachsen
              </p>
              <p className="mb-2">Es gelten folgende berufsrechtliche Regelungen:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Bundesärzteordnung (BÄO)</li>
                <li>Heilberufsgesetz Niedersachsen</li>
                <li>Berufsordnung der Ärztekammer Niedersachsen</li>
                <li>Gebührenordnung für Ärzte (GOÄ)</li>
              </ul>
              <p>
                Die Regelungen sind einsehbar unter:{" "}
                <a href="https://www.aekn.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://www.aekn.de
                </a>
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
              <p>
                AXA Versicherung AG<br />
                Colonia-Allee 10–20<br />
                51067 Köln<br />
                Deutschland
              </p>
              <p className="mt-2">
                <strong>Räumlicher Geltungsbereich:</strong> Bundesrepublik Deutschland
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Telemedizinischer Hinweis</h2>
              <p>
                Die ärztliche Befundung erfolgt telemedizinisch auf Grundlage digitaler Bildaufnahmen, die im Rahmen des Termins vor Ort durch geschultes Personal erstellt werden. Ein unmittelbarer Arzt-Patienten-Kontakt vor Ort findet nicht statt.
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <hr className="border-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                Alexander Lucas<br />
                Möserstraße 2–3<br />
                49074 Osnabrück
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
