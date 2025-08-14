import GlobalCss, { GradientDivider } from './styles'
import Header from './components/Header'
import SobreMim from './components/SobreMim'
import Section from './components/Section'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import { projects } from './components/services/api'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <SobreMim />
      <Section />
      <ProjectsSection projects={projects} />
      <Footer />
    </>
  )
}

export default App
