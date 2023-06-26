---
layout: center
---

# Unity - 1 Player and Platforms

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

## Create a Project with Unity Hub

<img src="/sources/Unity-1/Unity_hub.png" style="width:500px;" />

Press the `New project` and create a new one.

---
layout: center
---

<img src="/sources/Unity-1/Editor.png" />

---

## Create Platforms

<img src="/sources/Unity-1/Add_Platforms.png" style="width:700px;" />

---

1. Add three components `2D Object/Sprites/Square` and rename to `Platform Left/Middle/Right`.
2. Give those platforms Box Collider 2D
3. Select and create empty parant as `PlatformsManager`

<img src="/sources/Unity-1/Add_Box_Collder_2D.png" style="width:600px" />

---

## Add Player

1. Add player components, `2D Object/Sprites/Square` and rename to `Player`
2. Add BoxCollider2D
3. Add RigidBody2D

<img src="/sources/Unity-1/Add_player.png" style="width:600px" />

---
layout: image-right
image: /sources/Unity-1/Physics_Material_2D.png
---

### BoxCollider2D

Box collider is a cuboid-shaped collision(碰撞) primitive(原始物件).

`Material: No_friction`

#### Generate No_friction

`Create/2D/Physics Material 2D`

---

<img src="/sources/Unity-1/No_friction.png" />

---

Add `No_friction` to `Player`'s `Material` section

<img src="/sources/Unity-1/Player_material.png" style="width:550px;" />

---
layout: two-cols
---

### RigidBody2D

Control of an object's position through physics simulation. Adding RigidBody to an object will put its motion under the control of Unity's physics engine.  

Even without any code, a rigidbody object will be *pulled downward by gravity* and and will *react to collisions* with incoming objects 
if the right Collider component is also present.

`Gravity Scale: 3, Collision Detection: Continuous, Sleeping Mode: Never Sleep, Interpolation: Interpolation, Constraints/Freeze Rotation: Freeze Z`

::right::

<img src="/sources/Unity-1/Player_rigidbody.png" />

---
layout: two-cols
---

## C# Script

Add script to `Scripts` folder and rename to `PlayerController`

::right::

<img src="/sources/Unity-1/PlayerControllerCs.png" style="height:500px" />
