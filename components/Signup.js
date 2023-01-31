import React, { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(username, email, password);
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type='text'
          placeholder='enter your username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

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

        <button type='submit'>Signup</button>
      </form>

      <div>
        Already have an account, <Link href='/login'>Login</Link> here
      </div>
    </div>
  );
};

export default Signup;
