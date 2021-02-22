import React from "react";
import PropTypes from "prop-types";
import Friend from "./Friend";

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li key={id} class="item">
        <Friend isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
