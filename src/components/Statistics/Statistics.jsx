import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
// import StatisticsItem from './StatisticsItem';
import getRandomHexColor from 'utils/getRandomHexColor';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              key={id}
              className={styles.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
