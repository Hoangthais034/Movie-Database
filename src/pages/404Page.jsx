import React from "react";
import '../shared/styles/404page.css';
import Headings from '../shared/styles/StyleIndex'

const PageNotFound = () => {
    return (
        <div className="page-404 flex flex-col items-center">
            <Headings as="h1">404 Error</Headings>
            <Headings as="h2">Page Not Found</Headings>
        </div>
    );
};

export default PageNotFound;