import React from 'react';
import { IoIosMore } from 'react-icons/io';
import { IoPlaySharp } from 'react-icons/io5';
import './action-button.sass';

export type ActionButtonType = 'play' | 'follow' | 'more' | 'save';

interface IActionButtonProps {
  type: ActionButtonType;
}

export const ActionButton: React.FC<IActionButtonProps> = ({ type }) => {

  switch (type) {
    case 'play':
      return (
        <button
          className="action-button action-button__play"
          type="button"
        >
          <span className="action-button__play-icon">
            <IoPlaySharp size={17}/>
          </span>

          Play
        </button>
      );

    case 'follow':
      return (
        <button
          className="action-button action-button__follow"
          type="button"
        >
          Follow
        </button>
      );

    case 'more':
      return (
        <button
          className="action-button action-button__more"
          type="button"
        >
          <IoIosMore size={17}/>
        </button>
      );

    case 'save':
      return (
        <button
          className="action-button action-button__save"
          type="button"
        >
          Save
        </button>
      );
}

  return (
    <button type="button">
      Action
    </button>
  );
};