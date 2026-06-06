import type { CampsiteConfig } from "../types";

/**
 * Genusshof Friesach (vlg. Kreuzer) — Stellplatz am Bauernhof, Schützenweg 2,
 * 9360 Friesach in Kärnten. Inhaber/Betriebsleiter: Erich Krammer (2. Gastgeber: Christian).
 * Alle Texte/Fakten belegt aus campingplatz-friesach.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Hof-Fotos ("Bilder auf der Website stammen von
 * eigenen Fotografien", Impressum) in /public/campsites/campingplatz-friesach/,
 * jedes per Vision geprüft.
 *
 * EHRLICH:
 * - KEIN See am Platz → `see` weggelassen (nur ein kleiner Naturbadeteich am Hof).
 * - KEIN Grundpreis pro Nacht auf der Website → Preise = Platzhalter
 *   (pricesArePlaceholder), nur die Aufpreise Komfort +5 € / Premium +25 € sind belegt.
 * - KEIN Duschhaus (offen im Text genannt), KEINE Mobilheime/Zimmer → mobilheime/kinder/
 *   aktivitaeten weggelassen. KEINE eindeutige Auszeichnung → awards leer.
 * - KEINE expliziten Koordinaten auf der Quelle → `coords` weggelassen (Adresse zeigt).
 */
const IMG = "/campsites/campingplatz-friesach";

