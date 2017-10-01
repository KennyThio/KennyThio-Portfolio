#pragma strict

function Start () {

}

function OnTriggerEnter(other : Collider) {

	if(other.gameObject.tag=="body")
		{
		healthbar.playerEnergy = healthbar.playerEnergy/2;
		}
		
		if(healthbar.playerEnergy<0.09)
		{
			healthbar.playerEnergy = healthbar.playerEnergy - 0.1;
			}
		
		}