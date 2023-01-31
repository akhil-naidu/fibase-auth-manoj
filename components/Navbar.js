import React from 'react';
import Link from 'next/link';
import { useAuthContext } from '../utils/context/authContext';

const Navbar = () => {
  const { logged, setLogged } = useAuthContext();

  const handleLogout = () => {
    setLogged(false);
  };

  return (
    <nav>
      <Link href='/'>Home</Link>
      {logged ? (
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
