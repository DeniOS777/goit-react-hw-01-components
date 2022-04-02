import styled from 'styled-components';
import getRandomHexColor from 'utils/getRandomHexColor';

export const StatisticsSection = styled.section`
  margin-bottom: 25px;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 1px rgb(0 0 0 / 20%);
`;

export const SectionTitle = styled.h2`
  padding: 25px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #49535a;
  text-transform: uppercase;
  text-align: center;
  background-color: #ffffff;
`;

export const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  color: #ffffff;
`;

export const Value = styled.span`
  color: #ffffff;
`;
