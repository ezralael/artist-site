type Link = {
  label: string;
  url: string;
};

type SpotifyTrack = {
  type: "spotify_track";
  id: string;
  title: string;
};

type SoundCloudTrack = {
  type: "soundcloud";
  url: string;
  title: string;
};

type MusicItem = SpotifyTrack | SoundCloudTrack;

type Artist = {
  name: string;
  bio: string;
  heroImage: string;
  links: Link[];
};

type SiteContent = {
  artist: Artist;
  music: MusicItem[];
  tour: unknown[];
};

const content: SiteContent = {
  artist: {
    name: "Yng Pat Trick",
    bio: "",
    heroImage: "/hero.jpg",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/user/YngPatTrick1" },
      { label: "Spotify", url: "https://open.spotify.com/artist/4NyAQ8iL9rclS7SFtrzQqH" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/yng-pat-trick/868268029" },
      { label: "SoundCloud", url: "https://soundcloud.com/yng_pat_trick/popular-tracks" }
    ]
  },

  music: [
    {
      type: "spotify_track",
      id: "55JmEE8vtj18wVtQozRz2v",
      title: "Featured Track"
    },
    {
      type: "soundcloud",
      url: "https://soundcloud.com/yng_pat_trick/black-frieza-freestyle?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      title: "Black Frieza Freestyle"
    }
  ],

  tour: []
};

export default content;
