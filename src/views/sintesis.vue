<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.
    .row.justify-content-center.mb-5
      .col-lg-9
        .row.justify-content-center.mb-5
          .col-lg-5.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/s1.svg', alt='')
          .col-lg-6.mb-lg-0.mb-3
            .p-5.h-100(style="background-color: #E6F0FC")
              p.mb-0 El siguiente diagrama ofrece una visión sintetizada de los principales conceptos y procedimientos desarrollados en el componente “Desarrollo de algoritmos y prototipado de interfaces”. Se encuentra diseñado para facilitar al aprendiz la comprensión de la relación entre los diferentes elementos que componen el proceso integral de desarrollo y diseño.
        p.mb-0 En el centro del diagrama se encuentra el concepto principal: “Desarrollo de algoritmos y prototipado de interfaces”, del cual se derivan las siguientes áreas: análisis y diseño de algoritmos, formulación y representación de algoritmos, estructuras de control, validación y pruebas de algoritmos, y prototipado de interfaces. Cada una de estas áreas se detalla en subtemas que ilustran la estructura y el contenido del componente, desde los conceptos básicos hasta las técnicas de validación y diseño.
      .col-lg-3.d-none.d-lg-block: img(src='@/assets/curso/temas/s2.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/s3.png', alt='')
      .col-lg-7
        .tarjeta.color-primario--borde.p-3.border-2.bg-white
          p.mb-0 El área de análisis y diseño de algoritmos abarca la descomposición de problemas y la definición de estructuras, destacando cómo se conceptualizan las soluciones. La formulación y representación de algoritmos se centra en el uso de pseudocódigo y diagramas de flujo para visualizar la lógica. Las estructuras de control incluyen las secuencias y decisiones condicionales, fundamentales para la ejecución de tareas complejas. Por su parte, la validación y pruebas de algoritmos abordan métodos como las pruebas de escritorio y la optimización de procesos, asegurando que las soluciones sean precisas y eficientes. Finalmente, el prototipado de interfaces se enfoca en el desarrollo de wireframes y mockups, así como en la realización de pruebas de usabilidad para perfeccionar la experiencia del usuario.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #E6FBEE")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/s4.svg', alt='')
            .col-lg-10
              p.mb-0 EEste diagrama se constituye en una herramienta visual para navegar por los conceptos presentados en el componente, ayudando al lector a entender rápidamente la secuencia y la conexión de los procesos descritos. Se invita a los aprendices a explorar el diagrama como un complemento visual al contenido detallado, sirviendo tanto como referencia rápida como un recordatorio estructurado de los elementos en el desarrollo de algoritmos y diseño de interfaces.
      .col-lg-3.col-5: img(src='@/assets/curso/temas/s5.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8: img(src='@/assets/curso/temas/sintesis.svg', alt='')
    .row.justify-content-center.mb-5
        .col-4
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
