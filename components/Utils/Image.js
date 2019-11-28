import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';

const Image = ({ src, alt, className }) => (
  <ProgressiveImage
    src={src}
    placeholder="https://ehp.niehs.nih.gov/ux3/widgets/publication-content/images/spinner.gif"
  >
    {(currentSrc, loading) => (
      <Fragment>
        <img src={currentSrc} alt={alt} className={loading ? `${className} loading-img` : className} />
        <noscript>
          <img src={src} alt={alt} className={className} />
        </noscript>
      </Fragment>
    )}
  </ProgressiveImage>
);

export default Image;