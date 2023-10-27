import styled from "styled-components";
import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: inherit;
  }

  body {
    background-color:${props => props.theme.color.background};
    font-size: ${props => props.theme.fontSize.m};
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: ${props => props.theme.fontWeight.regular};
  }
`
export const ContentWrapper = styled.div`
  margin: 0 20px;
`
