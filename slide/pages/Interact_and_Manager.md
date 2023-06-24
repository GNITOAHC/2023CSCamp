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

## 1. Get the points
## 2. GameOver Conditions
## 3. User Interface (UI)

---

## 1. Get the points

- Destroy the Falling Object
- Add points


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

* Both of the GameObject have "Collider" component
  * In this project, we use "Box Collider 2D"
* Either of the GameObject need "Rigidbody 2D"
* The object with trigger will go through other GameObject


<img src="src/player_collider_rigidbody.png"/>

---

## Adding the Tag and Tick on Trigger box

#### press the Add Tag... buttom and create a new tag named "Spawned"
#### "Is Trigger" box is in the box collider component
<img src="src/Add_tag.png"/>

--- 

## Adding points



```cs
private int score = 0;

public void add_point(int points){
    score += points;
}
```
But... where should I put this code?  
It seems there is a better place than putting this function in  ```player_interact.cs```  
```GameManager``` Seems to be a good choice. 

---

# What does Game Manager do?

- [x] Control the Game
- [x] Record the global informaion
- [ ] Switch to different stage


---

## GameManager: Add points finish

- when game is not over, the add_point function works

```cs {all | 1,2,4,5,6,7,10,12,13 | 3,8,9,11| all}
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


```cs {all | 3,10 | all }
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

```cs { |all}
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

```cs { | |all}
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

```cs { |all | 4,5,6,7,8,9,15}
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

```cs {all|4,5|7,8,9,10,11,12,13,14,15,16|all}
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

```cs {all|13|4,5,6,7,9,10,11,12,13 | 15,16,17,18 | all}
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
- setting buttom with ```buttom_name.onClick.AddListener( function )```

```cs 
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
}
```
---
## To make it better
- Stop the game when the Game is Over
- Declare the function we used
```cs
public class GameManager : MonoBehaviour
{
    [SerializeField] private PlatformsMovement LeftMovement;
    [SerializeField] private PlatformsMovement RightMovement;
    [SerializeField] private PlatformsMovement MiddleMovement;

    [SerializeField] private objectFalling objectFalling;
}
```
<img src="src/game_manager.png">

---
## To make it better
- Stop the game when the Game is Over

Use enabled to turn off the function in game

```cs { |8,9,10,11 | all | all}
    public void game_over()
    {
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

```cs{ | | 6,7,8,9 | all}
    private void start_game()
    {
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

```cs
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
## Complete Code of GameManager
```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class GameManager : MonoBehaviour
{
    private int score;
    private string score_text = "Score:";
    [SerializeField] private TMP_Text scoreboard_UI;

    public bool isGameover;
    private string final_score_text = "Final Score: ";
    [SerializeField] private GameObject Gameover_Page;
    [SerializeField] private TMP_Text final_score;
    [SerializeField] private Button Restart_button;

    [SerializeField] private PlatformsMovement LeftMovement;
    [SerializeField] private PlatformsMovement RightMovement;
    [SerializeField] private PlatformsMovement MiddleMovement;

    [SerializeField] private objectFalling objectFalling;


    // Start is called before the first frame update
    void Start()
    {
        start_game();
    }

    void Update()
    {
        scoreboard_UI.text = score_text + score;

    }

    private void start_game()
    {
        isGameover = false;
        score = 0;
        Gameover_Page.SetActive(false);
        objectFalling.enabled = true;
        LeftMovement.enabled = true;
        MiddleMovement.enabled = true;
        RightMovement.enabled = true;
    }

    public void add_point(int points)
    {
        if (!isGameover)
        {
            score += points;
        }
    }

    public void game_over()
    {
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

    // Update is called once per frame
    
}

```