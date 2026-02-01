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
        <h1 className="text-4xl font-bold mb-8">Datenschutz</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <p>
            Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch der Website von DermaScan360 – privatärztliche Berufsausübungsgemeinschaft Reuther/Hardung/Lucas – verarbeitet werden. Die Seite dient ausschließlich der Information, Kontaktaufnahme und Terminvereinbarung; es werden keine medizinischen Befunde oder Hautbilder über die Website hochgeladen.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Verantwortliche Stelle & Kontakt</h2>
            <p>
              Verantwortlich für die Datenverarbeitung ist<br />
              Privatärztliche Berufsausübungsgemeinschaft Judith Reuther, Leon Hardung, Alexander Lucas<br />
              Möserstraße 2–3, 49074 Osnabrück<br />
              E-Mail: info@dermascan360.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Ihre Rechte</h2>
            <p>
              Sie haben nach der DSGVO u. a. die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerruf erteilter Einwilligungen sowie ein Beschwerderecht bei der Aufsichtsbehörde. Widerrufe berühren nicht die Rechtmäßigkeit bis zum Widerruf erfolgter Verarbeitungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Welche Daten wir beim Besuch der Website erheben</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">a) Server-Logdateien</h3>
            <p>
              Beim Aufruf der Website erhebt der Hosting-Provider automatisch technische Daten (z. B. Browsertyp, Betriebssystem, Referrer, Zeitpunkt, IP-Adresse). Diese Daten dienen der Bereitstellung, Sicherheit und Fehlerbehebung und werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">b) Cookies & optionale Drittinhalte</h3>
            <p>
              Die Website verwendet ausschließlich technisch notwendige Cookies für den Betrieb der Seite. Optionale Drittinhalte (z. B. die Kartenansicht) werden erst nach Ihrer ausdrücklichen Einwilligung geladen. Beim Laden optionaler Inhalte können beim Drittanbieter Cookies oder vergleichbare Technologien gesetzt werden.
            </p>
            <p>
              <strong>Rechtsgrundlagen:</strong> technisch notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO; optionale Inhalte nach Einwilligung: Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 TTDSG.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Google Maps (Click-to-load; Einwilligung in localStorage)</h2>
            <p>
              Die Kartenansicht wird über die Dienste von Google Ireland Limited bereitgestellt. Aus Datenschutzgründen zeigen wir zunächst einen Hinweis-Placeholder. Erst durch Ihren ausdrücklichen Klick wird das Google-Maps-iframe geladen.
            </p>
            <p>
              Beim Laden des iframe können technische Daten (z. B. IP-Adresse, Browser-Informationen) an Google übermittelt und in Drittländer übertragen werden. Die Übermittlung erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 TTDSG).
            </p>
            <p>
              <strong>Speicherung der Einwilligung:</strong> Ihre Zustimmung wird lokal in Ihrem Browser (localStorage) gespeichert, damit die Karte bei späteren Besuchen nicht erneut bestätigt werden muss. Standardmäßig wird die Einwilligung bis zu 12 Monate gespeichert, sofern Sie sie nicht vorher widerrufen oder löschen.
            </p>
            <p>
              <strong>Widerruf:</strong> Sie können die Einwilligung jederzeit widerrufen — z. B. über die auf der Website bereitgestellte Funktion „Einwilligungen verwalten / Karte entziehen" oder durch Löschen des entsprechenden Eintrags im Browser-Speicher (localStorage). Nach Widerruf wird die Karte beim nächsten Aufruf nicht automatisch geladen.
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
              Weitere Informationen zur Datenverarbeitung durch Google finden Sie in der{" "}
              <a 
                href="https://policies.google.com/privacy?hl=de" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline"
              >
                Google-Datenschutzerklärung
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Kontaktformular (E-Mail über Resend)</h2>
            <p>
              Wenn Sie das Kontaktformular nutzen, verarbeiten wir die dort angegebenen Daten (z. B. Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage. Der Versand der Nachricht erfolgt per E-Mail über den Dienst Resend. Eine Weitergabe Ihrer Kontaktdaten an Dritte erfolgt nicht ohne Ihre ausdrückliche Zustimmung.
            </p>
            <p>
              <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Bearbeitung der Anfrage).
            </p>
            <p>
              Daten aus Kontaktanfragen werden gelöscht, sobald der Zweck entfällt und keine gesetzlichen Aufbewahrungsfristen bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Online-Terminbuchung (Doctolib)</h2>
            <p>
              Für die Terminvereinbarung nutzen wir den externen Dienst Doctolib GmbH. Die von Ihnen eingegebenen Termin- und Kontaktdaten werden direkt an Doctolib übermittelt und dort verarbeitet; mit Doctolib besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Die Verarbeitung dient der Organisation und Durchführung von Terminen.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> in der Regel Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Vertragsanbahnung). Bei Eingabe besonderer Kategorien personenbezogener Daten ist ggf. Art. 9 DSGVO (Einwilligung) einschlägig.
            </p>
            <p>
              Bitte beachten Sie die{" "}
              <a 
                href="https://media.doctolib.com/image/upload/v1753974148/legal/B2C-PrivacyPolicy-JULY_25-DE.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline"
              >
                Datenschutzhinweise von Doctolib
              </a>{" "}
              auf deren Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Keine Nutzung von Analyse-Tools</h2>
            <p>
              Auf dieser Landingpage wird kein Google Analytics oder ein vergleichbares Webtracking-Tool eingesetzt. Es findet kein Tracking zu Marketing- oder Analysezwecken statt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Sicherheit</h2>
            <p>
              Wir verwenden TLS/SSL-Verschlüsselung, um die Vertraulichkeit der Datenübertragung zu schützen. Trotzdem lässt sich eine Übertragung über das Internet nie vollständig gegen Zugriffe Dritter absichern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Speicherdauer</h2>
            <p>
              Soweit in dieser Erklärung nicht anders angegeben, speichern wir personenbezogene Daten nur so lange, wie es für die Zwecke der Verarbeitung erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Einwilligungen (z. B. für optionale Inhalte) bleiben bis zum Widerruf gespeichert; die localStorage-Einwilligung zur Kartenanzeige wird standardmäßig bis zu 12 Monate gespeichert.
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
            <h2 className="text-2xl font-semibold mb-4">11. Änderungen dieser Erklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen (z. B. bei geänderten technischen Abläufen oder gesetzlichen Vorgaben). Die jeweils aktuelle Fassung ist auf der Website hinterlegt.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
