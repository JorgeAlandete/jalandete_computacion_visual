# Jerarquías y Transformaciones: El Árbol del Movimiento

### Nombre del estudiante: Jorge Isaac Alandete Diaz

### Fecha de entrega: 19/Febrero/2026

### Descripción breve:

#### Unity

En la herramienta Unity se crearon tres objetos, tres esferas sobre las cuales se les añadio matriales, y se establecio una jerarquia entre las tres esferas, la amarilla de nombre *sol* de mayor jerarquia, seguida de la segunda esfera de nombre *tierra* y la tercera esfera en la jerarquia de nombre *luna*.

#### Threejs

Usando Threejs se crearon tres objetos de forma esferica, de tres colores y tamaños diferentes, aplicando una jerarquia sobre ellos mediante *group*, sobre estas esferas se añadio controles de uso para el manejo de sus roationes y distancia entre las ellas.

### Implementaciones:

#### Unity

Sobre las esferas *sol* y *tierra*:

1. Se crea y configura un slider.

2. Se hace un codigo para controlar la rotacion de la esfera con respecto al slider

Para las tres esferas se crea un sript en c# el cual imprime las posicion, rotacion y escala de cada una de las esferas

#### Threejs

Se crean las esferas y se anidan en una jerarquia mediante la etiqueta *group* con la esfera amarilla de mayor jerarquia, seguida de la esfera verde y la de menor jerarquia la  esfera gris.

Se añadireon controles de uso relacionados a propiedades de las esferas, en especifico controlan la rotacion del sol y la tierra y la distancia entre el sol y la tierra y entre la tierra y la luna.

### Resultados Visuales

#### Unity

En la carpeta *media* se encuentran dos archivos, el primero de nombre *jerarquia* muestra la organizacion jerarquica de las esferas y el segundo archivo *Movimiento* es un GIF que muestra el movimiento de las esferas controlado por los sliders a la vez que muestra en la consola el resultado de la posicion, rotacion y escala de las esferas.

#### Threejs

En la carpeta *media se encuientran dos archivos de evidencia visual, *threejs_jerarquia* muestra la organizacion jerarquica de los tres objetos y *threejs_movimiento muestar las transfomaciones de los objetos (rotaciones y traslaciones) controlados por los controles de uso.

### Código relevante

#### Unity

        //Script usado para el manejo de la rotacion de las esferas.

        public class rotacion_sol : MonoBehaviour
        {
                public Slider slider;        // Referencia al slider
                public Transform objeto;     // Objeto a rotar
                public Vector3 ejeRotacion = Vector3.up; // Eje de rotación (X, Y o Z)

                void Start()
                {
                        slider.onValueChanged.AddListener(Rotar);
                }

                void Rotar(float valor)
                {
                        objeto.rotation = Quaternion.Euler(ejeRotacion * valor);
                }
        }


#### Threejs

        //Codigo controles de uso planeta

          const { planetaDistancia, planetaRotY } = useControls('Planeta', {
                planetaDistancia: { value: 5, min: 2, max: 10 },
                planetaRotY: { value: 0, min: 0, max: Math.PI * 2 }
                })


### Aprendizajes y dificultades

En este taller, pude entender mas a fondo el funcionamiento y la aplicación de las jerarquias en Unity y Threejs, y la forma en como las trasnformaciones sobre una jerarquia padre afectan a todos sus hijos y nietos, ademas del manejo de script que afectan el comportamiento de los objetos en Unity y el UseControl en Threejs.
        
