var loadlevel:boolean=false;

function Start () {

}

function Update () {

if(loadlevel==true)
{
	Application.LoadLevel(3);
	}

}


function OnTriggerEnter(other : Collider) 
{
	

	if(other.gameObject.name=="body")
			{
				loadlevel=true;
				}
}

























