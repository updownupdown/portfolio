export type Kind = "work" | "play";

export interface Shot {
  src: string;
  alt: string;
  /** "screen" spans the gallery width, "phone" and "watch" sit two to a row. */
  frame?: "screen" | "phone" | "watch";
}

export interface Project {
  id: string;
  kind: Kind;
  name: string;
  kicker: string;
  /** Card background and accent. Each project gets its own pair. */
  bg: string;
  accent: string;
  cover:
    | { type: "phone"; src: string; alt: string; watch?: Shot }
    | { type: "screen"; src: string; alt: string }
    | { type: "placeholder"; label: string };
  description: string;
  role?: string;
  platforms?: string;
  stack?: string;
  link?: { label: "Play" | "Visit site"; url: string };
  gallery: Shot[];
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
    cover: {
      type: "phone",
      src: img("atomos"),
      alt: "Atomos: hydrogen drawn as a probability cloud",
      watch: { src: img("atomos-watch-cloud-6"), alt: "Atomos on Wear OS: a carbon atom as a probability cloud" },
    },
    description:
      "A puzzle game about building atoms and completing the periodic table. Fuse light nuclei into real isotopes and fill electron shells in nature’s order. Finished atoms open as live 3D probability clouds sampled from the real wave functions.",
    role: "Concept, design and build",
    platforms: "Web (installable), Wear OS",
    stack: "TypeScript, Vite, Three.js, Vitest · Kotlin and Compose on the watch",
    link: { label: "Play", url: "https://buildatomos.app" },
    gallery: [
      { src: img("atomos-desktop"), alt: "Atomos on desktop" },
      { src: img("atomos-watch-game-dive"), alt: "Watch mini-game: Dive", frame: "watch" },
      { src: img("atomos-watch-game-echo"), alt: "Watch mini-game: Echo", frame: "watch" },
      { src: img("atomos-watch-game-tune"), alt: "Watch mini-game: Tune", frame: "watch" },
      { src: img("atomos-watch-game-hue"), alt: "Watch mini-game: Hue", frame: "watch" },
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
  {
    id: "intellijoint-site",
    kind: "work",
    name: "Intellijoint website",
    kicker: "Intellijoint Surgical · Website",
    bg: "#1c2129",
    accent: "#a9c1dc",
    cover: { type: "placeholder", label: "Screenshot to come" },
    description: "The company website for Intellijoint Surgical, designed and built alongside the product work.",
    role: "Design and front-end development",
    platforms: "Web",
    link: { label: "Visit site", url: "https://intellijointsurgical.com/" },
    gallery: [],
  },
];

export const experiments = [
  { name: "Clockworks", url: "https://updownupdown.github.io/clockworks/", thumb: img("old-clockworks") },
  { name: "World Quiz", url: "https://updownupdown.github.io/world-quiz/", thumb: img("old-world-quiz") },
  { name: "World Flags Quiz", url: "https://updownupdown.github.io/flags", thumb: img("old-flags") },
  { name: "Learn Kana", url: "https://updownupdown.github.io/learn-japanese/", thumb: img("old-learn-kana") },
];
