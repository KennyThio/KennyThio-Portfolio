#pragma strict

function Start () {

}

function Update () {

}


function OnTriggerEnter(other : Collider) {

	if(other.gameObject.name == "player")
	{
		Application.LoadLevel(5);
		}
		}