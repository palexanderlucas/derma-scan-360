import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Datenschutz</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Allgemeine Hinweise</h2>
            <p>
              Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz Ihrer personenbezogenen Daten – insbesondere Ihrer sensiblen Gesundheitsdaten – ist für uns von besonderer Bedeutung. Nachfolgend informieren wir Sie umfassend darüber, wie wir Ihre Daten verarbeiten, zu welchen Zwecken dies geschieht und welche Rechte Sie in Bezug auf Ihre Daten haben. Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich identifiziert werden können.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Wie werden Ihre Daten erhoben?</h3>
            <p>
              Ein Teil Ihrer Daten wird dadurch erfasst, dass Sie uns diese selbst mitteilen – z. B. bei Nutzung eines Kontaktformulars. Weitere Daten werden automatisch oder nach Ihrer Zustimmung durch unsere IT-Systeme beim Besuch der Website verarbeitet. Dabei handelt es sich überwiegend um technische Informationen (Browsertyp, Betriebssystem, Uhrzeit des Seitenaufrufs usw.). Diese Erhebung erfolgt automatisch, sobald Sie unsere Seiten aufrufen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Einige Daten dienen der technischen Bereitstellung der Website ohne Fehler. Andere Daten können zur Analyse des Nutzerverhaltens verwendet werden.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu verlangen. Außerdem können Sie die Berichtigung oder Löschung dieser Daten fordern. Haben Sie der Verarbeitung zugestimmt, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Unter bestimmten Voraussetzungen können Sie auch die Einschränkung der Verarbeitung verlangen. Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p>
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Analyse-Tools und Tools von Drittanbietern</h3>
            <p>
              Beim Besuch der Website kann Ihr Surfverhalten statistisch ausgewertet werden – hauptsächlich durch Analyseprogramme. Näheres dazu finden Sie im weiteren Verlauf dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Datenschutz</h3>
            <p>
              Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Ihre Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung verarbeitet.
            </p>
            <p>
              Beim Besuch unserer Website werden unterschiedliche personenbezogene Daten erhoben. Diese Erklärung erläutert, welche Daten dies sind, warum wir sie erfassen und wie wir sie verwenden.
            </p>
            <p>
              Bitte beachten Sie, dass die Datenübertragung im Internet (z. B. per E-Mail) Sicherheitsrisiken bergen kann. Ein vollständiger Schutz vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt durch den Betreiber dieser Website:<br />
              Privatärztliche Berufsausübungsgemeinschaft Judith Reuther, Leon Hardung, Alexander Lucas<br />
              Möserstraße 2-3, 49074 Osnabrück<br />
              Telefon: 0172 5436394<br />
              E-Mail: info@dermascan360.de<br />
              Vertretungsberechtigt: Judith Reuther, Leon Hardung, Alexander Lucas
            </p>
            <p>
              Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über Zwecke und Mittel der Verarbeitung personenbezogener Daten.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Speicherdauer</h3>
            <p>
              Sofern in dieser Datenschutzerklärung keine spezifischen Speicherfristen genannt werden, verbleiben personenbezogene Daten bei uns, bis der Zweck ihrer Verarbeitung entfällt. Fordern Sie die Löschung oder widerrufen Sie Ihre Einwilligung, löschen wir die Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Rechtsgrundlagen der Datenverarbeitung</h3>
            <p>
              Je nach Vorgang verarbeiten wir Daten auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO für besondere Kategorien), zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO), zur Erfüllung gesetzlicher Pflichten (Art. 6 Abs. 1 lit. c DSGVO) oder aufgrund unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Details zu den jeweiligen Rechtsgrundlagen finden Sie in den entsprechenden Abschnitten dieser Erklärung.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Empfänger personenbezogener Daten</h3>
            <p>
              In bestimmten Fällen geben wir personenbezogene Daten an externe Stellen weiter – z. B. wenn dies für die Vertragserfüllung notwendig ist, wenn gesetzliche Pflichten bestehen (etwa gegenüber Behörden), wenn ein berechtigtes Interesse vorliegt oder wenn eine andere Rechtsgrundlage dies erlaubt. Bei Auftragsverarbeitern erfolgt dies nur auf Grundlage eines entsprechenden AV-Vertrags.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Widerruf von Einwilligungen</h3>
            <p>
              Sie können eine Einwilligung zur Datenverarbeitung jederzeit widerrufen. Die bis zum Widerruf erfolgte Verarbeitung bleibt rechtmäßig.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Widerspruchsrecht gegen bestimmte Verarbeitungen (Art. 21 DSGVO)</h3>
            <p>
              Sie können aus Gründen, die sich aus Ihrer besonderen Situation ergeben, der Verarbeitung Ihrer Daten widersprechen, wenn diese auf Art. 6 Abs. 1 lit. e oder f basiert. Gleiches gilt für Profiling. Erfolgt die Verarbeitung zu Zwecken der Direktwerbung, können Sie jederzeit widersprechen. Nach Ihrem Widerspruch werden Daten hierfür nicht mehr genutzt.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Beschwerderecht</h3>
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Recht auf Datenübertragbarkeit</h3>
            <p>
              Daten, die wir auf Grundlage einer Einwilligung oder zur Vertragserfüllung automatisiert verarbeiten, können Sie in einem gängigen, maschinenlesbaren Format erhalten oder – soweit technisch möglich – an Dritte übertragen lassen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Auskunft, Berichtigung, Löschung</h3>
            <p>
              Sie können jederzeit Auskunft über Ihre gespeicherten Daten sowie deren Herkunft, Empfänger und Zweck verlangen. Zudem steht Ihnen das Recht auf Berichtigung oder Löschung zu.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Unter bestimmten Voraussetzungen können Sie eine Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen. In diesem Fall dürfen diese – abgesehen von der Speicherung – nur in engen Ausnahmefällen weiterverarbeitet werden.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">SSL-/TLS-Verschlüsselung</h3>
            <p>
              Diese Website verwendet aus Sicherheitsgründen und zum Schutz vertraulicher Daten, wie zum Beispiel Ihrer Anfragen an uns, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die URL in der Adressleiste Ihres Browsers von „http://" auf „https://" wechselt und ein Schloss-Symbol angezeigt wird. Mit aktivierter SSL-Verschlüsselung können Ihre übermittelten Daten von Dritten nicht mitgelesen werden.
            </p>
            <p>
              Die Nutzung unserer Website ist in der Regel ohne die Angabe personenbezogener Daten möglich. Falls personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adresse) erhoben werden, geschieht dies, soweit möglich, stets freiwillig. Eine Weitergabe dieser Daten an Dritte erfolgt nur mit Ihrer ausdrücklichen Zustimmung.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet, etwa bei E-Mail-Kommunikation, Sicherheitslücken aufweisen kann und ein vollständiger Schutz vor dem Zugriff Dritter nicht gewährleistet werden kann.
            </p>
            <p>
              Der Verwendung der im Impressum angegebenen Kontaktdaten durch Dritte zur Zusendung von unverlangter Werbung oder Informationsmaterialien wird hiermit ausdrücklich widersprochen. Bei unaufgeforderter Zusendung von Werbeinformationen, wie Spam-Mails, behalten wir uns ausdrücklich rechtliche Schritte vor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
            <p>
              Unsere Website verwendet Cookies, die auf Ihrem Endgerät gespeichert werden. Sie können temporär (Session-Cookies) oder dauerhaft (permanente Cookies) abgelegt sein. Cookies stammen entweder direkt von uns oder von Drittanbietern. Sie erfüllen verschiedene Funktionen – von technisch notwendigen Einstellungen bis zur Analyse des Nutzerverhaltens.
            </p>
            <p>
              Notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, da ein berechtigtes Interesse an der fehlerfreien Funktion der Website besteht. Andere Cookies werden ausschließlich mit Ihrer Einwilligung gesetzt (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p>
              In Ihrem Browser können Sie festlegen, wie Cookies behandelt werden. Bei Deaktivierung bestimmter Cookies können Funktionen der Website eingeschränkt sein.
            </p>
            <p>
              Welche Cookies im Einzelnen verwendet werden, können Sie dieser Datenschutzerklärung entnehmen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Server-Log-Dateien</h3>
            <p>
              Der Hosting-Provider erhebt automatisch bestimmte technische Daten und speichert diese in Server-Logfiles. Dazu gehören Browsertyp, Betriebssystem, Referrer-URL, Hostname, Zeitpunkt des Zugriffes und die IP-Adresse. Eine Zusammenführung mit anderen Daten erfolgt nicht.
            </p>
            <p>
              Die Speicherung erfolgt auf Grundlage unseres berechtigten Interesses an einer technisch einwandfreien Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Kontaktformular</h3>
            <p>
              Senden Sie uns Anfragen über das Kontaktformular, speichern wir Ihre Angaben zur Bearbeitung und für Rückfragen. Eine Weitergabe der Daten erfolgt nicht ohne Ihre Zustimmung.
            </p>
            <p>
              Die Verarbeitung basiert – je nach Anfrage – entweder auf Art. 6 Abs. 1 lit. b DSGVO (vertragliche Zwecke), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) oder, sofern abgefragt, auf Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
            <p>
              Ihre Daten werden gelöscht, sobald der Zweck entfällt oder Sie die Löschung verlangen. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Anfragen per E-Mail, Telefon</h3>
            <p>
              Bei Kontaktaufnahme speichern wir Ihre Angaben zur Bearbeitung Ihres Anliegens. Eine Weitergabe erfolgt nicht ohne Einwilligung. Die Verarbeitung erfolgt je nach Zweck auf Basis der oben genannten Rechtsgrundlagen. Die Daten werden gelöscht, wenn der Zweck entfällt oder Sie dies verlangen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Doctolib</h3>
            <p>
              Auf unserer Website können Sie online Termine mit uns buchen. Für diesen Service binden wir den Anbieter Doctolib ein. Verantwortlich ist die Doctolib GmbH, Mehringdamm 51, 10961 Berlin („Doctolib").
            </p>
            <p>
              Für die Terminvereinbarung tragen Sie die erforderlichen Angaben sowie Ihren gewünschten Termin in das vorgesehene Formular auf unserer Website bzw. direkt auf unserer Doctolib-Seite ein. Ihre Eingaben werden zur Organisation, Durchführung und – falls erforderlich – zur Nachbereitung Ihres Termins genutzt. Doctolib speichert die Termin- und Kontaktdaten für uns auf seinen Servern. Die Datenschutzhinweise von Doctolib finden Sie unter folgendem Link: <a href="https://media.doctolib.com/image/upload/v1753974148/legal/B2C-PrivacyPolicy-JULY_25-DE.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Doctolib Datenschutzhinweise</a>
            </p>
            <p>
              Ihre übermittelten Daten verbleiben so lange bei uns, wie es für die Terminverwaltung notwendig ist bzw. bis Sie die Löschung verlangen oder eine erteilte Einwilligung widerrufen. Gesetzliche Aufbewahrungspflichten bleiben davon unberührt.
            </p>
            <p>
              Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an einer einfachen und effizienten Terminbuchung für Interessenten und Patienten haben. Sofern wir Sie um eine Einwilligung bitten, erfolgt die Verarbeitung auf Basis von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO sowie § 25 Abs. 1 TDDDG, sofern dabei Cookies eingesetzt oder Informationen auf Ihrem Endgerät ausgelesen werden (z. B. Device-Fingerprinting). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Für den oben genannten Dienst besteht ein Vertrag zur Auftragsverarbeitung (AVV). Dieser datenschutzrechtlich notwendige Vertrag stellt sicher, dass der Dienstleister die personenbezogenen Daten unserer Websitebesucher ausschließlich nach unseren Vorgaben und im Einklang mit der DSGVO verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Analyse-Tools und Werbung</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Google Analytics</h3>
            <p>
              Unsere Website verwendet Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Google Analytics hilft uns dabei, das Nutzungsverhalten auf unserer Website auszuwerten. Dazu erhält Google u. a. Daten wie aufgerufene Seiten, Aufenthaltsdauer, technische Informationen (z. B. Betriebssystem) sowie die Herkunft des Besuchers. Diese Informationen werden dem jeweiligen Endgerät zugeordnet, jedoch nicht einer User-ID.
            </p>
            <p>
              Google kann zudem Mausbewegungen, Scrollverhalten und Klicks messen. Darüber hinaus nutzt Google Modellierungen und Machine-Learning-Verfahren, um Datensätze zu vervollständigen und auszuwerten.
            </p>
            <p>
              Zur Wiedererkennung verwendet Google Analytics Technologien wie Cookies oder Device-Fingerprinting. Die erfassten Daten werden in der Regel auf Servern von Google in den USA gespeichert.
            </p>
            <p>
              Die Nutzung von Google Analytics erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG). Diese Einwilligung können Sie jederzeit widerrufen.
            </p>
            <p>
              Die Übermittlung der Daten in die USA erfolgt auf Basis der Standardvertragsklauseln der EU-Kommission. Google ist zudem nach dem EU-US Data Privacy Framework zertifiziert und verpflichtet sich damit zur Einhaltung europäischer Datenschutzstandards.
            </p>

            <h4 className="text-lg font-semibold mt-6 mb-3">IP-Anonymisierung</h4>
            <p>
              Auf dieser Website ist die IP-Anonymisierung aktiviert. Das bedeutet, dass Ihre IP-Adresse innerhalb der EU bzw. des EWR gekürzt wird, bevor sie an Google übertragen wird. Nur in Ausnahmefällen erfolgt die Kürzung erst in den USA. Google verarbeitet die Daten in unserem Auftrag, um die Nutzung der Website auszuwerten, Berichte zu erstellen und weitere Analyse-Dienstleistungen bereitzustellen. Eine Zusammenführung der IP-Adresse mit anderen Google-Daten findet nicht statt.
            </p>

            <h4 className="text-lg font-semibold mt-6 mb-3">Browser-Plugin</h4>
            <p>
              Sie können die Datenerfassung durch Google verhindern, indem Sie das unter folgendem Link verfügbare Plugin installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-Out</a>. Weitere Informationen über den Umgang mit Nutzerdaten finden Sie hier: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Datenschutz</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Plugins und Tools</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Google Maps</h3>
            <p>
              Unsere Website nutzt Google Maps, einen Dienst der Google Ireland Limited, zur Darstellung von Karteninhalten. Zur Nutzung werden Ihre IP-Adresse und ggf. weitere technische Daten an Google in die USA übertragen und dort gespeichert. Auf diese Übermittlung haben wir keinen Einfluss.
            </p>
            <p>
              Falls Google Maps aktiviert ist, lädt Ihr Browser außerdem Google Fonts zur Darstellung der Schriftarten.
            </p>
            <p>
              Rechtsgrundlage ist unser berechtigtes Interesse an einer ansprechenden Darstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine Einwilligung erforderlich ist (z. B. bei Cookies oder Device-Fingerprinting), erfolgt die Verarbeitung ausschließlich auf Grundlage Ihrer Zustimmung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
            </p>
            <p>
              Die Übermittlung in die USA basiert auf den Standardvertragsklauseln. Google ist zudem nach dem EU-US Data Privacy Framework zertifiziert.
            </p>
            <p>
              Weitere Informationen: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Datenschutzerklärung</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Weitere Informationen zu Cookies</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
            <p>
              Unsere Website verwendet teilweise Cookies. Diese kleinen Textdateien werden von Ihrem Browser auf Ihrem Endgerät gespeichert. Sie enthalten keine Schadsoftware und dienen dazu, unsere Online-Angebote benutzerfreundlicher, effizienter und sicherer zu machen.
            </p>
            <p>
              Ein Teil der Cookies sind sogenannte Session-Cookies, die automatisch gelöscht werden, sobald Sie unsere Seite verlassen. Andere Cookies bleiben auf Ihrem Gerät gespeichert, bis Sie sie manuell entfernen. Dadurch kann Ihr Browser beim nächsten Besuch wiedererkannt werden.
            </p>
            <p>
              Sie haben die Möglichkeit, Ihren Browser so zu konfigurieren, dass Sie über das Setzen von Cookies informiert werden, Cookies nur im Einzelfall erlauben, die Annahme bestimmter oder sämtlicher Cookies blockieren oder festlegen, dass Cookies beim Schließen des Browsers automatisch gelöscht werden. Bitte beachten Sie, dass bei einer Deaktivierung von Cookies bestimmte Funktionen dieser Website möglicherweise nicht vollständig verfügbar sind.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Server-Log-Dateien</h3>
            <p>
              Der Betreiber dieser Website erhebt automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser beim Besuch der Seite übermittelt. Dazu gehören unter anderem:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Art und Version des Browsers</li>
              <li>Das verwendete Betriebssystem</li>
              <li>Die zuvor besuchte URL (Referrer)</li>
              <li>Der Hostname des zugreifenden Rechners</li>
              <li>Zeitpunkt der Serveranfrage</li>
            </ul>
            <p className="mt-4">
              Diese Daten lassen keine direkte Identifikation einzelner Personen zu und werden nicht mit anderen Datenquellen verknüpft. Eine nachträgliche Überprüfung der Daten erfolgt nur, wenn konkrete Hinweise auf eine rechtswidrige Nutzung vorliegen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Privacy;