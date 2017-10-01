#pragma strict

function Start () {

}

function OnCollisionEnter(other : Collision) {
		
		if(other.gameObject.tag=="body")
		{
		healthbar.playerEnergy -= 0.01 ;
		}
		}