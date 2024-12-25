import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import applyStyle from './ApplyStyles'

{/* GridBox */}
const autoRows = ({ minRowHeight = "20px" }) => `minmax(${minRowHeight}, auto)`;

const frGetter = (value) =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

const gap = ({ gap = "8px" }) => gap;

const flow = ({ flow = "row" }) => flow;

const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(" ");

export const GridBox = styled(
  ({
    display,
    columns,
    gap,
    columnGap,
    rowGap,
    height,
    minRowHeight,
    flow,
    rows,
    areas,
    justifyContent,
    alignContent,
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
  height: ${({ height = "auto" }) => height};
  grid-auto-flow: ${flow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
  grid-gap: ${gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
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

GridBox.propTypes = {
  display: PropTypes.oneOf(["grid", "inline-grid"]),
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  height: PropTypes.string,
  minRowHeight: PropTypes.string,
  flow: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
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
GridBox.defaultProps = {
  display: "grid",
  element: "div",
};