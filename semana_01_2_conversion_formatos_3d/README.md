# Importando_el_Mundo_Visualización_y_Conversión_de_Formatos_3D

### Nombre del estudiante: Jorge Isaac Alandete Diaz

### Fecha de entrega: 15/Febrero/2026

### Descripción breve:

#### Python

En la herramienta Google Collab usando python se tomaron tres archivos 3D con extenciones *.stl* *.obj* y *.gbl*  hayando su numero de vertices, caras y normales, para despues transformar cada archivo en otro formato.

#### Threejs

Usando la herramienta Threejs se crea un canvas sobre el que se agregan un modelo 3D pero en diferentes formatos, para ello tome el modelo *diglett_cgtrader_glb* lo converti a formato *.obj* y *.stl*, agregando botones para cambiar la visualizacion de cada formato del modelo ademas del numero de vertices del modelo.

### Implementaciones:

#### Python

Por cada uno de los tres archivos 3D:

0. Se el archivo eran varias mayas se convertia a solo una.

1. Se hayo y imprimio el numero de vertices y sus normales.

2. Se hayo y imprimio el numero de caras y sus normales.

3. Se muestra el modelo.

4. Se convertia el archivo a otros dos archivos de formato diferente, es decir, el archivo *.stl* se convirtio a *.obj* y *.gbl*, el archivo *.obj* se convirtio a *.stl* y *.gbl* y el archivo *.gbl* se convirtio a *.obj* y *.stl* .

#### Threejs

Se tomo el modelo *diglett_cgtrader_glb* y sus respectivas trasnformaciones a formato *.obj* y *.gbl*, a cada uno de ellos:

1. Se cargan a una variable.

2. Se cuentan los vertices del modelo.

Los tres modelos se añaden a un *select* con tres botones (uno para cada modelo) donde se muestra el modelo junto a su informaición relacionada

### Resultados Visuales

#### Python

En la carpeta *media* se encuentran tres imagenes *python_modelo_stl*, *python_modelo_obj* y *python_modelo_glb* correspondientes la impresion de cada uno de los modelos.

En la carpeta *media* se encuentran tres GIF *Conversion_stl*, *Conversion_obj* y *Conversion_glb* correspondientes a la impresion de la conversion de cada uno de los modelos a otros formatos.

#### Threejs

En la carpeta *media* se encuentran una imgaen tipo GIF de nombre *threesjs_models* donde se ve muestran los modelos en sus diferentes formatos junto a la cantidad de vertices.

### Código relevante

#### Python

        #Conversion del archivo stl a formatos .obj y .glb

        mudkip_stl_exc = trimesh.load("mudkip_cgtrader.stl")

        mudkip_stl_exc.export("Conversion_formatos/mudkip_stl_exc.obj")
        mudkip_stl_exc.export("Conversion_formatos/mudkip_stl_exc.glb")

#### Threejs

        #Funcion para contar los vertices en .gbl y .obj

        function countVertices(object) {
                let total = 0
                object.traverse((child) => {
                        if (child.isMesh && child.geometry) {
                                const position = child.geometry.attributes.position
                                if (position) {
                                        total += position.count
                                }
                        }
                })

                return total
                }

### Aprendizajes y dificultades
Me familiarice con la libreria de trimesh y el entorno de Three.js ademas de entender las diferencias entre los formatos de los modelos 3D, sus propiedades y como gestionan sus mallas.
        
