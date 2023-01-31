import { useState, useEffect } from 'react';
import { useAuthContext } from '../utils/context/authContext';
import Profile from '../components/Profile';

const Home = () => {
  const [count, setCount] = useState(0);
  const { logged } = useAuthContext();

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const data = window.localStorage.getItem('count');
    if (data !== null) setCount(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <>
      <h1>My App</h1>
      {logged ? <Profile /> : <div>Total Users: 20</div>}
      {count}
      <button onClick={() => increment()}>+</button>
    </>
  );
};

export default Home;
