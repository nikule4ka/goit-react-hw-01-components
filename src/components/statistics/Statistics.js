import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.statList}>
      {stats.map(item => (
        <li
          key={item.id}
          className={s.item}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={s.label}>{item.label}</span>
          <span className={s.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function getRandomColor() {
  const number = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + number;
}

export default Statistics;
