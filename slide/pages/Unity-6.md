---
layout: center
---

# Unity - 6 - Restart

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

## Restart Panel

First, create `Panel` inside `Canvas`, this will be the panel that shows when the game ends

<img src="/sources/Unity-6/Create_panel.png" style="height:70%" />

---
layout: two-cols
---

Under `Panel`, create three components:

1. Gameover Text (`UI/Text - TextMashPro`)
2. Final Score Text (`UI/Text - TextMashPro`)
3. Restart Button (`UI/Button - TextMeshPro`)

::right::

<img src="/sources/Unity-6/Restart_button.png" style="height:70%" />

---
layout: two-cols
---

Change the text inside `Gameover Text`

<img src="/sources/Unity-6/Gameover_button.png" style="width:70%" />

::right::

Similarily, change the text of `Restart Button` to `Restart`

<img src="/sources/Unity-6/Restart_text.png" style="width:70%" />

---

## Fine Tuning UI - 1

Reset the three components' position

---
layout: two-cols
---

Before:

<img src="/sources/Unity-6/UI_tuning_before.png" style="height:40%" />


::right::

After:

<img src="/sources/Unity-6/UI_tuning_after.png" style="height:40%" />

---

## Script

```csharp
// GameManager.cs
using UnityEngine.UI; // Import the UI toolkit for Button

// We add the following before
private int score;
public bool isGameover;
private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
[SerializeField] private TMP_Text scoreboardUI;

// New variables
[SerializeField] private GameObject gameoverPage;   // The final panel
[SerializeField] private TMP_Text finalScore;       // Final score
[SerializeField] private Button restartButton;      // Restart button

```

---

1. Set the panel to `non-active` when the game start.
2. Set the panel to `active` when the game end.

```csharp{all|4|8-13}
// GameManager.cs
private void start_game() {
    isGameover = false;
    gameoverPage.SetActive(false); // Set the final page to non-active when game start
    score = 0;
}

public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
```

---

Setup the rebirth-mechanics

```csharp{all|3|5-7|9-15}
// PlayerInteract.cs
[SerializeField] private GameManager gameManager; // We setup this before
[SerializeField] private GameObject player;

private void reset_player() {
    player.transform.position = new Vector3(0, 0, 0);
}

void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}
```

---

Recall the integration of `PlayerInteract` and `GameManager`

```csharp{all|3|5,10-16}
// PlayerInteract.cs
void Update() {
    if(player.transform.position.y < -5) { // If player dropped
        reset_player();
        gameManager.game_over();
        Debug.Log("Fall");
    }
}

// GameManager.cs
public void game_over() {
    isGameover = true; // Set isGameover to true
    finalScore.text = FinalScoreText + score; // Set up final score
    gameoverPage.SetActive(true); // Activate final panel
    restartButton.onClick.AddListener(start_game); // Listen the restart button
}
```

---

## Scripts Setup

Go back to Unity editor and setup player for `PlayerInteract`

<img src="/sources/Unity-6/Player_for_playerinteract.png" style="height:70%" />

---
layout: two-cols
---

Setup `Panel` and its child components for `GameManager`

|GameManager.cs|GameObject|
|-|-|
|Gameover page|Panel|
|Final score|Final Score Text|
|Restart Button|Restart Button|

::right::

<img src="/sources/Unity-6/Panel_for_gamemanager.png" style="width:100%" />

---

## Fine Tuning UI - 2

To change the background color of panel, you can select `panel` and change it's Image color

<img src="/sources/Unity-6/Panel_color.png" style="height:70%" />

---
layout: two-cols
---

To change the text fonts, layout or color, choose the `TextMeshPro` component and edit it in the Inspector windows

::right::

<img src="/sources/Unity-6/Text_inspector.png" style="width:65%" />
