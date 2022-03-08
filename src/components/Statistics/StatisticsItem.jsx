import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatisticsItem({ data }) {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={styles.label}>{data.label}</span>
      <span className={styles.percentage}>{data.percentage}%</span>
    </li>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatisticsItem.prototype = {
  data: PropTypes.object.isRequired,
};

export default StatisticsItem;
