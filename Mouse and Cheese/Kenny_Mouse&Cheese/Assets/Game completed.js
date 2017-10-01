function OnGUI ()
{
	
		if(GUI.Button(new Rect(Screen.width/2, Screen.height/1.5,220,40),"Press to go back to start"))
		{
			Application.LoadLevel(0);
			}
	}