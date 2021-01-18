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
  main: Array<IIcon>;
  "your music": Array<IIcon>;
  playlists: Array<IIcon>;
}

export const ICONS: IIcons = {
  "main": [
    {
      "name": "Browse",
      "icon": <IoIosBrowsers />,
      "id": 1
    },
    {
      "name": "Activity",
      "icon": <IoPerson />,
      "id": 2
    },
    {
      "name": "Radio",
      "icon": <IoRadio />,
      "id": 3
    }
  ],
  "your music": [
    {
      "name": "Songs",
      "icon": <FaHeadphones />,
      "id": 1
    },
    {
      "name": "Albums",
      "icon": <IoMusicalNotes />,
      "id": 2
    },
    {
      "name": "Artists",
      "icon": <IoPerson />,
      "id": 3
    },
    {
      "name": "Local Files",
      "icon": <IoDocumentOutline />,
      "id": 4
    }
  ],
  "playlists": [
    {
      "name": "Doo Wop",
      "icon": <IoMusicalNotes />,
      "id": 1
    },
    {
      "name": "Pop Classics",
      "icon": <IoMusicalNotes />,
      "id": 2
    },
    {
      "name": "Love $ongs",
      "icon": <IoMusicalNotes />,
      "id": 3
    },
    {
      "name": "Hipster",
      "icon": <IoMusicalNotes />,
      "id": 4
    },
    {
      "name": "New Music Friday",
      "icon": <IoMusicalNotes />,
      "id": 5
    },
    {
      "name": "Techno Poppers",
      "icon": <IoMusicalNotes />,
      "id": 6
    },
    {
      "name": "Summer Soothers",
      "icon": <IoMusicalNotes />,
      "id": 7
    },
    {
      "name": "Hard Rap",
      "icon": <IoMusicalNotes />,
      "id": 8
    },
    {
      "name": "Pop Rap",
      "icon": <IoMusicalNotes />,
      "id": 9
    },
    {
      "name": "5 Stars",
      "icon": <IoMusicalNotes />,
      "id": 10
    },
    {
      "name": "Dope Dancin",
      "icon": <IoMusicalNotes />,
      "id": 11
    },
    {
      "name": "Sleep",
      "icon": <IoMusicalNotes />,
      "id": 12
    }
  ]
};
