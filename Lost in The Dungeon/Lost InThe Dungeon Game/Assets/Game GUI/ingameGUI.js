var guiskins:GUISkin;
var pause:boolean=false;

function Start () {

}

function Update () {
	
	if(pause==true)
	{
		Time.timeScale = 0.0;
		GameObject.Find("player").GetComponent(MouseLook).enabled=false;
		}
		
		if(pause==false)
		{
			Time.timeScale = 1.0;
			GameObject.Find("player").GetComponent(MouseLook).enabled=true;
			}
}

function OnGUI () {
	
	GUI.skin = guiskins;
	// Show a message if the game is paused.
	
	if(GUI.Button(Rect(1480,10,100,50),"","Button 1"))
	{	
		
		pause=true;
	
		
	}
	
	
	//if pause, show another set of buttons
	if(pause)
	{
			//to unpause
			if(GUI.Button(Rect(Screen.width/3.5,Screen.height/3,300,300),"","Button 2"))
	{	
		pause=false;
	}
			
			//to quit game
			if(GUI.Button(Rect(Screen.width/1.5,Screen.height/3,300,300),"","Button 3"))
	{	
		Application.LoadLevel(4);
	}

	
	}



}



	