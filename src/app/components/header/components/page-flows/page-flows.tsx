import React from 'react';
import { ArrowButton } from '@ui/arrow-button';
import './page-flows.sass';

export const PageFlows: React.FC = () => (
  <div className="page-flows">

    <span className="page-flows__arrow">
      <ArrowButton type={'back'} />
    </span>

    <span className="page-flows__arrow">
      <ArrowButton type={'forward'} disabled={true}/>
    </span>

  </div>
);
