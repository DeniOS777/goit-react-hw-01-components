import PropTypes from 'prop-types';

function StatisticsItem({ data }) {
  return (
    <li className="item">
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}%</span>
    </li>
  );
}

StatisticsItem.prototype = {
  data: PropTypes.object.isRequired,
};

export default StatisticsItem;
