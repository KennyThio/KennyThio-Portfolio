#pragma strict

function Start () {

}

function OnTriggerEnter (other : Collider) {
		
		if(other.gameObject.name == "stop2")
		{
			GameObject.Find("spikes").GetComponent(spikes).enabled=false;
			
			GameObject.Find("spikewall").GetComponent(spikewall).enabled=false;
			}
			}