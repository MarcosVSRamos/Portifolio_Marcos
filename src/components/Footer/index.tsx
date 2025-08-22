import * as S from './styles'

import linkedin from '../../assets/images/linkedin.png'
import email from '../../assets/images/gmail.png'
import gitHub from '../../assets/images/github.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <S.List>
      <li>
        <a href="https://www.linkedin.com/in/marcos-vinicius-santos-ramos-dev">
          <img src={linkedin} alt="Linkedin" />
          <span>Linkedin</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/MarcosVSRamos">
          <img src={gitHub} alt="GitHub" />
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://santosramosmarcosvinicius@gmail.com">
          <img src={email} alt="E-mail" />
          <span>E-mail</span>
        </a>
      </li>
    </S.List>
    <p>
      {currentYear} - &copy; Portifólio-Marcos - Todos os direitos reservados
    </p>
  </S.Container>
)

export default Footer
