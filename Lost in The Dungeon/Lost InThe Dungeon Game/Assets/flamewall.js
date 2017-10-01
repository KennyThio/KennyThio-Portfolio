#pragma strict

function Start () {

}

function Update () {
	
	if (GameObject.Find("switch").GetComponent(switch1).destroy==true)
	{
		Destroy(this.gameObject);
		GameObject.Find("switch").GetComponent(switch1).destroy=false;
	}
		
}