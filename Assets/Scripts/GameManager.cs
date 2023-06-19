using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class GameManager : MonoBehaviour
{
    private int score;
    [SerializeField] private TMP_Text scoreboardUI;

    public bool isGameover;
    private string CurrentScoreText = "Score: ", FinalScoreText = "Final Score: ";
    [SerializeField] private GameObject gameoverPage;
    [SerializeField] private TMP_Text finalScore;
    [SerializeField] private Button restartButton;

    // Start is called before the first frame update
    void Start()
    {
        start_game();
    }

    void Update()
    {
        scoreboardUI.text = CurrentScoreText + score; // Update current score
    }

    private void start_game()
    {
        isGameover = false;
        gameoverPage.SetActive(false);
        score = 0;
    }

    public void add_point(int points)
    {
        if (!isGameover) score += points; // If not gameover, update the score.
    }

    public void game_over()
    {
        Debug.Log("Game Over");
        isGameover = true;
        finalScore.text = FinalScoreText + score;
        gameoverPage.SetActive(true);
        restartButton.onClick.AddListener(start_game);
    }
}
