import styled from "styled-components";

export const BlockTrailer = styled.div`
  .slide-trailer__col {
    background-color: var(--color-background);
  }
  .active-movie-container {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
  }
  .active-movie-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    color: white;
  }
  .watch-trailer-btn {
    padding: 8px 16px;
    background-color: #e50914;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f40612;
    }
  }
`;

export const SlideButton = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:focus {
    outline: none;
  }
  @media (max-width: 767.98px) {
    height: auto;
    width: 32px;
  }
`;

export const SlideTrailerThumbs = styled.div`
  height: calc(435px - 96px);

  @media (max-width: 767.98px) {
    height: 100px;
    width: 100%;
    padding: 0 16px;
  }

  .slide-trailer__image {
    transition: all 0.25s ease-in-out;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.5;
    display: grid;
    grid-template-columns: 100px 1fr;
    box-sizing: border-box;
    padding: 16px;
    align-items: center;
    gap: 12px;
    height: 100%;
  }

  .slide-trailer__image:hover {
    opacity: 1;
  }

  .swiper-slide-active .slide-trailer__image {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    opacity: 1;
    background-color: #1c3d5d;
  }

  .trailer--title {
    padding-bottom: 12px;
  }

  .trailer--release {
    font-size: 12px;
  }
`;

