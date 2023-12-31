import styled from "styled-components";
import { css } from 'styled-components';
import { theme } from '@/styles/themes/theme';

export const ProfilePage = styled.div`
  position: relative;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${theme.colors.white};
  padding: 16px;
  background-image: url('/assets/icons/pokeball.svg');
  background-repeat: no-repeat;
  background-position: 180px top;
  background-size: 208px auto;
  z-index: 2;
  position: sticky;

  .headerInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    margin-bottom: 26px;
  }

  h1 {
    font-size: ${theme.fontSize.xxxl};
    text-transform: capitalize;
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
  background-color: ${theme.colors.white};
  margin: 0 7px;
  border-radius: 15px;
  padding: 75px 25px;
  position: absolute;
  top: 78%;
  z-index: 1;
  font-size: ${theme.fontSize.s};

  .types {
    height: 20px;
    display: flex;
    align-items: baseline;

    span {
      padding: 2px 8px;
      margin-right: 10px;
      border-radius: 10px;
      text-align: center;
      line-height: 1.2;
      color: ${theme.colors.white};
    }
  }

  .profileInfo {
    display: flex;
    justify-content: space-between;
    margin: 35px 0;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      .info {
        font-size: ${theme.fontSize.xs};
        color: ${theme.colors.gray};
        margin-top: 12px;

      }

      .weight::before,
      .height::before {
        content: "";
        display: inline-block;
        background-size: cover;
        margin-right: 8px;
        height: 16px;
      }

      .weight::before {
        width: 16px;
        background-image: url('/assets/icons/balance.svg');
      }

      .height::before {
        width: 8px;
        background-image: url('/assets/icons/ruler.svg');
      }
    }

  }
  .baseStats {
    margin-top: 35px;

    h4 {
      font-weight: ${theme.fontWeight.bold};
      font-size:${theme.fontSize.l};
      margin-bottom: 25px;
    }

    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;

        .stats {
          width: 54px;
          height: 26px;
          display: flex;
          align-items: center;
          margin-right: 14px;
          border-right: 1px solid ${theme.colors.lightGray};
          font-size:${theme.fontSize.s};
        }

        .power {
          width: 45px;
          font-size:${theme.fontSize.xs};
        }
      }
    }
  }
`;
