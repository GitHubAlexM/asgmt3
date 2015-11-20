//Enemy_Spawner.cs
//created by Alexander Man
//spawns the enemy
//accessed on November 15th, 2015

using UnityEngine;
using System.Collections;

public class Enemy_Spawner : MonoBehaviour {


	public GameObject GO_Enemy;

	// Use this for initialization
	void Start () {
		InstantiateEnemy ();
	
	}

	void InstantiateEnemy()
	{
		Instantiate (GO_Enemy);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
