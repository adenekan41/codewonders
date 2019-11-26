import React, {useContext, useEffect} from 'react';
import { SocialMedia, BackLay, BodyStyling} from './style'
import { Twitter, Facebook, Linkedin, Github, Instagram} from './icons'
import Navbar from './navbar';
import Helmet from 'react-helmet'
import AppContext from '../Utils/context';
export const Layout = ({ children , title="Home"}) => {
  const {theme, loadTheme} = useContext(AppContext)
  useEffect(() => {
    loadTheme()
  },[loadTheme])
  return (
  <div>
    <BodyStyling {...{theme}}/>
    <Helmet>
      <title>{`${title} | Adenekan Wonderful`}</title>
      <meta name="msapplication-TileColor" content={`${theme ? '#000000' : '#FFFFFF'}`}/>
      <meta name="theme-color" content={`${theme ? '#000000' : '#FFFFFF'}`}/>
    </Helmet>
    <Navbar />
    <BackLay>
      <h1 style={{left:'-4rem',}}>{title === 'Home' ? 'Hello.' : title.concat('.')}</h1>
    </BackLay>
    {children}
    <SocialMedia>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/code_wonders" aria-label="Go To Adenekan Wonderful Twitter Page" title="Twitter Page"><Twitter /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/AdenekanWonderful" aria-label="Go To Adenekan Wonderful Facebook Page" title="Facebook Page"><Facebook /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/codewonders" aria-label="Go To Adenekan Wonderful Linkedin Page" title="Linkedin Page"><Linkedin /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/adenekan41" aria-label="Go To Adenekan Wonderful Github Page" title="Github Page"><Github /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/codewonders" aria-label="Go To Adenekan Wonderful Instagram Page" title="Instagram Page"><Instagram /></a>
    </SocialMedia>
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

