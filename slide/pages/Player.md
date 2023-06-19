---
layout: center
---

# Unity Basic

---

## Create a Project with Unity Hub

<img src="/sources/Unity_hub.png" style="width:500px;" />

Press the `New project` and create a new one.

---
layout: center
---

<img src="/sources/Editor.png" />

---

## Create Platforms & Player

1. Add platforms
    - Under scene: `2D Object/Sprites/Square`, gave platform Box Collider 2D
    - Copy and Paste * 3, rename to `Platform Left/Middle/Right`
    - Select and create empty parent as `PlatformsManager`
2. Add friction for player.
    - Folder: `Assets/Materials/`
    - Create path: `Create/2D/Physics Material 2D`
    - Rename to `No_friction`, set to `Friction: 0, Bounciness: 0`
3. Add player components.
    - Under scene: `2D Object/Sprites/Square`
    - Add RigidBody2D: `Gravity Scale: 3, Collision Detection: Continuous, Sleeping Mode: Never Sleep, Interpolation: Interpolation, Constraints/Freeze Rotation: Freeze Z`
    - Add BoxCollider2D: `Material: No_friction`

---

### Box Collider & Rigidbody

<br />

#### Box Collider

Box collider is a cuboid-shaped collision(碰撞) primitive(原始物件).

#### RigidBody

Control of an object's position through physics simulation. Adding RigidBody to an object will put its motion under the control of Unity's physics engine.  

Even without any code, a rigidbody object will be *pulled downward by gravity* and and will *react to collisions* with incoming objects 
if the right Collider component is also present.

---
hideInToc: true
---

## Create Platforms & Player (cont.)

4. Under `/Assets`, create `Scripts/PlayerController.cs`.
    - Create path: `Create/C# Script`
    - Double click to open (Edit)

---

### Unity C# Script (function)

#### Start function

`void Start()` will execute once when the script was called.

#### Update function

`void Update()` is called every frame.

#### FixedUpdate function

`void Update()` execute every frame (每幀) while `void FixedUpdate()` execute once at a fixed interval. (每單位時間)

---

### Unity C# Script (input)

<br />

> Input method and settings are defined in `Edit > Project Settings > Input Manager`

<br />

#### Input.GetAxisRaw

`Input.GetAxisRaw("axisName")` will either be -1, 0 or 1.

#### Input.GetButtonDown

`Input.GetButtonDown("Button Name")` returns true the first frame the user releases the virtual button.

---

### Unity C# Script (physics)

#### RigidBody2D.velocity

`rigidbody2d.velocity` is a Vector2, takes `Vector2(x direction, y direction)`

#### Physics2D.OverlapCircle

This method takes three parameters and return `true` if collide: 

```cs
Physics2D.OverlapCircle(
    point: Centre of the circle, 
    radius: Radius of the circle, 
    layerMask: Layer to check on specific layer
)
```

---
hideInToc: true
---

## Create Platforms & Player (cont.)

5. Setup Player
    - Drag and drop `PlayerController.cs` onto `Player`
    - Drag and drop Player onto his own `rb`
    - Create Empty `GroundCheck` for Player (move a bit lower) and assign to `PlayerController.cs`'s GroundCheck
6. Add `Ground` layer
    - Add `Ground` layer to three platforms
    - Select `Ground` in `PlayerController.cs`'s Ground layer
