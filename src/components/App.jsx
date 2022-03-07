import Profile from './Profile/Profile';
import userPhoto from './Profile/userPhoto.jpg';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

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
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
