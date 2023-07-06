using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private float horizontal; // -1, 0 or 1 (horizontal position)
    private float speed = 8f;
    private float jumpingPower = 12f;

    // Reference the rigid body, ground check and ground layer
    [SerializeField] private Rigidbody2D rb;
    [SerializeField] private Transform groundCheck;
    [SerializeField] private LayerMask groundLayer;

    // Start is called before the first frame update
    void Start() {}

    // Update is called once per frame
    void Update()
    {
        horizontal = Input.GetAxisRaw("Horizontal"); // 確認左右
        
        if (Input.GetButtonDown("Jump") && IsGrounded()) { // 當接觸地面時 向上跳
            rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
        }

        if (Input.GetButtonUp("Jump") && rb.velocity.y > 0f) { // 跳越高速度越小(拋物線)
            rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
        }
    }
    
    private void FixedUpdate() {
        rb.velocity = new Vector2(horizontal * speed, rb.velocity.y); // 左右增加速度
    }

    public float getHorizontal() {
        return horizontal;
    }
    
     private bool IsGrounded() { // 確認是否著地
        return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);
    }
}