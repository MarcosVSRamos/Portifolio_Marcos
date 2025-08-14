import bannerEfood from '../../assets/images/restaurantes/cardapio.png'
import backgroundEfood from '../../assets/images/restaurantes/backgroundUm.png'
import bannerTecNet from '../../assets/images/tec-net/locationsCity.png'
import backgroundTecNet from '../../assets/images/tec-net/backgroundUm.png'
import backgroundEplay from '../../assets/images/e-play/section.png'
import bannerEplay from '../../assets/images/e-play/galleryBanner.png'
import bannerTerraria from '../../assets/images/terraria/bannerHome.png'
import backgroundTerraria from '../../assets/images/terraria/bannerWiki.png'

export type Project = {
  id: string
  title: string
  description: string
  emphasis: boolean
  language: string
  banner: string
  background: string
  languagesAndFrameworks: string[]
  gallery?: string[]
  linkGithub?: string
  linkVersel?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-FOOD',
    description:
      'Um site de restaurantes com seus respectivos cardápios. Desenvolvido em React com requisições de API por AJAX',
    emphasis: true,
    language: 'React.js',
    banner: bannerEfood,
    background: backgroundEfood,
    languagesAndFrameworks: [
      'Reactj',
      'Styled-Components',
      'Redux',
      'React-Router-Dom'
    ],
    gallery: [bannerEfood, bannerEfood],
    linkGithub: 'https://github.com/MarcosVSRamos/E-FOOD-M34',
    linkVersel: 'https://e-food-lake-chi.vercel.app/'
  },
  {
    id: '2',
    title: 'TecNet Workspace',
    description:
      'Um site de restaurantes com seus respectivos cardápios. Desenvolvido em React com requisições de API por AJAX',
    emphasis: false,
    language: 'React.js',
    banner: bannerTecNet,
    background: backgroundTecNet,
    languagesAndFrameworks: [
      'Reactj',
      'Styled-Components',
      'Redux',
      'React-Router-Dom'
    ],
    gallery: [bannerTecNet, bannerTecNet],
    linkGithub: 'https://github.com/MarcosVSRamos/TecNetWorkspace',
    linkVersel: 'https://tec-net-workspace.vercel.app/'
  },
  {
    id: '3',
    title: 'E-Play',
    description:
      'Um site de restaurantes com seus respectivos cardápios. Desenvolvido em React com requisições de API por AJAX',
    emphasis: true,
    language: 'React.js',
    banner: bannerEplay,
    background: backgroundEplay,
    languagesAndFrameworks: [
      'Reactj',
      'Styled-Components',
      'Redux',
      'React-Router-Dom'
    ],
    gallery: [bannerEplay, bannerEplay],
    linkGithub: 'https://github.com/MarcosVSRamos/projetoFinalFront',
    linkVersel: 'https://github.com/MarcosVSRamos/projetoFinalFront'
  },
  {
    id: '4',
    title: 'Terraria Wiki',
    description:
      'Um site de restaurantes com seus respectivos cardápios. Desenvolvido em React com requisições de API por AJAX',
    emphasis: true,
    language: 'HTML',
    banner: bannerTerraria,
    background: backgroundTerraria,
    languagesAndFrameworks: ['HTML', 'SCSS', 'JavaScript'],
    gallery: [bannerTerraria, bannerTerraria],
    linkGithub:
      'https://github.com/MarcosVSRamos/exercicio-M21-terraria?tab=readme-ov-file',
    linkVersel: 'https://exercicio-m21-terraria.vercel.app/'
  }
]
