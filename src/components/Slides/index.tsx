import { useEffect, useState } from 'react'

import setaEsquerda from '../../assets/images/seta-esquerda.png'
import setaDireita from '../../assets/images/seta-direita.png'

import * as S from './styles'
import { useFadeInOnScroll } from '../../utils'
import { projects } from '../services/api'

const imagens = projects
  .filter((project) => project.emphasis)
  .map((project) => project.banner)

const Slides = () => {
  useFadeInOnScroll('[data-fade]')

  const [indice, setIndice] = useState(0)
  const [proximoIndice, setProximoIndice] = useState<number | null>(null)
  const [direcao, setDirecao] = useState<'left' | 'right'>('right')

  const mudarImagem = (novaDirecao: 'left' | 'right') => {
    const novo =
      novaDirecao === 'right'
        ? (indice + 1) % imagens.length
        : (indice - 1 + imagens.length) % imagens.length

    setDirecao(novaDirecao)
    setProximoIndice(novo)

    setTimeout(() => {
      setIndice(novo)
      setProximoIndice(null)
    }, 300)
  }

  useEffect(() => {
    const intervalo = window.setInterval(() => mudarImagem('right'), 8000)
    return () => window.clearInterval(intervalo)
  }, [indice])

  return (
    <S.Div data-fade>
      <S.Img
        key={indice}
        src={imagens[indice]}
        alt={`Projeto ${indice + 1}`}
        className={`atual ${proximoIndice !== null ? `saindo-${direcao}` : ''}`}
      />

      {proximoIndice !== null && (
        <S.Img
          key={proximoIndice}
          src={imagens[proximoIndice]}
          alt={`Projeto ${proximoIndice + 1}`}
          className={`proxima entrando-${direcao}`}
        />
      )}

      <S.SetasContainer>
        <button type="button" onClick={() => mudarImagem('left')}>
          <img src={setaEsquerda} alt="Anterior" />
        </button>
        <button type="button" onClick={() => mudarImagem('right')}>
          <img src={setaDireita} alt="Próximo" />
        </button>
      </S.SetasContainer>
    </S.Div>
  )
}

export default Slides
