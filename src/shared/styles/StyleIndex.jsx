import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }

  :root {
    --font-body-family: "Nunito", sans-serif;
    --font-body-style: normal;
    --font-body-weight: 500;
    --font-body-weight-bolder: 600;
    --font-body-weight-bold: 800;
    --font-body-size: 1.5rem;
    --font-body-line-height: 1;

    --font-heading-family: "Dosis", sans-serif;
    --font-heading-style: normal;
    --font-heading-weight: 700;
    --font-heading-letter-spacing: 0.0em;
    --font-heading-transform: uppercase;
    --font-heading-scale: 1.0;
    --font-heading-mobile-scale: 0.8;

    --font-h1-size: calc(var(--font-heading-scale) * 6rem);
    --font-h2-size: calc(var(--font-heading-scale) * 4.2rem);
    --font-h3-size: calc(var(--font-heading-scale) * 3.2rem);
    --font-h4-size: calc(var(--font-heading-scale) * 2.2rem);
    --font-h5-size: calc(var(--font-heading-scale) * 1.8rem);
    --font-h6-size: calc(var(--font-heading-scale) * 1.6rem);

    color: #FFF;
    background-color: #020d18;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --page-width: 1400px;
    --scrollbar-width: 15px;
    --color-background: #0f2133;
    --color-secondary-background: #020d18;
    --color-foreground: #FFF;
    --color-foreground-secondary: #4280bf;
    --color-subtext: #abb7c4;
    --color-active: #dcf836;
    --animation-default: .5s cubic-bezier(.3, 1, .3, 1);
    --transform-origin-start: left;
    --transform-origin-end: right;
    --duration-default: 200ms;
    --duration-image: 1000ms;

    --page-padding: 1.5rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    min-height: 100%;
    margin: 0;
    font-family: var(--font-body-family);
    font-style: var(--font-body-style);
    font-weight: var(--font-body-weight);
    font-size: var(--font-body-size);
    line-height: var(--font-body-line-height);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
    -webkit-text-size-adjust: 100%;
    font-feature-settings: normal;
  }

  .page-width {
    margin: 0 auto;
    padding-inline: var(--page-padding);
  }

  .overlow-hidden {
    overflow: hidden;
  }

  .subtext {
    color: var(--color-subtext);
  }

  @media (min-width: 1280px) {
    :root {
      --page-padding: 5rem;
    }
  }

  @media (min-width: 1536px) {
    :root {
      --page-padding: max(13.5rem, 50vw - var(--scrollbar-width, 0px) / 2 - var(--page-width) / 2);
    }
  }

  .section {
    --spacing-section: 42px;
    margin: 0 0 var(--spacing-section);
  }

  .section:not(.section-slideshow):first-child {
    margin: var(--spacing-section) 0;
  }

  @media (min-width: 768px) {
    .section {
      --spacing-section: 60px;
    }
  }

  @media (min-width: 1024px) {
    .section {
      --spacing-section: 80px;
    }
  }

  .button,
  .btn a {
    background-color: #dd003f;
    color: #ffffff;
    padding: 11px 25px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
  }

  .button.sm-radius{
    border-radius: 5px;
    height: 45px;
  }

  .button.btn-primary{
    background-color: #dd003f;
    color: #ffffff;
  }

  .button.btn-secondary{
    color: #020d18;

    background-color: #dcf836;
  }
  /* Image Style */
  .image--wrapper {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .hover-scale {
    overflow: hidden;
  }

  .hover-scale .hover-scale-up {
    --scale-x: 1;
    --scale-y: 1;
    transition: var(--animation-default);
    transition-property: transform;
    transform: scaleX(var(--scale-x)) scaleY(var(--scale-y));
  }

  .hover-scale:hover .hover-scale-up {
    --scale-x: 1.08;
    --scale-y: 1.08;
  }

  .loading-skeleton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.1));
    background-size: 200% 100%;
    animation: loading 3s infinite;
  }

  .error-state {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);
    color: #ff0000;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }

  .image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }

  /* Input Style */
  .input_container {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    border: 1px solid #5c6370;
    border-radius: 0.5em;
    overflow: hidden;
  }

  .input_icon {
    height: 1em;
    padding: 0 0.5em 0 0.8em;
    width: fit-content;
  }

  .input_box {
    background-color: transparent;
    color: var(--color-foreground);
    outline: none;
    width: 100%;
    border: 0;
    padding: 0.5em 1.5em 0.5em 0;
    font-size: 1em;
  }

  ::placeholder {
    color: var(--color-foreground);
    opacity: 0.5;
  }

  [style*="--aspect-ratio"] {
    position: relative;
    overflow: hidden;
  }

  [style*="--aspect-ratio"]:before {
    content: "";
    height: 0;
    display: block;
    padding-top: calc(100% / (0 + var(--aspect-ratio, 1.7777777778)));
  }

  [style*="--aspect-ratio"]> :first-child {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute !important;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  div:empty:not(.fixed-overlay, .bg-overlay, .empty-space, .drawer__body, .no-empty, .loading-skeleton) {
    display: none;
  }

  /* Tags */
  .movie-tags {
    margin-bottom: 15px;
  }

  .movie-tags span {
    padding: 3px 5px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-family: 'Dosis', sans-serif;
    font-size: 12px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    height: fit-content;
  }

  .movie-tags span:nth-child(n+1) {
    background-color: #1692bb;
  }

  .movie-tags span:nth-child(n+2) {
    background-color: #f5b50a;
  }

  .movie-tags span:nth-child(n+3) {
    background-color: #a6bb16;
  }

  .movie-tags span:nth-child(n+4) {
    background-color: #ec5a1a;
  }

  /* Slider */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .slideshow__wrapper {
    padding-block: 80px;
    margin: 0 auto;
    max-width: 92rem;
  }

  .swiper-button::after {
    display: none;
  }

  .swiper-button {
    color: var(--color-foreground);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    box-sizing: border-box;
    transition: all 0.4s ease-out;
  }

  .swiper-pagination-bullet {
    opacity: 0.5;
    background: var(--color-foreground);
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--color-active);
  }

  .swiper-button-lock {
    display: none !important;
  }

  .swiper-slide {
    z-index: -10;
  }

  .swiper-slide.swiper-slide-active {
    z-index: 1;
  }

  /* Heading section */
  .section-heading {
    margin-bottom: 32px;
  }

  .social-btn {
    color: var(--color-foreground);
    display: flex;
    align-items: center;
    color: #dd003f;
    margin-right: 24px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Dosis', sans-serif;
    margin-bottom: 8px;
  }

  .social-btn .icon {
    height: 36px;
    width: 36px;
    text-align: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #dd003f;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export default GlobalStyle;