#pragma strict

function Start () {

}

function Update () {

	transform.position.y=transform.position.y-0.6;


}

function OnTriggerEnter (other : Collider) {
		
		if(other.gameObject.name == "Terrain")
		{
		
			Destroy(this.gameObject);
			}
			}