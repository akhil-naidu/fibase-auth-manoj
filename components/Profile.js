import Router from 'next/router';
import React from 'react';
import { useAuthContext } from '../utils/context/authContext';

const Profile = () => {
  const { loggedInUser } = useAuthContext();

  return (
    <div>
      <h1>My Profile</h1>
      {/* <div>name: {username}</div> */}
      <div>logged in by using email: {loggedInUser?.email}</div>
    </div>
  );
};

export default Profile;
