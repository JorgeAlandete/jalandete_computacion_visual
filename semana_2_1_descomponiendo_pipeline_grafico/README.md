# Actividad S2_1 - Descomponiendo el Pipeline Gráfico

### Tema seleccionado: 
Técnicas Modernas de Rendering

### Nombre de los estudiantes: 

1. Jose Arturo Herrera Rivera.
2. Jorge Isaac Alandete Diaz.
3. Juan Pablo Correa Sierra.
4. Juan Jose Alvarez Lozano.

### Fecha de entrega: 
18/Febrero/2026

### Descripción del tema:
En la presentación hacerca del rederisado moderno se hable sobre el normal mapping, shadow mapping, PBR, HDY y tone mapping, dererred shading architecture, framebuffers e infraestructura y la intergracion del flujo completo.

### Explicacion matematica resumida: 
El rendering moderno se basa en un pipeline matemático donde la geometría es transformada mediante matrices en el Vertex Shader, discretizada en fragmentos por rasterización y evaluada en el Fragment Shader usando modelos físicos como Cook-Torrance, que siguen el principio de conservación de energía y microfacetas. Técnicas como Normal Mapping modifican el vector normal mediante la matriz TBN y el modelo de Lambert para simular detalle sin aumentar polígonos. El Deferred Shading separa la geometría de la iluminación almacenando atributos en el G-Buffer, optimizando el cálculo de múltiples luces. Finalmente, el HDR y el Tone Mapping aplican operadores como Reinhard para mapear intensidades lumínicas de alto rango a intervalos visibles, completando la formación física de la imagen.

### Descripción de la implementación: 
En la implementación hecha en el entorno de Unity, se toma un modelo y se hace la comparacion de como la luz rebota en una cara del modelo cuando se le aplica un mapa normal y cuando no se le aplica.


### Resultados visuales: 
Hay dos objetos evidencias, la primera "Objeto_sin_mapa_normal" donde se ve el objeto en unity que no tiene un mapa normal, el segundo "Objeto_con_mapa_normal" es "Objeto_sin_mapa_normal" cuando se le aplica el mapa normal "mapa_de_normales".
