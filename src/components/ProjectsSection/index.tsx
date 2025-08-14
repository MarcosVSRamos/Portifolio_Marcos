import { useFadeInOnScroll } from '../../utils'
import Card from '../Card'
import * as S from './styles'

const ProjectsSection = () => {
  useFadeInOnScroll('[data-fade]')

  return (
    <S.Div id="projects" className="container">
      <h2>Projetos</h2>
      <S.List>
        <li data-fade data-fade-delay="100">
          <Card />
        </li>
        <li data-fade data-fade-delay="200">
          <Card />
        </li>
        <li data-fade data-fade-delay="300">
          <Card />
        </li>
        <li data-fade data-fade-delay="400">
          <Card />
        </li>
        <li data-fade data-fade-delay="500">
          <Card />
        </li>
        <li data-fade data-fade-delay="600">
          <Card />
        </li>
        <li data-fade data-fade-delay="700">
          <Card />
        </li>
        <li data-fade data-fade-delay="800">
          <Card />
        </li>
      </S.List>
    </S.Div>
  )
}

export default ProjectsSection
