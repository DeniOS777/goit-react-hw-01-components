import PropTypes from 'prop-types';
import {
  StatisticsSection,
  SectionTitle,
  StatisticsList,
  StatisticsItem,
  Label,
  Value,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <SectionTitle>{title}</SectionTitle>}

      <StatisticsList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StatisticsItem key={id}>
              <Label>{label}</Label>
              <Value>{percentage}%</Value>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
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
