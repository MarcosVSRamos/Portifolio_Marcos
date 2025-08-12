import efood from '../../assets/images/e_food_vertical.png'
import * as S from './styles'

const Card = () => {
  return (
    <S.Div>
      <h4>Site de Restaurantes</h4>
      <S.Img src={efood} alt="site de restaurantes" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        saepe, porro vel explicabo sunt odio
      </p>
      <S.Button type="button">Saiba Mais</S.Button>
    </S.Div>
  )
}

export default Card
