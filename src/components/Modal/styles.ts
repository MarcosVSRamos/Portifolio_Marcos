import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  @media (max-widht: ${breakpoints.tablet}) {
  }

  .overLay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  display: block;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 960px;
  height: 400px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  border: solid 2px #f9ca24;
  background-color: ${colors.blueBlack};
  z-index: 1;
  box-shadow: 4px 4px 8px rgba(80, 224, 32, 0.4);

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 500px;
  }
`

export const InfosDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 90%;
  margin: 0 18px;
`

export const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  div {
    width: 320px;
    margin-top: 16px;

    h4 {
      border-bottom: solid 1px ${colors.grey};
    }

    p {
      font-size: 12px;
      margin: 34px 0 0 0;
      color: ${colors.green};
      line-height: 1.5;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 12px;
    justify-content: space-around;

    div {
      width: 188px;
      p {
        font-size: 10px;
        margin-top: 16px;
      }
    }
  }
`

export const LinkLanguages = styled.span`
  font-weight: bold;
  font-size: 12px;
  background-color: ${colors.blue};
  border-radius: 8px;
  cursor: pointer;
  padding: 2px 4px;
  margin: 2px 2px;

  a {
    display: inline-block;
    color: ${colors.ice};
    background-color: ${colors.blue};
    white-space: nowrap;
    text-decoration: none;
  }
`

export const LinkProjects = styled.a`
  background-color: ${colors.green};
  color: ${colors.black};
  height: 22px;
  margin: 0 4px;
  padding: 2px 8px;
  text-decoration: none;
  border-radius: 8px;
  border: solid 1px ${colors.grey};

  &:hover {
    background-color: ${colors.ice};
    color: ${colors.blueBlack};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Langs = styled.div`
  margin-bottom: 24px;

  .litle-title {
    font-size: 12px;
    margin-bottom: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .litle-title {
      font-size: 10px;
      margin-bottom: 8px;
    }
  }
`

export const Images = styled.div`
  display: grid;
  max-height: 90%;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-right: 16px;

  img {
    width: 280px;
    height: 172px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      width: 180px;
      height: 88px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 24px;
    img {
      width: 144px;
      height: 92px;
    }
  }
`

export const TextProject = styled.p`
  font-size: 12px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 10px;
  }
`
