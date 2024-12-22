<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
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
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
