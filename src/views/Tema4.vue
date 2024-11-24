<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Prototipado de interfaces
    p.mb-5(data-aos='fade-right') Este apartado aborda el diseño y desarrollo de interfaces de usuario (UI) a través del proceso de prototipado. Se exploran conceptos clave como usabilidad, accesibilidad y la experiencia del usuario (UX). También se explica cómo utilizar herramientas de diseño y técnicas de validación para construir interfaces que sean intuitivas y atractivas.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #e6f0fc")
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              p.mb-0 Es importante tener presente que el propósito de la Interfaz de Usuario (UI) es optimizar y hacer más atractiva la interacción del usuario, enfocando el diseño en sus necesidades y experiencias. Por esta razón, disciplinas como el Diseño Gráfico y el Diseño Industrial aplican sus principios para facilitar que los usuarios comprendan y aprendan rápidamente el uso de las aplicaciones y sistemas. Las herramientas fundamentales empleadas incluyen elementos gráficos, pictogramas, estereotipos y simbología, asegurando que la estética no comprometa la eficiencia técnica ni el rendimiento operativo del sistema.
            .col-lg-8.col-7
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 2.
                span  Interfaz de usuario
              img(src='@/assets/curso/temas/49.png', alt='')
              figcaption Fuente: https://www.efectodigital.online/single-post/2018/04/18/dise%C3%B1o-de-interfaz-de-usuario-ui
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1	Conceptos de usabilidad y experiencia de usuario (UX)
    .titulo-tres: h3.mb-0 Usabilidad
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-3 La usabilidad se refiere a qué tan fácil y eficiente es para los usuarios interactuar con una aplicación o sistema. Una interfaz usable permite que los usuarios completen sus tareas de manera rápida y sin errores.
        .p-4.rounded-3(style="background-color: #e6f0fc ").mb-3
          h5 Principios de la usabilidad
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 #[b Eficiencia:] el usuario debe poder realizar tareas con rapidez.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 #[b Memorabilidad:] los usuarios deben recordar fácilmente cómo usar la interfaz después de un tiempo sin interactuar con ella.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 #[b Facilidad de aprendizaje:] los nuevos usuarios deben aprender a usar la interfaz con poco esfuerzo.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 #[b Prevención de errores:] la interfaz debe minimizar las posibilidades de que ocurran errores, y cuando ocurran, debe permitir que se solucionen fácilmente.
        p.mb-0 #[b Ejemplo:] Un formulario de registro con instrucciones claras, validación en tiempo real y sugerencias de corrección de errores mejora la usabilidad porque reduce la frustración del usuario.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/50.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/51.png', alt='')
      .col-lg-7
        .titulo-tres: h3.mb-0 Experiencia de usuario (UX)
        p.mb-3 La UX se refiere a la experiencia general del usuario al interactuar con una aplicación, incluyendo aspectos emocionales, prácticos y de satisfacción.
        .p-4.rounded-3(style="background-color: #cff8de").mb-3
          h5 Factores que afectan la UX
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 #[b Diseño visual:] el atractivo estético de la interfaz influye en la percepción del usuario.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 #[b Interactividad:] la rapidez y la respuesta de la aplicación ante las acciones del usuario.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 #[b Contenido:] la claridad y relevancia de la información presentada.
        p.mb-4 #[b Ejemplo:] piensa en una aplicación de banca móvil. Una buena UX significa que los usuarios pueden consultar su saldo y transferir dinero con unos pocos toques, y que se sientan seguros y satisfechos mientras lo hacen.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2	Técnicas y herramientas de prototipado
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Técnicas de prototipado")
        .row
          .col-lg-6.mb-4.mb-lg-0: img(src='@/assets/curso/temas/52.png', alt='')
          .col-lg-6
            h4 Técnicas de prototipado
            p Los prototipos pueden ser de baja, media o alta fidelidad, dependiendo de cuánto detalle se desee incluir en la fase de diseño.
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Prototipos de baja fidelidad:] dibujos simples o bocetos en papel que representan la estructura básica de la interfaz.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Prototipos de media fidelidad:] mockups digitales que muestran más detalles, como la disposición de los elementos y algunos estilos.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Prototipos de alta fidelidad:] representaciones casi completas de la aplicación, con colores, imágenes y funcionalidad simulada.
            p.mb-0 #[b Ejemplo:] un diseñador puede comenzar con un boceto en papel de una página de inicio de una aplicación y luego crear un prototipo de alta fidelidad en herramientas como Figma o Adobe XD.
      .py-4.py-md-5(titulo="Herramientas de prototipado")
        .row
          .col-lg-6.mb-4.mb-lg-0: img(src='@/assets/curso/temas/53.png', alt='')
          .col-lg-6
            h4 Herramientas de prototipado
            p Existen varias herramientas para diseñar y probar prototipos:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Figma:] permite colaborar en tiempo real y crear prototipos interactivos.

              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Sketch:] popular entre los diseñadores de UI para crear interfaces detalladas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Adobe XD:] ofrece integración con otros productos de Adobe y funcionalidades para prototipado interactivo.
            p.mb-0 #[b Ejemplo:] un diseñador puede usar Figma para crear un prototipo de una aplicación de calendario, con interacciones que simulen cómo se agregarían y eliminarían eventos. 
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3	Diseño de la interfaz gráfica de usuario
    .titulo-tres: h3.mb-0 Elementos de una interfaz gráfica de usuario (GUI)
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ede9ec")
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/54.svg', alt='')
          .text-center
            h5 Botones
            p.mb-0 Deben ser intuitivos y tener etiquetas claras que describan su función.
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ede9ec")
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/55.svg', alt='')
          .text-center
            h5 Campos de entrada
            p.mb-0 Los usuarios deben poder ingresar datos de manera sencilla, con validaciones que eviten errores.
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ede9ec")
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/56.svg', alt='')
          .text-center
            h5 Menús y navegación 
            p.mb-0 Deben ser simples y lógicos para facilitar la búsqueda de funciones y contenidos.
      .col-lg-3.mb-lg-0.mb-3
        .row.justify-content-center.mb-4
          .col-10: img(src='@/assets/curso/temas/57.svg', alt='')
        p.mb-0 #[b Ejemplo:] en una aplicación de pedidos de comida, la pantalla de inicio puede tener botones para buscar restaurantes, revisar el carrito y ver el historial de pedidos. La navegación debe ser clara para que los usuarios puedan acceder rápidamente a lo que necesitan.
    .titulo-tres: h3.mb-0 Principios de diseño visual
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ede9ec")
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/58.svg', alt='')
          .text-center
            h5 Consistencia
            p.mb-0 Los elementos de la interfaz deben seguir un diseño coherente, como el uso de colores y tipografías similares en todas las pantallas.
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ede9ec")
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/59.svg', alt='')
          .text-center
            h5 Jerarquía visual
            p.mb-0 Los elementos más importantes deben destacarse mediante el tamaño, el color o la ubicación.
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ede9ec")
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/60.svg', alt='')
          .text-center
            h5 Espaciado
            p.mb-0 Un buen uso del espacio en blanco ayuda a que la interfaz sea más legible y atractiva.
      .col-lg-3.mb-lg-0.mb-3
        .row.justify-content-center.mb-4
          .col-10: img(src='@/assets/curso/temas/61.svg', alt='')
        p.mb-0 #[b Ejemplo:] en una aplicación de noticias, los titulares deben ser más grandes y estar en negrita, mientras que las descripciones pueden tener un tamaño de fuente menor y un color más tenue.
    Separador










</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
