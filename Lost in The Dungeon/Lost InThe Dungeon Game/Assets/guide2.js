var thirdtext: GUIText;
var timer =  0;



function Start () {

transform.guiText.enabled=true;

}

function Update () {

timer = timer + 1;

if(timer>300)
{
	GetComponent(guide2).enabled=false;
	transform.guiText.enabled=false;
	
	
	thirdtext.GetComponent(guide3).enabled=true;
	}


}