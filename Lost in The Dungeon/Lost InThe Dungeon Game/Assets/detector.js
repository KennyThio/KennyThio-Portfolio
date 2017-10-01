var rayhit:RaycastHit;
var detector:Transform;


function Start () {

}

function Update () {

	//ray distance
	rayhit.distance=10;

	//draw ray
	Debug.DrawRay (detector.position,Vector3.down*10,Color.red);


	if(Physics.Raycast(detector.position,Vector3.down,rayhit,10))
	{

	if(rayhit.transform.gameObject.name == "dmgfloor")
		{		
		healthbar.playerEnergy -= 0.0001 ;
		}

}










}