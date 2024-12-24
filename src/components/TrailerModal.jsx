import React, { useState } from 'react';
import styled from 'styled-components';
import { RiPlayFill } from "@remixicon/react";

const TrailerPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .trailer-popup-content {
    position: relative;
    width: 90%;
    max-width: 900px;
    aspect-ratio: 16/9;

    iframe {
      border: 0;
    }
  }
  .close-trailer {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 32px;
    cursor: pointer;
    padding: 8px;
    z-index: 1001;

    &:hover {
      color: #e50914;
    }
  }
`;

export default function TrailerModal({ movieId, fetchTrailer, element = 'button' }) {
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const handleTrailerClick = async () => {
    try {
      const youtubeId = await fetchTrailer(movieId);
      const trailerResult = `https://www.youtube.com/embed/${youtubeId}`;
      if (trailerResult) {
        setTrailerUrl(trailerResult);
        setShowTrailer(true);
      } else {
        console.log('No trailer found');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  return (
    <>
      {element === 'a' ? (
        <a href="#" className="social-btn" onClick={handleTrailerClick}>
          <div className='icon'><RiPlayFill size={16} /> </div>Watch Trailer
        </a>
      ) : (
        <button className="watch-trailer-btn" onClick={handleTrailerClick}>
          Watch Trailer
        </button>
      )}
      {showTrailer && trailerUrl && (
        <TrailerPopup className="trailer-popup">
          <div className="trailer-popup-content">
            <button 
              className="close-trailer"
              onClick={() => setShowTrailer(false)}
            >
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src={trailerUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </TrailerPopup>
      )}
    </>
  );
}