import * as S from './styles'
import perfil from '../../assets/images/perfil.jpg'
import github from '../../assets/images/github.png'
import gmail from '../../assets/images/gmail.png'
import linkedin from '../../assets/images/linkedin.png'
import { GradientDivider } from '../../styles'

const SobreMim = () => {
  return (
    <>
      <S.Div className="container">
        <S.HeaderSection>
          <S.DivText id="sobre-mim">
            <h3>Quem é Marcos Vinicius</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quisquam nam recusandae, vero laboriosam eos repellendus illo et
              iste cupiditate aliquam error molestias enim, totam, ab non odio
              unde animi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quidem repellendus dolores delectus sit quisquam! Tempore
              reiciendis esse omnis libero sapiente adipisci dolor doloremque
              architecto autem, nostrum praesentium hic eveniet veniam?
            </p>
          </S.DivText>
          <S.DivLinksAndImg>
            <S.Image src={perfil} alt="imagem de perfil" />
            <S.DivSocialMedia>
              <a href="https://www.linkedin.com/in/marcos-vinicius-santos-ramos-dev">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://santosramosmarcosvinicius@gmail.com">
                <img src={gmail} alt="e-mail" />
              </a>
              <a href="https://github.com/MarcosVSRamos">
                <img src={github} alt="github" />
              </a>
            </S.DivSocialMedia>
          </S.DivLinksAndImg>
        </S.HeaderSection>
        <div>
          <S.Titlle>Conhecimentos e experiências</S.Titlle>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quibusdam animi architecto suscipit ducimus dolores, aut laboriosam
            culpa doloremque pariatur temporibus expedita dolor omnis repellat
            itaque voluptatibus alias, molestiae hic. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Inventore, hic temporibus?
            Pariatur veniam dolores minus autem sint. Nesciunt reprehenderit
            quidem cupiditate assumenda commodi fuga sunt, quas nihil! Quas, est
            qui.
          </S.Text>
        </div>
      </S.Div>

      <GradientDivider className="container" />
    </>
  )
}

export default SobreMim
