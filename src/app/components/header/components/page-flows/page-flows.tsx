import React from 'react';
import './page-flows.sass';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export const PageFlows = () => (
  <div className="page-flows">
    <span className="page-flows__arrow">
      <button
        type="button"
        className="button page-flows__button"
      >
        <IoChevronBack size={25} />
    </button>
    </span>

    <span className="page-flows__arrow">
      <button
        type="button"
        className="button page-flows__button page-flows__button_disabled"
      >
        <IoChevronForward size={25} />
    </button>
    </span>

  </div>
);
