/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import styled, { createGlobalStyle, css } from 'styled-components';

const FontToken = css`
  @media (min-width: 787px) {
    --font-sm: 0.875em;
    --font-md: 1.124em;
    --font-x-md: 1.667em;
    --font-x-lg: 3.275em;
  }
  @media (max-width: 787px) {
    --font-sm: 0.813em;
    --font-md: 1.011em;
    --font-x-md: 1.517em;
    --font-x-lg: 2.775em;
  }
`;

const LightTheme = css`
  :root {
    --bg: #fffdfc;
    --button-index: #f4f1ee;
    --cw: #000;
    --invert: 0;
    --mark: #f9f7f6;
    --theme-amount: 0;
    --gray: #d6d6d6;
    --pattern: #f8f7f7;
    --light-gray: #dedede;
    --lighter-gray: #f5f5f5;
    --article-color: #545454;
    --header-bg: rgba(255, 255, 255, 0.8);
    --token: #666;
    --border-color: #eaeaea;
    --sidebar-tag: #efe9e4;
    --gray-alpha: #f6f4f06b;
    --sidebar-cta: #0b0c15;
    --nav-link: rgba(0, 0, 0, 0.5);
    --timeline: #e0e0e0;
    ${FontToken}
  }
`;

const DarkTheme = css`
  :root {
    --bg: #020a13;
    --invert: 1;
    --theme-amount: 1;
    --cw: #e1e1e1;
    --gray: #9e9e9c;
    --pattern: transparent;
    --light-gray: #444;
    --lighter-gray: #222;
    --article-color: #c6c6c6;
    --header-bg: rgba(19, 20, 21, 0.8);
    --token: #999;
    --border-color: #14202b;
    --button-index: #091521;
    --mark: #080f18;
    --sidebar-tag: #13283e;
    --sidebar-cta: #081e35;
    --gray-alpha: #07121dd4;
    --timeline: #0f1923;
    --nav-link: rgba(255, 255, 255, 0.8);
    ${FontToken}
  }
`;

export const BodyStyling = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');

${(props) => (props.theme ? DarkTheme : LightTheme)}

::selection {
  background: var(--token);
  color: #fff;
  /* WebKit/Blink Browsers */
}

::-moz-selection {
  background: var(--token);
  color: #fff;
  /* Gecko Browsers */
}

/*::placeholder { color: #c5c5c5 !important; font-weight: 300 !important }*/
::-webkit-input-placeholder {
  color: var(--light-gray);
  opacity: 1;
}

:-moz-placeholder {
  color: var(--light-gray);
  opacity: 1;
}
:-ms-input-placeholder {
  color: var(--light-gray);
  opacity: 1;
}

/*--------*/  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 

}


:global(body) {
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
      Helvetica, sans-serif;
}


body {
  background: var(--bg) !important;
  padding-right: 0px !important;
  font-family: "Blorado", sans-serif;
  margin:0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing: antialiased;

}

html{
    scroll-behavior: smooth;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%
}


svg{
  fill: var(--article-color);
  &.logo__section{
    path{
      fill: var(--cw);
    }
  }
}
a, h1, h2, h3, h4, h5, h6, p, button, input[type=text], input[type=date], input[type=password], input[type=value], b, label, td, select, textarea, th {
  font-family: "Blorado", sans-serif;
  text-rendering: geometricPrecision;
  color: var(--cw)
}
:focus {
  outline-color:var(--cw) !important;
}

a{
  cursor: pointer;
}

mark.mark {
  color: inherit;
  padding: 0;
  background: none;
  background-image: linear-gradient(120deg, var(--mark) 0%, var(--mark) 100%);
  background-repeat: no-repeat;
  background-size: 0% .3em;
  background-position: 0 80%;
  position: relative;
  background-size: 100% .3em;
}

.page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

