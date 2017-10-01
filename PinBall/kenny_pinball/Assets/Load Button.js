var guiskins:GUISkin;


function Start () {

}

function Update () {

}

function OnGUI () {
	
	GUI.skin = guiskins;
	
	
	
	if(GUI.Button(Rect(1220,570,85,100),"","Button 1"))
	{
		Application.LoadLevel(2);
		}
		}