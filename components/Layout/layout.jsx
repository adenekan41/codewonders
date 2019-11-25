import React, { useState, useEffect } from 'react';
import Link from '../Utils/link'
import Head from 'next/head'
import { BodyStyling , Header, SocialMedia, BackLay} from './style'
import { Moon, Twitter, Facebook, Linkedin, Github, Instagram, Icon, Logo } from './icons'
import { loadState, saveState, clearState } from '../Utils/localstorage';
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})
export const Layout = ({ children, title = 'Home' }) => {
  const [show, updateShow] = useState(false);
  const [theme, setTheme] = useState(loadState() ? true : false)
  const Handleopen = () => {
    updateShow(!show)
  }
  const darkMode = () => {
    setTheme(!theme)
  }
  const loadTheme = () => {
    if(theme == false){
      clearState()
    }else{
      saveState(1)
    }
  }
  useEffect(() => {
    loadTheme()
  },[loadTheme])

  return (
  <div>
    <BodyStyling {...{theme}}/>
    <Head>
      <title>{`${title} | Adenekan Wonderful`}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta httpEquiv="Content-Language" content="en"/>
      <meta name="author" content="Adenekan Wonderful" />
      <meta name="keywords" content="codewonders , codewonders.us , start up design, software, code, tech, computer stuff, store, couture, html, css, javascript, websites, website development, web development, design, ui, ux , adenekan wonderful , code_wonders" />
      <meta property="og:locale" content="en-US" />
      <meta property="og:type" content="website" />
      <meta name="description" content="Hi, I&#x27;m Adenekan Wonderful, Frontend Developer and Javascript Engineer."/>
      <meta name="og:description" content="Hi, I&#x27;m Adenekan Wonderful, Frontend Developer and Javascript Engineer."/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@code_wonders"/>
      <meta name="twitter:image" content="https://i.ibb.co/jz5Qwx1/Group-7.png"/>
      <meta name="og:title" content="Adenekan Wonderful"/>
      <meta name="og:url" content="https://codewonders.us"/>
      <meta name="og:image" content="https://i.ibb.co/jz5Qwx1/Group-7.png"/>
      <meta name="apple-mobile-web-app-title" content="Codewonders"/>
      <meta name="msapplication-TileColor" content="#000000"/>
      <meta name="theme-color" content="#000000"/>
      <meta name="next-head-count" content="21"/>
      <style dangerouslySetInnerHTML={{__html: `
        @font-face{
          font-family:'Blorado';
          src:url("/fonts/BRFirmaCW-Bold.woff2") format("woff2");
          font-weight:bold;
          font-display:fallback;
          font-style:normal
        }
        
        @font-face{
          font-family:'Blorado';
          src:url("/fonts/BRFirmaCW-Regular.woff2") format("woff2");
          font-weight:normal;
          font-display:fallback;
          font-style:normal
        }
        @font-face{
          font-family:'Blorado';
          src:url("/fonts/BRFirmaCW-Medium.woff2") format("woff2");
          font-weight:500;
          font-display:fallback;
          font-style:normal
        }
        @font-face{
          font-family:'Blorado';
          src:url("/fonts/BRFirmaCW-SemiBold.woff2") format("woff2");
          font-weight:600;
          font-display:fallback;
          font-style:normal
        }
      `}}/>
      <link rel="stylesheet" href="/css/style.css" />
    </Head>
    <Header {...{theme}}>
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <div className="container">
        <Link href='/'><a className="navbar-brand" aria-label="Adenekan Wonderful Home"><Logo /></a></Link>

          <button className="navbar-toggler" type="button" onClick={Handleopen} aria-label="Open Button Toggle">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${show && 'show'}`} id="collapsibleNavbar">
            <span className="d-block d-md-none" onClick={Handleopen}><Icon /></span>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hover__bottom">
                <Link prefetch href='/' activeClassName='is-active'><a className="nav-link" aria-label="Go Home" title="Home">Home</a></Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link prefetch href='/about' activeClassName='is-active'><a className="nav-link" aria-label="Go To About Page" title="About">About</a></Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link prefetch href='/projects' activeClassName='is-active'><a className="nav-link" aria-label="Go To Projects Page" title="Projects">Projects</a></Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link prefetch href='/articles' activeClassName='is-active'><a className="nav-link" aria-label="Go To Articles Page" title="Articles">Articles</a></Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link prefetch href='/contact' activeClassName='is-active'><a className="nav-link" aria-label="Go To Contacts Page" title="Contact">Contact</a></Link>
              </li>
              <li className="nav-item pl-md-3">
                <Link href=''><a className="nav-link" aria-label="Turn On Dark Mood" onClick={darkMode}><Moon/></a></Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </Header>
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