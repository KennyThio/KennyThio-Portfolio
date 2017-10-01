#pragma strict

function Start () {

}

function Update () {


	if(GameObject.Find("flame").GetComponent(flametime).timer<1)
	{
	particleEmitter.emit = true;
	}
	
	if(GameObject.Find("flame").GetComponent(flametime).timer>360)
	{
		particleEmitter.emit = false;
	}

}