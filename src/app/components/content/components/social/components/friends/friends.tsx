import React from 'react';
import { Friend } from './components/friend';
import './friends.sass';
import userFixture from '../../../../../../../api/userFixture.json';
import { IFriend } from '../../../../../../../helpers/interfaces';

const { friends } = userFixture.user;

export const Friends: React.FC = () => (
  <>
    <div className="friends">
      {friends.map((friend: IFriend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>

    <button type="button">Find Friends</button>
  </>
);
