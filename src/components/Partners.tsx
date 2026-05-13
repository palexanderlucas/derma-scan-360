import schlarbLogo from "@/assets/partner-schlarb.webp";
import hautarztLogo from "@/assets/partner-hautarzt-laserzentrum.webp";

const partners = [
  {
    name: "Praxisklinik am Germania Campus (Rütter & Schlarb)",
    logo: schlarbLogo,
    description:
      "Spezialisiert auf plastisch-chirurgische Eingriffe, insbesondere im Bereich der Hauttumorchirurgie sowie der funktionellen und ästhetischen Rekonstruktion – unter Leitung von Dr. med. Dominik Schlarb – Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie mit langjähriger operativer Erfahrung.",
  },
  {
    name: "Hautarzt- und Laserzentrum Münster",
    logo: hautarztLogo,
    description:
      "Das Hautarzt- und Laserzentrum Münster steht für moderne Dermatologie und deckt das gesamte Spektrum der klassischen und operativen Dermatologie sowie der Lasermedizin ab.",
  },
];

export const Partners = () => {
  return (
    <section id="partner-praxen" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl font-bold text-center mb-4 text-foreground lg:text-6xl text-3xl">
          Unsere Partner-Praxen
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto md:text-xl text-base">
          Für den Fall, dass sich aus Ihrem Hautkrebsscreening ein weiterer diagnostischer oder therapeutischer Bedarf ergibt, arbeiten wir mit ausgewählten, erfahrenen Fachpraxen zusammen. So stellen wir eine qualitätsgesicherte und nahtlose Weiterbehandlung sicher.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center bg-muted/40 rounded-lg p-8"
            >
              <div className="h-32 md:h-40 w-full flex items-center justify-center mb-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-xl md:text-2xl">
                {partner.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 md:mt-12 max-w-3xl mx-auto text-sm md:text-base italic">
          Ist eine weiterführende Behandlung medizinisch erforderlich, kann diese zeitnah in einer unserer Partnerpraxen erfolgen. Die Wahl der weiterbehandelnden Praxis steht Ihnen selbstverständlich frei.
        </p>
      </div>
    </section>
  );
};
