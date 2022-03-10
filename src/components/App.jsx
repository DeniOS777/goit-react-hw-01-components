import Profile from 'components/Profile/Profile';
import userPhoto from 'components/Profile/userPhoto.jpg';
import user from 'components/Profile/user.json';

import Statistics from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
