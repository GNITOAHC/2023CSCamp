using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class PlatformsMovement : MonoBehaviour
{
    public float speed;
    public int startingPoint;
    public Transform[] points;
    public GameObject player;
    [SerializeField] private PlayerController playerController;

    private int i=0;
    //private bool onfloat = false;
    // Start is called before the first frame update
    void Start()
    {
        transform.position = points[startingPoint].position;
    }

    // Update is called once per frame
    void Update()
    {
        if (Vector2.Distance(transform.position, points[i].position) < 0.09f)
        {
            ++i;
            if (i == points.Length)
            {
                i = 0;
            }
        }
        transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);
        /*
        if (onfloat) {
            Vector2 direction = points[i].position - points[(i+1)%2].position;
            Rigidbody2D rb = player.GetComponent<Rigidbody2D>();
            //player.transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);

            if (direction.y == 0)
            {
                rb.AddForce(direction * speed * 580f * Time.deltaTime);
                //Debug.Log(direction * speed * 4.3f);
            }
        }
        
        */

    }

    public bool isMoving()
    {
        if(playerController.getHorizontal() == 0)
        {
            return false;
        }

        return true;
    }

    private void OnTriggerStay2D(Collider2D collision)
    {
        if(collision.tag == "Player")
        {
            collision.transform.SetParent(this.transform);
            

        }

        if (isMoving())
        {
            collision.transform.SetParent(null);
        }
        //onfloat = true;
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.tag == "Player")
        {
            collision.transform.SetParent(null);

        }
        //onfloat = false;
    }


}
