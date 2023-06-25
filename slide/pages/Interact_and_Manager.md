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
# Gaming Stuff

## Player Interact 


---

# What do we need

1. Get the points
   - Destroy the Falling Object
   - Add points
2. GameOver Conditions
   - When does game ends
   - Start or Restart Game?
3. User Interface (UI)
   - Scoreboard
   - GameOver Page


---

## Destroy the Falling Object

#### OnTriggerStay(Collider other)

- Activate when other gameObject go through this object
- ```Collider2D other``` is a special variables for Trigger
  * v.s. ```Collider2D collision``` is for Collider
- Other.tag == "Spawned"
- To Destroy the specific gameObject that triggered
  
```csharp {all|3,4,5,11|6,7,8,9,10}
public class Player_interact : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D other)
    {
        Debug.Log("Trigger " + other.gameObject.name);
        if (other.tag == "Spawned")
        {
            Debug.Log("Add Point");
            Destroy(other.gameObject);
        }
    }
}
```

---

## Why does Trigger Not work (Review)

* Both of the GameObject have "Collider" component (Box Collider 2D)
* Either of the GameObject need "Rigidbody 2D"
* The object with trigger will go through other GameObject
* Adding the "Spawned" Tag

<img src="src/player_collider_rigidbody.png"/>



---

## Adding points

We can make a add points function first.
  
```csharp
private int score = 0;

public void add_point(int points){
    score += points;

}
```

But... where should I put this code?  
It seems there is a better place than putting this function in  `player_interact.cs`  
`GameManager` Seems to be a good choice.  

--- 

# What does Game Manager do?

* [x] Control the Game
* [x] Record the global informaion
* [ ] Switch to different stage
### What do we need to prepare for the GameManager
1. Create a GameObject called "GameManager"
2. Create a csharp component in "GameManager" name `GameManager.cs`

---  

## GameManager: Add points finish

- when game is not over, the add_point function works

```csharp {all|1,2,4,5,6,7,10,12,13|3,8,9,11|all}
public class GameManager : MonoBehaviour
{
    private bool isGameover = false;
    private int score;

    public void add_point(int points)
    {
        if (!isGameover)
        {
            score += points;
        }
    }
}

```

---

## We can add points now

- We can use the add points in GameManager now
```csharp {all|3,10}
public class Player_interact : MonoBehaviour
{
    [SerializeField] private GameManager Game_Manager;

    private void OnTriggerEnter2D(Collider2D other)
    {
        //Debug.Log("Trigger " + other.gameObject.name);
        if (other.tag == "Spawned")
        {
            Game_Manager.add_point(5);
            Debug.Log("Add Point");
            Destroy(other.gameObject);
        }
    }
}
```

---


## GameManager: Game Condition

when does the game ends

```csharp {none|all}
public class GameManager : MonoBehaviour
{
    public void game_over()
    {
        Debug.Log("Game Over");
        isGameover = true;
    }
}
```
how about the game start 

```csharp {none|all}
public class GameManager : MonoBehaviour
{
    private void start_game()
    {
        isGameover = false;
        score = 0;
    }
}
```

---

## Use the game_over() and start_game()

There is a part we can put in the GameManager, Try it if you can

```csharp {all|none|4,5,6,7,8,9,15}
public class Player_interact : MonoBehaviour
{
    [SerializeField] private GameManager Game_Manager;
    [SerializeField] private GameObject player;

    private void reset_player()
    {
        player.transform.position = new Vector3(0, 0, 0);
    }

    void Update()
    {
        if(player.transform.position.y < -5)
        {
            reset_player();
            Game_Manager.game_over();
            Debug.Log("Fall");
            
        }

    }
}

```

### Is it too simple? 

---

## Add the scoreboard?

<img src="src/score_bar.png "/>

---

## Or Add the GameOver UI

<img src="src/game_over_image.png "/>

---

## How to control the UI?

- First, add the two library in the GameManager
- Second, declare the UI variables

```csharp {all|4,5|7,8,9,10,11,12,13,14,15,16}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class GameManager : MonoBehaviour
{
    private string score_text = "Score:";
    [SerializeField] private TMP_Text scoreboard_UI;

    private string final_score_text = "Final Score: ";
    [SerializeField] private GameObject Gameover_Page;
    [SerializeField] private TMP_Text final_score;
    [SerializeField] private Button Restart_button;
}

```

---

## Display and hide the UI

- Use SetActive() to show or hide object
- Update the scoreboard with Update() function
- Hide the GameOver Page when game start

```csharp {all|13|4,5,6,7,9,10,11,12,13|15,16,17,18}
public class GameManager : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        start_game();
    }

    private void start_game()
    {
        isGameover = false;
        score = 0;
        Gameover_Page.SetActive(false);
    }

    void Update()
    {
        scoreboard_UI.text = score_text + score;
    }
}
    
```

