import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export type ThemeType = typeof theme;

const Dark = createGlobalStyle`
  body {
    background-color: ${theme.colors.darkGray} !important;
  }
`;

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

export default Dark;
