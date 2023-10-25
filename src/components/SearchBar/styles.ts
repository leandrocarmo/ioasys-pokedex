import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  margin-right: 20px;

  img {
    position: absolute;
    right: 28px;
    top: 25%;
    width: 20px;
    height: 20px;
    pointer-events: none;
  }

  span {
    color: ${props => props.theme.color.primaryRed};
    position: absolute;
    left: 36px;
    top: -12px;
    background-color: ${props => props.theme.color.white};
    width: 65px;
    text-align: center;
    font-weight: ${props => props.theme.fontWeight.medium};
  }
`;

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

`;
