import Card from '../Card'
import Slides from '../Slides'
import { Project } from '../../services/api'
import * as S from './styles'

type Props = {
  onOpenModal: (projeto: Project) => void
}

const Section = ({ onOpenModal }: Props) => {
  return (
    <S.Div id="destaques" className="container">
      <S.Title>Destaques</S.Title>
      <Slides onOpenModal={onOpenModal} />
    </S.Div>
  )
}

export default Section
