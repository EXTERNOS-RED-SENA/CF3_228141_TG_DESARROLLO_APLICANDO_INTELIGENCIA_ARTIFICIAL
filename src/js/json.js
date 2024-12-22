export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Solución de problemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pensamiento algorítmico y programación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis y formulación del problema',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fases de la resolución de problemas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de descomposición y abstracción',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Formulación de algoritmos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y tipos de algoritmos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Formulación de algoritmos: pseudocódigo y diagramas de flujo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de datos, constantes y variables',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Operadores y jerarquía de operadores',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño y validación de algoritmos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis y diseño de algoritmos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructuras secuenciales, condicionales y cíclicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Arreglos, funciones y procedimientos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Pruebas de escritorio y validación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Prototipado de interfaces',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Conceptos de usabilidad y experiencia de usuario (UX)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas y herramientas de prototipado',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Diseño de la interfaz gráfica de usuario',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Aplicación de técnicas de usabilidad',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Patrones de interacción y diseño visual',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228117_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Desarrollo de algoritmos y prototipado de interfaces',
    Description:
      'El presente componente aborda el desarrollo de algoritmos y el prototipado de interfaces centradas en el usuario. Se aprenderá a descomponer problemas, utilizar estructuras de control, representar soluciones con diagramas, optimizar algoritmos, y diseñar prototipos usables, integrando técnicas de validación para garantizar una experiencia fluida y efectiva en aplicaciones y sistemas digitales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
}
