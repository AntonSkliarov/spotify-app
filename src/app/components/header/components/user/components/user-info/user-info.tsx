import React from 'react';
import './user-info.sass';
import { IUser } from '../../../../../../../helpers/interfaces';

interface UserInfoProps {
  user: IUser,
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <div className="user-info">
    <div className="user-info__img-container">
      <img
        className="user-info__img"
        src={user.photo}
        alt="Profile Picture"
      />
    </div>
    <div className="user-info__name">
      <span>{`${user.firstName} ${user.lastName}`}</span>
    </div>
  </div>
);
