import React from 'react';
import { UserActions } from './components/user-actions';
import { UserInfo } from './components/user-info';
import './user.sass';

export const User = () => (
  <div className="user">
    <div className="user__notifications">Notif</div>
    <div className="user__inbox">Inbox</div>

    <UserInfo />
    <UserActions />
  </div>
);