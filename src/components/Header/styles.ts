import styled from 'styled-components'
import { colors } from '../../styles'

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
`

export const NavBar = styled.nav`
  a {
    margin: 0 10px;
    cursor: pointer;
    color: ${colors.green};
    text-decoration: none;
  }
`
