import GlobalCss, { GradientDivider } from './styles'
import Header from './components/Header'
import SobreMim from './components/SobreMim'
import Section from './components/Section'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <SobreMim />
      <Section />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
