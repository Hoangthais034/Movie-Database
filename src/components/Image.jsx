import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Image = ({ 
  src, 
  alt, 
  className, 
  fallback = '/src/assets/react.svg',
  loading = 'lazy',
  aspectRatio = 'auto',
  onLoad: onLoadProp
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const [calculatedRatio, setCalculatedRatio] = useState(null);

  const handleError = () => {
    setHasError(true);
    if (imageSrc !== fallback) {
      setImageSrc(fallback);
    }
  };

  const handleLoad = useCallback((event) => {
    const img = event.target;
    if (aspectRatio === 'adapt') {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const ratio = width / height;
      setCalculatedRatio(ratio);
    }
    
    setIsLoading(false);
    onLoadProp?.(event);
  }, [aspectRatio, onLoadProp]);

  const finalRatio = (() => {
    if (aspectRatio === 'adapt') {
      return calculatedRatio || 'auto';
    }
    if (typeof aspectRatio === 'number') {
      return aspectRatio;
    }
    if (typeof aspectRatio === 'string' && aspectRatio.includes('/')) {
      const [width, height] = aspectRatio.split('/').map(Number);
      return width / height;
    }
    return aspectRatio;
  })();

  return (
    <div 
      className={`image-wrapper ${className || ''}`} 
      style={{
        aspectRatio: finalRatio,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {isLoading && !hasError && (
        <div className="loading-skeleton" />
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        className={`image ${isLoading ? 'loading' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.2s ease-in-out',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />

      {hasError && (
        <div className="error-state">
          <span>Failed to load image</span>
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
  loading: PropTypes.oneOf(['lazy', 'eager']),
  aspectRatio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onLoad: PropTypes.func
};

export default Image;