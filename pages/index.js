import { useEffect, useState } from 'react';

import { useAuthContext } from '../utils/context/authContext';
import Profile from '../components/Profile';

const Home = () => {
  const { loggedInUser } = useAuthContext();

  return (
    <>
      <h1>My App</h1>
      {loggedInUser ? <Profile /> : <div>users: 20</div>}
    </>
  );
};

export default Home;
