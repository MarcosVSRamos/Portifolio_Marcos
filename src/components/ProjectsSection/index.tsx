import { useFadeInOnScroll } from '../../utils'
import Card from '../Card'
import { Project } from '../../services/api'
import * as S from './styles'

type Props = {
  projects: Project[]
  onOpenModal: (project: Project) => void
}

const ProjectsSection = ({ projects, onOpenModal }: Props) => {
  useFadeInOnScroll('[data-fade]')

  return (
    <S.Div id="projects" className="container">
      <h2>Projetos</h2>
      <S.List>
        {projects &&
          projects.map((project) => (
            <li key={project.id} data-fade data-fade-delay="100">
              <Card project={project} onOpenModal={onOpenModal} />
            </li>
          ))}
      </S.List>
    </S.Div>
  )
}

export default ProjectsSection
