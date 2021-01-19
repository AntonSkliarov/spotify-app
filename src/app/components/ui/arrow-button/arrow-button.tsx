import React from 'react';
import classNames from 'classnames';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import './arrow-button.sass';

export type ArroButtonType = 'forward' | 'back' | 'up' | 'down';

interface IArrowButtonProps {
  type: ArroButtonType;
  disabled?: boolean;
}

export const ArrowButton: React.FC<IArrowButtonProps> = ({ type, disabled }) => {

  switch (type) {
    case 'back':
      return (
        <button
          type="button"
          className={classNames("arrow-button", {
            "arrow-button_disabled": disabled,
          })}
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
        >
          <IoChevronForward size={25} />
        </button>
      );

    default:
      return (
        <button
          type="button"
          className="arrow-button"
        >
          <IoChevronForward size={25} />
        </button>
      );
  }
};
