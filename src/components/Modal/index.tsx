import { useState } from 'react'
import { Project } from '../../services/api'

import * as S from './styles'
import { useFadeInOnScroll } from '../../utils'

type Props = {
  project?: Project
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ project, isVisible, onClose }: Props) => {
  useFadeInOnScroll('[data-fade]')

  if (!isVisible) return null

  return (
    <S.Modal className={isVisible ? 'visible' : ''}>
      <S.ModalContent data-fade>
        <S.InfosDiv>
          <S.TextDetails>
            <div>
              <h4>{project?.title}</h4>
              <p>
                Este projeto tem o intuito de praticar e desenvolver algumas
                habilidades na programação front-end criando um site com o tema
                do jogo Terraria. Principais ferramentas e linguagens
                utilizadas: JavaScript; SCSS; HTML; Gulp Neste projeto estou
                usando algumas versões de pré-processadores desatualizadas para
                fins de compatibilidade, você poderá verificar as versões no
                arquivo json
              </p>
            </div>
            <div>
              <S.Langs>
                <h4 className="litle-title">
                  Principais linguagens e ferramentas utilizadas:
                </h4>
                {project?.languagesAndFrameworks.map((lang, index) => (
                  <S.LinkLanguages key={index}>
                    <a
                      href={`https://google.com/search?q=language-or-framework-${lang.toLowerCase()}`}
                    >
                      {lang}
                    </a>
                  </S.LinkLanguages>
                ))}
              </S.Langs>
              {project?.linkGithub && (
                <S.LinkProjects href="#">Link para o GitHub</S.LinkProjects>
              )}
              {project?.linkVersel && (
                <S.LinkProjects href="#">Link para o Deploy</S.LinkProjects>
              )}
            </div>
            {project?.profissional && (
              <S.TextProject>
                Este projeto foi desenvolvido em ambiente profissional. Em
                respeito a cláusulas de confidencialidade e segurança, os links
                de acesso não podem ser divulgados.
              </S.TextProject>
            )}
          </S.TextDetails>
          <S.Images>
            {project?.gallery?.length ? (
              project.gallery.map((image, index) => (
                <img key={index} src={image} alt={project.title} />
              ))
            ) : (
              <h2>Carregando...</h2>
            )}
          </S.Images>
        </S.InfosDiv>
      </S.ModalContent>
      <div onClick={onClose} className="overLay" />
    </S.Modal>
  )
}

export default Modal
