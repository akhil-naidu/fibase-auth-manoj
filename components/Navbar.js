import React from 'react';
import Link from 'next/link';
import { useAuthContext } from '../utils/context/authContext';
import { logout } from '../utils/authFunctions';

const Navbar = () => {
  const { loggedInUser } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <Link href='/'>Home</Link>
      {loggedInUser ? (
        <button onClick={() => handleLogout()}>logout</button>
      ) : (
        <>
          <Link href='/login'>Login</Link>
          <Link href='/signup'>Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
