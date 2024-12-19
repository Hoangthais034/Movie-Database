import React from "react";
import { FlexBox } from "../shared/styles/LayoutModels/LayoutModels";
import Headings from "../shared/styles/Typo";

const PageNotFound = () => {
  return (
    <FlexBox
      className="page-404"
      alignContent="center"
      alignItems={{ sm: "flex-start", md: "flex-start", lg: "flex-end", xl: "center" }}
      flexDirection="column"
      flexGrow={1}
      flexWrap="wrap"
      justifyContent="center"
      marginBottom={{ sm: "40px", md: "40px", lg: "100px", xl: "200px" }}
      marginTop="200px"
    >
      <Headings as="h1">404 Error</Headings>
      <Headings as="h2">Page Not Found</Headings>
    </FlexBox>
    
  );
};

export default PageNotFound;
