// user interfaces
export interface IFriend {
  firstName: string;
  lastName: string;
  id: number;
}

export interface IPlaylist {
  name: string;
  id: number;
}

export interface IMain {
  name: string;
  id: number;
}

export interface IYourMusic {
  name: string;
  id: number
}

export interface IUser {
  firstName: string;
  lastName: string;
  id: number;
  photo: string;
  friends: Array<IFriend>;
  main: Array<IMain>;
  "your music": Array<IYourMusic>;
  playlists: Array<IPlaylist>;
}

// current track interfaces
export interface ICurrentTrackAlbum {
  releaseDate: number;
  name: string;
  image: string;
  spotify: string;
}

export interface IArtist {
  name: string;
  spotify: string;
}

export interface ITrack {
  name: string;
  duration: number;
  inMediaLibrary: number;
  inFavorites: boolean;
  album: ICurrentTrackAlbum;
  artist: IArtist;
}

// artist interfaces
export interface IPopularTracks {
  title: string;
  feat: Array<string> | null;
  duration: number;
  inMediaLibrary: number;
  albumImage: string;
  id: number;
  inFavorites: boolean;
}

export interface IRelatedArtists {
  name: string;
  spotify: string;
  image: string;
  id: number;
}

export interface ILatestRelease {
  title: string;
  date: string;
  albumImage: string;
  id: number;
}

export interface IMainArtist {
  name: string;
  verified: boolean;
  listeners: number;
  spotify: string;
  photo: string;
  latestRelease: ILatestRelease;
  popularTracks: Array<IPopularTracks>;
  relatedArtists: Array<IRelatedArtists>;
}

// artist interface
export interface ITab {
  value: string;
  label: string;
}

// album interfaces
export interface IAlbumTrack {
  title: string;
  feat: Array<string> | null;
  duration: number;
  inMediaLibrary: number;
  albumImage: string;
  id: number;
  inFavorites: boolean;
}

export interface IAlbum {
  name: string;
  image: string;
  releaseDate: number;
  tracks: Array<IAlbumTrack>;
}

// highlighterStyle interface
export interface IHighlighterStyle {
  width: string;
  transform: string;
}