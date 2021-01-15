export interface IFriend {
  firstName: string,
  lastName: string,
  id: number
}

export interface IPlaylist {
  name: string,
  id: number
}

export interface IUser {
  firstName: string,
  lastName: string,
  id: number,
  photo: string,
  friends: {
    [index: number]: IFriend
  },
  playlists: {
    [index: number]: IPlaylist
  }
}