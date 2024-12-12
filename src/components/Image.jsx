import { useState } from 'react';
import PropTypes from 'prop-types';

const Image = ({ 
  src, 
  alt, 
  className, 
  fallback = '/src/assets/react.svg',
  loading = 'lazy'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setHasError(true);
    if (imageSrc !== fallback) {
      setImageSrc(fallback);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`image-container ${className}`} 
    style={{
      '--aspect-ratio': 4/3,
    }}>
      <img
        src={imageSrc}
        alt={alt}
        className={`image ${isLoading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fallback: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager'])
};

export default Image;