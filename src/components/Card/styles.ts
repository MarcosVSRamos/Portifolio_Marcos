import styled from 'styled-components'
import { colors } from '../../styles'

export const Div = styled.div`
  color: ${colors.white};
  background-color: ${colors.blueBlack};
  border: solid 2px ${colors.grey};
  width: 200px;

  h4 {
    padding: 4px 0;
  }

  p {
    font-size: 12px;
    color: ${colors.green};
  }
`
export const Button = styled.button`
  width: 95%;
  background-color: ${colors.grey};
  border: none;
  margin: 8px 0;
  cursor: pointer;
`

export const Img = styled.img`
  height: 220px;
  width: 95%;
  object-fit: cover;
`
