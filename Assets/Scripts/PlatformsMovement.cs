using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class PlatformsMovement : MonoBehaviour
{
    public float speed;
    public Transform[] points;
    public GameObject player;
    [SerializeField] private PlayerController playerController;
    private int i = 0;

    // Start is called before the first frame update
    void Start()
    {
        transform.position = points[0].position;
    }

    // Update is called once per frame
    void Update()
    {
        if (Vector2.Distance(transform.position, points[i].position) < 0.09f) {
            ++i;
            if (i == points.Length) i = 0;
        }
        transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);
    }

    public bool isMoving() { // Check if the player is moving
        // return playerController.getHorizontal() != 0 ? true : false;
        if(playerController.getHorizontal() == 0) return false;
        return true;
    }

    private void OnTriggerStay2D(Collider2D collision)
    {
        if(collision.tag == "Player") {
            collision.transform.SetParent(this.transform);
        }

        if (isMoving()) collision.transform.SetParent(null);
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.tag == "Player") collision.transform.SetParent(null);
    }
}
