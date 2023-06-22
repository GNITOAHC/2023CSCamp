# Object Falling

### Prepare Frame

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectFalling : MonoBehaviour
{
    
}

```

---

# Object Falling

### Declare Required Elements

```cs
[SerializeField] private GameManager gameManager;
[SerializeField] private GameObject points;
[SerializeField] private float left, right, up; // Setting the range that the points generate
[SerializeField] private float spawningPeriod;
[SerializeField] private float buttom;
private float timer;
```

---

# Object Falling

### What does this object do ?

```cs
void Start() {}

// Update is called once per frame
void Update()
{
    if(gameManager.isGameover == false) {
        timer += Time.deltaTime;
        if (timer >= spawningPeriod) {
            object_Instantiate(points);
            timer = 0f;
        }
    }
}
```

---

# Object Falling

### Prepare Required Functions

```cs
private void object_Instantiate(GameObject thing)
{
    Vector3 position = new Vector3(Random.Range(left, right), up, 0f);
    Quaternion quaternion = Quaternion.Euler(0, 0, Random.Range(0, 360));
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
```