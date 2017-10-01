var spawnobj: Transform;
var spawncounter = 0;
var spawneffect : Transform;


function Start () {

}

function Update () {

	spawncounter=spawncounter+1;
	
	if(spawncounter==500)
	{
		transform.position.x= Random.Range(24,-21);
		transform.position.z=Random.Range(23,-22);
		
		var tempeffect:Transform = Instantiate(spawneffect,transform.position,transform.rotation);
		Destroy(tempeffect.gameObject,10);
	}
	
	if(spawncounter>600)
	{
		Instantiate(spawnobj,transform.position,transform.rotation);
		spawncounter = 0;

		}



}