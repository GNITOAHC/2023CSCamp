using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class score_manager : MonoBehaviour
{
    private int score;
    private string score_text = "Score:";
    [SerializeField]
    private TMP_Text scoreboard_UI;

    private bool isGameover;
    private string final_score_text = "Final Score: ";
    [SerializeField]
    private GameObject Gameover_Page;
    [SerializeField]
    private TMP_Text final_score;

    // Start is called before the first frame update
    void Start()
    {
        isGameover = false;
        score = 0;
        Gameover_Page.SetActive(false);
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
        isGameover = true;
        final_score.text = final_score_text + score;
        Gameover_Page.SetActive(true);
    }

    // Update is called once per frame
    void Update()
    {
        scoreboard_UI.text = score_text + score;
        //add_point(5);

        if (isGameover)
        {
            game_over();
        }

    }
}
