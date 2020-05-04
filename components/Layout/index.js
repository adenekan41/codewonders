import React, { useContext, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { BackLay, BodyStyling, Main } from './style';

import Navbar from '../Navbar';
import AppContext from '../Utils/context';
import { initGA, logPageView } from '../Utils/analytics';
import Cursor from '../Cursor';

const Layout = ({ children, title = 'Home' }) => {
  const { theme, loadTheme } = useContext(AppContext);

  const logPage = () => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  };

  useEffect(() => {
    logPage();
    loadTheme();
  }, [loadTheme, logPage]);

  return (
    <Main>
      <BodyStyling theme={theme} />
      <Helmet>
        <title>{`${title} | Adenekan Wonderful | Codewonders`}</title>
        <meta
          name="msapplication-TileColor"
          content={`${theme ? '#000000' : '#FFFFFF'}`}
        />
        <meta name="theme-color" content={`${theme ? '#000000' : '#FFFFFF'}`} />
      </Helmet>
      <Navbar />
      <BackLay>
        <h1 aria-hidden="true">
          {title === 'Home' ? 'Hello.' : title.concat('.')}
        </h1>
      </BackLay>
      <Cursor />
      {children}
    </Main>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  title: PropTypes.string,
};

export const PageWrapper = ({ children, className = '', ...rest }) => {
  return (
    <section {...rest}>
      <div className={`container  ${className}`}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10">{children}</div>
        </div>
      </div>
    </section>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  className: PropTypes.string,
};

export default Layout;
