import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend/Friend';
import s from './FriendsList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(({ isOnline, avatar, name }) => (
      <Friend isOnline={isOnline} avatar={avatar} name={name} />
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
