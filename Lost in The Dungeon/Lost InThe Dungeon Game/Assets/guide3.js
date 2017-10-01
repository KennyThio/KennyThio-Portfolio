
var timer =  0;



function Start () {

transform.guiText.enabled=true;

}

function Update () {

timer = timer + 1;

if(timer>300)
{
	GetComponent(guide3).enabled=false;
	transform.guiText.enabled=false;
	
	
	
	}


}