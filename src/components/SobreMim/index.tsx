import * as S from './styles'
import perfil from '../../assets/images/perfil.jpg'
import github from '../../assets/images/github.png'
import gmail from '../../assets/images/gmail.png'
import linkedin from '../../assets/images/linkedin.png'
import { useFadeInOnScroll } from '../../utils'

const SobreMim = () => {
  useFadeInOnScroll('[data-fade]')

  return (
    <div>
      <S.Div id="sobre-mim" className="container">
        <S.HeaderSection data-fade>
          <S.DivText>
            <h3>Quem é Marcos Vinicius</h3>
            <p>
              Olá, meu nome é Marcos Vinicius Santos Ramos e este portfólio foi
              criado para compartilhar um pouco da minha trajetória, meus
              projetos e minhas experiências na área de tecnologia. Sempre fui
              movido pela curiosidade em entender como as coisas funcionam, e
              essa curiosidade acabou me levando para o mundo da tecnologia da
              informação. Aqui você vai encontrar alguns dos trabalhos que
              desenvolvi ao longo do meu aprendizado, desde projetos acadêmicos
              até experimentos pessoais que me ajudaram a evoluir como
              profissional. Minha intenção é usar este espaço como uma vitrine
              para mostrar quem eu sou, como penso e de que forma posso
              contribuir para novos desafios no mercado de trabalho.
            </p>
          </S.DivText>
          <S.DivLinksAndImg data-fade>
            <S.Image src={perfil} alt="imagem de perfil" data-fade />
            <S.DivSocialMedia>
              <a href="https://www.linkedin.com/in/marcos-vinicius-santos-ramos-dev">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="mailto:santosramosmarcosvinicius@gmail.com">
                <img src={gmail} alt="e-mail" />
              </a>
              <a href="https://github.com/MarcosVSRamos">
                <img src={github} alt="github" />
              </a>
            </S.DivSocialMedia>
          </S.DivLinksAndImg>
        </S.HeaderSection>
        <div data-fade>
          <S.Titlle>Conhecimentos e experiências</S.Titlle>
          <S.Text>
            Atualmente, venho aprofundando meus estudos em desenvolvimento web e
            programação por meio da EBAC (Escola Britânica de Artes Criativas e
            Tecnologia), explorando linguagens e ferramentas como JavaScript,
            TypeScript, React, Node.js e conceitos de banco de dados e redes.
            Minha formação inicial em telecomunicações me deu uma base sólida em
            infraestrutura, redes e resolução de problemas técnicos, o que
            complementa meu caminho atual no desenvolvimento de software. Para
            2026, pretendo iniciar a graduação em Sistemas de Informação,
            consolidando uma formação acadêmica que alinhe teoria e prática no
            universo da tecnologia. Meu objetivo é crescer como desenvolvedor,
            integrando conhecimentos de programação, redes e sistemas para atuar
            em projetos inovadores que unam eficiência técnica e soluções
            criativas.
          </S.Text>
        </div>
      </S.Div>
    </div>
  )
}

export default SobreMim
