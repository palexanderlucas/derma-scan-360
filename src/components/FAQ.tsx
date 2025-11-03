import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Was sind die Vorteile von DermaScan360?",
      answer: "DermaScan360 bietet modernste Technologie (Total-Body-Mapping, digitale Auflichtmikroskopie, KI-Unterstützung), keine Wartezeiten (Termin meist am gleichen Tag), vollständige Digitalisierung für präzise Verlaufskontrollen und fachärztliche Befundung durch erfahrene Dermatologen."
    },
    {
      question: "Wie unterscheidet sich DermaScan360 von einem üblichen Hautkrebsscreening?",
      answer: "Im Gegensatz zum klassischen Arzttermin ermöglichen wir ein schnelles, vollständig digitalisiertes Hautkrebs-Screening. Vor Ort begleitet Sie unser speziell geschultes Team und erstellt mithilfe modernster Kamerasysteme hochwertige Aufnahmen Ihrer Haut – ohne direkten Arztkontakt. Die dermatologische Begutachtung erfolgt im Anschluss durch erfahrene Hautärzte. Ihren Befund erhalten Sie inklusive eines aussagekräftigen Arztbriefs mit konkreten Empfehlungen."
    },
    {
      question: "Was passiert, wenn ein Befund auffällig sein sollte?",
      answer: "Bei Auffälligkeiten erfolgt eine persönliche Befundbesprechung durch einen unserer Ärzte telefonisch. Sie erhalten zudem einen ausführlichen Arztbrief mit einer konkreten Empfehlung zum weiteren Vorgehen."
    },
    {
      question: "Werden Kosten von den Krankenkassen übernommen?",
      answer: "Für gesetzlich Versicherte wird unser Screening derzeit als Selbstzahlerleistung angeboten. Wir empfehlen, die Rechnung bei Ihrer Kasse einzureichen – in vielen Fällen ist eine teilweise Erstattung möglich. Privatversicherte können die Kosten in der Regel bei ihrer Krankenversicherung einreichen. Je nach Tarif erfolgt meist eine vollständige Erstattung."
    },
    {
      question: "Wie lange dauert die Untersuchung?",
      answer: "Das Ganzkörper-Screening vor Ort dauert in der Regel 20-30 Minuten. Die Single-Lesion-Untersuchung ist deutlich kürzer und dauert etwa 10-15 Minuten."
    },
    {
      question: "Muss ich mich vollständig entkleiden?",
      answer: "Für das Ganzkörper-Screening mit Total-Body-Mapping ist es notwendig, dass die gesamte Hautoberfläche fotografiert werden kann. Sie tragen dabei Unterwäsche. Bei der Single-Lesion-Untersuchung entkleiden Sie nur die betroffenen Bereiche."
    },
    {
      question: "Ist ein Arzt vor Ort?",
      answer: "Die Aufnahmen werden von speziell geschultem medizinischem Fachpersonal erstellt. Die ärztliche Befundung erfolgt zeitversetzt durch Dr. med. Judith Reuther und ihr Team. Bei Auffälligkeiten erfolgt eine persönliche ärztliche Befundbesprechung."
    },
    {
      question: "Muss ich mich vorbereiten?",
      answer: "Keine spezielle Vorbereitung notwendig. Wir empfehlen, am Tag der Untersuchung kein Make-up oder Nagellack zu tragen, damit die Haut optimal beurteilt werden kann."
    },
    {
      question: "Darf ich eine Begleitperson mitnehmen?",
      answer: "Ja, Sie können gerne eine Begleitperson mitbringen. Diese kann im Wartezimmer Platz nehmen."
    },
    {
      question: "Ab welchem Alter sollte man ein Hautkrebsscreening durchführen lassen?",
      answer: "Grundsätzlich kann ein Screening in jedem Alter sinnvoll sein, besonders bei Risikofaktoren (viele Muttermale, heller Hauttyp, Hautkrebs in der Familie). Ab dem 35. Lebensjahr wird ein regelmäßiges Screening alle 2 Jahre empfohlen."
    },
    {
      question: "Wie oft ist Hautkrebsvorsorge empfohlen?",
      answer: "Bei unauffälligen Befunden und geringem Risiko alle 1-2 Jahre. Bei erhöhtem Risiko (viele Muttermale, dysplastische Nävi, Hautkrebs in der Vorgeschichte) werden kürzere Intervalle von 3-6 Monaten empfohlen."
    },
    {
      question: "Sind meine Aufnahmen sicher?",
      answer: "Ja, alle Daten werden nach höchsten Datenschutzstandards (DSGVO) gespeichert und verschlüsselt. Nur autorisiertes medizinisches Personal hat Zugriff auf Ihre Aufnahmen."
    },
    {
      question: "Werden Hautproben entnommen?",
      answer: "Nein, bei DermaScan360 werden ausschließlich nicht-invasive digitale Aufnahmen erstellt. Sollte eine Hautprobe notwendig sein, wird dies im Befund empfohlen und kann bei einem niedergelassenen Dermatologen erfolgen."
    },
    {
      question: "Ist Hautkrebs heilbar?",
      answer: "Ja, Hautkrebs ist heilbar, wenn er rechtzeitig erkannt und behandelt wird. Die Heilungschancen sind bei früher Diagnose sehr gut. Genau deshalb ist regelmäßige Vorsorge so wichtig."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alle wichtigen Informationen auf einen Blick
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
