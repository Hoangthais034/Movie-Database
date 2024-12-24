import styled from 'styled-components';
import { FlexBox } from '../../../shared/styles/LayoutModels/Flexbox';

export const SectionSlideshow = styled.div`
  background-image: url(/slider-bg2.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SwiperButton = styled.div`
  &.swiper-button{
    display: block;

    @media (max-width: 1023.98px) {
      display: none;
    }
  }
`;

export const SlideshowImage = styled(FlexBox)`
  padding: 0 16px;
  display: block;

  @media (max-width: 1023.98px) {
    display: none;
  }
    
  .image--wrapper {
    max-width: 27rem;
    margin-inline: auto 0;
  }

  img {
    aspect-ratio: 3/4;
  }
`;

export const MovieName = styled.div`
    width: 100%;
    margin-bottom: 15px;

    .movie-time-release {
      font-size: 36px;
      color: var(--color-subtext);
      font-weight: 400;
      text-transform: uppercase;
      margin-left: 12px;
    }
`;

export const MovieInfor = styled.ul`
  list-style: none;
  padding-left: 0;
  gap: 1.2rem 3rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0;

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
