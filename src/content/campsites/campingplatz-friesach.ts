import type { CampsiteConfig } from "../types";

const IMG = "/campsites/campingplatz-friesach";

const campingplatzFriesach: CampsiteConfig = {
  name: "Genusshof Friesach",
  shortName: "Genusshof",
  slug: "campingplatz-friesach",
  ort: "Friesach",
  region: "Kärnten",
  // KEIN theme-Feld — Original-Template-Palette (User-Entscheidung 2026-06-11).
  heroVariant: "center",
  brandKind: "Stellplatz am Bauernhof",
  regionLong: "Friesach · Mittelkärnten · Österreich",

  claim: "Dein Stellplatz mit Hof, Sauna und Bergblick",
  claimEmphasis: "Sauna und Bergblick",
  emailDetail: "euer holzbefeuertes Badefass mit Blick auf die Berge",
  intro:
    "Ganzjährig geöffnet, naturnah und herzlich geführt: Bei Christian und Erich stellst du direkt am Bauernhof — mit Panoramasauna, Badefass, Naturbadeteich und einem Hofladen voller eigener Spezialitäten.",

  statement: {
    text: "Hier stellst du nicht einfach ab, sondern wirst Teil eines kleinen Bauernhofs mit Tieren, Sauna und Hofladen.",
    emphasis: "Teil eines kleinen Bauernhofs",
  },

  pillars: [
    {
      title: "Echter Bauernhof",
      text: "Freilandhühner, Freilandschweine und eine Gänseschar gehören hier zum Alltag — du campst mitten am lebendigen Hof.",
      image: { src: `${IMG}/gallery-ad485e4dc2.webp`, alt: "Gänseschar auf der Weide am Genusshof Friesach" },
    },
    {
      title: "Wellness-Oase",
      text: "Panoramasauna, holzbefeuertes Badefass und ein Naturbadeteich — exklusiv für dich buchbar, mit Blick auf Berge und Schloss.",
      image: { src: `${IMG}/gallery-b5763a6d84.webp`, alt: "Naturbadeteich mit Sauna und Badefass am Genusshof Friesach" },
    },
    {
      title: "Ruhig am Hof",
      text: "Ebene, naturnahe Stellplätze für Wohnmobil, Wohnwagen und Zelt — ruhig gelegen, mit weitem Blick ins Kärntner Bergland.",
      image: { src: `${IMG}/gallery-f12217d7d3.webp`, alt: "Wohnmobil auf der Wiese mit Bergpanorama am Genusshof Friesach" },
    },
  ],

  usps: [
    "Ganzjährig geöffnet",
    "Panoramasauna & Badefass",
    "Naturbadeteich",
    "Hofladen mit Eigenprodukten",
    "Hunde willkommen",
    "Highspeed-WLAN",
  ],

  trust: {
    heading: "Hier kennt man sich noch beim Namen",
    headingEmphasis: "beim Namen",
    intro:
      "Christian und Erich führen ihren Genusshof persönlich: ein liebevoll umgestalteter Bauernhof mit Freilandtieren, exklusiver Wellness-Oase und einem Hofladen voller hausgemachter Eigenprodukte — ruhig, weltoffen und ganzjährig offen.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-b4964999a1.webp`, alt: "Genusshof Friesach: gepflegte Stellplätze mit Blumen und Bergblick" },
  },

  breather: {
    image: { src: `${IMG}/hero-93168827c7.webp`, alt: "Luftaufnahme des Genusshofs Friesach" },
    line: "Ein kleiner Hof, der ganz für dich da ist.",
  },

  camping: {
    heading: "Dein Tag am Genusshof",
    intro:
      "Vom Stellplatz zur Sauna, vom Feuerkorb zum Hofladen — bei uns hast du alles Wichtige direkt am Hof, unkompliziert und nah.",
    features: [
      {
        title: "Ebene Stellplätze",
        text: "Naturnahe Plätze für Wohnmobil, Wohnwagen und Zelt — Strom mit 16 A, Grau- und Fäkalentsorgung direkt am Platz.",
        image: { src: `${IMG}/gallery-bbb046b526.webp`, alt: "Wohnwagen mit Vorzelt auf ebenem Stellplatz am Genusshof Friesach" },
      },
      {
        title: "Panoramasauna & Badefass",
        text: "Heizbare Panoramasauna und ein holzbefeuertes Badefass — exklusiv buchbar, mit Blick auf die Berge rund um Friesach.",
        image: { src: `${IMG}/gallery-b67d6035b1.webp`, alt: "Sauna-Hütte mit Badefass am Genusshof Friesach" },
      },
      {
        title: "Erholungsbereich",
        text: "Liegestühle und Hängematten in der Christbaumkultur laden zwischen den Bäumen zum Durchatmen ein — mit Highspeed-WLAN überall.",
        image: { src: `${IMG}/gallery-47fa77136c.webp`, alt: "Erholungsbereich mit Sitzplatz in der Christbaumkultur am Genusshof Friesach" },
      },
      {
        title: "Feuerkorb am Platz",
        text: "Abends knistert die Feuertonne am Stellplatz — ein Kontingent Holz kannst du gerne dazu bestellen.",
        image: { src: `${IMG}/amenity-d9a56a80db.webp`, alt: "Feuertonne am Stellplatz bei Abendstimmung am Genusshof Friesach" },
      },
      {
        title: "Solardusche",
        text: "Bei Schönwetter sorgen mehrere kleine Solaraußenduschen für eine erfrischende Abkühlung mitten im Grünen.",
        image: { src: `${IMG}/gallery-86a752990d.webp`, alt: "Solardusche im Freien am Genusshof Friesach" },
      },
      {
        title: "Frühstück & Abendessen",
        text: "Frisch gekochte Speisen und Brettljausen bringen wir dir auf Vorbestellung an den Platz — einen Tag vorher Bescheid geben genügt.",
        image: { src: `${IMG}/gallery-3be1294f20.webp`, alt: "Hausgemachte Brettljause am Genusshof Friesach" },
      },
    ],
  },

  story: {
    kicker: "Genusshof Friesach",
    heading: "Vom Bauernhof zum Genusshof",
    intro: "Ein Hof, der mit viel Liebe zu einem Ort zum Ankommen wurde.",
    chapters: [
      {
        no: "01",
        kicker: "Die Gastgeber",
        title: "Herzlich empfangen",
        text: "Christian und Erich nehmen sich Zeit für ihre Gäste — viele kommen wegen der persönlichen, unkomplizierten Gastfreundschaft immer wieder.",
        image: { src: `${IMG}/gallery-040efa3b35.webp`, alt: "Gäste sitzen abends am Lagerfeuer beim Wohnmobil am Genusshof Friesach" },
      },
      {
        no: "02",
        kicker: "Der Hof",
        title: "Tiere mit viel Platz",
        text: "Freilandhühner, Freilandschweine und Gänse: alte, fast ausgestorbene Nutztierrassen leben hier auf mehreren tausend Quadratmetern.",
        image: { src: `${IMG}/gallery-2ebfb74868.webp`, alt: "Freilandschweine im weitläufigen Gehege am Genusshof Friesach" },
      },
      {
        no: "03",
        kicker: "Die Genusshütte",
        title: "Genuss aus eigener Hand",
        text: "In der Genusshütte findest du zahlreiche hausgemachte Spezialitäten — Eier, Nudeln, Suppen, Säfte und Marmeladen, frisch vom Hof.",
        image: { src: `${IMG}/gallery-c673d6049b.webp`, alt: "Die Genusshütte am Genusshof Friesach" },
      },
    ],
  },

  galerie: {
    heading: "Vom Sommer bis in den Schnee",
    headingEmphasis: "in den Schnee",
    intro: "Ein kleiner Hof, der zu jeder Jahreszeit seinen Reiz hat — von blühenden Sommerwiesen bis zu verschneiten Christbäumen.",
    tag: "Ganzjährig geöffnet",
    moreCount: 30,
    images: [
      { src: `${IMG}/gallery-28c597ea6c.webp`, alt: "Camper zwischen Sonnenblumen mit Blick ins Tal am Genusshof Friesach" },
      { src: `${IMG}/gallery-63dca16542.webp`, alt: "Wohnwagen im Abendlicht unter Obstbäumen am Genusshof Friesach" },
      { src: `${IMG}/gallery-78324c42cd.webp`, alt: "Wohnmobil unter dem Sternenhimmel am Genusshof Friesach" },
      { src: `${IMG}/gallery-dc1b4a631e.webp`, alt: "Wohnwagen mit Liegestühlen und Bergblick am Genusshof Friesach" },
    ],
  },

  anreise: {
    heading: "Anfahrt nach Friesach",
    modes: [
      { title: "Mit dem Auto", text: "Über die S37 bis Friesach, dann den Schildern Richtung Schützenweg folgen — der Hof liegt etwas außerhalb des Zentrums." },
      { title: "Mit der Bahn", text: "Friesach hat einen eigenen Bahnhof; vom Hof sind es nur wenige Minuten — Abholung nach Absprache." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Klagenfurt liegt rund 45 Minuten entfernt, Salzburg gut anderthalb Stunden." },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Genusshof",
    headingEmphasis: "am Genusshof",
    intro: "Sag uns Zeitraum und Personenzahl — Christian und Erich melden sich persönlich mit deiner Stellplatzzuweisung.",
    pricesArePlaceholder: false,
    priceNote:
      "Preise pro Nacht — Wohnmobil und Wohnwagen inkl. 2 Erwachsene und 1 Kind, Zelt inkl. 2 Personen. Zzgl. Strom sowie Aufpreis Komfort (€ 5) oder Panorama-Premium (€ 25). Anzahlung in Höhe der ersten Nacht.",
    highlight: { title: "Ganzjährig geöffnet", text: "Auch über Weihnachten und Silvester — bitte rechtzeitig reservieren." },
    categories: [
      { id: "wohnmobil", label: "Wohnmobil", perNight: 30, perExtraGuest: 12 },
      { id: "wohnwagen", label: "Wohnwagen", perNight: 39, perExtraGuest: 12 },
      { id: "zelt", label: "Zelt", perNight: 25, perExtraGuest: 12 },
    ],
  },

  kontakt: {
    tel: "+43 699 13100102",
    telHref: "tel:+4369913100102",
    mail: "info@campingplatz-friesach.at",
    facebook: "https://facebook.com/Stellplatz.Genusshof.Friesach",
    adresse: "Schützenweg 2 · 9360 Friesach · Kärnten",
    coords: { lat: 46.9436563, lng: 14.4388491 },
  },

  languages: ["DE"],

  nav: [
    { label: "Hof & Wellness", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sauna & Teich", href: "#camping" },
    ]},
    { label: "Geschichte", href: "#story" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anfahrt", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anfahrt", href: "#anreise" },
    ]},
  ],
};

export default campingplatzFriesach;
