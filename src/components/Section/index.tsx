import Slides from '../Slides'
import { Project } from '../../services/api'
import * as S from './styles'

type SectionProps = {
  onOpenModal: (projeto: Project) => void
}

const Section = ({ onOpenModal }: SectionProps) => {
  if (!onOpenModal) {
    console.error('modal não passada')
    return null
  }
  return (
    <S.Div id="destaques" className="container">
      <S.Title>Destaques</S.Title>
      <Slides onOpenModal={onOpenModal} />
    </S.Div>
  )
}

export default Section
