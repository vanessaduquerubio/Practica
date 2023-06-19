import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  arrPosts: Post[]
  constructor() {
    this.arrPosts = [
      {
        titulo: "Cómo cultivar una mentalidad positiva en tiempos difíciles",
        texto: " En momentos de adversidad y desafíos, mantener una mentalidad positiva puede marcar la diferencia entre el éxito y la derrota. Cultivar una mentalidad positiva es una habilidad poderosa que nos permite enfrentar los obstáculos con valentía y optimismo. Aunque no siempre es fácil, existen estrategias que podemos utilizar para fortalecer esta mentalidad y navegar por los momentos difíciles con mayor resiliencia.En primer lugar, es importante reconocer que los pensamientos negativos son normales, pero no debemos permitir que nos controlen. Practicar la autoconciencia es fundamental para identificar y cuestionar esos pensamientos negativos que nos limitan. Una vez que somos conscientes de ellos, podemos reemplazarlos con pensamientos más positivos y realistas. Además, rodearnos de personas positivas y motivadoras puede tener un impacto significativo en nuestra mentalidad. Busquemos compañía de personas que nos inspiren, nos brinden apoyo y nos ayuden a mantener una perspectiva optimista. Del mismo modo, consumir contenido positivo, como libros, podcasts o videos motivadores, puede ayudarnos a alimentar nuestra mente con pensamientos positivos y constructivos. La práctica de la gratitud también es un poderoso impulsor de la mentalidad positiva. Tomemos el tiempo cada día para reflexionar sobre las cosas por las que estamos agradecidos, incluso en medio de las dificultades. La gratitud nos ayuda a enfocarnos en lo positivo y a encontrar fortaleza en las pequeñas cosas de la vida.",
        autor: "Federico Alvarez",
        fecha: 'enero 2022',
        imagen: "URL de la foto del elemento 1",
        categoria: "psicología"
      }, {
        titulo: "El poder de la resiliencia: superando los obstáculos",
        texto: " Enfrentar los obstáculos de la vida puede resultar abrumador, pero la resiliencia nos brinda la capacidad de salir fortalecidos de esas situaciones. En este blog, Juan Pérez explora el poder de la resiliencia y cómo podemos cultivarla en nuestra vida diaria. Descubre las estrategias y herramientas para superar los desafíos, desarrollar una mentalidad resiliente y encontrar el camino hacia el crecimiento personal. Acompaña a Juan en este viaje de empoderamiento y descubre cómo convertir los obstáculos en oportunidades para florecer. ¡Prepárate para transformar tu vida y encontrar el poder dentro de ti!",
        autor: "Juan Pérez",
        fecha: 'marzo 2022',
        imagen: "URL de la foto del elemento 1",
        categoria: "Desarrollo personal"
      }, {
        titulo: "El arte de encontrar equilibrio: cuidando tu salud mental",
        texto: " En nuestra agitada sociedad actual, es fundamental priorizar nuestra salud mental.En este blog, Laura Gómez, experta en bienestar emocional, comparte valiosos consejos para encontrar equilibrio en nuestras vidas.Descubre cómo manejar el estrés, practicar la autorreflexión y establecer límites saludables.Aprende técnicas de relajación y mindfulness que te ayudarán a reducir la ansiedad y mejorar tu bienestar general.Laura también explora la importancia de mantener una rutina equilibrada que incluya tiempo para el autocuidado, el ejercicio físico y las relaciones significativas.Acompaña a Laura en este viaje hacia una vida más equilibrada y descubre cómo puedes cultivar una salud mental sólida y duradera. ¡Tu bienestar es primordial, así que no te pierdas este valioso artículo!",
        autor: "Laura Gómez",
        fecha: 'febrero 2022',
        imagen: "URL de la foto del elemento 1",
        categoria: "Salud y bienestar"
      }, {
        titulo: "Construyendo relaciones auténticas: el poder de la conexión humana",
        texto: " En un mundo cada vez más conectado digitalmente, a menudo nos encontramos anhelando una conexión más profunda y auténtica. En este blog, Ana Rodríguez explora la importancia de construir relaciones genuinas en nuestras vidas. Descubre cómo cultivar la empatía, la comunicación efectiva y el respeto mutuo. Aprende a ser vulnerable y a abrirte a los demás, creando lazos significativos que nutran tu bienestar emocional. Acompaña a Ana en este viaje hacia la construcción de relaciones auténticas y descubre cómo estas conexiones pueden enriquecer tu vida en todas sus facetas.",
        autor: " Ana Rodríguez",
        fecha: ' abril 2022',
        imagen: "URL de la foto del elemento 1",
        categoria: "Relaciones y desarrollo personal"
      }, {
        titulo: "El camino hacia el éxito: persiguiendo tus sueños",
        texto: " En este apasionante blog, Javier López, emprendedor y coach motivacional, te guiará a lo largo del camino hacia el éxito y la realización personal.Descubre cómo identificar y perseguir tus sueños, superar los miedos y obstáculos que se interponen en tu camino, y desarrollar la mentalidad necesaria para triunfar.Aprende estrategias efectivas de planificación, establecimiento de metas y gestión del tiempo para maximizar tu productividad y alcanzar tus objetivos.Javier compartirá inspiradoras historias de emprendedores exitosos y te brindará consejos prácticos para convertir tus ideas en realidades tangibles. ¡Prepárate para embarcarte en un viaje de crecimiento personal y profesional, y descubre cómo convertir tus sueños en logros palpables!",
        autor: "Javier López",
        fecha: ' 2022',
        imagen: "URL de la foto del elemento 1",
        categoria: "Emprendimiento"
      }, {
        titulo: "El poder del pensamiento positivo",
        texto: " El poder del pensamiento positivo es una herramienta invaluable que todos podemos aprovechar para mejorar nuestra calidad de vida. La forma en que pensamos y percibimos el mundo tiene un impacto directo en nuestras emociones, acciones y resultados.Cuando adoptamos una mentalidad positiva, nos enfocamos en las soluciones en lugar de los problemas. Vemos oportunidades en cada desafío y creemos en nuestra capacidad para superarlos. Este enfoque optimista nos impulsa a tomar acciones con confianza y perseverancia.Además, el pensamiento positivo tiene beneficios para nuestra salud física y mental. Estudios han demostrado que las personas optimistas tienen un sistema inmunológico más fuerte, menor riesgo de enfermedades cardíacas y viven más tiempo. También experimentan niveles más bajos de estrés y depresión.Entonces, ¿cómo podemos cultivar el pensamiento positivo? Una forma es practicar la gratitud diaria, enfocándonos en las cosas buenas que tenemos en nuestra vida. También es útil rodearnos de personas positivas y limitar nuestra exposición a la negatividad en los medios de comunicación y las redes sociales.Al adoptar una mentalidad positiva, podemos transformar nuestra forma de vivir. Nos convertimos en creadores de nuestra realidad, capaces de alcanzar metas y superar obstáculos. No subestimemos el poder de nuestros pensamientos, ya que pueden marcar la diferencia en nuestra felicidad y éxito.Cultivar el pensamiento positivo es un viaje constante, pero sus beneficios son inmensurables. Comienza hoy mismo, cambiando tu perspectiva y creyendo en tu capacidad para alcanzar la felicidad y el éxito que deseas.",
        autor: " Ana García",
        fecha: ' enero 2023',
        imagen: "URL de la foto del elemento 1",
        categoria: "Desarrollo Personal"
      }, {
        titulo: "El papel de la educación en la economía moderna",
        texto: "En la economía moderna, la educación desempeña un papel fundamental en el desarrollo y el crecimiento de los países. La adquisición de conocimientos y habilidades por parte de la fuerza laboral tiene un impacto directo en la productividad y la competitividad de una nación.En primer lugar, la educación proporciona a las personas las herramientas necesarias para acceder a mejores oportunidades laborales. A medida que la economía evoluciona hacia una mayor automatización y digitalización, las habilidades técnicas y cognitivas se vuelven cada vez más valiosas. Aquellos individuos que han recibido una educación de calidad tienen más posibilidades de encontrar empleo y de adaptarse a los cambios tecnológicos.Además, la educación fomenta la innovación y el emprendimiento. Los sistemas educativos que promueven el pensamiento crítico y la creatividad cultivan el espíritu empresarial y la capacidad de generar ideas nuevas. Estos emprendedores e innovadores son los impulsores del crecimiento económico, ya que crean empleos, desarrollan nuevos productos y servicios, y contribuyen al avance de la sociedad.La educación también juega un papel importante en la reducción de la desigualdad económica. A través de una educación equitativa y accesible, se pueden romper las barreras que perpetúan la pobreza y la exclusión social. Al brindar a todos los individuos la oportunidad de adquirir conocimientos y habilidades, se crean condiciones para una sociedad más justa y próspera. En conclusión, la educación es un factor clave en el desarrollo económico. No solo proporciona a las personas las herramientas necesarias para adaptarse a un entorno laboral en constante cambio, sino que también impulsa la innovación, el emprendimiento y la reducción de la desigualdad. Invertir en educación es invertir en el futuro de una nación y en el bienestar de sus ciudadanos. ",
        autor: "Juan García",
        fecha: 'febrero 2023',
        imagen: "URL de la foto del elemento 1",
        categoria: "Economia"
      }, {
        titulo: "El poder de la programación en la era digital",
        texto: " La programación se ha convertido en una habilidad esencial en la era digital. Con solo unas pocas líneas de código, se pueden crear aplicaciones, sitios web y soluciones tecnológicas que transforman la manera en que vivimos y trabajamos.La programación no solo es para expertos en informática; es una habilidad que todos podemos aprender. Conocer los fundamentos de la programación nos permite entender cómo funciona la tecnología que nos rodea y nos brinda la capacidad de crear nuestras propias herramientas y soluciones.Además, la programación ofrece innumerables oportunidades laborales. La demanda de programadores sigue en aumento, y muchas empresas buscan talento en este campo. Aprender a programar no solo amplía nuestras posibilidades de empleo, sino que también nos permite participar en la construcción de un futuro digital.La programación también fomenta el pensamiento lógico, la resolución de problemas y la creatividad. Al enfrentarnos a desafíos y encontrar soluciones a través del código, desarrollamos habilidades cognitivas y habilidades para la vida.En resumen, la programación es una habilidad valiosa en la era digital. Nos empodera, nos brinda oportunidades laborales y nos permite ser creadores en el mundo tecnológico. Aprender a programar es una inversión en nuestro futuro y nos abre las puertas a un mundo de posibilidades.",
        autor: " María López",
        fecha: ' 2022',
        imagen: "URL de la foto del elemento 1",
        categoria: ""
      }
    ]
  }

  getAll() {
    return this.arrPosts
  }

  createPosts() {
  }

  getByCategoria() {
  }

}
