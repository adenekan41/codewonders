import styled, {createGlobalStyle} from 'styled-components'
export const BodyStyling = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
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
:root {
   --bg: #fff;
   --cw: #000;
   --mark: #f6f6f6;
   --gray: #888;
   --light-gray: #dedede;
   --lighter-gray: #f5f5f5;
   --article-color: #464646;
   --header-bg: rgba(255,255,255,0.8);
   --gray-alpha: rgba(19,20,21,0.3);
   --token: #666;
}

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
  cursor: url("/cursor.png"), auto;
}
:global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
      Helvetica, sans-serif;
}
body {
  background: var(--bg) !important;
  padding-right: 0px !important;
  font-family: "Blorado", sans-serif;
}

html{
    font-family:Poppins,sans-serif;
    scroll-behavior: smooth;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%
}
body{
    margin:0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing: antialiased;
}

a, h1, h2, h3, h4, h5, h6, p, button, input[type=text], input[type=date], input[type=password], input[type=value], b, label, td, select, textarea, th {
  font-family: "Blorado", sans-serif;
  text-rendering: geometricPrecision;
  color: var(--cw)
}

mark.mark {
  color: inherit;
  padding: 0;
  background: none;
  background-image: linear-gradient(120deg, var(--mark) 0%, var(--mark) 100%);
  background-repeat: no-repeat;
  background-size: 0% .3em;
  // font-weight: 700;
  background-position: 0 80%;
  position: relative;
  background-size: 100% .3em;
}
`
export const Header = styled.header`
    padding: 50px 0; 
    nav {
      background: var(--bg) !important;
    }
    .nav-item.hover__bottom {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      overflow: hidden;
        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          left: 51%;
          right: 51%;
          bottom: -1px;
          background:var(--article-color);
          height: 2px;
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
        padding: 0 10px !important;
        font-size: 15px;
        cursor:pointer;
    }
    .is-active{
      font-weight:900;
      color: var(--cw) !important;
    }
`
export const SocialMedia = styled.div` 
  position: fixed;
  background: white;
  width: 40px;
  display: flex;
  right: 23px;
  flex-direction: column;
  height: 80vh;
  top: 70px;
  align-items: center;
  justify-content: space-evenly;
  a{
    transition: all 1s ease;
    cursor: pointer;
  }
  svg{
    cursor: pointer;
    height: 15px;
    fill: var(--article-color);
    transition: all 1s ease;
    &:hover{
      stroke:var(--article-color);
      stroke-width: 1px;
      stroke-opacity: 0.8;
    }
  }
`
export const BackLay = styled.div`

  h1{
    font-family: Abril FatFace;
    font-size: 29.42vh;
    writing-mode: tb-rl;
    position: fixed;
    z-index: -1;
    color: var(--mark);
    bottom: 0px;
    opacity: 0.85;
    transition: all .8s ease;
    left: -4rem;
  }
`