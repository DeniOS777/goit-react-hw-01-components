import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className="stat-list">
        {stats.map(item => {
          return <StatisticsItem data={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
};

export default Statistics;
