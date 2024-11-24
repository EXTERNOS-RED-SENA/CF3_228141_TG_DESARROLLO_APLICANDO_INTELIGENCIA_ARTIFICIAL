<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.png', alt='')
          .col-lg-7
            .p-4(style="background-color: #E6F0FC ")
              p.mb-0 El desarrollo de software y la creación de interfaces interactivas han adquirido gran importancia en los últimos años. A medida que las aplicaciones y plataformas se vuelven más complejas, los diseñadores y desarrolladores han tenido que evolucionar sus metodologías y herramientas para satisfacer las crecientes expectativas de los usuarios en términos de eficiencia, usabilidad y experiencia. En este marco, se ha establecido un componente integral que abarca desde la formulación y estructuración lógica de algoritmos hasta el diseño visual y funcional de interfaces que optimizan la interacción entre el usuario y la tecnología.
        p.mb-0 Uno de los aspectos prioritarios en este proceso es la solución efectiva de problemas a través de algoritmos bien diseñados. Esto abarca el pensamiento algorítmico y la habilidad de descomponer problemas complejos en pasos secuenciales, aplicando estructuras básicas de control y validando el funcionamiento mediante metodologías probadas. Estos elementos garantizan que las soluciones no solo sean correctas, sino también optimizadas y robustas, preparadas para manejar diversos escenarios y entradas.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/2.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3.png', alt='')
      .col-lg-7
        .tarjeta.border-2.p-2.color-primario--borde.bg-white.mb-3
          p.mb-0 El siguiente aspecto a tener en cuenta, es el proceso de formulación y representación de algoritmos. Aquí se utilizan herramientas como el pseudocódigo y los diagramas de flujo para conceptualizar las soluciones antes de escribir el código. Esta sección se enfoca en la organización y claridad del diseño lógico, asegurando que los algoritmos sean fácilmente comprensibles y modificables, algo esencial en el desarrollo ágil y colaborativo.
        p.mb-0 La tercera sección se adentra en el diseño y validación de algoritmos, donde se exploran métodos para evaluar la eficiencia y la precisión de las soluciones. La validación se realiza mediante pruebas de escritorio y simulaciones, lo que permite identificar y corregir errores antes de la implementación. Este enfoque ayuda a minimizar los fallos en la producción y también refuerza la confianza en la fiabilidad del software desarrollado.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #EDE9EC")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.svg', alt='')
            .col-lg-10
              p.mb-0 Finalmente, el componente aborda el prototipado de interfaces de usuario, un área que combina diseño gráfico, experiencia de usuario (UX) y pruebas de usabilidad. Aquí, se detallan los principios y herramientas necesarias para crear prototipos interactivos que respondan a las necesidades de los usuarios, priorizando la accesibilidad y la estética sin comprometer el rendimiento técnico. La integración de estos elementos permite que las aplicaciones sean tanto funcionales como atractivas, ofreciendo una experiencia satisfactoria y fluida.
      .col-lg-2.col-5: img(src='@/assets/curso/temas/5.svg', alt='')
    p.mb-5(data-aos='fade-right') ¡Bienvenido a este recorrido por el mundo de los algoritmos y el diseño de interfaces, donde aprenderás a crear experiencias intuitivas y optimizadas para el usuario!
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. 









</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
