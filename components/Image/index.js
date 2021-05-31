/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

/* ----------------------------- Image PropTypes ---------------------------- */
const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

/* --------------------------- Image defaultProps --------------------------- */
const defaultProps = {
  alt: 'codewonders',
  className: '',
};

const Image = ({ src, alt, className }) => (
  <ProgressiveImage
    src={src}
    placeholder="https://i.ibb.co/BTvLMXq/Ripple-1-9s-201px.gif"
  >
    {(currentSrc, loading) => (
      <>
        <img
          src={currentSrc}
          alt={alt}
          className={loading ? `${className} loading-img` : className}
        />
        <noscript>
          <img src={src} alt={alt} className={className} />
        </noscript>
      </>
    )}
  </ProgressiveImage>
);

Image.defaultProps = defaultProps;

Image.propTypes = propTypes;
export default Image;
