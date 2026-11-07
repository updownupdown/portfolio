export type Kind = "work" | "play";

export interface Shot {
  src: string;
  alt: string;
  /**
   * "screen" spans the gallery width, "phone" takes half, "watch" a quarter.
   * "page" is a tall web page cropped to its top, "photo" keeps its own shape.
   */
  frame?: "screen" | "phone" | "watch" | "page" | "photo";
}

export interface Project {
  id: string;
  kind: Kind;
  /** Older projects sit in the smaller "Earlier work" grid. */
  earlier?: boolean;
  name: string;
  kicker: string;
  /** Card background and accent. Each project gets its own pair. */
  bg: string;
  accent: string;
  cover:
    | { type: "phone"; src: string; alt: string; watch?: Shot }
    | { type: "screen"; src: string; alt: string }
    | { type: "image"; src: string; alt: string }
    | { type: "trio"; style: "page" | "photo"; shots: Shot[] };
  description: string;
  role?: string;
  platforms?: string;
  stack?: string;
  link?: { label: "Play" | "Visit site"; url: string };
  gallery: Shot[];
  /** "wide" puts the gallery under the text, for long galleries. */
  galleryLayout?: "wide";
}

const img = (name: string) => `${import.meta.env.BASE_URL}img/${name}.webp`;

