import React from 'react'
import styled from 'styled-components'

const MansoryLayoutStyle = styled.div`
    margin: 1.5em 0;
    animation-duration: 1s;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-transform:translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-animation-name: fadeInUp;
    -webkit-animation-fill-mode: both;
    max-width: auto;
    column-gap: 1.5em;
  @media only screen and (min-width: 1024px) {
    column-count: 2;
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 1;
  }
  
  @media only screen and (max-width: 767px) and (min-width: 540px) {
    column-count: 1;
  }
  @keyframes fadeInUp {
      from {
          animation-timing-function: ease-in-out;
          -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform:translate3d(0,40px,0);
          transform: translate3d(0,40px,0)
      }

      to {
          animation-timing-function: ease-in;
          -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform:translate3d(0,0,0);
          transform: translate3d(0,0,0);
          opacity: 1
      }
  }

  @-webkit-keyframes fadeInUp {
      from {
        animation-timing-function: ease-in-out;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform:translate3d(0,40px,0);
          transform: translate3d(0,40px,0)
      }

      to {
        animation-timing-function: ease-in;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform:translate3d(0,0,0);
          transform: translate3d(0,0,0);
          opacity: 1
      }
  }
    @media( max-width : 585px ) {
        opacity: 1 !important;
    }
    @media( max-width : 989px ) {
        opacity: 1  !important;
    }
    @media( max-width : 220px ){
        opacity: 1 !important;
    }

`
const MansoryLayout = ({children}) => {
    return (
        <MansoryLayoutStyle>
            {children}
        </MansoryLayoutStyle>
    )
}

export default MansoryLayout