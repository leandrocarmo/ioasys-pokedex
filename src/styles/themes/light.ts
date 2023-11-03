import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export type ThemeType = typeof theme;

const Light = createGlobalStyle`
  body {
    background-color: ${theme.colors.background} !important;
    font-size: ${theme.fontSize.m};
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: ${theme.fontWeight.regular};
  }
`;

export default Light;
