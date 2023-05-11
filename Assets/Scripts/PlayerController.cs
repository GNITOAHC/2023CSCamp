using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private float horizental;
    private float speed = 8f;
    private float jumpingPower = 12f;
    private bool isFacingRight = true;

    // Reference the rigid body, ground check and ground layer
    [SerializeField] private Rigidbody2D rb;
    [SerializeField] private Transform groundCheck;
    [SerializeField] private LayerMask groundLayer;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        horizental = Input.GetAxisRaw("Horizontal");
        
        if (Input.GetButtonDown("Jump") && IsGrounded()) {
            rb.velocity = new Vector2(rb.velocity.x, jumpingPower);
        }

        if (Input.GetButtonUp("Jump") && rb.velocity.y > 0f) {
            rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
        }

        Flip();
    }
    
    private void FixedUpdate() {
        rb.velocity = new Vector2(horizental * speed, rb.velocity.y);
        
    }

    public float getHorizontal()
    {
        return horizental;
    }
    
     private bool IsGrounded() {
        return Physics2D.OverlapCircle(groundCheck.position, 0.2f, groundLayer);
    }
    
    private void Flip () {
        if (isFacingRight && horizental < 0f || !isFacingRight && horizental > 0f) {
            isFacingRight = !isFacingRight;
            Vector3 localScale = transform.localScale;
            localScale.x *= -1f;
            transform.localScale = localScale;
        }
    }
}
