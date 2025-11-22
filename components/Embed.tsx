import LazyIframe from "./LazyIframe";
import {
  appleMusicEmbedFromPageUrl,
  spotifyAlbumUrl,
  spotifyTrackUrl,
  twitchChannelUrl,
  youtubeUrl,
  soundcloudEmbedUrl,
} from "@/lib/embed";
import type { MusicItem } from "../types/content";

const TWITCH_PARENT = process.env.NEXT_PUBLIC_TWITCH_PARENT || "localhost";

export default function Embed({ item }: { item: MusicItem }) {
  switch (item.type) {
    case "spotify_track":
      return (
        <LazyIframe
          title={item.title || "Spotify Track"}
          src={spotifyTrackUrl(item.id)}
          height={152}
        />
      );

    case "spotify_album":
      return (
        <LazyIframe
          title={item.title || "Spotify Album"}
          src={spotifyAlbumUrl(item.id)}
        />
      );

    case "apple_music":
      return (
        <LazyIframe
          title={item.title || "Apple Music"}
          src={appleMusicEmbedFromPageUrl(item.url)}
          height={450}
        />
      );

    case "youtube":
      return (
        <LazyIframe
          title={item.title || "YouTube"}
          src={youtubeUrl(item.id)}
          height={315}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      );

    case "twitch_channel":
      return (
        <LazyIframe
          title={item.title || "Twitch"}
          src={twitchChannelUrl(item.name, TWITCH_PARENT)}
          height={378}
          allow="autoplay; picture-in-picture; fullscreen"
        />
      );

    case "soundcloud":
      return (
        <LazyIframe
          title={item.title || "SoundCloud"}
          src={soundcloudEmbedUrl(item.url)}
          height={166}
        />
      );

    default:
      return null;
  }
}
