export type SocialLink = { label: string; url: string };

export type MusicItem =
  | { type: "spotify_track"; id: string; title?: string }
  | { type: "spotify_album"; id: string; title?: string }
  | { type: "apple_music"; url: string; title?: string }
  | { type: "youtube"; id: string; title?: string }
  | { type: "twitch_channel"; name: string; title?: string }
  | { type: "soundcloud"; url: string; title?: string };

export type TourStop = {
  date: string;
  city: string;
  venue: string;
  ticketUrl?: string;
};

export type SiteContent = {
  artist: {
    name: string;
    bio?: string;
    heroImage?: string;
    links?: SocialLink[];
  };
  music: MusicItem[];
  tour?: TourStop[];
};
