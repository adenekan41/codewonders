/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* -------------------------- Image Dependecy -------------------------- */

import {
  IconRight,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Dribble,
} from '../Icons';

/* ---------------------------- Style Dependency ---------------------------- */
import { SocialMedia } from '../Layout/style';

/* -------------------------- FooterLink PropTypes -------------------------- */
const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  goto: PropTypes.string.isRequired,
};

/* ------------------------- FooterLink defaultProps ------------------------ */

const defaultProps = {
  children: {},
};

const FooterLink = ({ children, goto, ...rest }) => {
  return (
    <>
      <FooterStyle>
        <Link href={`${goto}`}>
          <a aria-label={children}>
            <p {...rest}>
              {children}
              <IconRight />
            </p>
          </a>
        </Link>
      </FooterStyle>
      <SocialMedia>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/code_wonders"
          aria-label="Go To Adenekan Wonderful Twitter Page"
          title="Twitter Page"
        >
          <Twitter />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/AdenekanWonderful"
          aria-label="Go To Adenekan Wonderful Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/codewonders"
          aria-label="Go To Adenekan Wonderful Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/adenekan41"
          aria-label="Go To Adenekan Wonderful Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/codewonders"
          aria-label="Go To Adenekan Wonderful Dribble Page"
          title="Dribbble Page"
        >
          <Dribble />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/codewonders"
          aria-label="Go To Adenekan Wonderful Instagram Page"
          title="Instagram Page"
        >
          <Instagram />
        </a>
      </SocialMedia>
    </>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;
    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
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
`;

FooterLink.defaultProps = defaultProps;

FooterLink.propTypes = propTypes;

export default FooterLink;
