import user from 'user.json';
import Profile from './Profile/Profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        // textTransform: 'uppercase',
        color: '#010101',
        backgroundColor: '#E7ECF2',
      }}
    >
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
  );
};
