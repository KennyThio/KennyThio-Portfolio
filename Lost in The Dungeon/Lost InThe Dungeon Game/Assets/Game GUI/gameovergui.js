var guiskins:GUISkin;
var timer=0;

function Start () {

timer=0;

}

function Update () {
	
	timer=timer+1;
	
	
}

function OnGUI () {
	
	GUI.skin = guiskins;
	
	
	if(timer>150)
	{
	if(GUI.Button(new Rect(Screen.width/2.2,Screen.height/2,200,100),"Main Menu"))
	{	
		
		Application.LoadLevel(0);
		timer=0;
		}
		
		}
		}