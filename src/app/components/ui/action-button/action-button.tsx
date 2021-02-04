import React, { ReactElement } from 'react';
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

interface IActionButtonContent {
  'play': ReactElement;
  'follow': ReactElement;
  'more': ReactElement;
  'save': ReactElement;
  'find friends': ReactElement;
  '5 more': string;
}

const actionButtonContent: IActionButtonContent = {
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

  // switch (type) {
  //   case 'play':
  //     return (
  //       <button
  //         className="action-button action-button__play"
  //         type="button"
  //       >
  //         <span className="action-button__play-icon">
  //           <IoPlaySharp size={17}/>
  //         </span>

  //         <span>Play</span>
  //       </button>
  //     );

  //   case 'follow':
  //     return (
  //       <button
  //         className="action-button action-button__follow"
  //         type="button"
  //       >
  //         <span>Follow</span>
  //       </button>
  //     );

  //   case 'more':
  //     return (
  //       <button
  //         className="action-button action-button__more"
  //         type="button"
  //         title='More'
  //       >
  //         <IoIosMore size={17}/>
  //       </button>
  //     );

  //   case 'save':
  //     return (
  //       <button
  //         className="action-button action-button__save"
  //         type="button"
  //       >
  //         <span>Save</span>
  //       </button>
  //     );

  //   case 'find friends':
  //     return (
  //       <button
  //         className="action-button action-button__find-friends"
  //         type="button"
  //       >
  //         <span>Find Friends</span>
  //       </button>
  //     );

  //   case '5 more':
  //     return (
  //       <button
  //         className="action-button action-button__5-more"
  //         type="button"
  //         onClick={onClick}
  //       >
  //         {visibleFullList ? 'Hide': 'Show 5 more'}
  //       </button>
  //     );
    
  //   default:
  //     return null;
  // }

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