export default {
  global: {
    componenteFormativo: 'Desarrollo de algoritmos y prototipado de interfaces',
    descripcionCurso:
      'El presente componente aborda el desarrollo de algoritmos y el prototipado de interfaces centradas en el usuario. Se aprenderá a descomponer problemas, utilizar estructuras de control, representar soluciones con diagramas, optimizar algoritmos, y diseñar prototipos usables, integrando técnicas de validación para garantizar una experiencia fluida y efectiva en aplicaciones y sistemas digitales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
  complementario: [
    {
      tema: '1. Solución de problemas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021b, noviembre 11). <em>Solución de problemas mediante la utilización de algoritmos.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U8RvbmiZKcs',
    },
    {
      tema: '2. Formulación de algoritmos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021a, abril 29). <em>Codificación de algoritmos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=L2KbJaJx8WM',
    },
    {
      tema: '3. Diseño y validación de algoritmos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, octubre 10). <em>El algoritmo ideal.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZgkwSKyGpnY',
    },
    {
      tema: '3. Diseño y validación de algoritmos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 27). <em>Algoritmos, estructuras y operaciones.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aICQGTU4Dm8',
    },
    {
      tema: '4. Prototipado de interfaces',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021c, diciembre 6). <em>Interface del entorno.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pDtQ1nO3yhM',
    },
    {
      tema: '4. Prototipado de interfaces',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 27). <em>Introducción construcción de la interfaz de usuario del software.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=huI-scInu4Q',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'La capacidad de una aplicación para ser utilizada por personas con diferentes tipos de discapacidades.',
    },
    {
      termino: 'Alineación',
      significado:
        'La disposición de elementos en una interfaz para que estén organizados de manera ordenada y coherente.',
    },
    {
      termino: 'Boceto',
      significado:
        'Un dibujo rápido y sencillo que representa el diseño básico de una interfaz antes de crear un prototipo.',
    },
    {
      termino: 'Consistencia',
      significado:
        'La uniformidad en el diseño, como el uso coherente de colores, fuentes y estilos a lo largo de la interfaz.',
    },
    {
      termino: 'Contraste',
      significado:
        'Diferencia visual entre elementos, como colores claros y oscuros, que ayuda a destacar información importante.',
    },
    {
      termino: 'Control del usuario',
      significado:
        'Característica que permite a los usuarios tener la libertad de deshacer acciones o navegar de forma intuitiva.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'La rapidez y facilidad con la que los usuarios pueden completar tareas en una interfaz.',
    },
    {
      termino: 'Estilo de navegación',
      significado:
        'La forma en que se estructuran y presentan las opciones de navegación en una aplicación.',
    },
    {
      termino: 'Experiencia de usuario (UX)',
      significado:
        'La percepción general del usuario al interactuar con una aplicación, incluyendo aspectos prácticos y emocionales.',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        'Información que el sistema proporciona al usuario como respuesta a una acción, por ejemplo, mensajes de éxito o error.',
    },
    {
      termino: 'Flujo de usuario',
      significado:
        'El camino que sigue un usuario al interactuar con una aplicación, desde el inicio hasta la finalización de una tarea.',
    },
    {
      termino: 'Funcionalidad',
      significado:
        'La capacidad de una aplicación para realizar las tareas y funciones para las que fue diseñada.',
    },
    {
      termino: 'Heurísticas de usabilidad',
      significado:
        'Principios generales utilizados para evaluar y mejorar la facilidad de uso de una aplicación.',
    },
    {
      termino: 'Icono',
      significado:
        'Un pequeño símbolo gráfico utilizado en las interfaces para representar acciones o elementos de forma visual.',
    },
    {
      termino: 'Interfaz de usuario (UI)',
      significado:
        'El espacio en el que los usuarios interactúan con una aplicación, incluyendo botones, menús y gráficos.',
    },
    {
      termino: 'Iteración',
      significado:
        'El proceso de repetir y mejorar un diseño basado en pruebas y retroalimentación de los usuarios.',
    },
    {
      termino: 'Jerarquía visual',
      significado:
        'La organización de elementos de una manera que destaca la información más importante primero.',
    },
    {
      termino: 'Microinteracciones',
      significado:
        'Pequeñas interacciones que mejoran la experiencia del usuario, como animaciones o notificaciones.',
    },
    {
      termino: '<em>Mockup</em>',
      significado:
        'Es un prototipo, ya sea de una página web, diseño o producto, que muestra cómo funcionaría un objeto en el mundo real.',
    },
    {
      termino: 'Modal',
      significado:
        'Una ventana emergente que requiere la interacción del usuario antes de poder continuar usando la aplicación.',
    },
    {
      termino: 'Patrones de diseño',
      significado:
        'Soluciones reutilizables para problemas comunes en el diseño de interfaces.',
    },
    {
      termino: 'Patrones de interacción',
      significado:
        'Soluciones comunes y probadas a problemas recurrentes en interfaces de usuario.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Una versión preliminar y funcional de una aplicación que se utiliza para probar y refinar el diseño.',
    },
    {
      termino: 'Pruebas de usabilidad',
      significado:
        'Evaluaciones realizadas para verificar que los usuarios pueden usar una aplicación de manera eficaz y sin problemas.',
    },
    {
      termino: 'Responsividad',
      significado:
        'La capacidad de una interfaz para ajustarse y verse bien en diferentes dispositivos y tamaños de pantalla.',
    },
    {
      termino: 'Simplicidad',
      significado:
        'El diseño de una interfaz de forma que sea fácil de entender y usar, eliminando elementos innecesarios.',
    },
    {
      termino: 'Testing A/B',
      significado:
        'Prueba en la que se muestran dos versiones diferentes de una interfaz para determinar cuál es más eficaz.',
    },
    {
      termino: '<em>Wireframe</em>',
      significado:
        'Una representación esquemática de una página web o aplicación que muestra la estructura básica, sin diseño gráfico detallado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ahmad, I. (2024). 50 algoritmos que todo programador debe conocer. Marcombo.',
      link: '',
    },
    {
      referencia:
        'Gálvez, J. A. S. (s. f.). Solución de Problemas y Algoritmos. Unidades de Apoyo Para el Aprendizaje - CUAIEED - UNAM. ',
      link:
        'https://uapa.cuaed.unam.mx/sites/default/files/minisite/static/3fa4df86-0459-4c54-a569-87d7c387f449/UAPA-solucion-problemas-algoritmos/index.html',
    },
    {
      referencia:
        'Herrera, A. M. (2015). Diseño y construcción de algoritmos. Ediciones de la U.',
      link: '',
    },
    {
      referencia: 'Knuth, D. E. (2021). Algoritmos Fundamentales. Reverte.',
      link: '',
    },
    {
      referencia:
        'Krug, S. (2014). No me hagas pensar: una aproximación a la usabilidad en la web. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Educación. Sedgewick, R. (1995). Algoritmos En C++. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Velasco Ramírez, M. L. (2020). Resolución de problemas algorítmicos y objetos de aprendizaje: una revisión de la literatura. RIDE. Revista Iberoamericana para la Investigación y el Desarrollo Educativo, 10(20). ',
      link:
        'https://www.scielo.org.mx/scielo.php?pid=S2007-74672020000100122&script=sci_arttext',
    },
  ],
}
