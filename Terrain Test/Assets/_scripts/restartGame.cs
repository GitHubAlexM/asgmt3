//RestartGame.cs
//created by Alexander Man
//press r tor estart game
//issues with not loading texture...
//accessed on November 15th, 2015


using UnityEngine;
using System.Collections;

public class restartGame : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyDown(KeyCode.R)){
			Application.LoadLevel(0); 
		}
}
}
