import styled from 'styled-components'
import { colors } from '../../styles'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${colors.ice};
  padding-bottom: 64px;
  padding-top: 30px;
`

export const Title = styled.h2`
  margin: 16px auto 44px;
  width: 160px;
  border-bottom: solid 1px ${colors.black};
  color: ${colors.blueBlack};
  font-weight: bold;
  font-size: 32px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
`
