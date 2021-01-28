import React from 'react';
import { UserActions } from './components/user-actions';
import { UserInfo } from './components/user-info';
import './user.sass';
import userFixture from '../../../../../api/userFixture.json';
import { Notifications } from '../../../ui/notifications';
import { Inbox } from '../../../ui/inbox';

const { user } = userFixture;

export const User: React.FC = () => (
  <div className="user">
    <Notifications />

    <Inbox />

    <UserInfo user={user}/>
    <UserActions />
  </div>
);
