#pragma strict

function Start () {

}
function OnTriggerEnter (other : Collider) {
		
		if(other.gameObject.name == "player")
		{
			
			GameObject.Find("crusher").GetComponent(crush).enabled=true;
			}
			}