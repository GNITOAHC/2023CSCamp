---
layout: center
---

# Unity - 5 UI & UX

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

## Create a Canvas for our UI

<br />

<img src="/sources/Unity-5/Canvas.png" style="height:70%" />

---
layout: two-cols
---

Create a `Raw Image` and rename to `Scoreboard background`

<img src="/sources/Unity-5/Scoreboard_background.png" style="width:70%" />

::right::

Create a `Text - TextMeshPro` and rename to `Score Text`

<img src="/sources/Unity-5/Score_text.png" style="width:70%" />

---

Import TMP Essentials if this window pops up

<img src="/sources/Unity-5/Tmp_import.png" style="width:50%" />

---
layout: two-cols
---

Move those to a place you like  

Ex:

<img src="/sources/Unity-5/Score_place_ex.png" style="width:70%" />

::right::

Remember to change the text color to black (Choose `vertex color`)

<img src="/sources/Unity-5/Text_color.png" style="width:70%" />

---

## GameManager Script

To use `TMP_Text`, import `TMPro`

```csharp
using TMPro;
```

Setup our variables

```csharp
private int score;      // The score we get
public bool isGameover; // This we have written in the last section
private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
[SerializeField] private TMP_Text scoreboardUI;     // Score board
```

---

```csharp
// GameManager.cs
void Start() {
    start_game(); // Call the start game function
}

void Update() {
    scoreboardUI.text = CurrentScoreText + score; // Update current score
}
```

```csharp
// GameManager.cs
private void start_game() {
    isGameover = false;
    score = 0;
}
```

---

```csharp
public void add_point(int points) {
    if (!isGameover) score += points; // If not game over, update the score.
}
```

---

## PlayerInteract Script Integration

Create a `PlayerInteract` script and double click to edit

```csharp{1|1,3|5-12}
// PlayerInteract.cs (This script will be put on `player`)

[SerializeField] private GameManager gameManager;

private void OnTriggerEnter2D(Collider2D other)
{
    if (other.tag == "Spawned") {
        gameManager.add_point(5);
        Debug.Log("Add Point");
        Destroy(other.gameObject);
    }
}
```

---

Now, go back to Unity editor, grab `Score Text` to `Scoreboard UI`

<img src="/sources/Unity-5/Grab_score_text.png" />

---

Then, drag `PlayerInteract` to `Player` (Now player will have 2 scripts, `PlayerController` and `PlayerInteract`)  
Drag `Game Manager` to `Game Manager`

<img src="/sources/Unity-5/PlayerInteract.png" style="height:70%" />
