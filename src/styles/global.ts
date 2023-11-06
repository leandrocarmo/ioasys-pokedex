import styled from "styled-components";
import { createGlobalStyle, css } from "styled-components";
import { theme } from "./themes/theme";

export default createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: inherit;
  }

  body {
    font-size: ${theme.fontSize.m};
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: ${theme.fontWeight.regular};
  }

  @media ${theme.device.desktop} {
    * {
      max-width: 830px;
      margin: 0 auto;
    }
  }
`
export const ContentWrapper = styled.div`
  margin: 0 20px;
`
