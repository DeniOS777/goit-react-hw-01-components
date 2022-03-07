import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>

        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>

        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>

        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
};

export default Statistics;