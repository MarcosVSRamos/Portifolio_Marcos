import Card from '../Card'
import Slides from '../Slides'
import * as S from './styles'

const Section = () => {
  return (
    <S.Div className="container">
      <S.Title id="destaques">Destaques</S.Title>
      <Slides />
    </S.Div>
  )
}

export default Section
