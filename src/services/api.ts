import bannerEfood from '../assets/images/restaurantes/cardapio.png'
import backgroundEfood from '../assets/images/restaurantes/backgroundUm.png'
import banner2Efood from '../assets/images/restaurantes/bannerDois.png'
import detailsEfood from '../assets/images/restaurantes/details.png'

import bannerTecNet from '../assets/images/tec-net/locationsCity.png'
import backgroundTecNet from '../assets/images/tec-net/backgroundUm.png'
import menuTecNet from '../assets/images/tec-net/menu.png'
import loginTecNet from '../assets/images/tec-net/login.png'
import backupsTecNet from '../assets/images/tec-net/backups.png'

import backgroundEplay from '../assets/images/e-play/section.png'
import bannerEplay from '../assets/images/e-play/galleryBanner.png'
import banner2Eplay from '../assets/images/e-play/toBuy.png'
import banner3Eplay from '../assets/images/e-play/gallety.png'

import bannerTerraria from '../assets/images/terraria/bannerHome.png'
import banner2terraria from '../assets/images/terraria/bannerPicture.png'
import backgroundTerraria from '../assets/images/terraria/bannerWiki.png'

import backgroundTestes from '../assets/images/testes/backgroundTestes.png'
import bannerTestes from '../assets/images/testes/backgroundTestes.png'
import banner2Testes from '../assets/images/testes/cmd.png'

export type Project = {
  id: string
  title: string
  description: string
  emphasis: boolean
  language: string
  banner: string
  background: string
  languagesAndFrameworks: string[]
  profissional?: boolean
  gallery?: string[]
  linkGithub?: string
  linkVersel?: string
}

export const projects: Project[] = [
  {
    //E-Food
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
      'React-Router-Dom',
      'Yup',
      'API-AJAX',
      'Figma'
    ],
    gallery: [bannerEfood, detailsEfood, banner2Efood, backgroundEfood],
    linkGithub: 'https://github.com/MarcosVSRamos/E-FOOD-M34',
    linkVersel: 'https://e-food-lake-chi.vercel.app/'
  },
  {
    //TecNet
    id: '2',
    title: 'TecNet Workspace',
    description:
      'Este é um dos trabalhos proficionais do qual participei. Desenvolvi um app React para acesso de localizações e gestão de backups de equipamentos de rede com duas seções de downloads de backups organizados por torre, equipamento e região.',
    emphasis: false,
    profissional: true,
    language: 'React',
    banner: bannerTecNet,
    background: backgroundTecNet,
    languagesAndFrameworks: [
      'React',
      'Styled-Components',
      'Redux',
      'Sass',
      'React-Router-Dom'
    ],
    gallery: [menuTecNet, loginTecNet, bannerTecNet, backupsTecNet]
  },
  {
    //E-Play
    id: '3',
    title: 'E-Play',
    description:
      'Este é um projeto que desenvolvi durante os módulos da etapa Front-End do curso Full-Stack em Java na EBAC. O projeto simula um E-Comerce e jogos digitais, contendo: Página inicial com destaque, banners de destaque do dia (alternação altomática), seções de bibliotecas separadas por categorias, menu individual com galeria para cada jogo, sistema de carrinho com calculo de valor total e parcelas, sistema de conclusão de compra e cadastro com retorno de id do pedido.',
    emphasis: true,
    language: 'React.js',
    banner: bannerEplay,
    background: backgroundEplay,
    languagesAndFrameworks: [
      'Reactj',
      'Styled-Components',
      'Redux',
      'React-Router-Dom',
      'React-Router-Hash-Link',
      'Yup',
      'Tolkit',
      'Figma',
      'API-AJAX'
    ],
    gallery: [bannerEplay, banner2Eplay, banner3Eplay, backgroundEplay],
    linkGithub: 'https://github.com/MarcosVSRamos/projetoFinalFront',
    linkVersel: 'https://e-play-pearl.vercel.app/'
  },
  {
    //Terraria
    id: '4',
    title: 'Terraria Wiki',
    description:
      'Um site de restaurantes com seus respectivos cardápios. Desenvolvido em React com requisições de API por AJAX',
    emphasis: true,
    language: 'HTML',
    banner: bannerTerraria,
    background: backgroundTerraria,
    languagesAndFrameworks: ['HTML', 'SCSS', 'JavaScript'],
    gallery: [bannerTerraria, banner2terraria, backgroundTerraria],
    linkGithub:
      'https://github.com/MarcosVSRamos/exercicio-M21-terraria?tab=readme-ov-file',
    linkVersel: 'https://exercicio-m21-terraria.vercel.app/'
  },
  {
    //Testes
    id: '5',
    title: 'Prática de testes',
    description:
      'Este é um simples projeto para consolidação de conhecimentos e experiencia com a prática de testes',
    emphasis: false,
    language: 'TypeScript',
    banner: bannerTestes,
    background: backgroundTestes,
    languagesAndFrameworks: ['TypeScript', 'CSS', 'HTML'],
    gallery: [bannerTestes, banner2Testes],
    linkGithub: 'https://github.com/MarcosVSRamos/exercicio-M33_tests'
  }
]

export const projetosDestaque = projects.filter((p) => p.emphasis)
