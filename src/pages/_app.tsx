import React from 'react';

import GlobalStyle from '@/styles/globals';
import Hooks from '@/hook';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Hooks>
        <Component {...pageProps} />
      </Hooks>
    </>
  );
};

export default App;
