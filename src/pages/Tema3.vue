<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diseño y validación de algoritmos
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/33.svg', alt='')
      .col-lg-5.mb-lg-0.mb-3
        .p-5(style="background-color: #ded5db")
          p.mb-0 En este apartado se abordan las estrategias y metodologías necesarias para diseñar y validar algoritmos de manera efectiva. Se explora cómo construir algoritmos que sean eficientes y correctos, utilizando estructuras básicas y aplicando técnicas de validación para garantizar que los algoritmos funcionen como se espera.
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/34.png', alt='')
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1	Análisis y diseño de algoritmos
    p.mb-4 El diseño de un algoritmo es uno de los pasos más cruciales en la resolución de problemas. Un buen diseño debe ser eficiente, claro y capaz de manejar diferentes casos, incluyendo entradas inesperadas o excepciones.
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/35.svg', alt='')
      .col-lg-7
        .rounded-3.p-4(style="background-color: #cff8de ")
          h5 Análisis
          p.mb-4 Antes de diseñar un algoritmo, se realiza un análisis exhaustivo para entender todos los aspectos del problema, identificar las restricciones y considerar las posibles excepciones.
            br
            br
            |#[b Ejemplo:] si el problema es crear un algoritmo que busque un número en una lista ordenada, el análisis debería considerar:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 ¿Cuál es el tamaño máximo de la lista?
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 ¿El algoritmo debe devolver la posición del número si lo encuentra o simplemente un mensaje de “no encontrado”?
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 ¿Qué pasa si la lista está vacía?
    .row.justify-content-center.mb-5
      .col-lg-7
        .rounded-3.p-4(style="background-color: #cfe1fa ")
          h5 Diseño
          p.mb-4 Una vez realizado el análisis, se procede a diseñar el algoritmo. Esto puede hacerse usando herramientas como pseudocódigo o diagramas de flujo.
            br
            br
            |#[b Ejemplo:] para el problema de búsqueda en una lista ordenada, podríamos diseñar un algoritmo de búsqueda binaria, que es mucho más eficiente que una búsqueda lineal:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Dividir la lista por la mitad.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Comparar el número buscado con el elemento del medio.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Si el número es igual al elemento del medio, devolver su posición.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Si el número es menor, buscar en la mitad izquierda; si es mayor, buscar en la mitad derecha.
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Repetir el proceso hasta encontrar el número o hasta que no queden más elementos por buscar.
            
      .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/36.svg', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2	Estructuras secuenciales, condicionales y cíclicas
    p.mb-4 Las estructuras básicas de control son fundamentales en cualquier algoritmo, ya que determinan cómo se ejecutan las instrucciones.
    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block: img(src='@/assets/curso/temas/37.png', alt='')
      .col-lg-9
        AccordionRED.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Estructuras secuenciales")
            p.mb-4 Son las más simples y se ejecutan en el orden en que aparecen. Cada instrucción se ejecuta una después de la otra sin interrupciones.
              br
              br
              |#[b Ejemplo:] un algoritmo que imprima los números del 1 al 5:
            .row.justify-content-center.mb-4
              .col-lg-8
                .tarjeta.p-4(style="background-color: #1F3452 ")
                  pre.text-white
                    code print(1)
                      br
                      |print(2)
                      |print(3)
                      |print(4)
                      |print(5)

            p.mb-4 Este es un ejemplo de una estructura secuencial, donde cada línea se ejecuta en orden.
          div(titulo="Estructuras condicionales")
            p.mb-4 Permiten ejecutar diferentes bloques de código en función de si una condición se cumple o no. Las estructuras condicionales básicas incluyen #[em if], #[em else], y #[em elif].
              br
              br
              |#[b Ejemplo:] un algoritmo que verifica si una persona es mayor de edad:
            .row.justify-content-center.mb-4
              .col-lg-8
                .tarjeta.p-4(style="background-color: #1F3452 ")
                  pre.text-white
                    code edad = int(input("Introduce tu edad: "))
                      br
                      |if edad >= 18:
                      |    print("Eres mayor de edad.")
                      |else:
                      |    print("Eres menor de edad.")

            p.mb-4 En este ejemplo, la estructura condicional verifica si edad es mayor o igual a 18. Si la condición es verdadera, se ejecuta el primer bloque; si no, se ejecuta el segundo.
          div(titulo="Estructuras cíclicas")
            p.mb-4 Se utilizan para repetir un bloque de código varias veces. Los bucles más comunes son #[em for] y #[em while].
              br
              br
              |#[b Ejemplo de bucle #[em for]:] un algoritmo que imprima los números del 1 al 10:
            .row.justify-content-center.mb-4
              .col-lg-8
                .tarjeta.p-4(style="background-color: #1F3452 ")
                  pre.text-white
                    code edad = int(input("Introduce tu edad: "))
                      br
                      |if edad >= 18:
                      |    print("Eres mayor de edad.")
                      |else:
                      |    print("Eres menor de edad.")

            p.mb-4 #[b Ejemplo de bucle #[em while]:] un algoritmo que cuente hasta que el usuario introduzca un número mayor que 10:
            .row.justify-content-center.mb-4
              .col-lg-8
                .tarjeta.p-4(style="background-color: #1F3452 ")
                  pre.text-white
                    code numero = 0
                      br
                      |while numero <= 10:
                      |    numero = int(input("Introduce un número mayor que 10: "))
                      |print("¡Gracias!")

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3	Arreglos, funciones y procedimientos
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AccordionRED.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Arreglos (listas o matrices)")
            p.mb-4 Los arreglos son estructuras de datos que almacenan múltiples valores en una sola variable. Los valores se almacenan en posiciones indexadas y pueden ser de cualquier tipo de datos.
              br
              br
              |#[b Ejemplo:] un algoritmo que almacena las calificaciones de los estudiantes y calcula el promedio:
            .row.justify-content-center.mb-4
              .col-lg-8
                .tarjeta.p-4(style="background-color: #1F3452 ")
                  pre.text-white
                    code calificaciones = [85, 90, 78, 92, 88]
                      br
                      |suma = 0
                      |for calificacion in calificaciones:
                      |    suma += calificacion
                      |promedio = suma / len(calificaciones)
                      |print("El promedio es:", promedio)

            p.mb-4 En este ejemplo, calificaciones es un arreglo que almacena las notas, y el bucle for se utiliza para calcular la suma total.
          div(titulo="Funciones")
            p.mb-4 Las funciones son bloques de código que realizan una tarea específica y pueden reutilizarse en todo el programa. Una función puede recibir argumentos y devolver un valor.
              br
              br
              |#[b Ejemplo:] un algoritmo que define una función para calcular el área de un círculo:
            .row.justify-content-center.mb-4
              .col-lg-8
                .tarjeta.p-4(style="background-color: #1F3452 ")
                  pre.text-white
                    code def area_circulo(radio):
                      br
                      |    return 3.14159 * radio * radio

                      |radio = float(input("Introduce el radio del círculo: "))
                      |print("El área es:", area_circulo(radio))


            p.mb-4 En este ejemplo, area_circulo es una función que calcula el área usando el radio proporcionado y devuelve el resultado.
          div(titulo="Procedimientos")
            p.mb-4 A diferencia de las funciones, los procedimientos no devuelven un valor. Se utilizan para ejecutar una secuencia de acciones.
              br
              br
              |#[b Ejemplo:] un algoritmo que imprime un mensaje de bienvenida:
            .row.justify-content-center.mb-4
              .col-lg-8
                .tarjeta.p-4(style="background-color: #1F3452 ")
                  pre.text-white
                    code def imprimir_bienvenida():
                      br
                      |    print("Bienvenido al sistema de gestión de inventarios.")

                      |imprimir_bienvenida()

            p.mb-4 Aquí, imprimir_bienvenida es un procedimiento que simplemente muestra un mensaje.
      .col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/45.png', alt='')
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4	Pruebas de escritorio y validación
    p.mb-4 La validación de un algoritmo se usa para garantizar que funcione correctamente en todas las circunstancias previstas. Las pruebas de escritorio (o simulaciones) son una técnica para verificar el funcionamiento de un algoritmo sin ejecutarlo en una computadora.
    .mn.p-5.bg-slyder
      .tarjeta.bg-white.p-5
        CarouselRED(tipo='b')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h5 Pruebas de escritorio
              p Implican ejecutar el algoritmo paso a paso manualmente y registrar los valores de las variables en cada etapa. Es una forma de detectar errores       lógicos antes de la implementación.
                br
                br
                |#[b Ejemplo:] imagina un algoritmo que determina si un número es par o impar. Puedes hacer una prueba de escritorio con diferentes valores (por ejemplo, 4, 7, 0, -5) y verificar cómo cambia el estado de las variables en cada paso.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/46.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h5 Validación
              p Se realiza para asegurarse de que el algoritmo produce los resultados correctos para todas las entradas posibles. Esto incluye probar casos extremos, como listas vacías, valores negativos, y entradas inesperadas.
                br
                br
                |#[b Ejemplo:] si has diseñado un algoritmo que calcula la raíz cuadrada de un número, debes probarlo con números positivos, cero y números negativos (en este caso, el algoritmo debería manejar el error o advertir al usuario).
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/47.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h5 Documentación de pruebas
              p Es importante documentar las pruebas realizadas y los resultados obtenidos. Esto ayuda a otros a comprender cómo se validó el algoritmo y a replicar las pruebas si es necesario.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/48.png', alt='Texto que describa la imagen')





</template>

<script>
export default {
  name: 'Tema3',
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
