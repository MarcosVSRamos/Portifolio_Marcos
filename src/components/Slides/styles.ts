import styled from 'styled-components'
import { colors } from '../../styles'

export const Div = styled.div`
  width: 880px;
  height: 540px;
  border: solid 2px ${colors.blueBlack};
  position: relative;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  .direita {
    right: 8px;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;

  &.saindo-right {
    transform: translateX(-100%);
  }

  &.saindo-left {
    transform: translateX(100%);
  }

  &.entrando-right {
    transform: translateX(100%);
    animation: slideInRight 0.3s forwards;
  }

  &.entrando-left {
    transform: translateX(-100%);
    animation: slideInLeft 0.3s forwards;
  }

  @keyframes slideInRight {
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideInLeft {
    to {
      transform: translateX(0);
    }
  }
`

export const TitleBanner = styled.h3`
  position: absolute;
  display: block;
  rigth: 50%;
  text-align: center;
  margin: 0 auto;
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 26px 0;
  text-align: center;
  color: ${colors.ice};
  background: rgba(0, 0, 0, 0.4);
`

export const Setas = styled.button`
  position: absolute;
  top: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
`
