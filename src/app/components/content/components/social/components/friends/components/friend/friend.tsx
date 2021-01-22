import React from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import './friend.sass';
import { IFriend } from '../../../../../../../../../helpers/interfaces';

interface IFriendProps {
  friend: IFriend;
}

export const Friend: React.FC<IFriendProps> = ({ friend }) => (
  <a className="friend" href="#">
    <span className="friend__icon">
      <IoPersonSharp />
    </span>

    {`${friend.firstName} ${friend.lastName}`}
  </a>
);
