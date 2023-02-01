import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

import { auth } from '../utils/firebase';
import { AuthContextProvider } from '../utils/context/authContext';
import BaseLayout from '../layouts/BaseLayout';

export default function App({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useState();

  axios.defaults.headers.common['Authorization'] = loggedInUser?.accessToken;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('triggered', currentUser?.email);
      // window.localStorage.setItem('accessToken', currentUser?.accessToken);
      setLoggedInUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContextProvider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </AuthContextProvider>
  );
}
