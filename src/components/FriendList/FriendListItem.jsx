import PropTypes from 'prop-types';
import { FriendCard, Avatar, Name, Status } from './FriendList.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendCard>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendCard>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
