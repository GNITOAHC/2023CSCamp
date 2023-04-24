
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlatformsManager : MonoBehaviour
{
    public GameObject platform;

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine("SelectPlayerform");
        //Debug.Log("Start");
    }

    IEnumerator SelectPlayerform()
    {
        Debug.Log("Enter");
        while (true)
        {
            yield return new WaitForSeconds(1);
            int rd_stair = Random.Range(0, 3);
            int rd_move = Random.Range(-2, 2);
            platform = this.transform.GetChild(rd_stair).gameObject;
            //Debug.Log(rd);
            platform.transform.position += new Vector3(0, rd_move, 0);
            //platform.transform.Translate(0, rd_move, 0);
            yield return new WaitForSeconds(1);
            platform.transform.position += new Vector3(0, -rd_move, 0);
            //platform.transform.Translate(0, -rd_move, 0);
        }
    }

    // Update is called once per frame
    void Update()
    {

    }
}
