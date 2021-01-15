import React from 'react';
import './page-flows.sass';

export const PageFlows = () => (
  <div className="page-flows">
    <span className="page-flows__arrow">
      <button
        type="button"
        className="button page-flows__button"
      >
        Back
    </button>
    </span>

    <span className="page-flows__arrow">
      <button
        type="button"
        className="button page-flows__button page-flows__button_disabled"
      >
        Forward
    </button>
    </span>

  </div>
);
