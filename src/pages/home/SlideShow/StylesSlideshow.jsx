import styled from 'styled-components';

export const SectionSlideshow = styled.div`
  background-image: url(/slider-bg2.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SwiperButton = styled.div`
  display: block;

  @media (max-width: 1023.98px) {
    display: none;
  }
`;

export const SlideshowImage = styled.div`
  padding: 0 16px;

  .image--wrapper {
    max-width: 27rem;
    margin-inline: auto 0;
  }

  img {
    aspect-ratio: 3/4;
  }
`;

export const SlideshowContents = styled.div`
  padding: 0 16px;
  display: flex;
  justify-items: start;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;

  .slideshow__movie-name {
    margin-bottom: 15px;

    .movie-time-release {
      font-size: 36px;
      color: var(--color-subtext);
      font-weight: 400;
      text-transform: uppercase;
      margin-left: 12px;
    }
  }

  .slideshow__movie-meta {
    margin-bottom: 24px;
  }
`;

export const MovieATC = styled.div`
  margin-bottom: 15px;
`;

export const MovieInfor = styled.ul`
  list-style: none;
  padding-left: 0;
  gap: 1.2rem 3rem;

  li {
    color: var(--color-subtext);

    & .rating-score {
      font-weight: 400;
      font-size: 18px;
      color: var(--color-foreground);
    }

    &::after {
      content: "|";
      position: absolute;
      right: -15px;
      bottom: 0;
      font-size: 14px;
    }

    &:last-child::after {
      display: none;
    }
  }
`;
