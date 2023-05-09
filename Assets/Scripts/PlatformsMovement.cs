using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlatformsMovement : MonoBehaviour
{
    public float speed;
    public int startingPoint;
    public Transform[] points;
    public GameObject player;

    private int i=0;
    private bool onfloat = false;
    // Start is called before the first frame update
    void Start()
    {
        transform.position = points[startingPoint].position;
    }

    // Update is called once per frame
    void Update()
    {
        if (Vector2.Distance(transform.position, points[i].position) < 0.09f) {
            ++i;
            if (i == points.Length)
            {
                i = 0;
            }
        }
        transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);

        if (onfloat) {
            //Vector2 direction = new Vector2(2.0f, 0.0f);
            //Rigidbody2D rb = player.GetComponent<Rigidbody2D>();
            //rb.AddForce(direction * 2.0f);
            //Debug.Log("original" + direction * 2.0f);

            Vector2 direction = points[i].position - points[(i+1)%2].position;
            Rigidbody2D rb = player.GetComponent<Rigidbody2D>();
            //player.transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);

            if (direction.y == 0)
            {
                rb.AddForce(direction * speed * 4.3f);
                Debug.Log(direction * speed * 4.3f);
            }
            
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        //collision.transform.SetParent(transform);
        onfloat = true;
    }

    private void OnCollisionExit2D(Collision2D collision)
    {
        //collision.transform.SetParent(null);
        onfloat = false;
    }
}
