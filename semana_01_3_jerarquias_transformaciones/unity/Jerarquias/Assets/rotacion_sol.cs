using UnityEngine;
using UnityEngine.UI;

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
