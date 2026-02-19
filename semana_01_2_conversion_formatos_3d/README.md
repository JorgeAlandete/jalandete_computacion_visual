# Importando_el_Mundo_Visualización_y_Conversión_de_Formatos_3D

### Nombre del estudiante: Jorge Isaac Alandete Diaz

### Fecha de entrega: 15/Febrero/2026

### Descripción breve:
En la herramienta Google Collab usando python se tomaron tres archivos 3D con extenciones *.stl* *.obj* y *.gbl*  hayando su numero de vertices, caras y normales, para despues transformar cada archivo en otro formato.

### Implementaciones:

#### Python

Por cada uno de los tres archivos 3D:

0. Se el archivo eran varias mayas se convertia a solo una.

1. Se hayo y imprimio el numero de vertices y sus normales.

2. Se hayo y imprimio el numero de caras y sus normales.

3. Se muestra el modelo.

4. Se convertia el archivo a otros dos archivos de formato diferente, es decir, el archivo *.stl* se convirtio a *.obj* y *.gbl*, el archivo *.obj* se convirtio a *.stl* y *.gbl* y el archivo *.gbl* se convirtio a *.obj* y *.stl* .


### Resultados Visuales

#### Python

En la carpeta *media* se encuentran tres imagenes *python_modelo_stl*, *python_modelo_obj* y *python_modelo_glb* correspondientes la impresion de cada uno de los modelos.

En la carpeta *media* se encuentran tres GIF *Conversion_stl*, *Conversion_obj* y *Conversion_glb* correspondientes a la impresion de la conversion de cada uno de los modelos a otros formatos.



### Código relevante

#### Python

        #Conversion del archivo stl a formatos .obj y .glb

        mudkip_stl_exc = trimesh.load("mudkip_cgtrader.stl")

        mudkip_stl_exc.export("Conversion_formatos/mudkip_stl_exc.obj")
        mudkip_stl_exc.export("Conversion_formatos/mudkip_stl_exc.glb")

### Aprendizajes y dificultades
Me familiarice con la libreria de trimesh ademas de entender las diferencias entre los formatos de los modelos 3D, sus propiedades y como gestionan sus mallas.
        
