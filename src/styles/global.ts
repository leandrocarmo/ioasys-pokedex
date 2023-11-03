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
    background-color:${theme.colors.background};
    font-size: ${theme.fontSize.m};
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: ${theme.fontWeight.regular};
  }
`
export const ContentWrapper = styled.div`
  margin: 0 20px;
`
export const TitleNotFound = styled.div`
  .title {
    display: flex;
    justify-content: center;
    margin-top: 90px;
    color: ${theme.colors.lightGray};
  }

  .headline-title {
    font-size: 148px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: 131.952px;
  }
`

export const MessageNotFound = styled.div`
  .message {
    display: flex;
    justify-content: center;
    color: ${theme.colors.lightGray};
    text-align: center;
    font-size: ${theme.fontSize.xxl};
    font-style: normal;
    font-weight: ${theme.fontWeight.semiBold};
    line-height: 31.048px;
    letter-spacing: 0.22px;
    margin-top: 50px;
  }
`
