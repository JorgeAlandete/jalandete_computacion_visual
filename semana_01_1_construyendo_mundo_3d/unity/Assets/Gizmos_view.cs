using UnityEngine;

[ExecuteAlways]
public class Gizmos_view : MonoBehaviour
{
    Mesh mesh;
    Vector3[] vertices;
    int[] triangles;

    void Start()
    {
        MeshFilter meshFilter = GetComponent<MeshFilter>();

        if (meshFilter != null)
        {
            mesh = meshFilter.sharedMesh;
            vertices = mesh.vertices;
            triangles = mesh.triangles;
        }
    }

    void OnDrawGizmos()
    {
        if (mesh == null) return;

        Gizmos.color = Color.green;

        //Un ciclo que recorre todos los triangulos trazando las lineas entre sus vertices.

        for (int i = 0; i < triangles.Length; i += 3)
        {
            Vector3 v1 = transform.TransformPoint(vertices[triangles[i]]);
            Vector3 v2 = transform.TransformPoint(vertices[triangles[i + 1]]);
            Vector3 v3 = transform.TransformPoint(vertices[triangles[i + 2]]);

            Gizmos.DrawLine(v1, v2);
            Gizmos.DrawLine(v2, v3);
            Gizmos.DrawLine(v3, v1);
        }
    }
}
