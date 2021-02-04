import React from 'react';
import classNames from 'classnames';
import {
  IoChevronBack,
  IoChevronDown,
  IoChevronForward,
  IoChevronUp
} from 'react-icons/io5';
import './arrow-button.sass';

export type ArroButtonType = 'forward' | 'back' | 'up' | 'down';

interface IArrowButtonProps {
  type: ArroButtonType;
  disabled?: boolean;
  onClick?: () => void
}

const arrowButtonIcon = {
  'back': <IoChevronBack size={25} />,
  'forward': <IoChevronForward size={25} />,
  'down': <IoChevronDown size={25} />,
  'up': <IoChevronUp size={25} />
};

const arrowButtonTitle = {
  'back': 'Back',
  'forward': 'Forward',
  'down': 'Open menu',
  'up': 'Close menu'
};

export const ArrowButton: React.FC<IArrowButtonProps> = ({
  type,
  disabled,
  onClick
}) => {
  const getArrowButtonIcon = arrowButtonIcon[type];
  const getArrowButtonTitle = arrowButtonTitle[type];
  const classes = classNames("arrow-button", {
    "arrow-button_disabled": disabled,
    "arrow-button__down": type === 'down',
    "arrow-button__up": type === 'up',
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      title={getArrowButtonTitle}
    >
      {getArrowButtonIcon}
    </button>
  );
};
