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
  const [hasError, setHasError] = useState(false);
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
    <div className={`image-container ${className}`}>
      {isLoading && !hasError && (
        <div className="loading-skeleton animate-pulse">
          Loading...
        </div>
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        className={`image ${isLoading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
      />

      {hasError && (
        <div className="error-message">
          Failed to load image
        </div>
      )}
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