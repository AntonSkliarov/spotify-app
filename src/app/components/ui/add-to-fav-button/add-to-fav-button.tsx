import React, { useState } from 'react';
import './add-to-fav-button.sass';
import { GoCheck } from "react-icons/go";
import { IoAdd } from 'react-icons/io5';

interface IAddToFavButton {
  inFavorites: boolean;
}

export const AddToFavButton: React.FC<IAddToFavButton> = ({ inFavorites }) => {
  const [addedToFavorites, setAddedToFavorites] = useState<boolean>(inFavorites);

  const onClick = (): void => {
    setAddedToFavorites(!addedToFavorites);
  };

  return (
    <button
      className="add-to-fav-button"
      type="button"
      onClick={onClick}
    >
      {addedToFavorites
        ? <GoCheck size={20} />
        : <IoAdd size={22} />
      }
    </button>
  );
};
