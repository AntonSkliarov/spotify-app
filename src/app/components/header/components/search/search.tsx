import React from 'react';
import './search.sass';

export const Search: React.FC = () => (
  <div className="search">
    <input
      className="search__input"
      type="text"
      placeholder="Search"
    />
  </div>
);
