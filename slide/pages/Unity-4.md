---
layout: center
---

# Unity - 4 ObjectFalling Script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

## ObjectFalling and GameManager

1. Create a prefab `triangle`
2. Create two scripts, `ObjectFalling` and `GameManager`

---

### Create Triangle Prefab

1. Create a triangle

<img src="/sources/Unity-4/Triangle.png" style="height:40%" />

2. Create a folder `Prefabs` under `Assets` and drag `Triangle` from Scene to Prefab folder  
    Delete the `Triangle` from scene

<img src="/sources/Unity-4/Triangle_prefab.png" style="height:30%" />

---

3. Give triangle `RigidBody 2D` and `Box Collider 2D` (Set triangle's `Box Collider 2D`'s `Is Trigger` to true)

<img src="/sources/Unity-4/Is_trigger.png" style="height:70%" />

---

4. Add `Spawned` tag to triangle

<img src="/sources/Unity-4/Add_tag.png" style="height:70%" />

---

Add tag example

<img src="/sources/Unity-4/Spawned.png" />

---

### Create the Two Scripts

Create and double click the two scripts

<img src="/sources/Unity-4/Two_scripts.png" style="height:40%" />

---

## ObjectFalling

Setup our variables

```csharp
// ObjectFalling.cs
[SerializeField] private GameManager gameManager;
[SerializeField] private GameObject triangle;   // The dropping triangle
[SerializeField] private float left, right, up; // Setting the range that the triangles generate
[SerializeField] private float spawningPeriod;  // Spawning period
[SerializeField] private float buttom;          // Buttom of the camera field
private float timer;
```

Create the triangle object instances

```csharp
// ObjectFalling.cs
private void object_Instantiate(GameObject thing) {
    Vector3 position = new Vector3(Random.Range(left, right), up, 0f);
    Quaternion quaternion = Quaternion.Euler(0, 0, Random.Range(0, 360));
    Instantiate(thing, position, quaternion );
}
```

---

If spawned object is out of range, destroy it.

```csharp
// ObjectFalling.cs
private void FixedUpdate() {
    foreach (GameObject spawnedObject in GameObject.FindGameObjectsWithTag("Spawned")) {
        if (spawnedObject.transform.position.y < buttom ) {
            Destroy(spawnedObject);
        }
    }
}
```

---

Setup a boolean to check if game is ended

> `GameManager.cs`

```csharp
// GameManager.cs
public bool isGameover;
```

<br />

> `ObjectFalling.cs`
```csharp
// ObjectFalling.cs
void Update()
{
    if(gameManager.isGameover == false) {   // If game isn't over
        timer += Time.deltaTime;
        if (timer >= spawningPeriod) {      // Generate a new triangle
            object_Instantiate(triangle);
            timer = 0f;
        }
    }
        
}
```

---
layout: two-cols
---

Create two empty, `Object Manager` and `Game Manager`

<img src="/sources/Unity-4/Create_empty.png" style="height:300pt" />

::right::

Drag `ObjectFalling` script to `Object Manager`, drag `GameManager` script to `Game Manager`.

<img src="/sources/Unity-4/Object_manager.png" style="height:190pt" />

---

|Script variables|GameObject|
|-|-|
|Game Manager| Game Manager|
|Triangle|Triangle from `Prefabs` folder|
|Left|-8.2|
|Right|8.2|
|Up|5|
|Spawning Period|0.2|
|Buttom|-5|
