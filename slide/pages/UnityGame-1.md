---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080

highlighter: shiki
lineNumbers: false
info: |
  Presentation slides for NCCU 2023 CS Camp.


drawings:
  persist: false
transition: slide-left
title: Unity

hideInToc: true
---

# Unity Coding Tutorial

## Make a 2D game


---
# Game Introduction

### Scene, Concept and Design

<img src="/source/introduceScenes.png"/>

---

# Game Introduction

### UI (User Interface)
### UX (User Experience)

<img src="/source/UI.png"/>

---

# What elements do we need ?

## Object
Player / Platforms / Drops / Manager

## Code
Each object requires specific code

---

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
public Transform[] points; //相同資料型態的變數即可宣告為陣列
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

Put three objects in the array as the reference coordinates of left, center and right.
Make the platform move back and forth between the three.

---

# Player Controller

### Prepare Frame

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    
}

```

The file name must matches the object name.

---

# Player Controller

### Declare Required Elements

```cs
private float horizental; // -1, 0 or 1 (horizontal position)
private float speed = 8f;
private float jumpingPower = 12f;

// Reference the rigid body, ground check and ground layer
[SerializeField] private Rigidbody2D rb;
[SerializeField] private Transform groundCheck;
[SerializeField] private LayerMask groundLayer;

```

**Rigidbody2D** is used to simulate 2D physics behavior. It represents an object with mass, collision and motion behavior

**LayerMask** is used to represent a collection of collision layers.It is used to specify which collision levels the object can collide with.


---

# Platforms Controller

### What does this object do ?

```cs
void Start() {}

// Update is called once per frame
void Update()
{
    horizental = Input.GetAxisRaw("Horizontal"); // 確認左右
        
    if (Input.GetButtonDown("Jump") && IsGrounded()) { // 當接觸地面時 向上跳
        rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
    }

    if (Input.GetButtonUp("Jump") && rb.velocity.y > 0f) { // 按越久跳越高
        rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
    }
}
```

Receive keyboard input commands. Update the **velocity variable of Rigidbody2D** all the time.

---

# Player Controller

### Prepare Required Functions

```cs
private void FixedUpdate()
{
    rb.velocity = new Vector2(horizental * speed, rb.velocity.y); // 左右增加速度
}

private bool IsGrounded() { // 確認是否著地
    return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);
}
```

Adjust the **horizontal velocity** at any time according to the keyboard input.

**Physics2D.OverlapCircle()** is used to detect whether there is a collision object within the circular area at the specified position.

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

---

# Platforms Movement

### Interaction Between objects

```cs
public bool isMoving(){
    if(playerController.getHorizontal() == 0) return false;
    return true;
}
```

Something is missing from Player Controller.

---

# Player Controller

### Missing Functions

```cs
public float getHorizontal()
{
    return horizental;
}
```

---

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
[SerializeField] private GameObject points; // Drops
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

Every once in a while, a drop is generated.

---

# Object Falling

### Prepare Required Functions

```cs
private void object_Instantiate(GameObject thing)
{
    Vector3 position = new Vector3(Random.Range(left, right), up, 0f); // 在相同高度、不同水平位置隨機生成
    Quaternion quaternion = Quaternion.Euler(0, 0, Random.Range(0, 360)); // 隨機旋轉角度
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

Generate object randomly.

Set the tag to Spawned in the inspector pane. Traverse all objects containing tag Spawned and delete objects that reach the bottom.

