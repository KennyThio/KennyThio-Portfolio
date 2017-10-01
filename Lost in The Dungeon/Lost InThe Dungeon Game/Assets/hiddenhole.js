#pragma strict

function Start () {

}

function OnCollisionEnter(other : Collision) {

		if(other.gameObject.name=="body")
		{
			Destroy(this.gameObject);
			}
			}