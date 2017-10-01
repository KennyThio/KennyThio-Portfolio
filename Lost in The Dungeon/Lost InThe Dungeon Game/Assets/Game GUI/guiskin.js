var guiskins:GUISkin;


function Start () {

}

function Update () {
	
	
}

function OnGUI () {
	
	GUI.skin = guiskins;
	
	
	
	if(GUI.Button(Rect(Screen.width/4.3,Screen.height/3.8,300,200),"","Button 1"))
	{	
		
		Application.LoadLevel(2);
		
		
		}

	





	if(GUI.Button(Rect(Screen.width/1.68,Screen.height/3.8,300,200),"","Button 2"))
	{
		Application.Quit();
		}
		
		
		if(GUI.Button(Rect(Screen.width/2.4,Screen.height/3.8,300,200),"","Button 3"))
	{
			Application.LoadLevel(1);
		}


		
		
		
		
}