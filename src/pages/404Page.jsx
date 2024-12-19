import React from "react";
import { Flexbox } from "../shared/styles/LayoutModels";
import Headings from "../shared/styles/Typo";

const PageNotFound = () => {
  return (
    <Flexbox
      className="page-404"
      alignItems="center"
      flexDirection="column"
      flexGrow={1}
      flexWrap="wrap"
      justifyContent="center"
      marginBottom="200px"
      marginTop="200px"
    >
      <Headings as="h1">404 Error</Headings>
      <Headings as="h2">Page Not Found</Headings>
    </Flexbox>
  );
};

export default PageNotFound;
