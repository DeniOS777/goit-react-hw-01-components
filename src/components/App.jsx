import user from 'user.json';
import Profile from './Profile/Profile';
import userPhoto from '../userPhoto.jpg';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        backgroundColor: '#E7ECF2',
      }}
    >
      <Profile
        username={user.username}
        avatar={userPhoto}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
};
