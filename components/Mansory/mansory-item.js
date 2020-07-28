/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { arrayRandomItem } from 'codewonders-helpers';

/* -------------------------- Internal Dependencies ------------------------- */
import Image from '../Image';

/* -------------------------- MansoryItem PropTypes ------------------------- */
const propTypes = {
  item: PropTypes.object,
};

const MansoryItem = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
      rel="noopener noreferrer"
      title={item.title}
      aria-label={`${item.title} ${item.description}`}
    >
      <MansoryItemStyle
        {...{ item }}
        style={{
          height: arrayRandomItem(['400px', '454px', '310px']),
        }}
        role="gridcell"
      >
        <Image src={item.imageUrl} alt={item.imageUrl} />
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </MansoryItemStyle>
    </a>
  );
};

const MansoryItemStyle = styled.div`
  margin: 0 0 1.5em;
  position: relative;

  cursor: pointer;
  border-radius: 9px;
  object-fit: cover;
  background-color: var(--button-index);
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: flex-end;
  border-radius: 9px;
  break-inside: avoid;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
  }
  &:before {
    content: '';
    pointer-events: none;
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    background: radial-gradient(
      circle at center center,
      white 10%,
      whitesmoke 11%,
      whitesmoke 100%
    );
  }
  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    background: linear-gradient(
      191deg,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.76) 100%
    );
  }
  &:hover {
    &:after {
      opacity: 1;
    }
    div {
      z-index: 999;
      transform: none;
      opacity: 1;
    }
  }

  h3 {
    color: #fff;
    font-size: var(--font-x-md);
    font-weight: 800;
  }
  p {
    color: #d5d5d5 !important;
    font-size: calc(var(--font-sm) + 0.9px);
  }
  div {
    opacity: 0;
    transform: translateY(10%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;

    /* &:hover {
            transform: none;
            opacity: 1;
        } */
  }
  @media (max-width: 585px) {
    &:after {
      opacity: 1 !important;
    }
    div {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 989px) {
    &:after {
      opacity: 1 !important;
    }
    div {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  @media (max-width: 220px) {
    &:after {
      opacity: 1 !important;
    }
    div {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
`;

MansoryItem.propTypes = propTypes;

export default MansoryItem;
