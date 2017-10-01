var guiskins:GUISkin;


function Start () {

}

function Update () {
	
	
}

function OnGUI () {
	
	GUI.skin = guiskins;
	
	
	
	if(GUI.Button(Rect(Screen.width/2.8,Screen.height/1.3,400,200),"","Button 1"))
	{	
		
		Application.LoadLevel(0);
		
		
		}
		}