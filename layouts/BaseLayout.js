import React from 'react';

import Navbar from '../components/Navbar';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>footer</footer>
    </>
  );
};

export default BaseLayout;
