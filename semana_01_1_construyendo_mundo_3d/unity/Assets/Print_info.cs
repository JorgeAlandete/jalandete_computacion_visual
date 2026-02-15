using UnityEngine;

public class Print_info : MonoBehaviour
{
    void Start()
    {
        MeshFilter meshFilter = GetComponent<MeshFilter>();

        if (meshFilter == null)
        {
            Debug.Log("No se encontró MeshFilter.");
            return;
        }

        Mesh mesh = meshFilter.mesh;

        // VERTICES
        Vector3[] vertices = mesh.vertices;
        Debug.Log("Cantidad de vértices: " + vertices.Length);

        // TRIANGULOS
        int[] triangles = mesh.triangles;
        Debug.Log("Cantidad de triángulos: " + triangles.Length / 3);

        // SUBMALLAS
        int subMeshCount = mesh.subMeshCount;
        Debug.Log("Cantidad de submallas: " + subMeshCount);      
        
    }

    void Update()
    {
        
    }
}


