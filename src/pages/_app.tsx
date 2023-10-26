import Global from '@/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { PokemonProvider } from '@/services/pokemonContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PokemonProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </PokemonProvider>
    </ThemeProvider>
  )
}
