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

export const ArrowButton: React.FC<IArrowButtonProps> = ({
  type,
  disabled,
  onClick
}) => {

  switch (type) {
    case 'back':
      return (
        <button
          type="button"
          className={classNames("arrow-button", {
            "arrow-button_disabled": disabled,
          })}
          title='Back'
        >
          <IoChevronBack size={25} />
        </button>
      );

    case 'forward':
      return (
        <button
          type="button"
          className={classNames("arrow-button", {
            "arrow-button_disabled": disabled,
          })}
          title='Forward'
        >
          <IoChevronForward size={25} />
        </button>
      );

    case 'down':
      return (
        <button
          type="button"
          className="arrow-button arrow-button__down"
          onClick={onClick}
          title='Open menu'
        >
          <IoChevronDown size={25} />
        </button>
      );

    case 'up':
      return (
        <button
          type="button"
          className="arrow-button arrow-button__up"
          onClick={onClick}
          title='Close menu'
        >
          <IoChevronUp size={25} />
        </button>
      );

    default:
      return null;
  }
};
