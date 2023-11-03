import styled from "styled-components";

export const theme = {
  colors: {
    darkGray: '#212121',
    mediumGray: '#666666',
    gray: '#B3B3B3',
    lightGray: '#E0E0E0',
    background: '#F7F7F7',
    secondaryColor: '#EC0344',
    white: '#FFFFFF',
  },
  fontSize: {
    xxs: '10px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '22px',
    xxxl: '24px',
  },

  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },

  device: {
    mobile: `(max-width: 480px)`,
    tablet: `(max-width: 768px)`,
    desktop: `(min-width: 1024px)`,
  },

  pokemonTypeColors: {
    rock: "#B69E31",
    ghost: "#70559B",
    steel: "#B7B9D0",
    water: "#6493EB",
    grass: "#74CB48",
    psychic: "#FB5584",
    ice: "#9AD6DF",
    dark: "#75574C",
    fairy: "#E69EAC",
    normal: "#AAA67F",
    fighting: "#C12239",
    flying: "#A891EC",
    poison: "#A43E9E",
    ground: "#DEC16B",
    bug: "#A7B723",
    fire: "#F57D31",
    electric: "#F9CF30",
    dragon: "#7037FF",
  },
};
