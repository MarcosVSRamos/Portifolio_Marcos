import Card from '../Card'
import * as S from './styles'

const Section = () => {
  return (
    <S.Div className="container">
      <h2 id="destaques">Destaques</h2>
      <S.List>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </S.List>
    </S.Div>
  )
}

export default Section
