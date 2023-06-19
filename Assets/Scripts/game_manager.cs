using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class game_manager : MonoBehaviour
{
    private int score;
    private string score_text = "Score:";
    [SerializeField]
    private TMP_Text scoreboard_UI;

    public bool isGameover;
    private string final_score_text = "Final Score: ";
    [SerializeField]
    private GameObject Gameover_Page;
    [SerializeField]
    private TMP_Text final_score;
    [SerializeField]
    private Button Restart_button;

    // Start is called before the first frame update
    void Start()
    {
        start_game();
    }

    void Update()
    {
        scoreboard_UI.text = score_text + score;
        //add_point(5);

    }

    private void start_game()
    {
        isGameover = false;
        Gameover_Page.SetActive(false);
        score = 0;
        
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
    }

    // Update is called once per frame
    
}
