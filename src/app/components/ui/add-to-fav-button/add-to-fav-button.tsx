import React, { useState } from 'react';
import CSS from 'csstype';
import './add-to-fav-button.sass';
import { GoCheck } from "react-icons/go";
import { IoAdd } from 'react-icons/io5';

type AddToFavButtonType = 'playing';

interface IAddToFavButton {
  inFavorites: boolean;
  type?: AddToFavButtonType;
}

export const AddToFavButton: React.FC<IAddToFavButton> = ({ inFavorites, type }) => {
  const [addedToFavorites, setAddedToFavorites] = useState<boolean>(inFavorites);

  let iconStyles: CSS.Properties = {};

  if (type === 'playing') {
    iconStyles = {
      paddingRight: '15px'
    };
  }


  const onClick = (): void => {
    setAddedToFavorites(!addedToFavorites);
  };

  return (
    <button
      className="add-to-fav-button"
      type="button"
      onClick={onClick}
      style={iconStyles}
      title={addedToFavorites ? 'Added to favorites' : 'Add to favorites'}
    >
      {addedToFavorites
        ? <GoCheck size={20}/>
        : <IoAdd size={22} />
      }
    </button>
  );
};
