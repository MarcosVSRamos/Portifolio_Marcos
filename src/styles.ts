import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#dff9fb',
  ice: '#c7ecee',
  black: '#1b1717ff',
  grey: '#535c68',
  blueBlack: '#130f40',
  blue: '#30336b',
  green: '#22a6b3',
  gold: '#f9ca24',
  efeitoBlue1: 'rgba(19, 15, 64, 0.6)',
  efeitoBorda: 'rgba(255, 255, 255, 0.1)',
  efeitoWhite1: 'rgba(255, 255, 255, 0.75)'
}

export const GradientDivider = styled.div`
  height: 100px;
  background: linear-gradient(to bottom, ${colors.blueBlack}, ${colors.white});
`

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
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
  background: ${colors.black};
  background-image:
    radial-gradient(circle at 20% 30%, rgba(48, 51, 107, 0.4), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(34, 166, 179, 0.25), transparent 40%),
    radial-gradient(circle at 60% 20%, rgba(249, 202, 36, 0.15), transparent 40%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

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
  }

  .relative {
    position: relative;
  }
}
`

export default GlobalCss
