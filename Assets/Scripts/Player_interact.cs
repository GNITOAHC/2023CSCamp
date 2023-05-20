using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player_interact : MonoBehaviour
{
    [SerializeField]
    private game_manager game_Manager;
    [SerializeField]
    private GameObject player;

    private void reset_player()
    {
        player.transform.position = new Vector3(0, 0, 0);
    }

    void Update()
    {
        if(player.transform.position.y < -5)
        {
            reset_player();
            game_Manager.game_over();
            Debug.Log("Fall");
            
        }

    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        //Debug.Log("Trigger " + other.gameObject.name);
        if (other.tag == "Spawned")
        {
            game_Manager.add_point(5);
            Debug.Log("Add Point");
            Destroy(other.gameObject);
        }
    }
}
