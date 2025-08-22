import { useEffect, useState } from 'react'

import setaEsquerda from '../../assets/images/seta-esquerda.png'
import setaDireita from '../../assets/images/seta-direita.png'

import * as S from './styles'
import { useFadeInOnScroll } from '../../utils'
import { Project, projetosDestaque } from '../../services/api'

type Props = {
  onOpenModal: (project: Project) => void
}

const Slides = ({ onOpenModal }: Props) => {
  useFadeInOnScroll('[data-fade]')

  const [indice, setIndice] = useState(0)
  const [proximoIndice, setProximoIndice] = useState<number | null>(null)
  const [direcao, setDirecao] = useState<'left' | 'right'>('right')

  const total = projetosDestaque.length
  const projetoAtual = projetosDestaque[indice]
  const projetoProximo =
    proximoIndice !== null ? projetosDestaque[proximoIndice] : null

  const mudarImagem = (novaDirecao: 'left' | 'right') => {
    const novo =
      novaDirecao === 'right'
        ? (indice + 1) % total
        : (indice - 1 + total) % total

    setDirecao(novaDirecao)
    setProximoIndice(novo)

    window.setTimeout(() => {
      setIndice(novo)
      setProximoIndice(null)
    }, 300)
  }

  useEffect(() => {
    const intervalo = window.setInterval(() => mudarImagem('right'), 8000)
    return () => window.clearInterval(intervalo)
  }, [indice])

  if (!projetosDestaque || projetosDestaque.length === 0) {
    return <h2>Carregando...</h2>
  }

  return (
    <S.Div data-fade>
      <div onClick={() => onOpenModal(projetoAtual)}>
        <S.Img
          key={`atual-${indice}`}
          src={projetoAtual.banner}
          alt={`Projeto ${projetoAtual.title}`}
          className={`atual ${
            proximoIndice !== null ? `saindo-${direcao}` : ''
          }`}
        />

        {proximoIndice !== null && (
          <S.Img
            key={`proxima-${proximoIndice}`}
            src={projetoProximo?.banner}
            alt={`Projeto ${projetoProximo?.title}`}
            className={`proxima entrando-${direcao}`}
          />
        )}

        <S.TitleBanner>{projetoAtual.title}</S.TitleBanner>
      </div>
      <S.Setas
        className="esquerda"
        type="button"
        onClick={() => mudarImagem('left')}
      >
        <img src={setaEsquerda} alt="Anterior" />
      </S.Setas>
      <S.Setas
        className="direita"
        type="button"
        onClick={() => mudarImagem('right')}
      >
        <img src={setaDireita} alt="Próximo" />
      </S.Setas>
    </S.Div>
  )
}

export default Slides
