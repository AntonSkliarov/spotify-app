import React from 'react';
import { IoIosBrowsers } from "react-icons/io";
import { IoDocumentOutline, IoMusicalNotes, IoPerson, IoRadio } from 'react-icons/io5';
import { FaHeadphones } from "react-icons/fa";

export interface IIcon {
  name: string;
  icon: any;
  id: number;
}

export interface IIcons {
  main: IIcon[];
  "your music": IIcon[];
  playlists: IIcon[];
}

export const ICONS: IIcons = {
  "main": [
    {
      "name": "Browse",
      "icon": <IoIosBrowsers size={12}/>,
      "id": 1
    },
    {
      "name": "Activity",
      "icon": <IoPerson size={12}/>,
      "id": 2
    },
    {
      "name": "Radio",
      "icon": <IoRadio size={12}/>,
      "id": 3
    }
  ],
  "your music": [
    {
      "name": "Songs",
      "icon": <FaHeadphones size={12}/>,
      "id": 1
    },
    {
      "name": "Albums",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 2
    },
    {
      "name": "Artists",
      "icon": <IoPerson size={12}/>,
      "id": 3
    },
    {
      "name": "Local Files",
      "icon": <IoDocumentOutline size={12}/>,
      "id": 4
    }
  ],
  "playlists": [
    {
      "name": "Doo Wop",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 1
    },
    {
      "name": "Pop Classics",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 2
    },
    {
      "name": "Love $ongs",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 3
    },
    {
      "name": "Hipster",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 4
    },
    {
      "name": "New Music Friday",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 5
    },
    {
      "name": "Techno Poppers",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 6
    },
    {
      "name": "Summer Soothers",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 7
    },
    {
      "name": "Hard Rap",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 8
    },
    {
      "name": "Pop Rap",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 9
    },
    {
      "name": "5 Stars",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 10
    },
    {
      "name": "Dope Dancin",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 11
    },
    {
      "name": "Sleep",
      "icon": <IoMusicalNotes size={12}/>,
      "id": 12
    }
  ]
};
