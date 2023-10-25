import styled from "styled-components";
import { Color } from "./colors"
import { FontSize, FontWeight } from "./typography"
import { breakpoints, device } from './breakpoints';

const theme = {
  color: Color,
  fontSize: FontSize,
  fontWeight: FontWeight,
  breakpoints: breakpoints,
  device: device,
}

export const TitleNotFound = styled.div`
  .title {
    display: flex;
    justify-content: center;
    margin-top: 90px;
    color: ${props => props.theme.color.lightGray};
  }

  .headline-title {
    font-size: 148px;
    font-style: normal;
    font-weight: ${props => props.theme.fontWeight.bold};
    line-height: 131.952px;
  }
`

export const MessageNotFound = styled.div`
  .message {
    display: flex;
    justify-content: center;
    color: ${props => props.theme.color.lightGray};
    text-align: center;
    font-size: ${props => props.theme.fontSize.xxl};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeight.semiBold};
    line-height: 31.048px;
    letter-spacing: 0.22px;
    margin-top: 50px;
  }
`

export default theme
