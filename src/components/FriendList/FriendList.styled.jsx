import styled from 'styled-components';

export const FriendGroup = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const FriendCard = styled.li`
  display: flex;
  padding: 10px 0;
  padding-left: 15px;
  padding-right: 120px;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 2px rgb(0 0 0 / 14%),
    0px 4px 4px rgb(0 0 0 / 20%);
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Avatar = styled.img`
  margin-right: 20px;
  max-width: 90px;
  border-radius: 8px;
  background-color: #d1d1d1;
  box-shadow: 0px 1px 6px rgb(0 0 0 / 75%);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Name = styled.p`
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: 0.02em;
`;

export const Status = styled.span`
  margin-right: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#11a311' : '#d82222')};
`;
