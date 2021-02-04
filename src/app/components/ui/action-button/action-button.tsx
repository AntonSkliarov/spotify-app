import React from 'react';
import classNames from 'classnames';
import { IoIosMore } from 'react-icons/io';
import { IoPlaySharp } from 'react-icons/io5';
import './action-button.sass';

export type ActionButtonType = 'play' | 'follow' | 'more' | 'save' | 'find friends' | '5 more';

interface IActionButtonProps {
  type: ActionButtonType;
  onClick?: () => void; 
  visibleFullList?: boolean;
}

const actionButtonContent = {
  'play':
  <>
    <span className="action-button__play-icon">
      <IoPlaySharp size={17} />
    </span>
    <span>Play</span>
  </>,
  'follow': <span>Follow</span>,
  'more': <IoIosMore size={17} />,
  'save': <span>Save</span>,
  'find friends': <span>Find Friends</span>,
  '5 more': 'Show 5 more'
};

export const ActionButton: React.FC<IActionButtonProps> = ({
  type,
  onClick,
  visibleFullList
}) => {
  const getActionButtonContent = actionButtonContent[type];
  const classes = classNames("action-button", {
    "action-button__play": type === 'play',
    "action-button__follow": type === 'follow',
    "action-button__more": type === 'more',
    "action-button__save": type === 'save',
    "action-button__find-friends": type === 'find friends',
    "action-button__5-more": type === '5 more',
  });

  return (
    <button
      className={classes}
      type="button"
      onClick={onClick}
    >
      {getActionButtonContent === 'Show 5 more' && visibleFullList
        ? 'Hide'
        : getActionButtonContent}
    </button>
  );
};