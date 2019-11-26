import React from 'react'
import Link from 'next/link'
import { IconRight } from './icons'
import styled from 'styled-components'
const FooterStyle = styled.div`
p{
  font-size: 14px; 
  transition: all 1s ease;
  svg{
    margin-left: 1rem;
    animation-name: forward;
    animation-duration: .5s;
    animation-iteration-count: infinite;
    animation-direction:alternate;
  }
  &:hover {
    @keyframes forward {
      from {
        margin-left: 1rem;
      }
      to {
        margin-left: 2rem;
      }
    }
  }
}

`
const FooterLink = ({children, goto, ...rest}) => {
    return (
        <FooterStyle>
            <Link href={`${goto}`}><a><p {...rest}>{children}<IconRight/></p></a></Link>
        </FooterStyle>
        
    )
}

export default FooterLink