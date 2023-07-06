---
layout: center
---

# Unity - 3 PlatformsMovement Script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

## C# Script

1. Generate a script under `Scripts` folder, rename to `PlatformsMovement`
2. Double click the file to edit

<img src="/sources/Unity-3/PlatformsMovement.png" />

---

```csharp
// Import the toolkits
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

Declare the variables we will use later
```csharp
public class PlatformsMovement : MonoBehaviour
{
    public float speed;         // Speed of the platforms movement
    public Transform[] points;  // Starting point and the turning point of the platforms
    private int i = 0;
}
```

---

Initialize the starting point

```csharp
void Start() {
    transform.position = points[0].position; // Start from the starting point
}
```

---

```csharp
void Update() {
    if (Vector2.Distance(transform.position, points[i].position) < 0.09f) {
        ++i;
        if (i == points.Length) i = 0;
    }
    transform.position = Vector2.MoveTowards(transform.position, points[i].position, speed * Time.deltaTime);
}
```

`MoveTowards()`

---
layout: two-cols
---

## Dragging Script and Setting Components

1. Drag the script to one platform
2. Create starting point and turning point
    - Start point: The start point of the platform
    - End point: The end point of the platform

::right::

<img src="/sources/Unity-3/Create_empty.png" style="height:60%" />

---

<img src="/sources/Unity-3/Start_point.png" style="width:450pt" />
<img src="/sources/Unity-3/End_point.png" style="width:450pt" />

---

Drag start point and end point to the array of positions (`public Transform[] points`)

<img src="/sources/Unity-3/PlatformsMovement_setup.png" />

<br />

> Repeat these steps three times for each platforms (Middle, Left, Right)

---

## Stop the Tremble of Player

TODO: Set platform as parent of player when player is standing on the platform

---

### Concept

1. If player collides with platform, set player's parent to platform
2. If player is moving or exit the collide, set player's parent to nothing (i.e. `null`)
3. Make sure the thing that trigger the collision is player instead of something else

---

1. If player collides with platform, set player's parent to platform

```csharp
private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") { // Make sure the object collide is `Player`
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null); // If moving, set parent to `null`
}
```

2. If player is moving or exit the collide, set player's parent to nothing (i.e. `null`)

```csharp
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false;
    return true;
}

if (isMoving()) collision.transform.SetParent(null);
```

---

3. Make sure the thing that trigger the collision is player instead of something else

```csharp{all|8,16}
public bool isMoving() { // Check if the player is moving
    // return playerController.getHorizontal() != 0 ? true : false;
    if(playerController.getHorizontal() == 0) return false; // If speed of player is 0
    return true;
}

private void OnTriggerStay2D(Collider2D collision) {
    if(collision.tag == "Player") {
        collision.transform.SetParent(this.transform);
    }

    if (isMoving()) collision.transform.SetParent(null);
}

private void OnTriggerExit2D(Collider2D collision) {
    if (collision.tag == "Player") collision.transform.SetParent(null);
}
```

---

At `Playcontroller` script, add a public function for checking if player is moving

```csharp
// PlayerController.cs
public float getHorizontal() {
    return horizontal;
}
```

---

### Setup from Unity Editor

1. Add player tag
2. Set player for platform
3. Add Rigidbody 2D for triggering collision

---
layout: two-cols
---

Add player tag for player

<img src="/sources/Unity-3/Player_tag.png" style="height:30%" />

::right::

Set `player` for platform

<img src="/sources/Unity-3/Player_for_platform.png" style="height:40%" />

---

After adding player tag, we need to add a `Rigidbody 2D` for triggering the collision. (After adding, platform will have *two* box collider)

<img src="/sources/Unity-3/Trigger_box_collider.png" style="height:60%" />

> Check the `Is Trigger` box

Finally, do the same thing for the other platforms.
