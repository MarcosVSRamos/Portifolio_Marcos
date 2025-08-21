import { Project } from '../../services/api'
import * as S from './styles'

type PropsModal = {
  project: Project
  onOpenModal: (project: Project) => void
}

const Card = ({ project, onOpenModal }: PropsModal) => {
  const getDescrition = (description: string) => {
    if (description.length >= 120) {
      return description.slice(0, 120) + '...'
    }
    return description
  }

  return (
    <S.DivCard id={project.id}>
      <S.DivImage>
        <S.Tag>
          {project.profissional && (
            <span className="profissional">Profissional</span>
          )}
          {project.emphasis && <span>Destaque</span>}
          <span>{project.language}</span>
        </S.Tag>
        <S.Img
          src={project.background}
          alt={project.title}
          onClick={() => onOpenModal(project)}
        />
      </S.DivImage>
      <h4>{project.title}</h4>
      <p>{getDescrition(project.description)}</p>
      <S.Button type="button" onClick={() => onOpenModal(project)}>
        Saiba Mais
      </S.Button>
    </S.DivCard>
  )
}

export default Card