export const projects: Project[] = [
  {
    id: "ijx",
    kind: "work",
    name: "IJX Navigation",
    kicker: "Intellijoint Surgical · Website",
    bg: "#0f1e38",
    accent: "#7fb6ff",
    cover: { type: "screen", src: img("ijx-home"), alt: "IJX website home page: Surgical precision, seamlessly integrated" },
    description:
      "The website for IJX, Intellijoint’s OR-ready mini optical tracking technology, offered off the shelf or custom-designed for partners. I designed it and built it.",
    role: "Design and front-end development",
    platforms: "Web",
    link: { label: "Visit site", url: "https://ijxnavigation.com/" },
    gallery: [],
  },
  {
    id: "solitarius",
    kind: "play",
    name: "Solitarius",
    kicker: "Phone app · Watch · Web",
    bg: "#151a2d",
    accent: "#ffcf87",
    cover: { type: "phone", src: img("solitarius"), alt: "Solitarius home screen on a phone" },
    description:
      "A library of 100+ single-player card games, from Klondike and FreeCell to originals you won’t find anywhere else. Every game has its rules and tips, a map walks you through new ones, and a Wear OS sister app re-lays the games out for a round screen and the rotating crown.",
    role: "Concept, design and build",
    platforms: "iOS, Android, web, Wear OS",
    stack: "Expo, React Native, TypeScript, Reanimated · Kotlin and Compose on the watch",
    link: { label: "Play", url: "https://solitarius.app" },
    gallery: [{ src: img("solitarius-desktop"), alt: "Solitarius on desktop" }],
  },
  {
    id: "view",
    kind: "work",
    name: "Intellijoint VIEW",
    kicker: "Intellijoint Surgical · Pre-op planning",
    bg: "#0c2b26",
    accent: "#5fe0b4",
    cover: { type: "screen", src: img("view-knee-cuts"), alt: "VIEW knee cuts: alignment targets and resection depths over X-rays" },
    description:
      "Planning software for hip and knee replacement. Surgeons upload X-rays, landmark the anatomy, template implants and plan their cuts, then send the plan to the operating room.",
    role: "UX lead: requirements, design system, front-end contributions",
    platforms: "Web, macOS",
    stack: "Figma, Storybook, React",
    gallery: [
      { src: img("view-login"), alt: "VIEW sign-in" },
      { src: img("view-knee-landmarking"), alt: "Knee landmarking with a guide illustration" },
      { src: img("view-hip-workflow"), alt: "Hip workflow with assigned X-rays" },
    ],
  },
  {
    id: "atomos",
    kind: "play",
    name: "Atomos",
    kicker: "Phone app · Watch · Web",
    bg: "#08090c",
    accent: "#34e0f0",
    cover: { type: "phone", src: img("atomos"), alt: "Atomos: hydrogen drawn as a probability cloud" },
    description:
      "A puzzle game about building atoms and completing the periodic table. Fuse light nuclei into real isotopes and fill electron shells in nature’s order. Finished atoms open as live 3D probability clouds sampled from the real wave functions.",
    role: "Concept, design and build",
    platforms: "Web (installable), Wear OS",
    stack: "TypeScript, Vite, Three.js, Vitest · Kotlin and Compose on the watch",
    link: { label: "Play", url: "https://buildatomos.app" },
    gallery: [
      { src: img("atomos-desktop"), alt: "Atomos on desktop" },
    ],
  },
  {
    id: "tiercel",
    kind: "play",
    name: "Tiercel",
    kicker: "Phone game · Web",
    bg: "#1b2a1c",
    accent: "#c9e59a",
    cover: { type: "phone", src: img("tiercel"), alt: "Tiercel: a hawk perched over low-poly grassland" },
    description:
      "A calm low-poly flight game. You’re a hawk riding thermals over a procedurally generated Earth shaped by real coastlines, biomes and rivers. Music and birdsong are synthesised live.",
    role: "Concept, design and build",
    platforms: "Web (installable)",
    stack: "Plain JavaScript, hand-written WebGL2, Web Audio, no dependencies",
    link: { label: "Play", url: "https://updownupdown.github.io/aloft/" },
    gallery: [{ src: img("tiercel-desktop"), alt: "Tiercel on desktop" }],
  },
  {
    id: "hip-knee",
    kind: "work",
    name: "Intellijoint HIP and KNEE",
    kicker: "Intellijoint Surgical · In the operating room",
    bg: "#26163a",
    accent: "#e08cff",
    cover: { type: "screen", src: img("knee-femur-cut"), alt: "KNEE femur cut screen with flexion and varus angles and a live camera view" },
    description:
      "Navigation used during hip and knee replacement. A camera tracks the anatomy, and the app walks the surgeon through registration, measurement and cuts, one step at a time, readable from across the room.",
    role: "UX lead: requirements, design, front-end contributions",
    platforms: "macOS, iPad",
    stack: "Figma, React",
    gallery: [
      { src: img("hip-select-side"), alt: "HIP: select hip side" },
      { src: img("knee-whitesides-line"), alt: "KNEE: femur registration, Whiteside’s line" },
      { src: img("hip-aim-camera"), alt: "HIP: aim camera" },
      { src: img("hip-plan-ipad-keyboard"), alt: "HIP: plan entry on iPad" },
    ],
  },
  {
    id: "bun-voyage",
    kind: "play",
    name: "Bun Voyage",
    kicker: "Phone game",
    bg: "#2a3340",
    accent: "#ff9a7e",
    cover: { type: "phone", src: img("bun-voyage"), alt: "Bun Voyage welcome screen" },
    description:
      "A cozy burger-grilling and stacking game served from a food truck on a road trip through mountains, beach and desert. Everything you see and hear is generated in code, with its own UI kit, Dusk.",
    role: "Concept, design and build",
    platforms: "Phone web (installable)",
    stack: "TypeScript, Vite, three.js, scripted bot playtests",
    link: { label: "Play", url: "https://updownupdown.github.io/burgers/" },
    gallery: [
      { src: img("bun-voyage-ui-kit"), alt: "Dusk component library" },
      { src: img("bun-voyage-looks"), alt: "Food truck paint studies" },
    ],
  },
  {
    id: "morseplay",
    kind: "play",
    name: "MorsePlay",
    kicker: "Phone app · Web",
    bg: "#17292c",
    accent: "#8fe3cf",
    cover: { type: "phone", src: img("morseplay-phone"), alt: "MorsePlay home screen on a phone" },
    description:
      "Learn Morse code by sending and receiving words, pangrams and characters, with a reference dictionary and a translator.",
    role: "Concept, design and build",
    platforms: "Phone and desktop web",
    stack: "React, TypeScript, Vite",
    link: { label: "Play", url: "https://updownupdown.github.io/morse/" },
    gallery: [{ src: img("morseplay"), alt: "MorsePlay on desktop" }],
  },
  {
    id: "chords",
    kind: "play",
    name: "Piano Chords",
    kicker: "Web",
    bg: "#2c2016",
    accent: "#ffb36b",
    cover: { type: "screen", src: img("chords"), alt: "Piano Chords: keyboard and circle of fifths" },
    description:
      "An interactive way to learn music theory: a playable keyboard, the staff, the circle of fifths, keys and chords, all linked. Works with a MIDI keyboard.",
    role: "Concept, design and build",
    platforms: "Web",
    stack: "React, Tone.js, Tonal, Web MIDI",
    link: { label: "Play", url: "https://updownupdown.github.io/chords/" },
    gallery: [],
  },
  ...earlierWork(),
];

