const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const responsiveStyle = (property, value) => {
  if (typeof value === "object") {
    return Object.entries(value)
      .map(
        ([key, val]) =>
          `@media (min-width: ${breakpoints[key]}px) { ${property}: ${val}; }`
      )
      .join(" ");
  }
  return `${property}: ${value};`;
};


export default responsiveStyle;