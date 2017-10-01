var click:boolean=false;
var destroy:boolean=false;

function Start () {

}

function Update () {
	
	
	
	
	
	
	
	
}

function OnCollisionEnter(other : Collision) {
		
		if(other.gameObject.name == "body"&&click==false)
		{
			click=true;
			GameObject.Find("player").GetComponent(CharacterMotor).enabled=false;
			}			
			}

function OnGUI()
{
	if(click==true)
	{
		if(GUI.Button(new Rect(Screen.width/2,Screen.height/2,180,60), "Unlock New Path?")) 
		{
			destroy=true;
			click=false;
			GameObject.Find("player").GetComponent(CharacterMotor).enabled=true;
			Destroy(GameObject.Find("lockwall"));
			Destroy(this.gameObject);
		}
		
		if(GUI.Button(new Rect(Screen.width/2,Screen.height/3.2,180,60), "Maybe Later")) 
			{
				click=false;
				GameObject.Find("player").GetComponent(CharacterMotor).enabled=true;
			}
			
			}
			}