import React from 'react';
import { IoIosMore } from 'react-icons/io';
import { IoPlaySharp } from 'react-icons/io5';
import './action-button.sass';

export type ActionButtonType = 'play' | 'follow' | 'more' | 'save' | 'find friends' | '5 more';

interface IActionButtonProps {
  type: ActionButtonType;
  onClick?: () => void; 
  visibleFullList?: boolean;
}

export const ActionButton: React.FC<IActionButtonProps> = ({
  type,
  onClick,
  visibleFullList
}) => {

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

    case 'find friends':
      return (
        <button
          className="action-button action-button__find-friends"
          type="button"
        >
          Find Friends
        </button>
      );

    case '5 more':
      return (
        <button
          className="action-button action-button__5-more"
          type="button"
          onClick={onClick}
        >
          {visibleFullList ? 'Hide': 'Show 5 more'}
        </button>
      );
}

  return (
    <button type="button">
      Action
    </button>
  );
};