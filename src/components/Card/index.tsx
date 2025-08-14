import { Project } from '../services/api'
import * as S from './styles'

type Props = {
  project: Project
}

const Card = ({ project }: Props) => {
  return (
    <S.DivCard id={project.id}>
      <S.DivImage>
        <S.Tag>
          {project.emphasis && <span>Destaque</span>}
          <span>{project.language}</span>
        </S.Tag>
        <S.Img src={project.background} alt="site de restaurantes" />
      </S.DivImage>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <S.Button type="button">Saiba Mais</S.Button>
    </S.DivCard>
  )
}

export default Card