export const Header = styled.header`
    padding: 50px 0; 
    transition: all .5s ease;
    nav {
      background: transparent !important;
      .nav-link {
          color: var(--nav-link) !important;
          svg{
            cursor:pointer;
          }
      }
      .navbar-nav {
        @media(max-width: 992px){
         display: block !important;    
         overflow: auto;
        }
      }
    }
    #nav{
      transition: all .5s ease;
      &.fixed-top{
      position: fixed;
      top: 0;
      background: var(--gray-alpha) !important;
      right: 0;
      left: 0;
      padding: 15px 19px;
      z-index: 1030;
    }
    }
    .navbar-toggler {
        color: rgba(255, 255, 255, 0.5);
        border-color: transparent;
        &-icon{
          /* filter: ${(props) => (props.theme ? 'invert(1)' : 'invert(0)')}; */
          filter: invert(var(--theme-amount));
        }
    }
    .nav-item.hover__bottom {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      overflow: hidden;
      @media(max-width: 992px){
        display: block;    
        text-align: center;
        width: fit-content;
        margin: 3rem auto;
      }
        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          left: 51%;
          right: 51%;
          bottom: 1.5px;
          background:var(--article-color);
          height: 1px;
          -webkit-transition-property: left, right; 
          transition-property: left, right;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
      }
      &:hover:before, &:focus:before, &:active:before {
          left: 0;
          right: 0;
      }
    }
    .nav-item > a {
        padding: 8px 15px !important;
        font-size: calc(var(--font-sm) + 0.9px);
        cursor:pointer;
    }
    #collapsibleNavbar .is-active{
      font-weight:900;
      border-bottom: 1px solid var(--cw);
      color: var(--cw) !important;
      @media(min-width: 992px){
        display: none;
      }
    }

    .navbar-border-collapse.show{
        background: red;
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 99;
        height: 84vh;
    }
   
    
    @media( max-width : 762px ) {
      padding:20px 0 0;
      .navbar-brand {
        svg {
          width: 60px;
        }
      }
      .navbar-collapse{
        background: var(--bg);
        position: fixed;
        z-index: 9999;
        width: 100%;
        transition:all 1s ease;
        left: 0;
        bottom: 0;
        animation-name:opacitys;
        animation-duration:1s;
        height: 100%;
        .nav-svg, .close-nav{
          position: absolute;
          right: 60px;
          top: 60px;
          border: none;
          background: transparent;
          width: fit-content;
          cursor: pointer;
        }
        ul {
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
          justify-content: center;
          li{
            margin-bottom: 2rem;
            .nav-link{
              font-size: calc(var(--font-md) + 1.8px);
              font-weight: 800;
              text-transform: uppercase;
              @media (max-width: 992px) {
                &:focus {
                  border: 1px solid var(--cw);
                }
              }
            }
            .nav-svg{
              left:60px !important;
            }
          }
        }
        
      }
      @keyframes opacity {
        from{
          opacity:0.5;
        }
        from{
          opacity:1;
        }
      }
    }
   
`;

export const SocialMedia = styled.div`
  background: transparent;
  padding: 1rem 0;
  a {
    transition: all 1s ease;
    cursor: pointer;
    padding: 0 12px;
    &:first-child {
      padding-left: 0;
    }
  }
  svg {
    cursor: pointer;
    height: 15px;
    fill: var(--article-color);
    transition: all 1s ease;
    &:hover {
      stroke: var(--article-color);
      stroke-width: 1px;
      stroke-opacity: 0.8;
    }
  }
  @media (max-width: 992px) {
    position: fixed;
    backdrop-filter: blur(6px) saturate(2.5);
    background: var(--gray-alpha) !important;
    width: 100% !important;
    display: flex;
    padding: 0 !important;
    right: 0;
    z-index: 999;
    flex-direction: row !important;
    height: 60px !important;
    bottom: 0px !important;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const BackLay = styled.div`
  margin: 0;

  h1 {
    font-family: Abril FatFace;
    font-size: 29.42vmin;
    ${(props) =>
      props.title === 'About Me' ||
      props.title === 'Contact' ||
      props.title === 'Home'
        ? css`
            writing-mode: unset;
          `
        : css`
            writing-mode: tb-rl;
          `}

    letter-spacing: -0.3rem;
    white-space: pre;
    color: var(--mark);
    position: fixed;
    left: -4rem;
    transition: all 0.8s ease;
    opacity: 1;
    z-index: -1;
    bottom: 0px;
  }
`;

export const Main = styled.main`
  /* background-image: radial-gradient(var(--pattern) 0.5px, transparent 0.5px),
    radial-gradient(var(--pattern) 0.5px, transparent 0.5px);
  background-size: calc(20 * 0.5px) calc(20 * 0.5px);
  background-position: 0 0, calc(10 * 0.5px) calc(10 * 0.5px); */
  background-image: repeating-linear-gradient(
    0deg,
    var(--pattern),
    var(--pattern) 1px,
    transparent 1px,
    transparent
  );
  background-attachment: fixed;
  background-size: 1px 101px;
  min-height: 100vh;
`;
