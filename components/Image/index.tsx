/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import { default as Img } from 'next/image';
/* ----------------------------- Image PropTypes ---------------------------- */
interface IImage {
  src: string;
  alt?: string;
  className?: string;
}

/* --------------------------- Image defaultProps --------------------------- */
const defaultProps = {
  alt: 'codewonders',
  className: '',
};

const Image: React.FC<IImage> = ({ src, alt, className }) => (
  <Img
    src={src}
    alt={alt || ''}
    id="cardHover"
    className={className}
    width={500}
    height={500}
  />
);

Image.defaultProps = defaultProps;

export default Image;
