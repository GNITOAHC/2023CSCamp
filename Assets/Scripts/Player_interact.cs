using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player_interact : MonoBehaviour
{
    [SerializeField]
    private score_manager score_Manager;
    [SerializeField]
    private GameObject player;

    void Update()
    {
        if(player.transform.position.y < -5)
        {
            score_Manager.game_over();
        }

    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        Debug.Log("Trigger " + other.gameObject.name);
        if (other.tag == "Spawned")
        {
            score_Manager.add_point(5);
            Debug.Log("Add Point");
            Destroy(other.gameObject);
        }
    }
}
