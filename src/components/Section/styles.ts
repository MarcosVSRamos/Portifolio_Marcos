import styled from 'styled-components'
import { colors } from '../../styles'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${colors.white};
  padding-bottom: 40px;

  h2 {
    margin: 0px auto 16px;
    width: 140px;
    border-bottom: solid 1px ${colors.black};
    color: ${colors.blueBlack};
    font-weight: bold;
    font-size: 32px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
`
