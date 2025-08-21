import { useState } from 'react'
import GlobalCss from './styles'
import Header from './components/Header'
import SobreMim from './components/SobreMim'
import Section from './components/Section'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import { projects, Project } from './services/api'
import Modal from './components/Modal'

function App() {
  const [selectProject, setSelectProject] = useState<Project | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = (project: Project) => {
    setSelectProject(project)
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setSelectProject(null)
    setIsModalVisible(false)
  }

  return (
    <>
      <GlobalCss />
      <Header />
      <SobreMim />
      <Section onOpenModal={openModal} />
      <ProjectsSection projects={projects} onOpenModal={openModal} />
      <Footer />

      <div className="relative">
        {isModalVisible && selectProject && (
          <Modal
            project={selectProject}
            isVisible={isModalVisible}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  )
}

export default App
