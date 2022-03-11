import PropTypes from 'prop-types';
// import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map(({ avatar, name, isOnline, id }) => {
        console.log(isOnline);
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnLine={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
