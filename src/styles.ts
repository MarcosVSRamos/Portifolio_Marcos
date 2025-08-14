import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#dff9fb',
  ice: '#c7ecee',
  black: '#1b1717ff',
  grey: '#535c68',
  blueBlack: '#130f40',
  blue: '#30336b',
  green: '#22a6b3'
}

export const GradientDivider = styled.div`
  height: 100px;
  background: linear-gradient(to bottom, ${colors.blueBlack}, ${colors.white});
`

export const breakpoints = {
  desktop: '1024',
  tablet: '768'
}

const GlobalCss = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

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

  [data-fade] {
    opacity: 0;
    transform: translateY(16px);
    will-change: opacity, transform;
  }

  .fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity .6s ease-out, transform .6s ease-out;
}


.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  scroll-margin-top: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
}
`

export default GlobalCss
