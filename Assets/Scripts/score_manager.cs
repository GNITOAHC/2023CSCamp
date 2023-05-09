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

    // Start is called before the first frame update
    void Start()
    {
        score = 0;
        
    }

    public void add_point(int points)
    {
        score += points;
    }

    // Update is called once per frame
    void Update()
    {
        scoreboard_UI.text = score_text + score;
        //add_point(5);

    }
}
