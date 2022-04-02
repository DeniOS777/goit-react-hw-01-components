import styled from 'styled-components';

export const UserCard = styled.div`
  margin-bottom: 25px;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const UserDescription = styled.div`
  padding: 35px 50px;
  text-align: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e7e7e7;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  margin-bottom: 35px;
  max-width: 150px;
  border-radius: 50%;
  transition: transform 0.4s ease-out;

  &:hover {
    transform: scale(1.4);
  }
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 700;
`;

export const TagName = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  color: #807f7f;
`;

export const Location = styled.p`
  font-size: 20px;
  color: #807f7f;
`;

export const UserStatistics = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #f3f6f9;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-basis: calc(100% / 3);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &:not(:last-child) {
    border-right: 1px solid #e3e3e3;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
  color: #807f7f;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
