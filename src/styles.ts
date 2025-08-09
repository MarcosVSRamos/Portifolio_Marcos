import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#dff9fb',
  black: '#1b1717ff',
  grey: '#535c68',
  blueBlack: '#130f40',
  blue: '#30336b',
  green: '#22a6b3'
}

export const breakpoints = {
  desktop: '1024',
  tablet: '768'
}

const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  background-color: ${colors.black};
  color: ${colors.white};
  }

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.blueBlack};

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
}
`

export default GlobalCss
