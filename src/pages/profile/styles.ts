import styled from "styled-components";

export const ProfilePage = styled.div`
  * {
    background-color: ${props => props.theme.color.green};
  }

`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.color.white};
  padding: 16px;

  .headerInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
  }

  h1 {
    font-size: ${props => props.theme.fontSize.xxxl};
  }
`;

export const PokeImg = styled.div`
  display: flex;
  justify-content: center;

  Img {
    width: 200px;
    height: 200px;
  }
`;

export const ProfileContent = styled.div`

`;
