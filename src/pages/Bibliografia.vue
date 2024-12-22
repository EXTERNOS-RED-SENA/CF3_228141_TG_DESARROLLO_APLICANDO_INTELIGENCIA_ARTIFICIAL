<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
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
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
