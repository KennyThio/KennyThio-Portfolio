var trigger2:boolean=false;

function Start () {

}

function OnTriggerEnter (other : Collider) {
		
		if(other.gameObject.name == "player")
		{
			trigger2=true;
			}
			}