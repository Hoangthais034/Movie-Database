/* Header */
import styled from "styled-components";
import { FlexBox } from "../../../shared/styles/LayoutModels/LayoutModels";

export const HeaderWrap = styled(FlexBox)`
    background-color: var(--color-background);
    padding: 2.4rem;
    position: sticky;
    top: 0;
    z-index: 20;

    .header-logo {
      width: 130px;
    }

    nav ul {
      list-style: none;
    }

    a.reversed-link {
      color: white;
      text-decoration: none;
      padding: 0;
    }

    .navbar-nav li:not(.btn) {
      padding: 0.4rem 1rem;
    }
    .burger {
      position: relative;
      width: 30px;
      height: 20px;
      background: transparent;
      cursor: pointer;
      display: none;
    }

    .burger input {
      display: none;
    }

    .burger span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: var(--color-foreground);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;
    }
      
    .burger span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }

    .burger span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }

    .burger span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }

    .burger input:checked~span:nth-of-type(1) {
      transform: rotate(45deg);
      top: 0px;
      left: 5px;
    }

    .burger input:checked~span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }

    .burger input:checked~span:nth-of-type(3) {
      transform: rotate(-45deg);
      top: 22px;
      left: 5px;
    }
    .header-searchbar {
      padding-top: 20px;
    }

    @media (min-width: 1280px) {
      .navbar-nav li:not(.btn) {
        padding: 0.4rem 1.5rem;
      }
    }

    @media (max-width: 1023.99px) {
      .burger {
        display: block;
      }
      .header-nav-inner {
        overflow: hidden;
      }

      .header-nav {
        position: absolute;
        border-top: none !important;
        height: auto !important;
        max-height: none !important;
        transition: all 0.4s ease-out;
        transform: translateY(-20px);
        opacity: 0;
        z-index: -10;
        top: 100%;
        width: 100%;
        inset-inline: 0;
        flex-direction: column;
        padding-bottom: 24px;
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.5s ease-in-out;
      }

      .header-nav[aria-hidden="false"] {
        grid-template-rows: 1fr;
        opacity: 1;
        z-index: 5;
        background-color: var(--color-background);
        transition: grid-template-rows 0.5s ease-in-out;
      }
    }
`;