--- 

## Show the final score UI and restart buttom
- show the GameOver Page (Remember the panel should be parent object)
- setting buttom with `buttom_name.onClick.AddListener( function )`

```csharp {all|1,2,3,4,5,6,7,8,9,10,11,19|9,13,14,15,16,17,18}
public class GameManager : MonoBehaviour
{
    public void game_over()
    {
        Debug.Log("Game Over");
        isGameover = true;
        final_score.text = final_score_text + score;
        Gameover_Page.SetActive(true);
        Restart_button.onClick.AddListener(start_game);

    }

    private void start_game()
    {
        isGameover = false;
        score = 0;
        Gameover_Page.SetActive(false);
    }
}
```

---


## To make it better
- Stop the game when the Game is Over
- Declare the function we will use
```csharp
public class GameManager : MonoBehaviour
{
    [SerializeField] private PlatformsMovement LeftMovement;
    [SerializeField] private PlatformsMovement RightMovement;
    [SerializeField] private PlatformsMovement MiddleMovement;

    [SerializeField] private objectFalling objectFalling;
}
```

---

## Assigned the variables in Unity

- Drag the GameObject or file to the slot

<img src="src/game_manager.png">

---


## Stop the game when the Game is Over
#### Use enabled to turn off the function in game

```csharp {none|7,8,9,10}
    public void game_over() {
        Debug.Log("Game Over");
        isGameover = true;
        final_score.text = final_score_text + score;
        Gameover_Page.SetActive(true);
        Restart_button.onClick.AddListener(start_game);
        objectFalling.enabled = false;
        LeftMovement.enabled = false;
        MiddleMovement.enabled = false;
        RightMovement.enabled = false;
    }
```
Turn the function on when the game start

```csharp {none|5,6,7,8}
    private void start_game() {
        isGameover = false;
        score = 0;
        Gameover_Page.SetActive(false);
        objectFalling.enabled = true;
        LeftMovement.enabled = true;
        MiddleMovement.enabled = true;
        RightMovement.enabled = true;
    }
```

---

## Complete code of PlayerInteract

```csharp
public class Player_interact : MonoBehaviour {
    [SerializeField] private GameManager Game_Manager;
    [SerializeField] private GameObject player;

    private void reset_player() {
        player.transform.position = new Vector3(0, 0, 0);
    }

    void Update() {
        if(player.transform.position.y < -5) {
            reset_player();
            Game_Manager.game_over();
            Debug.Log("Fall");
        }
    }

    private void OnTriggerEnter2D(Collider2D other) {
        //Debug.Log("Trigger " + other.gameObject.name);
        if (other.tag == "Spawned") {
            Game_Manager.add_point(5);
            Debug.Log("Add Point");
            Destroy(other.gameObject);
        }
    }
}

```

---

## Complete Code of GameManager
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class GameManager : MonoBehaviour {
    //記分板UI
    private int score;
    private string score_text = "Score:";
    [SerializeField] private TMP_Text scoreboard_UI;

    //遊戲結束畫面的UI
    public bool isGameover;
    private string final_score_text = "Final Score: ";
    [SerializeField] private GameObject Gameover_Page;
    [SerializeField] private TMP_Text final_score;
    [SerializeField] private Button Restart_button;

    //需要被暫停的程式
    [SerializeField] private PlatformsMovement LeftMovement;
    [SerializeField] private PlatformsMovement RightMovement;
    [SerializeField] private PlatformsMovement MiddleMovement;
    [SerializeField] private objectFalling objectFalling;
```

---

## Complete Code of GameManager(2)

``` csharp
    //遊戲開始
    // Start is called before the first frame update
    void Start()
    {
        start_game();
    }

    //記分板更新分數
    void Update()
    {
        scoreboard_UI.text = score_text + score;
    }
    
    //加減分的 function
    public void add_point(int points)
    {
        if (!isGameover)
        {
            score += points;
        }
    }
```
---

## Complete Code of GameManager(3)
```csharp
    //遊戲開始需要執行的內容
    private void start_game() { isGameover = false;
        score = 0;
        Gameover_Page.SetActive(false);

        //讓場景物件動起來
        objectFalling.enabled = true;
        LeftMovement.enabled = true;
        MiddleMovement.enabled = true;
        RightMovement.enabled = true;
    }
    //遊戲結束需要執行的內容
    public void game_over() { isGameover = true;
        final_score.text = final_score_text + score;
        Gameover_Page.SetActive(true);

        //點下Restart_button可以執行start_game程式
        Restart_button.onClick.AddListener(start_game);

        //停止遊戲中的畫面
        objectFalling.enabled = false;
        LeftMovement.enabled = false;
        MiddleMovement.enabled = false;
        RightMovement.enabled = false;
    }
}

```