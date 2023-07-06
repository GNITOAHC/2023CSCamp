---
layout: center
---

# Unity - 2 PlayerController script

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

## Playcontroller Script

First, drag `PlayerController` to `Player` component, double click the script to edit

<img src="/sources/Unity-2/PlayerController_script.png" style="height: 300px;" />

---

## C# script

```csharp {1-3 | 8 | 11}
using System.Collections;           // Include toolkit
using System.Collections.Generic;   // Include toolkit
using UnityEngine;                  // Include toolkit

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start() {}

    // Update is called once per frame
    void Update() {}
}
```

`void start()` is execute once when the script was called. <br />
`void Update()` is called every frame. <br />
`void FixedUpdate()` execute once at a fixed interval. (每單位時間)

---

Declare our variables

```csharp
private float horizontal; // -1, 0 or 1 (horizontal position)
private float speed = 8f;
private float jumpingPower = 12f;

// Reference the rigid body, ground check and ground layer
[SerializeField] private Rigidbody2D rb;
[SerializeField] private Transform groundCheck; // Check if player touch the ground
[SerializeField] private LayerMask groundLayer; // Check if component is ground
```

`SerializeField` will force Unity to serialize a private field. (讓使用者在 UI 對 private variables 做控制)

---

```csharp{all|3|5,9|5|14,15}
void Update()
{
    horizontal = Input.GetAxisRaw("Horizontal"); // 確認左右
    
    if (Input.GetButtonDown("Jump") && IsGrounded()) { // 當接觸地面時 向上跳
        rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
    }

    if (Input.GetButtonUp("Jump") && rb.velocity.y > 0f) { // 按越久跳越高
        rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
    }
}

private void FixedUpdate() {
    rb.velocity = new Vector2(horizontal * speed, rb.velocity.y); // 左右增加速度
}
```

---

### Input function

<br />

> Input method and settings are defined in `Edit > Project Settings > Input Manager`

<br />

### Input.GetAxisRaw

`Input.GetAxisRaw("axisName")` will either be -1, 0 or 1.

### Input.GetButtonDown

`Input.GetButtonDown("Button Name")` returns true the first frame the user releases the virtual button.

---

### IsGrounded function

```csharp
private bool IsGrounded() { // 確認是否著地
    return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);
}
```

---

## Setup Playcontroller Script

Open the script information

<img src="/sources/Unity-2/Script_inform.png" />

```txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
```

---

### Add Ground Check

Add GroundCheck components (child component of Player)

<img src="/sources/Unity-2/Create_GroundCheck.png" style="width:500pt" />

---

Move `GroundCheck` a little bit lower than `Player` to check if the `Player` touch the ground

<img src="/sources/Unity-2/Move_GroundCheck.png" style="width:500pt" />

---

### Add Ground Layer

First, add `Ground` layer.
<img src="/sources/Unity-2/Add_layer.png" style="height:150pt" />

Second, choose `Ground` layer for three platforms.
<img src="/sources/Unity-2/Ground_layer.png" style="height:150pt" />

---

### Drag components for script

<br />

<img src="/sources/Unity-2/Player_components.png" style="height:150pt" />

```txt
Rb: Player
Ground Check: GroundCheck
Ground Layer: Ground
```

