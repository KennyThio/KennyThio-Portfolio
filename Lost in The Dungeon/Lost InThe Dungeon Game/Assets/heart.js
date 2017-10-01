

function Start () {

}

function Update () {

	transform.Rotate(0,1,0);
	
	
}


function OnTriggerEnter(other : Collider) {

	if(other.gameObject.name=="body")
		{
		healthbar.playerEnergy += 0.05;
		Destroy(this.gameObject);
		}
		}