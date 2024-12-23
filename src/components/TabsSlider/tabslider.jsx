import { FlexBox } from '../../shared/styles/LayoutModels/LayoutModels';
import styled from "styled-components";

export const SectionHeading = styled(FlexBox)`
    margin-bottom: 32px;
`

export const TabLinks = styled(FlexBox)`
  .tab-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tab-links a {
    text-decoration: none;
    font-family: 'Dosis', sans-serif;
    font-size: 14px;
    color: #abb7c4;
    font-weight: bold;
    text-transform: uppercase;
  }

  ul.tab-links li {
    margin-right: 12px;
  }

  ul.tab-links li.active a {
    color: var(--color-active);
  }

  .tabs-swiper-pagination {
    width: fit-content;
  }
`

export const SlideWrapper = styled(FlexBox)`
  cursor: pointer;

  &:hover .tab-slider__meta .movie-title {
    color: var(--color-active);
  }

  .tab-slider__image::after {
    box-shadow: inset -5px -50px 100px -15px #000000;
    -webkit-box-shadow: inset -5px -50px 100px -15px #000000;
    -moz-box-shadow: inset -5px -50px 100px -15px #000000;
    -o-box-shadow: inset -5px -50px 100px -15px #000000;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    content: "";
  }

  .tab-slider__meta {
    position: absolute;
    bottom: 0;
    inset-inline: 0;
    padding: 16px;
    display: grid;
    gap: 12px;
  }

  .tab-slider__meta .movie-title {
    font-family: 'Dosis', sans-serif;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.4s ease-out;
  }

  .tab-slider__meta .movie-ratings {
    font-size: 12px;
    color: #ffffff;
  }

  .tab-slider__meta .movie-ratings span {
    font-weight: 400;
    font-size: 18px;
  }
`