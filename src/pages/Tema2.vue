<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Formulación de algoritmos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.svg', alt='')
      .col-lg-11
        p.mb-0 El proceso de formular algoritmos implica desglosar un problema en una secuencia clara de pasos que pueden ser ejecutados por una computadora. Esta sección explora los conceptos que van desde la definición de algoritmos hasta la representación visual y escrita de estos mediante herramientas como el pseudocódigo y los diagramas de flujo.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1	Concepto y tipos de algoritmos
    .titulo-tres: h3.mb-0 Tipos de algoritmos
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 Es útil escribir una declaración del problema que explique claramente lo que se debe lograr. Esto ayuda a estructurar la solución.
        .p-4(style="background-color: #cff8de").mb-4
          p.mb-0 Un algoritmo es un conjunto finito y ordenado de instrucciones o pasos que resuelven un problema específico. La idea de un algoritmo no es exclusiva de la computación; de hecho, se aplica a muchas áreas de la vida diaria, como una receta de cocina, donde cada paso debe seguirse en un orden específico para obtener un resultado deseado.
        p.mb-0 Los algoritmos son fundamentales en la informática porque permiten automatizar tareas complejas y realizar cálculos precisos y rápidos.
          br
          br
          |#[b Ejemplo:] Piensa en un algoritmo para encontrar la ruta más corta en un mapa. El algoritmo debe evaluar múltiples caminos posibles, calcular las distancias y, finalmente, determinar la ruta óptima. Google Maps, por ejemplo, utiliza complejos algoritmos de búsqueda y optimización para lograr esto.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/17.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #eef4f4 ")
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/18.svg', alt='')
            .col-lg-10
              p.mb-0 #[b Analogía:] imagínate que deseas organizar tus libros en una estantería por orden alfabético. Tu “algoritmo” podría ser revisar cada libro y colocarlo en su posición correcta. Este tipo de pensamiento se traduce en programas que organizan datos de manera eficiente.
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.svg', alt='')
      .col-lg-9
        .titulo-tres: h3.mb-0 Concepto de algoritmo
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Algoritmos secuenciales")
            p.mb-0 Se ejecutan de manera lineal, donde cada paso ocurre uno tras otro sin desviaciones. Son los más simples de entender.
              br
              br
              |#[b Ejemplo:] un programa que imprime los números del 1 al 10, uno a la vez, sigue un algoritmo secuencial.
          div(titulo="Algoritmos condicionales")
            p.mb-0 Incluyen decisiones basadas en condiciones que afectan el flujo de ejecución. Estos algoritmos permiten manejar diferentes situaciones en función de las entradas o el estado del programa.
              br
              |#[b Ejemplo:] un programa de control de clima que enciende el aire acondicionado si la temperatura supera los 25 °C y la calefacción si la temperatura baja de los 15 °C.
          div(titulo="Algoritmos iterativos")
            p.mb-0 Utilizan bucles para repetir ciertas instrucciones hasta que se cumpla una condición específica. Estos algoritmos son eficientes para procesar grandes volúmenes de datos.
              br
              br
              |#[b Ejemplo:] calcular la suma de los primeros 100 números naturales utilizando un bucle for que suma cada número al acumulador.
          div(titulo="Algoritmos recursivos")
            p.mb-0 Se llaman a sí mismos para resolver subproblemas más pequeños, y son útiles para problemas como la búsqueda binaria o la resolución de problemas de fractales.
              br
              br
              |#[b Ejemplo:] la función de Fibonacci, donde cada término es la suma de los dos anteriores, se puede definir recursivamente.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2	Formulación de algoritmos: pseudocódigo y diagramas de flujo
    .titulo-tres: h3.mb-0 Pseudocódigo
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-3 El pseudocódigo es una herramienta utilizada para describir algoritmos de manera simplificada, sin seguir la sintaxis específica de ningún lenguaje de programación. Se escribe de forma similar a un lenguaje humano, lo que lo hace fácil de entender.
          br
          br
          |La principal ventaja del pseudocódigo es que permite a los desarrolladores concentrarse en la lógica del algoritmo sin preocuparse por errores de sintaxis. Esto es especialmente útil durante la fase de planificación y diseño.
        .tarjeta.p-4(style="background-color: #ded5db ")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/20.svg', alt='')
            .col-lg-10
              p.mb-0 #[b Importancia:] el pseudocódigo actúa como un puente entre el diseño del algoritmo y su implementación en código real. Permite que los desarrolladores comuniquen ideas complejas de manera clara y organizada, lo que es útil para colaborar en equipo.
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/21.png', alt='')
    .titulo-tres: h3.mb-0 Diagramas de flujo
    p.mb-5(data-aos='fade-right') Los diagramas de flujo son representaciones gráficas de un algoritmo, donde cada paso se visualiza mediante símbolos específicos:
    .row.justify-content-center.mb-3
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2. 
          span Ejemplo de tabla de entrada y salida
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead.border-0
              tr(style="background-color: #13DE61")
                th Símbolos ANSI/ISO
                th Nombre
                th Descripción
            tbody
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t00.svg', alt='' style='width: 130px')
                td Línea de flujo
                td Indica la secuencia de operaciones dentro de un proceso. Las flechas se utilizan si el flujo no sigue el orden estándar de arriba hacia abajo o de izquierda a derecha.
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t0.svg', alt='' style='width: 130px')
                td Terminal
                td Representa el inicio o el fin de un programa o subproceso. Generalmente, contiene palabras como "Inicio" o "Fin", o frases que señalan el comienzo o la finalización de un proceso, como "presentar consulta" o "recibir producto".
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t1.svg', alt='' style='width: 130px')
                td Proceso o actividad
                td Denota un conjunto de operaciones que alteran el valor, forma o ubicación de los datos.
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t2.svg', alt='' style='width: 130px')
                td Decisión
                td Muestra una operación condicional que decide cuál de los dos caminos tomará el programa. Suele ser una pregunta con respuesta de sí/no o una evaluación de verdadero/falso.
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t3.svg', alt='' style='width: 130px')
                td Entrada
                td Describe el proceso de introducir datos, ya sea mediante la inserción o el ingreso de información.
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t4.svg', alt='' style='width: 130px')
                td Salida
                td Indica el proceso de producir datos o mostrar resultados.
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t5.svg', alt='' style='width: 130px')
                td Anotación (comentario)
                td Proporciona información adicional sobre un paso específico en el programa.
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t6.svg', alt='' style='width: 130px')
                td Proceso predefinido
                td Refleja un proceso ya definido en otra sección del diagrama, referenciado por su nombre.
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t7.svg', alt='' style='width: 130px')
                td Conector de página
                td Pares de conectores etiquetados que sustituyen líneas extensas o complejas dentro de la misma página del diagrama.
              tr
                td.d-flex: img.m-auto(src='@/assets/curso/temas/t8.svg', alt='' style='width: 130px')
                td Conector fuera de página
                td Etiqueta de conector empleada cuando el flujo del diagrama continúa en otra página.
    .row.justify-content-center.mb-5
      .col-lg-9
        .p-4(style="background-color:#e6f0fc ")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.svg', alt='')
            .col-lg-11
              p.mb-0 #[b Importancia:] los diagramas de flujo ayudan a visualizar el flujo de control de un algoritmo. Son herramientas eficaces para detectar errores lógicos o redundancias antes de escribir el código.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span Ejemplo de pseudocódigo y diagrama de flujo
        img(src='@/assets/curso/temas/23.svg', alt='La Figura 1 se denomina «Ejemplo de pseudocódigo y diagrama de flujo» y presenta instrucciones para resolver un problema y un esquema asociado que recibe tres valores y determina cuál de ellos es el mayor y el menor utilizando decisiones condicionales para comparar los valores y muestra el resultado correspondiente en función de las comparaciones realizadas').mb-2
        figcaption Fuente: OIT, 2024.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3	Tipos de datos, constantes y variables
    .titulo-tres: h3.mb-0 Tipos de datos
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-3 Los tipos de datos son fundamentales para entender cómo se almacenan y manipulan los datos en un programa. Cada lenguaje de programación tiene una forma de gestionar diferentes tipos de datos:
        .tarjeta.p-3(style="background-color: #ded5db ").rounded-3
          ul.lista-ul--color
            li.d-flex.tarjeta.p-1.px-2.bg-white.rounded-3
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Enteros #[em.fw-bold (int)]: números sin decimales, utilizados en cálculos precisos.
                br
                |Ejemplo: la edad de una persona se almacena como un número entero.

            li.d-flex.tarjeta.p-1.px-2.bg-white.rounded-3
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Reales o flotantes #[em.fw-bold (float)]: números con decimales, útiles para cálculos que requieren precisión decimal.
                br
                |Ejemplo: el peso de un objeto se almacena como un número real.

            li.d-flex.tarjeta.p-1.px-2.bg-white.rounded-3
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Cadenas #[em.fw-bold (string)]: una secuencia de caracteres utilizada para almacenar texto.
                br
                |Ejemplo: el nombre de un estudiante se almacena como una cadena.

            li.d-flex.tarjeta.p-1.px-2.bg-white.rounded-3
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Booleanos #[em.fw-bold (bool)]: solo pueden tener dos valores: true o false. Son fundamentales en las estructuras de control como las condiciones.
                br
                |Ejemplo: una variable esMayorDeEdad puede ser true si la edad es 18 o más, y false en caso contrario.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/24.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color:#e6fbee ")
          .row.justify-content-center.align-items-center
            .col-lg-1.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.svg', alt='')
            .col-lg-11
              p.mb-0 #[b Importancia de elegir el tipo correcto:] elegir el tipo de datos correcto es crucial para la eficiencia del programa. Por ejemplo, usar un número entero para contar elementos es más eficiente que usar un número flotante.
    .titulo-tres: h3.mb-0 Constantes
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-3 Las constantes son valores fijos que no cambian durante la ejecución del programa. Se utilizan para mejorar la legibilidad y mantener la coherencia en el código.
        .p-4(style="background-color: #cfe1fa ")
          .tarjeta.p-2.mb-2.bg-white.rounded-2
            p.mb-0 #[b Ejemplo:] en un programa que realiza cálculos con el número pi, definir const PI = 3.14159 como una constante evita errores al usar el valor en múltiples lugares.
          .tarjeta.p-2.mb-2.bg-white.rounded-2
            p.mb-0 #[b Ventaja:] usar constantes facilita el mantenimiento del código. Si el valor necesita cambiar, solo se actualiza una vez.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/25.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/26.png', alt='')      
      .col-lg-7
        .titulo-tres: h3.mb-0 Variables
        p.mb-4 Las variables son contenedores que almacenan datos y cuyo valor puede cambiar durante la ejecución del programa. Cada variable tiene un nombre y un tipo de datos
        .p-4(style="background-color: #cff8de ")
          .tarjeta.p-2.mb-2.bg-white.rounded-2
            p.mb-0 Ejemplo: en un sistema de gestión de inventarios, puedes tener una variable #[em stock] (entero) para contar los productos disponibles, y nombreProducto (cadena) para almacenar el nombre del producto.
          .tarjeta.p-2.mb-2.bg-white.rounded-2
            p.mb-0 Declaración y asignación: las variables se deben declarar antes de usarse, especificando su tipo. Por ejemplo, en Python: #[em stock] = 10.
    .titulo-tres: h3.mb-0 Jerarquía de operadores
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #cfe1fa ")
          .tarjeta.p-2.mb-2.bg-white.rounded-2
            p.mb-0 #[b Ejemplo:] en la expresión 3 + 5 * 2, la multiplicación se evalúa primero, dando como resultado 13. Si deseas que la suma se realice primero, puedes usar paréntesis: (3 + 5) * 2 = 16.
          .tarjeta.p-2.mb-2.bg-white.rounded-2
            p.mb-2 Operadores comunes
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Aritméticos:] +, -, *, /, % (módulo)
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Relacionales:] ==, !=, >, <, >=, <=
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 #[b Lógicos:] && (AND), || (OR), ! (NOT)
          .tarjeta.p-2.mb-2.bg-white.rounded-2
            p.mb-0 #[b Uso de paréntesis:] los paréntesis pueden cambiar la jerarquía de evaluación, lo que es útil para garantizar que las operaciones se realicen en el orden deseado.
      .col-lg-4.col-6: img(src='@/assets/curso/temas/27.png', alt='')
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  2.4	Operadores y jerarquía de operadores
    .titulo-tres: h3.mb-0 Operadores aritméticos
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-3 Se utilizan para realizar cálculos matemáticos básicos. Cada operador tiene un nivel de prioridad que determina cuándo se ejecuta.
        .p-3(style="background-color: #ede9ec ")
          p.mb-0 #[b Ejemplo:] en la expresión 8 + 2 * 5, el operador de multiplicación tiene prioridad sobre la suma, por lo que se realiza primero, dando un resultado de 18.
            br
            br
            |#[b Módulo (%):] devuelve el residuo de una división. Es útil para verificar si un número es par o impar.
            br
            br
            |#[b Ejemplo:] 10 % 3 da 1, porque 10 dividido por 3 deja un residuo de 1
      .col-lg-4.col-7: img(src='@/assets/curso/temas/28.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.png', alt='')
      .col-lg-9
        .p-4(style="background-color: #cff8de ")
          .titulo-tres: h3.mb-0 Operadores relacionales
          p.mb-0 Comparan dos valores y devuelven un valor booleano (#[em true] o f#[em alse]).
            br
            br
            |#[b Ejemplo:] 7 > 3 es #[em true], mientras que 5 == 10 es #[em false].
            br
            br
            |#[b Uso en condiciones:] los operadores relacionales son fundamentales para controlar el flujo del programa mediante instrucciones condicionales como #[em if] y #[em while].
    .titulo-tres: h3.mb-0 Operadores lógicos
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-3 Combinan múltiples condiciones y devuelven un valor booleano.
        .p-4(style="background-color: #ede9ec ")
          p.mb-0 #[b Ejemplo:] #[em true] && #[em false] es #[em false] (porque ambos deben ser #[em true]), y #[em true] || #[em false] es #[em true] (porque al menos uno debe ser #[em true]).
            br
            br
            |#[b Ejemplo:] si deseas verificar si un número es positivo y menor que 100, puedes usar #[em if] (número > 0 && número < 100).
      .col-lg-4.col-7: img(src='@/assets/curso/temas/30.svg', alt='')
    .titulo-tres: h3.mb-0 Acumuladores y estructuras básicas
    p.mb-4 Un acumulador es una variable que acumula resultados a lo largo de un bucle.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #dfe9ea ").rounded-3
          p.mb-3 #[b Ejemplo:] supongamos que queremos escribir un programa que calcule la suma de los números pares y la suma de los números impares del 1 al 20, y luego muestre ambos resultados.
          .row.justify-content-center.mb-5
            .col-lg-8
              .tarjeta.p-4(style="background-color: #1F3452 ")
                pre.text-white
                  code # Inicializamos los acumuladores
                    |suma_pares = 0
                    |suma_impares = 0

                    |# Usamos un bucle para recorrer los números del 1 al 20
                    |for numero in range(1, 21):
                    |    if numero % 2 == 0:  # Verificamos si el número es par
                    |        suma_pares += numero  # Sumamos el número par al acumulador de pares
                    |    else:
                    |        suma_impares += numero  # Sumamos el número impar al acumulador de impares
                    |
                    |# Imprimimos los resultados
                    |print("La suma de los números pares del 1 al 20 es:", suma_pares)
                    |print("La suma de los números impares del 1 al 20 es:", suma_impares)


            
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        .rounded-3.p-3(style="background-color: #cfe1fa")
          h5 Explicación del código
          p #[b Inicialización de acumuladores:] se declaran dos variables, suma_pares y suma_impares, y se inicializan en 0. Estas variables actuarán como acumuladores que almacenarán la suma de los números pares y la suma de los números impares, respectivamente.
            br
            br
            |#[b Bucle #[em for]:] se utiliza un bucle #[em for] para iterar a través de los números del 1 al 20. La función range(1, 21) genera una secuencia de números desde 1 hasta 20.
          p.mb-3 #[b Condicional #[em if]:]
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 La expresión numero % 2 == 0 verifica si numero es divisible por 2 sin dejar residuo, lo que significa que es un número par.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Si el número es par, se suma al acumulador suma_pares usando suma_pares += numero.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Si el número no es par (es decir, es impar), se suma al acumulador suma_impares usando suma_impares += numero.
          p.mb-3 #[b Salida del programa: ] finalmente, se imprimen los resultados de ambas sumas:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 “La suma de los números pares del 1 al 20 es:” seguido por el valor de suma_pares.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 “La suma de los números impares del 1 al 20 es:” seguido por el valor de suma_impares.
      .col-lg-5
        .rounded-3.p-3.mb-4(style="background-color: #cff8de")
          h5 Resultado del código
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 La suma de los números pares del 1 al 20 es: 110
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 La suma de los números impares del 1 al 20 es: 100
          h5 Explicación del resultado
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 El programa ha recorrido todos los números del 1 al 20, separando los pares y los impares. Los números pares (2, 4, 6, …, 20) se han sumado en suma_pares, y los números impares (1, 3, 5, …, 19) se han sumado en suma_impares.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Esto demuestra cómo un acumulador puede usarse eficazmente en un bucle para realizar cálculos progresivos.
        img(src='@/assets/curso/temas/32.png', alt='')  






</template>

<script>
export default {
  name: 'Tema2',
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
