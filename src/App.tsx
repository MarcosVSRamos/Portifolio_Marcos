import GlobalCss, { GradientDivider } from './styles'
import Header from './components/Header'
import SobreMim from './components/SobreMim'
import Section from './components/Section'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <SobreMim />
      <Section />
      <ProjectsSection />
    </>
  )
}

export default App
