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

// track interfaces
export interface IAlbum {
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
  album: IAlbum;
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
}

// artist interface

export interface IOption {
  value: string;
  label: string;
}

export interface IOptions {
  options: Array<IOption>;
}