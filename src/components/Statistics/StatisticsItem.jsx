import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function StatisticsItem({ data }) {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{data.label}</span>
      <span className="percentage">{data.percentage}%</span>
    </li>
  );
}

StatisticsItem.prototype = {
  data: PropTypes.object.isRequired,
};

export default StatisticsItem;
