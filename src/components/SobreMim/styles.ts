import styled from 'styled-components'
import { colors } from '../../styles'

export const Div = styled.div`
  height: 100%;
  padding-top: 68px;
  display: block;
  padding-bottom: 40px;
`
export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 48px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      width: 640px;
      max-width: 100%;
      margin: 18px 0;
      color: ${colors.green};
    }
  }
`

export const Image = styled.img`
  width: 244px;
  height: 244px;
  object-fit: cover;
  max-width: 100%;
  border-radius: 50%;
  border: solid 4px ${colors.green};
`
export const Text = styled.p`
  width: 80%;
  margin: 0 auto;
  color: ${colors.green};
`
export const Titlle = styled.h4`
  margin: 38px auto 18px;
  width: 340px;
  text-align: center;
  border-bottom: solid 1px ${colors.grey};
`