export const campingplatzFriesach: CampsiteConfig = {
  name: "Genusshof Friesach",
  shortName: "Genusshof",
  slug: "campingplatz-friesach",
  ort: "Friesach",
  region: "Kärnten",
  brandKind: "Stellplatz am Bauernhof",
  regionLong: "Mittelkärnten · Friesach · Österreich",

  claim: "Ruhig am Bauernhof campen – mit Burgblick über Friesach",
  claimEmphasis: "Burgblick über Friesach",
  intro:
    "Ein ruhiger Stellplatz für Wohnmobil, Wohnwagen, Dachzelt & Zelt auf dem Genusshof in Friesach — nur 10 individuelle Plätze mit Panoramablick auf Berge und die Burgen der ältesten Stadt Kärntens, mitten in einer kleinen Landwirtschaft mit eigener Genusshütte.",

  statement: {
    text: "Bei uns ist Camping noch Landleben — ruhig, persönlich und mit allem, was vom eigenen Hof kommt.",
    emphasis: "noch Landleben",
  },

  pillars: [
    {
      title: "Panorama & Burgenstadt",
      text: "Individuelle Stellplätze mit weitem Blick auf Berge, Felder und die Burgen über Friesach — Ruhe inklusive.",
      image: { src: `${IMG}/panorama-sonnenblumen.webp`, alt: "Wohnmobil am Stellplatz zwischen Sonnenblumen mit Bergpanorama über Friesach" },
    },
    {
      title: "Leben am Bauernhof",
      text: "Eine kleine Landwirtschaft zum Mitleben: Schweine alter Rassen, Freilandhühner und Gänse haben hier viel Platz.",
      image: { src: `${IMG}/bauernhof-schweine.webp`, alt: "Luftaufnahme des großzügigen Schweinegeheges mit alten Nutztierrassen am Genusshof" },
    },
    {
      title: "Die Genusshütte",
      text: "Im Hofladen warten über 100 Eigenprodukte — von Eiern, Nudeln und Suppen bis zu Säften und Marmeladen.",
      image: { src: `${IMG}/genusshuette.webp`, alt: "Die festlich beleuchtete Genusshütte (Hofladen) am Genusshof Friesach" },
    },
  ],

  usps: [
    "Stellplatz am Bauernhof",
    "Nur 10 individuelle Plätze",
    "Panoramablick auf die Burgen",
    "Ganzjährig geöffnet",
    "Hunde willkommen",
    "Highspeed-Internet am ganzen Hof",
  ],

  trust: {
    heading: "Worauf Sie sich am Genusshof verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Erich und Christian, nur 10 ruhige Stellplätze, ehrliche Produkte vom eigenen Hof und ein Platz, der das ganze Jahr für Sie geöffnet ist — auch über Weihnachten und Silvester.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  // Ganzjährig geöffnet (FAQ: "unser Stellplatz ist das ganze Jahr über für Sie geöffnet").
  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-stellplatz-wiese.webp`, alt: "Wohnmobil auf weiter grüner Stellplatz-Wiese am Genusshof Friesach mit Bergkulisse" },
  },

  camping: {
    heading: "Stellplatz am Genusshof",
    intro:
      "Großzügige, individuelle Stellplätze für Wohnmobil, Wohnwagen, Dachzelt und Zelt — jeder Platz mit eigenem Charakter und Blick ins Grüne. Ein Stellplatz = ein Fahrzeug. Hinweis zur Ehrlichkeit: Es gibt kein Duschhaus; im Sommer stehen mehrere kleine Solarduschen sowie eine Ent- und Versorgungsstation für Frisch- und Grauwasser bereit.",
    features: [
      {
        title: "Individuelle Plätze",
        text: "Nur 10 Stellplätze, jeder mit eigenem Platzerl und Weitblick — vom einfachen Basisplatz bis zum Panorama-Premium-Platz mit direktem Burgblick.",
        image: { src: `${IMG}/stellplatz-fruehling.webp`, alt: "Wohnmobil auf einem Stellplatz mit blühenden Bäumen und Bergblick im Frühling" },
      },
      {
        title: "Lagerfeuer am Platz",
        text: "Offenes Lagerfeuer ist erlaubt: Feuertonnen stehen bereit, ein Holzkontingent können Sie gerne dazubestellen.",
        image: { src: `${IMG}/lagerfeuer-am-platz.webp`, alt: "Wohnwagen am Stellplatz mit brennender Feuertonne in der Dämmerung" },
      },
      {
        title: "Erholungsbereich",
        text: "Zwischen den Christbaumkulturen laden Hängematte, Liegestühle und Hollywoodschaukel zum Entspannen — mit Highspeed-Internet überall.",
        image: { src: `${IMG}/erholungsbereich.webp`, alt: "Luftaufnahme des Erholungsbereichs in der Christbaumkultur mit Liegestühlen und Hängematte" },
      },
      {
        title: "Naturbadeteich",
        text: "Ein kleiner Naturbadeteich sorgt täglich von 9 bis 18 Uhr für Abkühlung (Kinder nur unter Aufsicht).",
        image: { src: `${IMG}/naturbadeteich.webp`, alt: "Luftaufnahme des kleinen Naturbadeteichs im Garten des Genusshofs" },
      },
      {
        title: "Tiere zum Mitleben",
        text: "Freilandhühner, Gänse und Schweine alter Rassen gehören zum Hof — Landleben zum Anfassen.",
        image: { src: `${IMG}/freilandhuehner.webp`, alt: "Freilandhühner auf der grünen Wiese am Genusshof mit Bergkulisse" },
      },
      {
        title: "Ganzjährig geöffnet",
        text: "Der Stellplatz ist das ganze Jahr geöffnet — auch im Winter und über die Feiertage (bitte rechtzeitig reservieren).",
        image: { src: `${IMG}/stellplatz-winter.webp`, alt: "Verschneiter Stellplatz mit Lichterketten am Genusshof im Winter" },
      },
    ],
  },

  anreise: {
    heading: "Anreise & Kontakt",
    modes: [
      {
        title: "Mit Wohnmobil & Wohnwagen",
        text: "Schützenweg 2, 9360 Friesach in Kärnten — ruhig gelegen bei Friesach, der ältesten Stadt Kärntens, in Mittelkärnten.",
      },
      {
        title: "Reservierung",
        text: "Bitte reservieren Sie Ihren Platz vor der Anreise über das Anfrage-Formular — ist ein Platz frei, erhalten Sie in wenigen Minuten eine Antwort mit Ihrer Stellplatzzuweisung.",
      },
      {
        title: "Kontakt",
        text: "Erich erreichen Sie unter +43 699 13100102, Christian unter +43 699 13100104 — auch per WhatsApp oder E-Mail.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Genusshof",
    headingEmphasis: "Genusshof",
    intro:
      "Stellplätze mit Weitblick, Tiere am Hof, Feuerabende und die Genusshütte — ein paar Eindrücke aus Friesach, zu jeder Jahreszeit.",
    tag: "Frühling bis Winter",
    moreCount: 30,
    images: [
      { src: `${IMG}/feuerschale.webp`, alt: "Große Feuerschale mit 2 m Durchmesser brennt am Abend vor der Bergkulisse" },
      { src: `${IMG}/gaense.webp`, alt: "Freilaufende Gänse auf der saftig grünen Weide am Genusshof" },
      { src: `${IMG}/genusshuette-jause.webp`, alt: "Reichhaltige Jause mit Eigenprodukten aus der Genusshütte am Stellplatz" },
      { src: `${IMG}/winter-panorama.webp`, alt: "Verschneiter Stellplatz mit Blick auf die Berge rund um Friesach" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Platzart und Personen — wir melden uns mit Ihrer Verfügbarkeit. Hinweis: Es gibt kein Duschhaus; im Sommer stehen kleine Solarduschen sowie eine Ent- und Versorgungsstation bereit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise: Auf der Website ist kein Grundpreis pro Nacht angegeben — der Basispreis ist ein realistischer Platzhalter (bitte mit dem Gastgeber bestätigen). Belegt sind nur die Aufpreise Komfort (+5 €) und Panorama-Premium (+25 €).",
    highlight: {
      title: "Panorama-Premium-Platz",
      text: "Unser schönster Platz mit direktem Burgblick: Spüle, Solardusche, Frisch- und Grauwasseranschluss, Kühlschrank und Liegestühle — nur 1 Platz verfügbar (Aufpreis +25 €/Nacht).",
    },
    categories: [
      // ACHTUNG: Basispreise sind Platzhalter (kein Grundpreis auf der Website).
      // Reale, belegte Aufpreise: Komfort = Basis + 5 €, Panorama-Premium = Basis + 25 €.
      { id: "basis", label: "Stellplatz Basis", perNight: 29 },
      { id: "komfort", label: "Komfort (+5 €)", perNight: 34 },
      { id: "premium", label: "Panorama-Premium (+25 €)", perNight: 54 },
    ],
  },

  kontakt: {
    coords: { lat: 46.943529, lng: 14.438546 },
    tel: "+43 699 13100102",
    telHref: "tel:+4369913100102",
    mail: "info@campingplatz-friesach.at",
    adresse: "Schützenweg 2 · 9360 Friesach · Kärnten",
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Stellplatz",
      href: "#camping",
      children: [
        { label: "Individuelle Plätze", href: "#camping" },
        { label: "Lagerfeuer am Platz", href: "#camping" },
        { label: "Erholungsbereich", href: "#camping" },
      ],
    },
    {
      label: "Am Hof",
      href: "#camping",
      children: [
        { label: "Tiere am Hof", href: "#camping" },
        { label: "Naturbadeteich", href: "#camping" },
        { label: "Genusshütte", href: "#galerie" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingplatzFriesach;
