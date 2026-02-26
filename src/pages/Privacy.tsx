import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { useMapConsent } from "@/components/MapConsent";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Privacy = () => {
  const { hasConsent, revokeConsent } = useMapConsent();
  const [mapConsentStatus, setMapConsentStatus] = useState<boolean>(false);
  const [revokeSuccess, setRevokeSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMapConsentStatus(hasConsent());
  }, []);

  const handleRevokeConsent = () => {
    revokeConsent();
    setMapConsentStatus(false);
    setRevokeSuccess(true);
    setTimeout(() => setRevokeSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Datenschutz</h1>
        <p className="text-muted-foreground mb-8">Stand: Januar 2026</p>
        
        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche personenbezogenen Daten beim Besuch unserer Website verarbeitet werden, zu welchen Zwecken dies geschieht und welche Rechte Ihnen nach der Datenschutz-Grundverordnung (DSGVO) zustehen. Diese Website dient ausschließlich der Information, der Kontaktaufnahme sowie der Terminvereinbarung. Über die Website selbst werden keine medizinischen Befunde oder Hautbilder erhoben oder verarbeitet. Die medizinische Dokumentation und Befundung erfolgt ausschließlich außerhalb der Website in gesonderten, geschützten Systemen.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Verantwortliche Stelle</h2>
            <p>
              DermaScan360 – Privatärztliche Berufsausübungsgemeinschaft (GbR) vertreten durch Dr. med. Judith Reuther, Dr. med. Leon Hardung, Dr. med. Alexander Lucas<br />
              Möserstraße 2–3, 49074 Osnabrück<br />
              E-Mail:{" "}
              <a href="mailto:info@dermascan360.de" className="text-primary hover:underline">
                info@dermascan360.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Ihre Rechte</h2>
            <p>
              Sie haben nach der DSGVO u. a. die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerruf erteilter Einwilligungen sowie ein Beschwerderecht bei der Aufsichtsbehörde. Widerrufe berühren nicht die Rechtmäßigkeit bis zum Widerruf erfolgter Verarbeitungen.
            </p>
            <p>
              Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
            <p>Zuständige Aufsichtsbehörde für unser Unternehmen ist:</p>
            <p>
              Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
              Prinzenstraße 5<br />
              30159 Hannover
            </p>
            <p>
              Telefon: +49 (0) 511 120-4500<br />
              E-Mail:{" "}
              <a href="mailto:poststelle@lfd.niedersachsen.de" className="text-primary hover:underline">
                poststelle@lfd.niedersachsen.de
              </a><br />
              Website:{" "}
              <a href="https://lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://lfd.niedersachsen.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung beim Besuch der Website</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">a) Server-Logdateien / Hosting</h3>
            <p>
              Unsere Website wird gehostet bei Vercel Inc.. Beim Aufruf der Website erhebt der Hosting-Anbieter automatisch technische Daten (sogenannte Server-Logdateien), z. B. Browsertyp, Betriebssystem, Referrer, Hostname, Zeitpunkt der Anfrage und IP-Adresse. Diese Daten dienen der technischen Bereitstellung, Sicherheit und Stabilität der Website und werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p>
              Da sich der Sitz des Hosting-Anbieters in den USA befinden kann, kann es zu einer Übermittlung personenbezogener Daten in ein Drittland kommen. Die Übermittlung erfolgt auf Grundlage eines mit dem Anbieter geschlossenen Auftragsverarbeitungsvertrags (Art. 28 DSGVO) sowie geeigneter Garantien für Drittlandübermittlungen (z. B. Standardvertragsklauseln der EU-Kommission). Weitere Informationen zum DPA von Vercel finden Sie hier:{" "}
              <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://vercel.com/legal/dpa
              </a>
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und funktionsfähigen Website)
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">b) Cookies & optionale Drittinhalte</h3>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind. Optionale Drittinhalte (z. B. Kartenansichten) werden erst nach Ihrer ausdrücklichen Einwilligung geladen.
            </p>
            <p>
              Derzeit setzen wir auf dieser Landingpage keine Tracking-Tools wie Google Analytics ein.
            </p>
            <p>
              <strong>Rechtsgrundlagen:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>technisch notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO</li>
              <li>optionale Inhalte nach Einwilligung: Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 TTDSG</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Google Maps (Click-to-load) und Google-Dienste</h2>
            <p>
              Für einige Dienste (z. B. Karten, E-Mail-Dienst) nutzen wir Dienste von Google Ireland Ltd. bzw. Google LLC. Auf der Website eingebundene Karten werden nur als Hinweis-Placeholder angezeigt; erst durch Ihren aktiven Klick auf „Karte laden" wird das Google-Maps-iframe geladen.
            </p>
            <p>
              Beim Laden des iframe können technische Daten (z. B. IP-Adresse, Browser-Informationen) an Google übermittelt und ggf. in Drittländer (z. B. USA) übertragen werden. Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (bei der Kartenanzeige) bzw. auf der Grundlage eines AVV für Dienste, die wir als Auftragsverarbeiter verwenden.
            </p>
            <p>
              Ihre Einwilligung zur Kartenanzeige wird im Browser lokal (localStorage) gespeichert, damit die Karte bei späteren Besuchen nicht erneut bestätigt werden muss. Sie können diese Einwilligung jederzeit widerrufen, z. B. durch Löschen des Browser-Speichers oder über eine auf der Website angebotene Widerrufs-Funktion.
            </p>

            {/* Interactive consent management box */}
            <div className={`mt-6 p-4 rounded-lg border ${mapConsentStatus ? 'bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800' : 'bg-muted border-border'}`}>
              <div className="flex items-start gap-3">
                <div className={`mt-0.5 p-1.5 rounded-full ${mapConsentStatus ? 'bg-green-100 dark:bg-green-900' : 'bg-muted-foreground/20'}`}>
                  {mapConsentStatus ? (
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <X className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">
                    {mapConsentStatus 
                      ? "Google Maps ist aktiviert"
                      : "Google Maps ist deaktiviert"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {mapConsentStatus 
                      ? "Sie haben der Anzeige von Google Maps zugestimmt. Die Karte wird automatisch geladen." 
                      : "Sie können die Kartenansicht auf der Standort-Seite aktivieren, indem Sie auf «Karte laden» klicken."}
                  </p>
                  {mapConsentStatus && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleRevokeConsent}
                      className="mt-3"
                    >
                      Einwilligung widerrufen
                    </Button>
                  )}
                  {revokeSuccess && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      ✓ Einwilligung wurde widerrufen
                    </p>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-4">
              Weitere Informationen zur Datenverarbeitung durch Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://policies.google.com/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Kontaktaufnahme</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">a) Kontaktformular (E-Mail-Versand über Resend)</h3>
            <p>
              Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen gemachten Angaben (z. B. Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage. Der Versand erfolgt per E-Mail über den Dienst Resend Inc.. Resend verarbeitet die Daten in unserem Auftrag; hierfür besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO). Aufgrund des Sitzes des Anbieters kann es zu Übermittlungen in Drittländer kommen; diese erfolgen auf Grundlage geeigneter Garantien (z. B. Standardvertragsklauseln). Weitere Informationen:{" "}
              <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://resend.com/legal/dpa
              </a>
            </p>
            <p>
              Die Bereitstellung der im Kontaktformular abgefragten Daten ist für die Bearbeitung Ihrer Anfrage erforderlich. Ohne diese Angaben ist eine Bearbeitung nicht möglich. Bitte übermitteln Sie über das Kontaktformular keine sensiblen Gesundheitsdaten.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen)
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">b) Direktkontakt per E-Mail (Google Workspace)</h3>
            <p>
              Wenn Sie uns direkt per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, Inhalt der Nachricht) zur Bearbeitung Ihres Anliegens verarbeitet. Unsere E-Mail-Postfächer werden über Google Workspace betrieben (Google Ireland Ltd. bzw. Google LLC). Google verarbeitet diese Daten in unserem Auftrag; für diese Verarbeitung besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Es kann zu Übermittlungen in Drittländer kommen; diese erfolgen auf Grundlage geeigneter Garantien (z. B. Standardvertragsklauseln). Weitere Informationen:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://policies.google.com/privacy
              </a>
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Online-Terminbuchung (Doctolib)</h2>
            <p>
              Für die Online-Terminvereinbarung nutzen wir den externen Dienst Doctolib GmbH. Die von Ihnen eingegebenen Termin- und Kontaktdaten werden direkt an Doctolib übermittelt und dort verarbeitet. Mit Doctolib besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Doctolib verarbeitet Daten teilweise als eigener Verantwortlicher. Nähere Informationen finden Sie in der Datenschutzerklärung von Doctolib.
            </p>
            <p>
              Die Bereitstellung der im Rahmen der Terminbuchung abgefragten Daten ist für den Abschluss bzw. die Durchführung der Terminvereinbarung erforderlich. Ohne diese Angaben ist eine Terminbuchung nicht möglich.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw. Vertragsanbahnung); bei der Verarbeitung besonderer Kategorien personenbezogener Daten ggf. Art. 9 DSGVO.
            </p>
            <p>
              Weitere Informationen zur Datenverarbeitung durch Doctolib (PDF):{" "}
              <a href="https://media.doctolib.com/image/upload/v1753974148/legal/B2C-PrivacyPolicy-JULY_25-DE.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://media.doctolib.com/image/upload/v1753974148/legal/B2C-PrivacyPolicy-JULY_25-DE.pdf
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Drittlandübermittlungen</h2>
            <p>
              Soweit personenbezogene Daten in Länder außerhalb des Europäischen Wirtschaftsraums übermittelt werden, sorgen wir — soweit erforderlich und technisch/vertraglich möglich — durch Auftragsverarbeitungsverträge und geeignete Garantien (z. B. Standardvertragsklauseln) für ein angemessenes Datenschutzniveau.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Sicherheit (TLS/SSL)</h2>
            <p>
              Diese Website nutzt eine TLS/SSL-Verschlüsselung, um übermittelte Daten vor unbefugtem Zugriff zu schützen. Ein vollständiger Schutz kann bei der Übertragung über das Internet jedoch nicht garantiert werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Einwilligungen (z. B. für optionale Inhalte) bleiben bis zum Widerruf gespeichert; die localStorage-Einwilligung zur Kartenanzeige wird standardmäßig bis zu 12 Monate gespeichert, sofern nicht anders angegeben.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Widerruf, Löschung und Kontakt</h2>
            <p>
              Wenn Sie Auskunft, Berichtigung, Löschung oder Einschränkung Ihrer personenbezogenen Daten wünschen oder eine erteilte Einwilligung widerrufen möchten, kontaktieren Sie uns bitte per E-Mail an:{" "}
              <a href="mailto:info@dermascan360.de" className="text-primary hover:underline">
                info@dermascan360.de
              </a>
              . Wir bestätigen den Eingang Ihrer Anfrage und setzen die rechtlich vorgesehenen Schritte um.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen (z. B. bei technischen Änderungen oder neuen gesetzlichen Vorgaben). Die jeweils aktuelle Fassung ist auf dieser Website verfügbar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Automatisierte Entscheidungsfindung</h2>
            <p>
              Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne von Art. 22 DSGVO findet auf dieser Website nicht statt.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
