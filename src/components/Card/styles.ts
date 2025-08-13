import styled from 'styled-components'
import { colors } from '../../styles'

export const DivCard = styled.div`
  color: ${colors.white};
  background-color: ${colors.black};
  border: solid 2px ${colors.grey};
  width: 200px;

  h4 {
    padding-bottom: 4px;
  }

  p {
    font-size: 12px;
    color: ${colors.green};
  }
`
export const DivImage = styled.div`
  position: relative;
`
export const Tag = styled.div`
  position: absolute;
  display: flex;
  right: 4px;

  span {
    font-size: 10px;
    font-weight: bold;
    background-color: ${colors.blueBlack};
    color: ${colors.green};
    padding: 2px 6px;
    margin: 8px 4px 0;
    border-radius: 8px;
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
  width: 96%;
  margin-top: 4px;
  object-fit: cover;
`
