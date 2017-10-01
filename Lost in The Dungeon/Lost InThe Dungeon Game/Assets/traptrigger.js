#pragma strict

function Start () {

}

function OnTriggerEnter (other : Collider) {
		
		if(other.gameObject.name == "player")
		{
			
			GameObject.Find("spikes").GetComponent(spikes).enabled=true;
		
			
			GameObject.Find("spikewall").GetComponent(spikewall).enabled=true;
			

			
			}			
			}