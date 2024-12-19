import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

{/* 
How to Use
import { Flexbox, GridBox, GridCell } from "../shared/styles/LayoutModels";

<Flexbox
    className="page-404"
    alignItems="center"
    flexDirection="column"
    flexGrow={1}
    flexWrap="wrap"
    justifyContent="center"
    marginBottom="200px"
    marginTop="200px"
    element="ul"
>
</Flexbox> 
<GridBox columns={2} gap="2px">
  <GridCell>foo</GridCell>
  <GridCell height={2}>bar</GridCell>
  <GridCell width={2}>baz</GridCell>
</GridBox>
*/
}
const applyStyle = (property, value) =>
  value != null ? `${property}: ${value};` : "";


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


{/* FlexBox */}

export const Flexbox = styled(
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
`;

Flexbox.propTypes = {
  alignContent: PropTypes.oneOf([
    "center",
    "flex-end",
    "flex-start",
    "space-around",
    "space-between",
    "stretch",
  ]),
  alignItems: PropTypes.oneOf([
    "baseline",
    "center",
    "flex-end",
    "flex-start",
    "stretch",
  ]),
  alignSelf: PropTypes.oneOf([
    "baseline",
    "center",
    "flex-end",
    "flex-start",
    "stretch",
  ]),
  children: PropTypes.node,
  display: PropTypes.oneOf(["flex", "inline-flex"]),
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.oneOf([
    "column-reverse",
    "column",
    "row-reverse",
    "row",
  ]),
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inline: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    "center",
    "flex-end",
    "flex-start",
    "space-around",
    "space-between",
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

Flexbox.defaultProps = {
  display: "flex",
  element: "div",
};
