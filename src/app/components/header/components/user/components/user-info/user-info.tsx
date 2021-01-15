import React from 'react';
import './user-info.sass';

export const UserInfo = () => (
  <div className="user-info">
    <div className="user-info__img-container">
      <img className="user-info__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg" alt="Profile Picture" />
    </div>
    <div className="user-info__name">
      <span>Adam Lowenthal</span>
    </div>
  </div>
);
