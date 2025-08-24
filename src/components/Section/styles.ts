import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 44px 0 68px;
  background: ${colors.efeitoWhite1};
  backdrop-filter: blur(8px);
  border: 1px solid ${colors.efeitoBorda};
`

export const Title = styled.h2`
  margin: 12px auto 28px;
  width: 160px;
  border-bottom: solid 1px ${colors.black};
  color: ${colors.blueBlack};
  font-weight: bold;
  font-size: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 22px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
`
