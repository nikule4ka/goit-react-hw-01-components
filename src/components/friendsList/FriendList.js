import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend/Friend';
import s from './FriendsList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li key={id} className={s.item}>
        <Friend isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
