# Taller Construyendo Mundo 3D

### Nombre del estudiante: Jorge Isaac Alandete Diaz

### Fecha de entrega: 15/Febrero/2026

### Descripción breve:
En unity toma un archivo 3D con extención .OBJ hayando su numero de vertices, triangulos y sub-mayas, y despues trazando sus aristas con Gizmos.

### Implementaciones:

#### Unity

En la herramienta Unity se importo un archivo con extención .OBJ de nombre squirtel_cdtrader cuyo contenido es modelo 3D del Pokemon Squirtel, sobre este modelo se ejecutan dos scripts.
1. *Print_info*: El primer script imprime en consola el numero de vertices, triangulos y sub-mayas del modelo 3D. El resultado se puede ver en el video *Num_of_vertices* en la carpeta *media*
2. *Gizmos_view*: El segundo script activa el modo wireframe (permitiendo desde el modo editor ver las aristas del modelo) usando Gizmos. El resultado se puede ver en el video *Visualizacion_wireframe* en la carpeta *media*

#### Python

En python usando google collab se importaron 3 archivos 3D con extensiones .OBJ, .STL y .GLB, donde en los tres casos se combierte el modelos 3D a una maya (si es una escena) se denotan sus vertices, aristas y caras y por ultimo se muestra el numero de caras, vertices y aristas.

### Resultados Visuales

#### Unity

En la carpeta *media* se encuentran dos videos, correspondientes a las ejecuciones de los dos scripts implementados,
1. *Num_of_vertices* Muestra la ejecución del script al ejecutar el juego en unity, mostrando en consola la informacion del numero de vertices, triangulos y sub-mayas.
2. *Visualizacion_wireframe* Muyestra la eejcución del script permitiendo que desde el modo editor se puedan visualizar las aristas del modelo.

#### Python

### Código relevante

En el script 1

        Mesh mesh = meshFilter.mesh;
        // VERTICES
        Vector3[] vertices = mesh.vertices;

        // TRIANGULOS
        int[] triangles = mesh.triangles;

        // SUBMALLAS
        int subMeshCount = mesh.subMeshCount;

En el script 2

        //Se tienen los tres puntos del vertice
        Vector3 v1 = transform.TransformPoint(vertices[triangles[i]]);
        Vector3 v2 = transform.TransformPoint(vertices[triangles[i + 1]]);
        Vector3 v3 = transform.TransformPoint(vertices[triangles[i + 2]]);

        //Se dibujan las lineas entre los vertices
        Gizmos.DrawLine(v1, v2);
        Gizmos.DrawLine(v2, v3);
        Gizmos.DrawLine(v3, v1);

### Aprendizajes y dificultades
Me familiarice con la herramienta de Unity, empezando a entender como funcionan sus objetos y como se le asignan comportamientos mediante scripts a los objetos.
        
