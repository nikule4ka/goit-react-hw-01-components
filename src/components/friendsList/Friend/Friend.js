import React from 'react';
import PropTypes from 'prop-types';
import s from './Friend.module.css';

const Friend = ({ id, isOnline, avatar, name }) => (
  <li key={id} className={s.item}>
    <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
    <img className={s.avatar} src={avatar} alt={name} />
    <p className={s.name}>{name}</p>
  </li>
);

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
