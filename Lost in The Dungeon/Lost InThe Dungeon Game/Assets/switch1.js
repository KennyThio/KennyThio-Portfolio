var clickme:boolean=false;
var destroy:boolean=false;

function Start () {

}




function OnCollisionEnter(other : Collision) {
		
		if(other.gameObject.name == "body"&&clickme==false)
		{
			clickme=true;
			GameObject.Find("player").GetComponent(CharacterMotor).enabled=false;
			}			
			}
			
			
function OnGUI()
{
	if(clickme==true)
	{
		if(GUI.Button(new Rect(Screen.width/2,Screen.height/2,180,60), "Disable Fire Wall?")) 
		{
			destroy=true;
			clickme=false;
			GameObject.Find("player").GetComponent(CharacterMotor).enabled=true;
			Destroy(this.gameObject);
		}
		
		if(GUI.Button(new Rect(Screen.width/2,Screen.height/3.2,180,60), "Maybe Later")) 
			{
				clickme=false;
				GameObject.Find("player").GetComponent(CharacterMotor).enabled=true;
				
			}
			
			}
			}
			