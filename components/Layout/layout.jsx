import Link from '../Utils/link'
import Head from 'next/head'
import { BodyStyling , Header, SocialMedia, BackLay} from './style'
import { Moon, Twitter, Facebook, Linkedin, Github, Instagram } from './icons'
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})
export default ({ children, title = 'Home' }) => (
  <div>
    <BodyStyling />
    <Head>
      <title>{`${title} | Adenekan Wonderful`}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="/css/style.css" />
    </Head>
    <Header>
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <div className="container">
        <Link href='/'><a className="navbar-brand" aria-label="Adenekan Wonderful Home"><img src="/img/cw..svg"/></a></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item hover__bottom">
                <Link href='/' activeClassName='is-active'><a className="nav-link" aria-label="Go Home">Home</a></Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link href='/about' activeClassName='is-active'><a className="nav-link" aria-label="Go To About Page">About</a></Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link href='/projects' activeClassName='is-active'><a className="nav-link" aria-label="Go To Projects Page">Projects</a></Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link href='/reading' activeClassName='is-active'><a className="nav-link" aria-label="Go To Reading Page">Articles</a></Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link href='/desgins' activeClassName='is-active'><a className="nav-link" aria-label="Go To Designs Page">Contact</a></Link>
              </li>
              {/* <li className="nav-item pl-md-4">
                <Link href='/' activeClassName='is-active'><a className="nav-link" aria-label="Turn On Dark Mood"><Moon/> </a></Link>
              </li> */}
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
      <a target="_blank" href="https://twitter.com/code_wonders" aria-label="Go To Adenekan Wonderful Twitter Page"><Twitter /></a>
      <a target="_blank" href="https://www.facebook.com/AdenekanWonderful" aria-label="Go To Adenekan Wonderful Facebook Page"><Facebook /></a>
      <a target="_blank" href="https://linkedin.com/in/codewonders" aria-label="Go To Adenekan Wonderful Linkedin Page"><Linkedin /></a>
      <a target="_blank" href="https://github.com/adenekan41" aria-label="Go To Adenekan Wonderful Github Page"><Github /></a>
      <a target="_blank" href="https://instagram.com/codewonders" aria-label="Go To Adenekan Wonderful Instagram Page"><Instagram /></a>
    </SocialMedia>
  </div>
)

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