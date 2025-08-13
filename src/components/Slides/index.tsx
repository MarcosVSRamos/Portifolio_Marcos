import efood from '../../assets/images/e_food_horizontal.png'
import setaEsquerda from '../../assets/images/seta-esquerda.png'
import setaDireita from '../../assets/images/seta-direita.png'
import * as S from './styles'

const Slides = () => {
  return (
    <S.Div>
      <S.Img src={efood} alt="imagens de projetos" />
      <S.SetasContainer>
        <button type="button">
          <img src={setaEsquerda} alt="seta para a esquerda" />
        </button>
        <button type="button">
          <img src={setaDireita} alt="seta para a direita" />
        </button>
      </S.SetasContainer>
    </S.Div>
  )
}

export default Slides
