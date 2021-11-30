/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, createGlobalStyle } from 'styled-components';

/* --------------------------- Image Dependencies --------------------------- */
import { Close, Github, Product } from '../Icons';

/* ------------------------- SideBarModal propTypes ------------------------ */
const propTypes = {
  show: PropTypes.bool,
  closeShow: PropTypes.func,
  size: PropTypes.string,
  overlayColor: PropTypes.string,
  css: PropTypes.object,
  data: PropTypes.object,
};

/* ------------------------ SideBarModal defaultprops ----------------------- */
const defaultProps = {
  show: false,
  closeShow: () => {},
  size: 'md',
  overlayColor: 'rgba(0, 0, 0, 0.8)',
  css: {},
};

const SideBarModal = ({
  show,
  closeShow,
  size,
  overlayColor,
  css: styling,
  data,
}) => {
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      console.log('sdsdsd');
      closeShow();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    <>
      {show && (
        <>
          <Body />
          <Wrapper size={size} css={styling} data-testid="sidebarmodal">
            <Overlay
              overlayColor={overlayColor}
              className="overlay"
              onClick={() => closeShow()}
            />
            <aside className="fadeInLeft">
              <div className="pos__relative">
                <div className="d-flex justify-content-between header">
                  <button
                    onClick={() => closeShow()}
                    className="none-button"
                    type="button"
                  >
                    <Close />
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      closeShow();
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back To Projects.
                  </a>
                </div>

                <div className="main__post">
                  <h3 className="mt-4">{data.title}</h3>
                  <p className="te mb-4">{data.description}</p>
                  <img src={data.imageUrl} alt={data.title} />
                  <h4>About</h4>
                  <p>{data.about && data.about}</p>
                  <h4>Technologies</h4>

                  {data.technologies && (
                    <p className="d-flex flex-wrap">
                      {data.technologies.map((tech, index) => (
                        <span key={index} className="d-block mb-1">
                          {tech}
                        </span>
                      ))}
                    </p>
                  )}
                  <h4>
                    <Product /> Website
                  </h4>
                  <p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.link}
                    </a>
                  </p>

                  {data.github && (
                    <>
                      <h4>
                        <Github /> Github
                      </h4>
                      <p>
                        <a
                          href={data.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.github}
                        </a>
                      </p>
                    </>
                  )}
                </div>
                <a
                  href={data.link}
                  className="open__project"
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                >
                  Open Project{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                  </svg>
                </a>
              </div>
            </aside>
          </Wrapper>
        </>
      )}
    </>
  );
};

const generateSize = (size) => {
  if (size === 'sm')
    return css`
      width: 21.8em;
      padding: 1.5rem;
    `;
  if (size === 'lg')
    return css`
      width: 34em;
    `;
  if (size === 'md')
    return css`
      width: 29em;
      padding: 2rem;
    `;
};
const Body = createGlobalStyle`

body{
  overflow: hidden
}`;
const Wrapper = styled.div`
  .none-button {
    border: none;
    background: transparent;
    padding-left: 0;
    svg {
      fill: none !important;
    }
  }

  @keyframes fadeLeft {
    from {
      opacity: 0.8;
      transform: translateX(80%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  aside {
    background: var(--bg);
    ${(props) => generateSize(props.size)}
    @media (max-width: 768px) {
      width: 100% !important;
    }
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
    transition: all 0.3s linear;
    will-change: opacity, transform;
    &.fadeInLeft {
      animation-name: fadeLeft;
      animation-duration: 0.5s;
      animation-fill-mode: both;
    }
    .header {
      margin-bottom: 2rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--border-color);
      svg {
        /* path {
          stroke: var(--article-color);
          &:last-child {
            fill: var(--article-color);
          }
        } */
      }
      a {
        font-size: var(--font-sm);
        font-weight: 900;
        color: var(--sidebar-cta);
      }
    }
    .pos__relative {
      position: relative;
      padding: 2rem 2rem 4rem;
      overflow-x: overlay;
      max-height: 100%;
    }
    .open__project {
      background: var(--sidebar-cta);
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 17px;
      color: #ffffff;
      font-weight: 600;
      text-align: center;
      font-size: var(--font-sm);
      svg {
        width: 16px;
        vertical-align: bottom;
        margin-left: 6px;
        fill: #fff;
      }
    }
  }
  .main__post {
    h3 {
      font-size: calc(var(--font-x-md) - 6px);
      /* margin-bottom: 1.3rem; */
      color: var(--cw);
      font-weight: 800;
    }
    h4 {
      font-size: var(--font-md);
      color: var(--cw);
      margin-top: 2rem;
      margin-bottom: 0.8rem;
      svg {
        vertical-align: bottom;
        width: 15px;
        margin-right: 3px;
      }
    }
    p {
      color: var(--article-color);
      font-size: var(--font-sm);
      span {
        background: var(--sidebar-tag);
        padding: 6px 13px;
        border-radius: 4px;
        text-transform: capitalize;
        font-size: 11px;
        margin-right: 6px;
        color: var(--cw);
        font-weight: 700;
      }
      a {
        font-weight: 600;
        color: var(--sidebar-cta);
        svg {
          fill: var(--cw);
        }
      }
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 11px;
    }
  }
`;

const Overlay = styled.div`
  z-index: 99999;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: ${(props) => props.overlayColor || 'rgba(0, 0, 0, 0.8)'};
`;

SideBarModal.propTypes = propTypes;
SideBarModal.defaultProps = defaultProps;

export default SideBarModal;
