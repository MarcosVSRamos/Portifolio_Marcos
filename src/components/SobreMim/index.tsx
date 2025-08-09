import * as S from './styles'
import perfil from '../../assets/images/perfil.jpg'

const SobreMim = () => {
  return (
    <S.Div className="container">
      <S.HeaderSection>
        <div>
          <h3>Quem é Marcos Vinicius</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            quisquam nam recusandae, vero laboriosam eos repellendus illo et
            iste cupiditate aliquam error molestias enim, totam, ab non odio
            unde animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quidem repellendus dolores delectus sit quisquam! Tempore reiciendis
            esse omnis libero sapiente adipisci dolor doloremque architecto
            autem, nostrum praesentium hic eveniet veniam?
          </p>
        </div>
        <S.Image src={perfil} alt="imagem de perfil" />
      </S.HeaderSection>
      <div>
        <S.Titlle>Conhecimentos e experiências</S.Titlle>
        <S.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          quibusdam animi architecto suscipit ducimus dolores, aut laboriosam
          culpa doloremque pariatur temporibus expedita dolor omnis repellat
          itaque voluptatibus alias, molestiae hic. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Inventore, hic temporibus? Pariatur
          veniam dolores minus autem sint. Nesciunt reprehenderit quidem
          cupiditate assumenda commodi fuga sunt, quas nihil! Quas, est qui.
        </S.Text>
      </div>
    </S.Div>
  )
}

export default SobreMim
