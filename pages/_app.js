import { useState } from 'react';

import { AuthContextProvider } from '../utils/context/authContext';
import BaseLayout from '../layouts/BaseLayout';

export default function App({ Component, pageProps }) {
  const [logged, setLogged] = useState(false);
  const [profile, setProfile] = useState({
    username: 'akhil',
    email: 'akhil@hasura.io',
  });

  return (
    <AuthContextProvider
      value={{
        logged,
        setLogged,
        profile,
        setProfile,
        token: 'this-is-jwt-token',
      }}
    >
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </AuthContextProvider>
  );
}
