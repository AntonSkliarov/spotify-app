export interface IFriend {
  firstName: string,
  lastName: string,
  id: number
}

export interface IPlaylist {
  name: string,
  id: number
}

export interface IMain {
  name: string,
  id: number
}

export interface IYourMusic {
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
  main: {
    [index: number]: IMain
  }
  yourMusic: {
    [index: number]: IYourMusic
  }
  playlists: {
    [index: number]: IPlaylist
  }
}