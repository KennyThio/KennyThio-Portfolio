var secondtext: GUIText;
var timer =  0;



function Start () {

}

function Update () {

timer = timer + 1;

if(timer>300)
{
	GetComponent(guide1).enabled=false;
	transform.guiText.enabled=false;
	
	
	secondtext.GetComponent(guide2).enabled=true;
	}


}