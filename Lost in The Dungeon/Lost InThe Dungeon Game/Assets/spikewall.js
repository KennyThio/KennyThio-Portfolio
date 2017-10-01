private var spawnPos : Vector3;
private var spawnRot : Quaternion;


private function Awake()
{
spawnPos = transform.position;
spawnRot = transform.rotation;
}

function ResetToSpawn()
{
transform.position = spawnPos;
transform.rotation = spawnRot;

	

}


function Update () {

	transform.renderer.enabled=true;
	transform.collider.enabled=true;
	transform.position.x=transform.position.x+0.5;
	
	
	
}