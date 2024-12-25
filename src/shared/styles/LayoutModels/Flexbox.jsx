import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import applyStyle from "./ApplyStyles";

{
  /* FlexBox */
}
export const FlexBox = styled(
  ({
    alignContent,
    alignItems,
    alignSelf,
    children,
    display,
    element,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height,
    justifyContent,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    order,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width,
    gap,
    ...props
  }) => React.createElement(element, props, children)
)`
  ${(props) => applyStyle("align-content", props.alignContent)}
  ${(props) => applyStyle("align-self", props.alignSelf)}
  ${(props) => applyStyle("align-items", props.alignItems)}
  ${(props) => applyStyle("display", props.display)}
  ${(props) => applyStyle("flex", props.flex)}
  ${(props) => applyStyle("flex-basis", props.flexBasis)}
  ${(props) => applyStyle("flex-direction", props.flexDirection)}
  ${(props) => applyStyle("flex-grow", props.flexGrow)}
  ${(props) => applyStyle("flex-shrink", props.flexShrink)}
  ${(props) => applyStyle("flex-wrap", props.flexWrap)}
  ${(props) => applyStyle("height", props.height)}
  ${(props) => applyStyle("justify-content", props.justifyContent)}
  ${(props) => applyStyle("margin", props.margin)}
  ${(props) => applyStyle("margin-bottom", props.marginBottom)}
  ${(props) => applyStyle("margin-left", props.marginLeft)}
  ${(props) => applyStyle("margin-right", props.marginRight)}
  ${(props) => applyStyle("margin-top", props.marginTop)}
  ${(props) => applyStyle("max-height", props.maxHeight)}
  ${(props) => applyStyle("max-width", props.maxWidth)}
  ${(props) => applyStyle("min-height", props.minHeight)}
  ${(props) => applyStyle("min-width", props.minWidth)}
  ${(props) => applyStyle("order", props.order)}
  ${(props) => applyStyle("padding", props.padding)}
  ${(props) => applyStyle("padding-bottom", props.paddingBottom)}
  ${(props) => applyStyle("padding-left", props.paddingLeft)}
  ${(props) => applyStyle("padding-right", props.paddingRight)}
  ${(props) => applyStyle("padding-top", props.paddingTop)}
  ${(props) => applyStyle("width", props.width)}
  ${(props) => applyStyle("gap", props.gap)}

`;

FlexBox.propTypes = {
  alignContent: PropTypes.oneOfType([
    PropTypes.oneOf([
      "center",
      "flex-end",
      "flex-start",
      "space-around",
      "space-between",
      "stretch",
    ]),
    PropTypes.objectOf(
      PropTypes.oneOf([
        "center",
        "flex-end",
        "flex-start",
        "space-around",
        "space-between",
        "stretch",
      ])
    ),
  ]),
  alignItems: PropTypes.oneOfType([
    PropTypes.oneOf([
      "baseline",
      "center",
      "flex-end",
      "flex-start",
      "stretch",
    ]),
    PropTypes.objectOf(
      PropTypes.oneOf([
        "baseline",
        "center",
        "flex-end",
        "flex-start",
        "stretch",
      ])
    ),
  ]),
  alignSelf: PropTypes.oneOfType([
    PropTypes.oneOf([
      "baseline",
      "center",
      "flex-end",
      "flex-start",
      "stretch",
    ]),
    PropTypes.objectOf(
      PropTypes.oneOf([
        "baseline",
        "center",
        "flex-end",
        "flex-start",
        "stretch",
      ])
    ),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  display: PropTypes.oneOfType([
    PropTypes.oneOf(["flex", "inline-flex"]),
    PropTypes.string,
  ]),
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  flexBasis: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  flexDirection: PropTypes.oneOfType([
    PropTypes.oneOf(["column-reverse", "column", "row-reverse", "row"]),
    PropTypes.objectOf(
      PropTypes.oneOf(["column-reverse", "column", "row-reverse", "row"])
    ),
  ]),
  flexGrow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  flexShrink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  flexWrap: PropTypes.oneOfType([
    PropTypes.oneOf(["nowrap", "wrap-reverse", "wrap"]),
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  inline: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  justifyContent: PropTypes.oneOfType([
    PropTypes.oneOf([
      "center",
      "flex-end",
      "flex-start",
      "space-around",
      "space-between",
    ]),
    PropTypes.objectOf(
      PropTypes.oneOf([
        "center",
        "flex-end",
        "flex-start",
        "space-around",
        "space-between",
      ])
    ),
  ]),
  element: PropTypes.oneOf([
    "article",
    "aside",
    "div",
    "figure",
    "footer",
    "header",
    "main",
    "nav",
    "ul",
    "li",
    "section",
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  marginLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  marginRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  marginTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  paddingLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  paddingRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  paddingTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  gap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

FlexBox.defaultProps = {
  display: "flex",
  element: "div",
};
