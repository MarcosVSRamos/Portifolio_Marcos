import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Div = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 24px 0;
  border-bottom: solid 1px ${colors.grey};
  color: ${colors.green};
  background-color: ${colors.black};
  width: 100%;
  z-index: 1;

  .menu-sanduiche {
    display: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    justify-content: space-between;
    h1 {
      font-size: 20px;
      margin-left: 24px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    nav {
      display: none;
    }

    .menu-sanduiche {
      display: block;
    }
  }
`

export const NavBar = styled.nav`
  a {
    margin: 0 10px;
    cursor: pointer;
    color: ${colors.green};
    text-decoration: none;
  }
`

export const Hamburguer = styled.div`
  button {
    display: block;
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: solid 2px ${colors.grey};
    margin: 0 16px;

    span {
      display: block;
      text-decoration: none;
      background-color: ${colors.grey};
      padding: 2px;
      margin: 4px 4px;
    }
  }
`

export const HamburguerLinks = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 16px;
  top: 64px;
  background-color: ${colors.black};
  padding: 14px 8px;
  gap: 22px;
  border: solid 2px ${colors.grey};
  border-top: none;

  a {
    text-decoration: none;
    color: ${colors.grey};
  }
`
