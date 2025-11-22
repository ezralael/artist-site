// @ts-ignore - module has no type declarations in this project
import content from "../content";
import Embed from "@/components/Embed";
import type { SocialLink, MusicItem, TourStop } from "@/types/content";


export default function Page() {
  const { artist, music, tour } = content as {
    artist: { name: string; bio?: string; heroImage?: string; links?: SocialLink[] };
    music: MusicItem[];
    tour?: TourStop[];
  };

  return (
    <main className="wrap">
       <section id="hero" className="hero">
        <div className="hero-left">
          <div className="logo-row">
            <span className="logo-hand">🖐</span>
            <span>SLAP APP</span>
          </div>

          <h1 className="title">{artist.name}</h1>
          {artist.bio && <p className="bio">{artist.bio}</p>}

          {artist.links?.length ? (
            <div className="links">
              {artist.links.map((l: SocialLink) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pill"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {artist.heroImage && (
          <img
            src={artist.heroImage}
            alt={artist.name}
            className="hero-img"
          />
        )}
      </section>


      <section id="music" className="section">
        <h2>Music & Streams</h2>
        <div className="grid">
          {music.map((m: MusicItem, i: number) => (
            <div key={i} className="card">
              <Embed item={m} />
              {"title" in m && m.title ? (
                <div className="caption">{m.title}</div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {tour?.length ? (
  <section id="tour" className="section">
    <h2>Tour</h2>
    <ul className="tour">
      {tour.map((t: TourStop) => (
        <li key={`${t.date}-${t.venue}`}>
          <strong>{t.date}</strong> — {t.city}, {t.venue}
          {t.ticketUrl ? (
            <>
              {" "}
              •{" "}
              <a href={t.ticketUrl} target="_blank" rel="noreferrer">
                Tickets
              </a>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  </section>
) : null}
</main>
  );
}
