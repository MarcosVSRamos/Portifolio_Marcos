import { useState } from 'react'
import * as S from './styles'
import { useFadeInOnScroll } from '../../utils'

const Header = () => {
  useFadeInOnScroll('[data-fade]')
  const [amburguer, setHamburger] = useState<boolean>()

  const openMenu = () => {
    if (amburguer) {
      setHamburger(false)
    } else setHamburger(true)
  }

  return (
    <S.Div>
      <h1>Marcos V. S. Ramos</h1>
      <S.NavBar>
        <a href="#sobre-mim">Sobre Mim</a>
        <a href="#destaques">Destaques</a>
        <a href="#projects">All Projects</a>
      </S.NavBar>
      <S.Hamburguer className="menu-sanduiche">
        <button onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </S.Hamburguer>
      {amburguer && (
        <S.HamburguerLinks>
          <a href="#sobre-mim">Sobre Mim</a>
          <a href="#destaques">Destaques</a>
          <a href="#projects">All Projects</a>
        </S.HamburguerLinks>
      )}
    </S.Div>
  )
}

export default Header
