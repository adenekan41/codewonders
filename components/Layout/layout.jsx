import React, {useContext, useEffect} from 'react';
import { SocialMedia, BackLay, BodyStyling} from './style'

import Navbar from './navbar';
import Helmet from 'react-helmet'
import {withRouter} from 'next/router'
import AppContext from '../Utils/context';
import { initGA, logPageView } from '../Utils/analytics'

export const Layout = ({ children , title="Home"}) => {
  const {theme, loadTheme} = useContext(AppContext)

  const logPage = () => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  useEffect(() => {
    logPage()
    loadTheme()
  },[loadTheme, logPage])


  return (
  <div>
    <BodyStyling {...{theme}}/>
    <Helmet>
      <title>{`${title} | Adenekan Wonderful | Codewonders`}</title>
      <meta name="msapplication-TileColor" content={`${theme ? '#000000' : '#FFFFFF'}`}/>
      <meta name="theme-color" content={`${theme ? '#000000' : '#FFFFFF'}`}
      />
    </Helmet>
    <Navbar />
    <BackLay>
      <h1 style={{left:'-4rem',}}>{title === 'Home' ? 'Hello.' : title.concat('.')}</h1>
    </BackLay>
    {children}
  </div>
)
}


export const PageWrapper = ({children}) => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center" >
        <div className="col-md-10">
          {children}
        </div>
      </div>
    </div>
  )
}

