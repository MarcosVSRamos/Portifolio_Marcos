import Card from '../Card'
import Slides from '../Slides'
import * as S from './styles'

const Section = () => {
  return (
    <S.Div id="destaques" className="container">
      <S.Title>Destaques</S.Title>
      <Slides />
    </S.Div>
  )
}

export default Section
