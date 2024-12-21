<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Solución de problemas
    p.mb-5(data-aos='fade-right') El pensamiento algorítmico y las técnicas de resolución estructurada de problemas se requieren para poder enfrentar desafíos en programación. A continuación, se explica cómo se abordan estos procesos, desde el análisis inicial hasta la formulación de soluciones eficientes y bien organizadas.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1	Pensamiento algorítmico y programación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/6.png', alt='')
      .col-lg-8
        .p-4(style="background-color: #DED5DB ")
          p.mb-0 El pensamiento algorítmico es una habilidad fundamental en programación que permite a los individuos abordar y resolver problemas de manera lógica y sistemática. Se trata de estructurar una serie de pasos o instrucciones que una computadora pueda seguir para ejecutar una tarea. Este enfoque implica descomponer el problema en componentes más pequeños y manejables, identificar patrones, y definir reglas claras y precisas para la solución.
    .titulo-tres: h3.mb-0 Pensamiento algorítmico
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-3 Consiste en analizar un problema complejo y dividirlo en partes sencillas que se puedan resolver secuencialmente.
        .p-3(style="background-color: #E6F0FC")
          p.mb-3 #[b Ejemplo:] imagina que estás escribiendo un programa para encontrar la suma de los primeros 100 números naturales. El pensamiento algorítmico te llevaría a crear un enfoque paso a paso:
          .ms-2
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Paso 1:] inicializa una variable para almacenar la suma (por ejemplo, suma = 0).
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Paso 2:] recorre los números del 1 al 100 utilizando un bucle.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Paso 3:] en cada iteración, añade el número actual a suma.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Paso 4:] al finalizar el bucle, suma tendrá el valor de la suma total.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/7.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/8.png', alt='')
      .col-lg-8 
        .titulo-tres: h3.mb-0 Aplicación en la programación
        p.mb-3 El pensamiento algorítmico también implica considerar la eficiencia de los algoritmos. Por ejemplo, en lugar de sumar manualmente 1 + 2 + 3 + … + 100, podrías usar una fórmula matemática directa:
          
          <math xmlns="http://www.w3.org/1998/Math/MathML" class='mx-2'><mi>s</mi><mi>u</mi><mi>m</mi><mi>a</mi><mo>&#xA0;</mo><mo>=</mo><mfrac><mrow><mn>100</mn><mo>&#xd7;</mo><mn>101</mn></mrow><mn>2</mn></mfrac></math>
          | que es mucho más eficiente.
        .p-3(style="background-color: #E6F0FC")
          p.mb-3 #[b Ejemplo:] diseñar un programa que verifique si un número es primo. El pensamiento algorítmico te guiará a:
          .ms-2
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Paso 1:] definir que un número primo solo se puede dividir exactamente por 1 y por sí mismo.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Paso 2:]  iterar desde 2 hasta la raíz cuadrada del número para verificar si tiene divisores.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Paso 3:] si se encuentra un divisor, el número no es primo; de lo contrario, es primo.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2	Análisis y formulación del problema
    p.mb-5(data-aos='fade-right') Antes de diseñar una solución, se necesita comprender completamente el problema y definirlo claramente. Esto implica analizar los datos de entrada y salida, identificar restricciones y pensar en las posibles excepciones o casos extremos.
    .titulo-tres: h3.mb-0 Importancia del análisis
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-3 Un buen análisis asegura que no se pierdan detalles importantes. Si el problema no se entiende correctamente desde el principio, es probable que la solución sea ineficaz o incompleta.
        .p-3(style="background-color: #E6F0FC")
          p.mb-3 #[b Ejemplo:] si el problema es “escribir un programa para convertir temperaturas de Celsius a Fahrenheit”, el análisis incluiría:
          .ms-2
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Identificar la entrada:] una temperatura en grados Celsius.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Definir la salida:] la temperatura convertida en grados Fahrenheit.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Considerar restricciones:] ¿qué sucede si la temperatura de entrada no es un número? ¿Cómo debe manejarse un valor fuera del rango esperado?
      .col-lg-5.col-7: img(src='@/assets/curso/temas/11.png', alt='')
    .tarjeta.p-5.mb-5(style="background-color: #DFE9EA")
      .row.justify-content-center.align-items-center
        .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/10.png', alt='')
        .col-lg-7
          .titulo-tres: h3.mb-0 Definición clara del problema
          p.mb-3 Es útil escribir una declaración del problema que explique claramente lo que se debe lograr. Esto ayuda a estructurar la solución.
          .tarjeta.bg-white.p-4
            p.mb-0 #[b Ejemplo:] si necesitas diseñar un programa que calcule la media de un conjunto de números, debes analizar cómo se gestionarán casos como una lista vacía, números negativos o entradas no válidas.
    .titulo-tres: h3.mb-0 Uso de diagramas y esquemas
    p.mb-5(data-aos='fade-right') Herramientas como diagramas de flujo o tablas de entrada y salida ayudan a visualizar el problema y las posibles soluciones.
      br
      | #[b Ejemplo:] 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span Ejemplo de tabla de entrada y salida
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead.border-0
              tr(style="background-color: #13DE61")
                th Entrada
                th Proceso
                th Salida
            tbody
              tr
                td Largo = 5 metros
                  br
                  |Ancho = 3 metros

                td Área del rectángulo:
                  br
                  |Multiplicar el largo por el ancho
                  br
                  |Área = 5 m × 3 m

                td 15 m²
              tr
                td Largo = 8 metros#[br]Ancho = 2 metros

                td Área del rectángulo:#[br]Multiplicar el largo por el ancho#[br]Área = 8 m × 2 m

                td 16 m²
              tr
                td Largo = 4.5 metros#[br]Ancho = 3.2 metros

                td Área del rectángulo:#[br]Multiplicar el largo por el ancho#[br]Área = 4.5 m × 3.2 m

                td 14.4 m²
              tr
                td Largo = 10 metros#[br]Ancho = 6 metros

                td Área del rectángulo:#[br]Multiplicar el largo por el ancho#[br]Área = 10 m × 6 m

                td 60 m²
              tr
                td Largo = 7.5 metros#[br]Ancho = 4 metros

                td Área del rectángulo:#[br]Multiplicar el largo por el ancho#[br]Área = 7.5 m × 4 m

                td 30 m²
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3	Fases de la resolución de problemas
    p.mb-5(data-aos='fade-right') La resolución de problemas en programación se puede dividir en fases bien definidas que garantizan un enfoque estructurado y metódico.
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.png', alt='')
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Análisis")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 En esta fase, se descompone el problema y se determinan los requisitos. Se evalúan las condiciones y se consideran todos los casos posibles.

              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Ejemplo:] si el problema es escribir un programa que clasifique una lista de números en orden ascendente, el análisis incluiría comprender el tipo de datos que se ordenarán y si hay restricciones en el tamaño de la lista.
          div(titulo="Diseño")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Se crea un plan o un algoritmo que detalle cómo se resolverá el problema. Esto puede implicar escribir pseudocódigo o usar diagramas de flujo.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Ejemplo:] para el problema de la clasificación, puedes diseñar un algoritmo simple como el método de burbuja: “Compara cada par de elementos adyacentes y cámbialos si están en el orden incorrecto”.
          div(titulo="Desarrollo e implementación")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 En esta etapa, se traduce el algoritmo en un lenguaje de programación. Se escribe y ejecuta el código para verificar si funciona según lo esperado.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Ejemplo:] al implementar el método de burbuja, se usaría un bucle anidado en un lenguaje de programación como Python para realizar la comparación y el intercambio de elementos.
          div(titulo="Evaluación")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Se prueba el programa con diferentes datos de entrada para asegurarse de que funciona correctamente y se optimiza si es necesario.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Ejemplo:] si el programa de clasificación funciona pero es lento con listas grandes, podrías considerar algoritmos más eficientes como el método de ordenación rápida (#[em quick sort]).
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Técnicas de descomposición y abstracción
    p.mb-4 Estas técnicas sirven para simplificar problemas complejos y enfocarse en los aspectos más importantes.
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Descomposición")
        .row
          .col-lg-6.mb-4.mb-lg-0: img(src='@/assets/curso/temas/13.png', alt='')
          .col-lg-6
            h4 Descomposición
            p Dividir un problema grande en partes más pequeñas hace que sea más fácil de resolver. Cada subproblema se aborda por separado y luego se combinan las soluciones.
              br
              br
              |#[b Ejemplo:] supongamos que necesitas crear un sistema de gestión de una biblioteca. Puedes descomponer el problema en tareas más simples como: “1) agregar libros, 2) eliminar libros, 3) buscar libros, 4) mostrar la lista de libros”.
              br
              br
              |En lugar de trabajar en todo el sistema a la vez, cada subproblema se puede resolver de manera independiente, lo que facilita la implementación y el mantenimiento.
      .py-4.py-md-5(titulo="Abstracción")
        .row
          .col-lg-6.mb-4.mb-lg-0: img(src='@/assets/curso/temas/14.png', alt='')
          .col-lg-6
            h4 Abstracción
            p Se refiere a ocultar detalles complejos y enfocarse solo en los aspectos relevantes del problema. Permite a los programadores pensar en un nivel más alto sin preocuparse por los detalles de implementación.
              br
              br
              |#[b Ejemplo:] al diseñar un juego de video, la abstracción te permite crear funciones como “mover al personaje hacia arriba” sin preocuparte en ese momento por cómo se traduce ese movimiento en coordenadas de la pantalla.
      .py-4.py-md-5(titulo="Ejercicios de descomposición y abstracción")
        .row
          .col-lg-6.mb-4.mb-lg-0: img(src='@/assets/curso/temas/15.png', alt='')
          .col-lg-6
            h4 Ejercicios de descomposición y abstracción
            p #[b Ejemplo 1:] un programa que cocine una receta. La descomposición podría incluir tareas como “1) preparar ingredientes, 2) cocinar, 3) servir”. La abstracción se enfocaría en el proceso general de cocinar sin entrar en detalles como la temperatura exacta de cada ingrediente.
              br
              br
              | #[b Ejemplo 2:] crear un sistema de gestión de estudiantes en una escuela. La descomposición separaría tareas como “registrar estudiantes”, “asignar cursos” y “calcular promedios”. La abstracción permitiría crear funciones generales sin preocuparse inicialmente por el almacenamiento de datos.
    
            










</template>

<script>
import TabsC from '../bootstrap/TabsC.vue'
export default {
  name: 'Tema1',
  components: {
    TabsC,
  },
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
