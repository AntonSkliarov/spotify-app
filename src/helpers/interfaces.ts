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