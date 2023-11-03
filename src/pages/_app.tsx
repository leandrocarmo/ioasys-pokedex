import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global';
import { PokemonProvider } from '@/context/pokemonContext';
import { Light, Dark } from '@/styles/themes';
import { Theme } from '@/context/contextTheme';
import { ThemeProvider as CustomThemeProvider, useTheme } from '@/context/contextTheme';

function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <ThemeWrapper />
      <PokemonProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </PokemonProvider>
    </CustomThemeProvider>
  );
}

function ThemeWrapper() {
  const { currentTheme } = useTheme();
  return (
    <ThemeProvider theme={currentTheme === 'Light' ? Light : Dark} />
  );
}

export default App;
