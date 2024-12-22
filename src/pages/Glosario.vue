<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
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
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
