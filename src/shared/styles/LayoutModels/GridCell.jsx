import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import applyStyle from './ApplyStyles'

{/* GridCell */}
export const GridCell = styled(
  ({
    display,
    widthCell,
    height,
    top,
    left,
    middle,
    center,
    area,
    element,
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
    style,
    width,
    ...props
  }) => React.createElement(element, props)
)`
  ${(props) => applyStyle("display", props.display)}
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};

  ${({ left }) => left && `grid-column-start: ${left}`};
  ${({ top }) => top && `grid-row-start: ${top}`};

  ${({ center }) => center && `text-align: center`};

  ${({ area }) => area && `grid-area: ${area}`};

  ${
    ({ middle }) => middle && `
    flex-flow: column wrap;
    justify-content: center;
    justify-self: stretch;
  `
  };
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
`;
GridCell.propTypes = {
  display: PropTypes.oneOf(["flex", "inline-flex", "block", "inline-block"]),
  widthCell: PropTypes.number,
  height: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  middle: PropTypes.bool,
  center: PropTypes.bool,
  area: PropTypes.string,
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
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  order: PropTypes.number,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
GridCell.defaultProps = {
  display: "block",
  element: "div",
};