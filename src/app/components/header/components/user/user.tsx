import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { UserActions } from './components/user-actions';
import { UserInfo } from './components/user-info';
import './user.sass';
import { IoMdArchive } from 'react-icons/io';
import userFixture from '../../../../../api/userFixture.json';

const { user } = userFixture;

export const User: React.FC = () => (
  <div className="user">
    <div className="user__notifications">
      <IoNotifications />
    </div>
    <div className="user__inbox">
      <IoMdArchive />
    </div>

    <UserInfo user={user}/>
    <UserActions />
  </div>
);