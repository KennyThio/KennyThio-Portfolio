var guiskins:GUISkin;


function Start () {

}

function Update () {

}

function OnGUI () {
	
	GUI.skin = guiskins;
	
	
	
	if(GUI.Button(Rect(800,550,85,100),"","Button 1"))
	{
		Application.LoadLevel(2);
		}
		}