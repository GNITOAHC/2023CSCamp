using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class objectFalling : MonoBehaviour
{
    [SerializeField]
    private GameObject points;
    [SerializeField]
    private float left, right, up;
    [SerializeField]
    private float droppingTime, destroyY;
    

    // Start is called before the first frame update
    void Start()
    {

    }

    private float timer;

    // Update is called once per frame
    void Update()
    {
        timer += Time.deltaTime;
        if (timer >= droppingTime)
        {
            object_Instantiate(points);
            timer = 0f;
        }
        
    }

    void object_Instantiate(GameObject thing)
    {
        Vector3 position = new Vector3(Random.Range(left, right), up, 0f);
        Vector3 quaternion = new Vector3(0, 0, Random.Range(0, 360));
        Instantiate(thing, position, Quaternion.identity );
    }

    private void FixedUpdate()
    {
        foreach (GameObject spawnedObject in GameObject.FindGameObjectsWithTag("Spawned"))
        {
            if (spawnedObject.transform.position.y < destroyY && spawnedObject.transform.position.x < right && spawnedObject.transform.position.x > left)
            {
                Destroy(spawnedObject);
            }
        }
    }

}
