using UnityEngine;

public class PrintRotCords : MonoBehaviour
{
    public Transform sol;
    public Transform tierra;
    public Transform luna;

    void Update()
    {
        Debug.Log("Posición sol: " + sol.position);
        Debug.Log("Rotación sol: " + sol.eulerAngles);
        Debug.Log("Escala sol: " + sol.localScale);

        Debug.Log("Posición tierra: " + tierra.position);
        Debug.Log("Rotación tierra: " + tierra.eulerAngles);
        Debug.Log("Escala tierra: " + tierra.localScale);

        Debug.Log("Posición luna: " + luna.position);
        Debug.Log("Rotación luna: " + luna.eulerAngles);
        Debug.Log("Escala luna: " + luna.localScale);
    }
}
