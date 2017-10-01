#pragma strict

function Start () {

}

function OnTriggerEnter (other : Collider) {
		
		if(other.gameObject.name == "player")
		{
			
			GameObject.Find("fake").GetComponent(fakespikes).enabled=true;
			GameObject.Find("fakewall").GetComponent(fakewall).enabled=true;
			
			GameObject.Find("trapwall").collider.enabled=true;
			GameObject.Find("trapwall").renderer.enabled=true;
			
			}			
			}