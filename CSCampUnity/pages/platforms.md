# Platforms Movement

### Prepare Frame

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class PlatformsMovement : MonoBehaviour
{
    
}

```

The file name must matches the object name.

---

# Platforms Movement

### Declare Required Elements

```cs
public float speed;
public int startingPoint;
public Transform[] points;
public GameObject player;
[SerializeField] private PlayerController playerController;
private int i = 0;

```

Variables declared as **private** cannot be changed by other objects. When you need to make changes, you must still open the cs file to edit the code.

Variables declared as **public** can be changed arbitrarily and displayed in the Inspector pane of the Unity editor.

**[SerializeField] private** is another special way of declaration.This way of declaring allows variables to retain private characteristics and make them appear in the Inspector pane of the Unity editor.

---

# Platforms Movement

### What does this object do ?

```cs
void Start()
{
    transform.position = points[startingPoint].position;
}

void Update()
{
    if (Vector2.Distance(transform.position, points[i].position) < 0.09f) {
    ++i;
    if (i == points.Length) i = 0;
    }

    transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);
}
```

Set the starting position of the platform.



---

# Platforms Movement

### Interaction Between objects

```cs
public bool isMoving(){
    if(playerController.getHorizontal() == 0) return false;
    return true;
}
```

---

# Platforms Movement

### Interaction Between objects

```cs
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

```

When the player object falls on the platform, make it move with the platform.

Conversely, detach from parent when jumping off the platform.