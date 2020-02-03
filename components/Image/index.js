import React from 'react';
import PropTypes from 'prop-types';

import ProgressiveImage from 'react-progressive-image';

const Image = ({ src, alt, className }) => (
	<ProgressiveImage
		src={src}
		placeholder="https://i.ibb.co/1RWFqf2/spinner.gif"
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

Image.defaultProps = {
	alt: 'codewonders',
	className: '',
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	className: PropTypes.string,
};
export default Image;
