import styled from 'styled-components'
import { colors } from '../../styles'

export const Div = styled.div`
  width: 640px;
  height: 360px;
  border: solid 2px ${colors.blueBlack};
  position: relative;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
`

export const Img = styled.img`
  max-width: 100%;
  height: 100%;

  border-radius: 8px;
  object-fit: cover;
`

export const SetasContainer = styled.div`
  position: absolute;
  top: 40%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`
