import React from 'react'
import styled from 'styled-components'

const MansoryLayoutStyle = styled.div`
    margin: 1.5em 0;   
    max-width: auto;
    column-gap: 1.5em;
  @media only screen and (min-width: 1024px) {
    column-count: 2;
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 2;
  }
  
  @media only screen and (max-width: 767px) and (min-width: 540px) {
    column-count: 1;
  }
  @keyframes fadeInUp {
      from {
          transform: translate3d(0,40px,0)
      }

      to {
          transform: translate3d(0,0,0);
          opacity: 1
      }
  }

  @-webkit-keyframes fadeInUp {
      from {
          transform: translate3d(0,40px,0)
      }

      to {
          transform: translate3d(0,0,0);
          opacity: 1
      }
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