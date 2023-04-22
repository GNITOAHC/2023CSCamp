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
            int rd = Random.Range(0, 3);
            platform = this.transform.GetChild(rd).gameObject;
            //Debug.Log(rd);
            platform.transform.Translate(0, 1, 0);
            yield return new WaitForSeconds(1);
            platform.transform.Translate(0, -1, 0);
        }
    }

    // Update is called once per frame
    void Update()
    {
    
    }
}
