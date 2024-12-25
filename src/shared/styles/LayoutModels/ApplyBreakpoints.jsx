const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const responsiveStyle = (property, value) => {
  if (typeof value === "object") {
    const defaultStyle = value.default ? `${property}: ${value.default};` : "";
    const responsiveStyles = Object.entries(value)
      .filter(([key]) => key !== "default")
      .map(
        ([key, val]) =>
          `@media (min-width: ${breakpoints[key]}px) { ${property}: ${val}; }`
      )
      .join(" ");
    return `${defaultStyle} ${responsiveStyles}`;
  }
  return `${property}: ${value};`;
};

export default responsiveStyle;
