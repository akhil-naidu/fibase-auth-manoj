import Link from 'next/link';
import React, { useState } from 'react';
import { useAuthContext } from '../utils/context/authContext';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const router = useRouter();

  const { setLogged, setProfile } = useAuthContext();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(email, password);
    setLogged(true);
    setProfile((prev) => ({ ...prev, email }));
    // router.push('/');
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type='email'
          placeholder='enter your email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type='password'
          placeholder='enter your password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type='submit'>Login</button>
      </form>

      <div>
        Don't have an account, <Link href='/signup'>Sign Up</Link> here
      </div>
    </div>
  );
};

export default Login;
