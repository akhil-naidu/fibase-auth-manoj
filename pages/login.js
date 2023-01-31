import React from 'react';
import { useRouter } from 'next/router';

import Login from '../components/Login';
import { useAuthContext } from '../utils/context/authContext';

const LoginPage = () => {
  const { logged } = useAuthContext();
  const router = useRouter();

  if (logged) {
    router.push('/');
  }

  return <Login />;
};

export default LoginPage;
