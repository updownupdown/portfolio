import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { experiments, projects } from "./projects";
import type { Kind, Project } from "./projects";

type Filter = "all" | Kind;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "work", label: "Work" },
  { id: "play", label: "Play" },
];

const resume = `${import.meta.env.BASE_URL}files/James_Carmichael_-_Resume.pdf`;

const idFromHash = () => {
  const id = window.location.hash.slice(1);
  return projects.some((p) => p.id === id) ? id : null;
};

export function App() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<string | null>(idFromHash);

  useEffect(() => {
    const onHash = () => setOpen(idFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const toggle = (id: string) => {
    const next = open === id ? null : id;
    setOpen(next);
    history.replaceState(null, "", next ? `#${next}` : window.location.pathname);
  };

  const visible = projects.filter((p) => filter === "all" || p.kind === filter);
  const count = (f: Filter) => projects.filter((p) => f === "all" || p.kind === f).length;

  return (
    <div className="page">
      <nav className="topnav" aria-label="Links">
        <a href="#about">About</a>
        <a href={resume} target="_blank" rel="noopener">Résumé</a>
        <a href="https://github.com/updownupdown" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/james-carmichael-2796b3b6/" target="_blank" rel="noopener">LinkedIn</a>
      </nav>

      <header className="hero">
        <h1>James Carmichael</h1>
        <p className="hero__title">Sr. UX Designer &amp; Developer</p>
        <p className="hero__city">Kitchener, Ontario</p>
        <p className="hero__tagline">Thoughtful designs, from requirements to build.</p>
      </header>

      <main>
        <div className="filter" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => {
                setFilter(f.id);
                if (open && !projects.find((p) => p.id === open && (f.id === "all" || p.kind === f.id))) setOpen(null);
              }}
            >
              {f.label} <span className="filter__count">{count(f.id)}</span>
            </button>
          ))}
        </div>

        <section className="grid" aria-label="Projects">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} open={open === p.id} onToggle={() => toggle(p.id)} />
          ))}
        </section>

        {filter !== "work" && (
          <section className="experiments" aria-labelledby="experiments-heading">
            <h2 id="experiments-heading">Earlier experiments</h2>
            <div className="experiments__list">
              {experiments.map((e) => (
                <a key={e.name} href={e.url} target="_blank" rel="noopener" className="experiment">
                  <img src={e.thumb} alt="" loading="lazy" width={72} height={54} />
                  {e.name}
                  <ExternalIcon />
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer id="about" className="about">
        <h2>About</h2>
        <div className="about__body">
          <p>
            I own UX for surgical planning and navigation software at Intellijoint Surgical, from the first
            conversation with surgeons to the React code that ships. Before that: product design at Texada, and ten
            years of freelance web design and development.
          </p>
          <p>
            I build games and tools on the side, directing AI coding tools through specs, design studies and review.
            Away from the screen: cycling, hiking, gardening, cooking and music.
          </p>
          <a href="mailto:jamescarmichael519@gmail.com">jamescarmichael519@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project: p, open, onToggle }: { project: Project; open: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const style = { "--bg": p.bg, "--accent": p.accent } as CSSProperties;
  const detailsId = `${p.id}-details`;

  useEffect(() => {
    if (open) ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [open]);

  return (
    <article ref={ref} id={p.id} className={`card${open ? " card--open" : ""}`} style={style}>
      <button type="button" className="card__button" aria-expanded={open} aria-controls={detailsId} onClick={onToggle}>
        <div className="card__media">
          <Cover project={p} />
        </div>
        <div className="card__head">
          <div>
            <span className="card__kicker">{p.kicker}</span>
            <span className="card__name">{p.name}</span>
          </div>
          <span className="card__chevron" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
      </button>

      {open && (
        <div className="card__details" id={detailsId}>
          <div className="card__text">
            <p>{p.description}</p>
            <dl>
              {p.role && (<><dt>Role</dt><dd>{p.role}</dd></>)}
              {p.platforms && (<><dt>Platforms</dt><dd>{p.platforms}</dd></>)}
              {p.stack && (<><dt>Built with</dt><dd>{p.stack}</dd></>)}
            </dl>
            {p.link && (
              <a className="card__action" href={p.link.url} target="_blank" rel="noopener">
                {p.link.label === "Play" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="currentColor" /></svg>
                )}
                {p.link.label}
                <ExternalIcon />
              </a>
            )}
          </div>
          {p.gallery.length > 0 && (
            <div className="card__gallery">
              {p.gallery.map((g) => (
                <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className={`shot shot--${g.frame ?? "screen"}`} />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function Cover({ project: p }: { project: Project }) {
  const c = p.cover;
  if (c.type === "phone") {
    return (
      <div className="cover cover--phone">
        <div className="phone"><img src={c.src} alt={c.alt} /></div>
        {c.watch && <div className="watch"><img src={c.watch.src} alt={c.watch.alt} /></div>}
      </div>
    );
  }
  if (c.type === "screen") {
    return <div className="cover cover--screen"><img src={c.src} alt={c.alt} /></div>;
  }
  return <div className="cover cover--placeholder">{c.label}</div>;
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
