import React from 'react';
import { Friend } from './components/friend';
import './friends.sass';
import userFixture from '../../../../../../../api/userFixture.json';
import { IFriend } from '../../../../../../../helpers/interfaces';
import { ActionButton } from '../../../../../ui/action-button';

const { friends } = userFixture.user;

export const Friends: React.FC = () => (
  <>
    <div className="friends">
      {friends.map((friend: IFriend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>

    <div className="friends__find-friends-button">
      <ActionButton type={"find friends"} />
    </div>
  </>
);
