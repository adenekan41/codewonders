import type { AppProps, AppContext as NextAppContext } from 'next/app';
import { useState } from 'react';
import { PageTransition } from 'next-page-transitions';

import AppContext from '../components/Utils/context';
import {
  loadState,
  clearState,
  saveState,
} from '../components/Utils/localstorage';

const App = ({ Component, pageProps}: AppProps) => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(loadState() ? true : false);

  const loadTheme = () => {
    if (!theme) clearState();
    else saveState(1);
  };

  return (
    <PageTransition
      timeout={200}
      classNames="page-transition"
      loadingDelay={100}
    >
      <AppContext.Provider
        value={{
          show,
          theme,
          loadTheme,
          toggleTheme: () => setTheme(theme => !theme),
          toggleShow: () => setShow(show => !show),
          closeShow: () => setShow(false),
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </PageTransition>
  )
};

App.getInitialProps = async ({ Component, ctx }: NextAppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default App;