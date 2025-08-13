import efood from '../../assets/images/e_food_vertical.png'
import * as S from './styles'

const Card = () => {
  return (
    <S.DivCard>
      <S.DivImage>
        <S.Tag>
          <span>Destaque</span>
          <span>React.Js</span>
        </S.Tag>
        <S.Img src={efood} alt="site de restaurantes" />
      </S.DivImage>
      <h4>Site de Restaurantes</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        saepe, porro vel explicabo sunt odio
      </p>
      <S.Button type="button">Saiba Mais</S.Button>
    </S.DivCard>
  )
}

export default Card
