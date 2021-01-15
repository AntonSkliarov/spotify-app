import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { UserActions } from './components/user-actions';
import { UserInfo } from './components/user-info';
import './user.sass';
import { IoMdArchive } from 'react-icons/io';

export const User = () => (
  <div className="user">
    <div className="user__notifications">
      <IoNotifications />
    </div>
    <div className="user__inbox">
      <IoMdArchive />
    </div>

    <UserInfo />
    <UserActions />
  </div>
);