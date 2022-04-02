import PropTypes from 'prop-types';
import {
  UserCard,
  UserDescription,
  Avatar,
  Name,
  TagName,
  Location,
  UserStatistics,
  StatisticsItem,
  Label,
  Quantity,
} from './Profile.styled';
import dummyUser from './dummyUser.jpg';

function Profile({
  username,
  tag,
  location,
  avatar = dummyUser,
  stats: { followers, views, likes },
}) {
  return (
    <UserCard>
      <UserDescription>
        <Avatar src={avatar ?? dummyUser} alt={username} width="150" />
        <Name>{username}</Name>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
      </UserDescription>

      <UserStatistics>
        <StatisticsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatisticsItem>

        <StatisticsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatisticsItem>

        <StatisticsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatisticsItem>
      </UserStatistics>
    </UserCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
