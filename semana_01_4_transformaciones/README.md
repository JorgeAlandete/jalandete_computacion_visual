# Jerarquías y Transformaciones: El Árbol del Movimiento

### Nombre del estudiante: Jorge Isaac Alandete Diaz

### Fecha de entrega: 20/Febrero/2026

### Descripción breve:

#### Unity

En la herramienta Unity se creo un cubo, sobre el cual se la aplico un script donde se la aplican tres transformaciones: traslaciónes, rotaciones y escalados que varian segun el tiempo.

#### Python

En la herramienta de python con numpy y matplat se crea al figura de un cubo, sobre este cubo se realizan fracciones de una transformación final para foramr una transformación final.

#### Threejs

En Trheejs se crea un cubo detro de un grupo, rotando el grupo y rotando el cubo sobre su propio eje, mientras se escqala su tamaño siguiendo una funcion senoidal.

#### Prossesing

En prossesing se crearon 3 figuras, dos elipses y un cuadrado, una elipse no tiene transformaciones, mientras la otra elipse y el cuadrado se le aplico traslasion, rotacion y escalado.

### Implementaciones:

#### Unity

Sobre el cubo se aplica un script en C# donde se aplican sobre el cubo las siguientes traslaciones:

1. Una traslacion aleatoria en cuatro direcciones (arriba, abajo, izquierda y derecha) cada 2 segundos.

2. Rotaciones basadas en el tiempo en tres ejes: 

3. Escalado oscilante en función de Mathf.Sin(Time.time) con una velocidad y amplitud.

#### Python

Se crea un cubo usando una matriz en de numpy, y se toman los valores de las transformación final, para despues sobre un ciclo iterar el siguiente proceso

1. Crear una transformacion que es una fraccion de la transformacion fina len el tiempo.

2. Aplicar la fraccion de transformación sobre el cubo.

3. Guardar el resultado como un frame.

Terminada la iteracion se toma los frames de cada fraccion de transformación para formar un gif que la interpolación paso a paso desde la imagen original a la transformación final.

#### Threejs

1. Se crea el cubo dentro del grupo en una posicion diferente al centro del grupo.

2. Se rota el grupo completo, haciendo que el cubo rote respecto al centro del grupo segun el delta (tiempo respecto al anterior frame).

3. Se rota el cubo respecto a su propio eje segun el delta (tiempo respecto al anterior frame).

4. Se escala el cubo siguiendo el comportamiento de una funcion senoidal que depende del reloj de ejecucion.

#### Prossesing

Sobre uno de los Elipses y el cuadrado se aplicaron las transformaciones:

1. Traslasion hacia cordenadas (x,y).

2. Rotacion seguin el framerate.

3. Escalado segun el seno del framerate para el cuadrado y segun el seno de millis() para el elipse.

### Resultados Visuales

#### Unity

En la carpeta *media* se encuentran cuatro archivos, *Unity_trasladar* donde se muestra la traslacion del cubo, *Unity_rotar* donde se muestra la rotación del cubo, *Unity_escalar* donde se muestra el cubo escalando su tamaño y *Unity_transformaciones* donde se ven las tres transformaciones sobre el cubo.

#### Python

En la carpeta *media* se encuentra un archivo de nombre *python_transformacion* un GIF que muestra las transformación hecha al cubo.

#### Threejs

En la carpeta *media* hay dos archivos, el de nombre *Threejs_rotacion* que muestra la rotacion del cubo en una trayectoria circular y alrededor de su propio eje y *Threejs_rota_escala* que muestra que muestra la rotacion del cubo en una trayectoria circular, alrededor de su propio eje y su escalamiento.

#### Prossesing

En la carpeta *media* se encuentra un archivo de nombre *Prossesing* donde se muestra la ventana de ejecuicion de Prossesing, donde se ven las diferentes transformaciones aplicadas a los objetos.

### Código relevante

#### Unity

    //La fución de traslación sobre el cubo

    void MoverAleatorio()
    {
        int eje = Random.Range(0, 2); // 0 = eje X, 1 = eje Y

        int distancia = Random.Range(-2, 2);

        if (eje == 0)
        {
            transform.Translate(Vector3.right * distancia);
        }
        else
        {
            transform.Translate(Vector3.up * distancia);
        }
    }   

#### Python

    # Interpolación lineal
    theta = theta_final * t
    sx = 1 + (sx_final - 1) * t
    sy = 1 + (sy_final - 1) * t
    tx = tx_final * t
    ty = ty_final * t

    # Matrices
    S = np.array([
        [sx, 0, 0],
        [0, sy, 0],
        [0, 0, 1]
    ])

    R = np.array([
        [np.cos(theta), -np.sin(theta), 0],
        [np.sin(theta),  np.cos(theta), 0],
        [0, 0, 1]
    ])

    T = np.array([
        [1, 0, tx],
        [0, 1, ty],
        [0, 0, 1]
    ])

    #Transformaciones
    M = T @ R @ S
    transformed = M @ square

#### Threejs

    //Codigo de escalado del objeto

    const t = state.clock.getElapsedTime()
    const scale = 1 + Math.sin(t) * 0.7
    boxRef.current.scale.set(scale, scale, scale)


### Aprendizajes y dificultades

En este taller entendi mas a profundidas las transformaciones sobre objetos, como estas pueden varias con respecto a otros parametros como el tiempo y la logica matematica detras de estas transformaciones,ademas del aprendizaje de una nueva herramienta como lo es Prosessing.