function earlierWork(): Project[] {
  const sites = [
    "veranova", "ginkgo", "dalton", "royal", "aig", "cora", "gbl", "transit-lube", "delft-blue", "brian-limoyo",
    "chamber", "chervin", "client", "eaf", "ewr", "foodbank", "gcp-surloc", "job-runner", "aswr",
  ];
  const photos = [
    "kam-9858", "nar-7154", "fuj-0317", "kyo-9342", "tok-8967", "nar-7404", "kyo-9299", "koy-6273", "mat-3229",
    "tok-1578", "kam-0031", "mat-3410", "osa-4446", "fuj-0513", "kyo-9518", "mat-3565", "koy-5104", "tak-1924",
    "kan-1963", "nar-7373", "tok-8427", "koy-5758", "mat-3387", "kyo-9795", "koy-5890", "mat-3519", "kam-0029",
    "tok-1831", "koy-6492", "tok-8935", "mat-3945",
  ];
  const photo = (id: string): Shot => ({ src: img(`photo-${id}`), alt: "Photograph from Japan, 2008", frame: "photo" });

  return [
    {
      id: "texada-web",
      kind: "work",
      earlier: true,
      name: "Texada web app",
      kicker: "Texada · Rental management",
      bg: "#1f2128",
      accent: "#ffc83d",
      cover: { type: "screen", src: img("texada-web-scheduling"), alt: "Texada ticket scheduling with a map of service calls" },
      description:
        "I’m driven to organize, beautify and optimize, and I led several projects that redesigned or drastically improved a product or suite of products. In design as in development, I take time to unify the interface and experience, and to build a solid foundation that can be safely built upon for the long term.",
      role: "Product design",
      platforms: "Web",
      gallery: [
        { src: img("texada-web-tickets"), alt: "Ticket list" },
        { src: img("texada-web-work-orders"), alt: "Work order list" },
        { src: img("texada-web-receiving"), alt: "Quick receiving" },
        { src: img("texada-web-create-order"), alt: "Create a work order" },
        { src: img("texada-web-nav"), alt: "Navigation, collapsed and expanded" },
        { src: img("texada-web-login"), alt: "Sign-in" },
      ],
    },
    {
      id: "texada-rebrand",
      kind: "work",
      earlier: true,
      name: "Texada rebrand",
      kicker: "Texada · Brand identity",
      bg: "#26231a",
      accent: "#ffd84d",
      cover: { type: "image", src: img("texada-rebrand-elements"), alt: "Texada brand elements: logo, product marks, type and layouts" },
      description:
        "Texada had used several logos over the years but never a coherent style guide. The logo looked dated, was hard to read, and its colours and symbol didn’t carry across apps or marketing. After talking with key stakeholders, I proposed a rebrand that modernized the logo and set a clear style guide, planned for how it would be used across our products, print ads and trade show banners.",
      role: "Brand and visual design",
      gallery: [
        { src: img("texada-rebrand-logos"), alt: "Texada logos: before 2017, 2017 to 2019, and the 2020 rebrand" },
        { src: img("texada-rebrand-web"), alt: "The new brand on the Texada website" },
      ],
    },
    {
      id: "websites",
      kind: "work",
      earlier: true,
      name: "Freelance web design",
      kicker: "Websites for local businesses",
      bg: "#1f2433",
      accent: "#9fb4ff",
      cover: {
        type: "trio",
        style: "page",
        shots: [
          { src: img("web-ginkgo"), alt: "Ginkgo website" },
          { src: img("web-veranova"), alt: "Veranova website" },
          { src: img("web-dalton"), alt: "Dalton website" },
        ],
      },
      description:
        "Through college and until I focused on UI/UX design, I worked as a freelance web designer and developer, mostly on marketing sites for local businesses. I was usually involved in every stage, from project management to design, development, launch and maintenance, with some branding and print work. Over time I built a custom WordPress theme of modular panels that I refined and reused across projects, to raise quality and speed while leaving room to tailor each site to the client.",
      role: "Design, development, project management",
      platforms: "Web",
      stack: "WordPress",
      galleryLayout: "wide",
      gallery: sites.map((n) => ({ src: img(`web-${n}`), alt: `${n.replace(/-/g, " ")} website`, frame: "page" })),
    },
    {
      id: "photography",
      kind: "play",
      earlier: true,
      name: "Photography",
      kicker: "Japan, 2008",
      bg: "#2a1a1c",
      accent: "#ff8f80",
      cover: { type: "trio", style: "photo", shots: [photo("nar-7404"), photo("kam-9858"), photo("kyo-9299")] },
      description:
        "I no longer practice it, but photography was a great driver for exploration and gave me a deep appreciation for hidden beauty. It was also a way to experiment with universal design concepts: contrast, colour, focus, composition and balance. These photos are from a month of solo backpacking in Japan in 2008.",
      galleryLayout: "wide",
      gallery: photos.map(photo),
    },
    {
      id: "clockworks",
      kind: "play",
      earlier: true,
      name: "Clockworks",
      kicker: "Web",
      bg: "#132440",
      accent: "#8cc4ff",
      cover: { type: "screen", src: img("old-clockworks"), alt: "Clockworks: a gear train drawn on a blueprint" },
      description:
        "After building a pendulum clock kit from laser-cut wood, I researched mechanical clocks, escapements and gear ratios, and built a playground for trying out gear train configurations, with the goal of building a simulated mechanical clock from scratch.",
      platforms: "Web",
      link: { label: "Play", url: "https://updownupdown.github.io/clockworks/" },
      gallery: [],
    },
    {
      id: "world-quiz",
      kind: "play",
      earlier: true,
      name: "World Quiz",
      kicker: "Web",
      bg: "#17301f",
      accent: "#8fdc8a",
      cover: { type: "screen", src: img("old-world-quiz"), alt: "World Quiz: a 3D globe with Sweden highlighted" },
      description:
        "A remake of an old DOS game I played in high school that quizzed you on every country and capital. The hard part was an interactive 3D globe where each country could be highlighted on its own. Game modes: type every country, guess the capital, guess the country by its flag, and find the country.",
      platforms: "Web",
      link: { label: "Play", url: "https://updownupdown.github.io/world-quiz/" },
      gallery: [],
    },
    {
      id: "flags",
      kind: "play",
      earlier: true,
      name: "World Flags Quiz",
      kicker: "Web",
      bg: "#2b2a18",
      accent: "#f0e07a",
      cover: { type: "screen", src: img("old-flags"), alt: "World Flags Quiz" },
      description: "A quiz on the flags of the world, with a map and your score and progress saved as you go.",
      platforms: "Web",
      link: { label: "Play", url: "https://updownupdown.github.io/flags" },
      gallery: [],
    },
    {
      id: "learn-kana",
      kind: "play",
      earlier: true,
      name: "Learn Kana",
      kicker: "Web",
      bg: "#2e1a27",
      accent: "#ff9ccf",
      cover: { type: "screen", src: img("old-learn-kana"), alt: "Learn Kana: a hiragana table with study options" },
      description:
        "I wanted to learn the Japanese hiragana and katakana syllabaries and wasn’t satisfied with the tools online, so I built one to help memorize the scripts and understand how they’re organized, with study tools and a small dictionary of phrases along the way.",
      platforms: "Web",
      link: { label: "Play", url: "https://updownupdown.github.io/learn-japanese/" },
      gallery: [],
    },
  ];
}
