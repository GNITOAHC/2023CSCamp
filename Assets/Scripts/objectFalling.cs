using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class objectFalling : MonoBehaviour
{
    
    [SerializeField]
    private GameObject points;
    [SerializeField]
    private float left, right, up; //setting the range that the points generate
    [SerializeField]
    private float spawning_period ;
    [SerializeField]
    private float buttom;
    

    // Start is called before the first frame update
    void Start()
    {

    }

    private float timer;

    // Update is called once per frame
    void Update()
    {
        timer += Time.deltaTime;
        if (timer >= spawning_period)
        {
            object_Instantiate(points);
            timer = 0f;
        }
        
    }

    void object_Instantiate(GameObject thing)
    {
        Vector3 position = new Vector3(Random.Range(left, right), up, 0f);
        Quaternion quaternion = Quaternion.Euler(0, 0, Random.Range(0, 360));
        // Debug.Log(quaternion);
        Instantiate(thing, position, quaternion );
    }

    private void FixedUpdate()
    {
        foreach (GameObject spawnedObject in GameObject.FindGameObjectsWithTag("Spawned"))
        {
            if (spawnedObject.transform.position.y < buttom )
            {
                Destroy(spawnedObject);
            }
        }
    }
    
    

}
