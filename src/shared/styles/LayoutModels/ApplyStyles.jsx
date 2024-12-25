import responsiveStyle from "./ApplyBreakpoints";

const applyStyle = (property, value) => {
  if (value != null) {
    return responsiveStyle(property, value);
  }
  return "";
};

export default applyStyle;