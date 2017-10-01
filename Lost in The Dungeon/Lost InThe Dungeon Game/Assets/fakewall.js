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


function Start () {

}

function Update () {

	transform.renderer.enabled=true;
	
	transform.position.z=transform.position.z+0.1;
	
	
	
}