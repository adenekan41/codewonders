/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import { Header } from '../Layout/style';
import Link from '../ActiveLink';
import AppContext from '../Utils/context';

/* ---------------------------- Image Dependency ---------------------------- */
import { Logo, Moon, Icon } from '../Icons';

const Navbar = () => {
  const { show, handleopen, setTheme, closeShow } = useContext(AppContext);
  return (
    <>
      <Header>
        <nav className="navbar navbar-expand-md bg-light navbar-light">
          <div className="container">
            <Link href="/">
              <a
                href="#!"
                className="navbar-brand"
                aria-label="Adenekan Wonderful Home"
              >
                <Logo />
              </a>
            </Link>

            <button
              className="navbar-toggler pr-0"
              type="button"
              onClick={handleopen}
              aria-label="Open Button Toggle"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className={`collapse navbar-collapse ${show && 'show'}`}
              id="collapsibleNavbar"
            >
              <span
                className="d-block d-md-none"
                onClick={handleopen}
                role="button"
                focusable="true"
              >
                <Icon />
              </span>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item hover__bottom d-block d-md-none">
                  <Link href="/" activeClassName="is-active">
                    <a
                      className="nav-link"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go Home"
                      title="Home"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link href="/about" activeClassName="is-active">
                    <a
                      className="nav-link"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go To About Page"
                      title="About"
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link href="/projects" activeClassName="is-active">
                    <a
                      className="nav-link"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go To Projects Page"
                      title="Projects"
                    >
                      Projects
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link href="/resume" activeClassName="is-active">
                    <a
                      className="nav-link"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go To Resume Page"
                      title="Resume"
                    >
                      Resume
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link href="/contact" activeClassName="is-active">
                    <a
                      className="nav-link"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go To Contacts Page"
                      title="Contact"
                    >
                      Contact
                    </a>
                  </Link>
                </li>
                <li className="nav-item pl-md-3">
                  <Link href="#0">
                    <a
                      className="nav-link"
                      aria-label="Turn On Dark Mood"
                      onClick={setTheme}
                      href="#!"
                    >
                      <Moon />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Header>
    </>
  );
};

export default Navbar;
