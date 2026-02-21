using UnityEngine;

public class Transformaciones : MonoBehaviour
{
    public float intervalo = 2f;      // Intervalo de tiempo para mover el objeto (2 Segundos)
    private float timer;

    public float velocidad = 2f;
    public float amplitud = 0.5f;
    public float escalaBase = 1f;

    void Update()
    {
        // Trasladar
        timer += Time.deltaTime;

        if (timer >= intervalo)
        {
            MoverAleatorio();
            timer = 0f;
        }

        // Rotar
        transform.Rotate(Vector3.up * 100f * Time.deltaTime);
        transform.Rotate(Vector3.right * 100f * Time.deltaTime);
        transform.Rotate(Vector3.forward * 100f * Time.deltaTime);

        // Escalar
        float escala = escalaBase + Mathf.Sin(Time.time * velocidad) * amplitud;
        transform.localScale = new Vector3(escala, escala, escala);
    }

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

}
