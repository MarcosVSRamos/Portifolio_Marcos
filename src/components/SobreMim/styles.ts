import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Div = styled.div`
  height: 100%;
  padding-top: 88px;
  display: block;
  padding-bottom: 104px;
  background: ${colors.efeitoBlue1};
  backdrop-filter: blur(8px);
  border: 1px solid ${colors.efeitoBorda};
`
export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 48px 0;

  h3 {
    font-size: 26px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      width: 640px;
      max-width: 100%;
      margin: 18px 0;
      color: ${colors.green};
      line-height: 1.5;
      `

export const Image = styled.img`
  width: 244px;
  height: 244px;
  object-fit: cover;
  max-width: 100%;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, ${colors.blueBlack}, ${colors.green});
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
`

export const DivLinksAndImg = styled.div`
  display: block;
`

export const DivSocialMedia = styled.div`
  display: flex;
  width: 120px;
  justify-content: center;
  margin: 8px auto;
  border-bottom: solid 1px ${colors.grey};

  a {
    margin: 0 4px;
    img {
      width: 30px;
      border: solid 1px ${colors.blue};
      border-radius: 4px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
    }
  }
`

export const Text = styled.p`
  width: 80%;
  margin: 0 auto;
  color: ${colors.green};
  line-height: 1.5;
`
export const Titlle = styled.h4`
  margin: 18px auto 18px;
  width: 340px;
  text-align: center;
  border-bottom: solid 1px ${colors.grey};
`
