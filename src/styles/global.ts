import styled from "styled-components";
import { createGlobalStyle, css } from "styled-components";
import { FontSize, FontWeight } from "./typography";

export default createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: inherit;
        font-size: ${FontSize.m};
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-weight: ${FontWeight.regular};
    }
`
export const ContentWrapper = styled.div`
    margin: 0 20px;
`