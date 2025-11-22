export const spotifyTrackUrl = (id: string) =>
  `https://open.spotify.com/embed/track/${id}`;

export const spotifyAlbumUrl = (id: string) =>
  `https://open.spotify.com/embed/album/${id}`;

export const youtubeUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}`;

export function appleMusicEmbedFromPageUrl(url: string) {
  try {
    const u = new URL(url);
    u.hostname = "embed.music.apple.com";
    return u.toString();
  } catch {
    return url;
  }
}

export function twitchChannelUrl(name: string, parent: string) {
  return `https://player.twitch.tv/?channel=${name}&parent=${parent}`;
}

// 👇 NEW: SoundCloud embed helper
export const soundcloudEmbedUrl = (url: string) =>
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url
  )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
