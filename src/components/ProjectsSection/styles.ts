import styled from 'styled-components'
import { colors } from '../../styles'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${colors.blueBlack};
  padding: 40px 0;

  h2 {
    margin: 0 auto 40px;
    width: 160px;
    border-bottom: solid 1px ${colors.grey};
    font-weight: bold;
    font-size: 32px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`
