import styled from 'styled-components'

const Headings = styled.h1`
  & {
    font-family: var(--font-heading-family);
    font-style: var(--font-heading-style);
    font-weight: var(--font-heading-weight);
    letter-spacing: var(--font-heading-letter-spacing);
    text-transform: var(--font-heading-transform);
    color: var(--color-foreground);
    line-height: calc(1 + 0.2 / max(1, var(--font-heading-scale)));
    word-break: break-word;
    margin: 0;
  }

  h1&,
  &.h1 {
    font-size: calc(var(--font-heading-mobile-scale) * var(--font-h1-size));
  }
  
  h2&,
  &.h2 {
    font-size: calc(var(--font-heading-mobile-scale) * var(--font-h2-size));
    line-height: calc(1 + 0.3125 / max(1, var(--font-heading-scale)));
  }

  h3&,
  &.h3 {
    font-size: calc(var(--font-heading-mobile-scale) * var(--font-h3-size));
    line-height: calc(1 + 0.3572 / max(1, var(--font-heading-scale)));
  }

  h4&,
  &.h4 {
    font-size: calc(var(--font-heading-mobile-scale) * var(--font-h4-size));
    line-height: calc(1 + 0.4546 / max(1, var(--font-heading-scale)));
  }

  h5&, h6&,
  &.h5, &.h6 {
    font-size: calc(var(--font-heading-scale) * var(--font-h6-size));
    line-height: calc(1 + 0.625 / max(1, var(--font-heading-scale)));
  }

  &.font-body {
    font-family: var(--font-body-family) !important;
    font-weight: var(--font-body-weight) !important;
    font-style: var(--font-body-style) !important;
  }

  &.font-body-bolder {
    font-family: var(--font-body-family) !important;
    font-weight: var(--font-body-weight-bolder) !important;
    font-style: var(--font-body-style) !important;
  }

  &.font-body-bold {
    font-family: var(--font-body-family) !important;
    font-weight: var(--font-body-weight-bold) !important;
    font-style: var(--font-body-style) !important;
  }

  &.font-heading {
    font-family: var(--font-heading-family) !important;
    font-weight: var(--font-heading-weight) !important;
    font-style: var(--font-heading-style) !important;
  }

  @media only screen and (min-width: 768px) {
    h1&,
    &.h1 {
      font-size: calc(var(--font-h1-size) * 0.7);
    }

    h2&,
    &.h2 {
      font-size: calc(var(--font-h2-size) * 0.7);
    }

    h3&,
    &.h3 {
      font-size: calc(var(--font-h3-size) * 0.7);
    }

    h4&,
    &.h4 {
      font-size: calc(var(--font-h4-size) * 0.7);
    }

    h5&,
    &.h5 {
      font-size: calc(var(--font-heading-scale) * var(--font-h5-size));
      line-height: calc(1 + 0.5556 / max(1, var(--font-heading-scale)));
    }
  }

  @media only screen and (min-width: 1024px) {
    h1&,
    &.h1 {
      font-size: var(--font-h1-size);
    }

    h2&,
    &.h2 {
      font-size: var(--font-h2-size);
    }

    h3&,
    &.h3 {
      font-size: var(--font-h3-size);
    }

    h4&,
    &.h4 {
      font-size: var(--font-h4-size);
    }
  }
`;

export default Headings;
