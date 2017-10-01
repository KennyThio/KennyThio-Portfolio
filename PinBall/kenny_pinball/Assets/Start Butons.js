var guiskins:GUISkin;


function Start () {

}

function Update () {

}

function OnGUI () {
	
	GUI.skin = guiskins;
	
	
	
	if(GUI.Button(Rect(700,450,85,100),"","Button 1"))
	{
		Application.LoadLevel(1);
		}

	if(GUI.Button(Rect(1100,450,85,100),"","Button 2"))
	{
		Application.Quit();
		}


	
	}
