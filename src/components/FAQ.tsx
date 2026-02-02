import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export const FAQ = () => {
  const faqs = [{
    question: "Was sind die Vorteile von DermaScan360?",
    answer: "Wir bieten eine Termingarantie ohne lange Wartezeiten - für gesetzlich und privat Versicherte. Bei DermaScan360 erhalten sie einen Termin spätestens innerhalb von drei Werktagen. Darüber hinaus sind wir mit modernster Technik ausgestattet. Durch Total-Body-Mapping und digitaler Dermatoskopie mit KI-Unterstützung wird die Präzision der Hautkrebsvorsorge erhöht. Sie erhalten einen Arztbericht mit konkreter und genauer Handlungsempfehlung für eine reibungslose Weiterbehandlung."
  }, {
    question: "Wie unterscheidet sich DermaScan360 von einem üblichen Hautkrebsscreening?",
    answer: "Im Gegensatz zum klassischen Arzttermin ermöglichen wir ein vollständig digitalisiertes Hautkrebs-Screening. Vor Ort begleitet Sie unser speziell geschultes Team und erstellt mithilfe von Kamerasystemen hochwertige Aufnahmen Ihrer Haut – ohne direkten Arztkontakt. Die dermatologische Begutachtung erfolgt im Anschluss durch einen erfahrenen Hautarzt. Ihren Befund inklusive eines aussagekräftigen Arztbriefs mit konkreten Empfehlungen zum weiteren Vorgehen erhalten Sie innerhalb weniger Werktage nach Vorstellung. Bei Auffälligkeiten werden Sie durch einen unserer Hautärzte telefonisch zur ausführlichen Befundbesprechung kontaktiert."
  }, {
    question: "Was passiert, wenn ein Befund auffällig sein sollte?",
    answer: "Bei Auffälligkeiten erfolgt eine telefonische Befundbesprechung durch einen unserer Ärzte. Hier werden Befund und die weiteren Schritte detailliert mit Ihnen besprochen. Sie erhalten zudem einen Arztbrief mit einer konkreten Handlungsempfehlung."
  }, {
    question: "Werden die Kosten von meiner Krankenkasse übernommen?",
    answer: "Die meisten gesetzlichen Krankenkassen übernehmen die Kosten aktuell nicht. Es handelt sich also um eine Selbstzahlerleistung. Wir empfehlen jedoch, die Rechnung bei der Krankenkasse einzureichen, um ggf. von einer Teilerstattung zu profitieren. Sie können auch vorab bei Ihrer Krankenkasse die Möglichkeit einer Kostenübernahme prüfen. Private Krankenkassen übernehmen die Kosten regelhaft. Wir empfehlen, sich vorab bei Ihrer Krankenversicherung über eine Kostenübernahme zu informieren. Die Erstattungsfähigkeit kann durch uns nicht garantiert werden."
  }, {
    question: "Habe ich Kontakt zu einem Arzt?",
    answer: "Vor Ort besteht kein direkter Kontakt zu einem Arzt. Die Fotoaufnahmen vor Ort werden durch unser geschultes Team erstellt. Erst im Anschluss werden die Aufnahmen von einem Facharzt für Dermatologie sorgfältig analysiert und befundet. Bei Auffälligkeiten nimmt der behandelnde Arzt telefonisch Kontakt mit Ihnen auf, um den Befund und das weitere Vorgehen ausführlich mit Ihnen zu besprechen."
  }, {
    question: "Muss ich mich vollständig entkleiden und wird tatsächlich die gesamte Hautfläche erfasst?",
    answer: "Sie können frei entscheiden, ob Sie sich vollständig oder teilweise entkleiden. Für eine möglichst vollständige Hautanalyse ist es empfehlenswert, sich so weit wie möglich zu entkleiden. Bereiche, die von der Kamera nicht erfasst werden können (z.B. behaarte Kopfhaut, hautnahe Schleimhäute, Genitalien, Zehenzwischenräume, Haut auf Haut Kontakte), können - sofern gewünscht - von unserem geschulten Personal gesondert inspiriert und mit einem Auflichtmikroskop dokumentiert werden. Auf diese Weise lassen sich auch schwer einsehbare Hautareale ergänzend untersuchen."
  }, {
    question: "Wer kann meine Daten und Fotoaufnahmen sehen und sind diese sicher?",
    answer: "Ihre personenbezogenen Daten sowie Fotoaufnahmen werden ausschließlich von dem betreuenden Team und behandelnden Arzt gesichtet. Es werden nur Daten erhoben, die für die Diagnostik notwendig sind. Die Verarbeitung Ihrer Daten erfolgt DSGVO-konform. Sämtliche personenbezogenen Daten werden ausschließlich zum Zwecke der Diagnostik verwendet. Es erfolgt keine Weitergabe an Dritte."
  }, {
    question: "Ist das Screening für Menschen mit Behinderungen möglich?",
    answer: "Während des Ganzkörper-Screenings/Total-Body-Mappings ist es erforderlich, über etwa 5-10 Minuten selbstständig zu stehen. Während des Scans müssen zudem verschiedene Positionen (zB. Arme und Füße heben, Drehen um die Körperachse) eingenommen werden. Daher ist ein sicherer Stand und eine gewisse Beweglichkeit erforderlich. Einzelne Hautveränderungen können jedoch auch bei eingeschränkter Gehfähigkeit und Beweglichkeit mit Unterstützung durch unser Team dokumentiert werden."
  }, {
    question: "Kann ich mich vorbereiten?",
    answer: "Für eine ideale Beurteilbarkeit sollte die Haut sauber und ungeschminkt sein. Langes Haar sollte zusammengebunden oder hochgesteckt werden. Bei starker Körperbehaarung empfiehlt sich eine Körperrasur. Alternativ können stark behaarte Bereiche aber auch manuell mit einem Dermatoskop inspiziert und dokumentiert werden."
  }, {
    question: "Wie lange dauert die Untersuchung?",
    answer: "Die Dauer des Ganzkörper-Screenings hängt von den individuellen Untersuchungsbedingungen sowie der Anzahl auffälliger Veränderungen ab. In der Regel dauert die eigentliche Untersuchung ca. 15-20min. Im Einzelfall kann die Dauer hiervon jedoch abweichen. Bitte planen Sie für Ihren gesamten Aufenthalt ca. 30 Minuten ein, da wir vor der Untersuchung noch Gesundheitsfragen erheben."
  }];
  return <section id="faq" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="sm:text-3xl font-bold mb-3 sm:mb-4 md:text-5xl text-3xl">
            Häufig gestellte Fragen
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Alle wichtigen Informationen auf einen Blick
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-3 sm:px-4 md:px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4 md:py-5">
                  <span className="font-semibold pr-3 sm:pr-4 sm:text-base text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-3 sm:pb-4 md:pb-5 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};