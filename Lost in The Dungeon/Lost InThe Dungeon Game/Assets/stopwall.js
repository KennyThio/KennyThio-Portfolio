#pragma strict

function Start () {

}

function OnTriggerEnter (other : Collider) {
		
		if(other.gameObject.name == "stop")
		{
			GameObject.Find("fake").GetComponent(fakespikes).enabled=false;
			GameObject.Find("fakewall").GetComponent(fakewall).enabled=false;
			}
			}