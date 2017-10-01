var speed:float=30;
var deadball:boolean = false;
var deadballposition:Vector3;
var leveldone:boolean = false;

function Start () {

}

function Update () {

		if(Application.platform !=RuntimePlatform.Android)
		{


		transform.rigidbody.AddForce(Vector3(Input.GetAxis("Horizontal"),0,Input.GetAxis("Vertical"))* speed * Time.deltaTime);
		}
		
		else
		
		{
			transform.rigidbody.AddForce(Vector3(-Input.acceleration.y,0, Input.acceleration.x) * speed * 5 * Time.deltaTime);
			}
		
		
		
		
		
		
		
		if(deadball==true&&transform.localScale.x>0)
		{
			transform.localScale -= Vector3(0.1,0.1,0.1) * Time.smoothDeltaTime;
			
			transform.position.x = deadballposition.x;
			transform.position.y = 1;
			transform.position.z = deadballposition.z;
			
			//if ball scale is less than 0.01, destroy ball
			if(transform.localScale.x < 0.01 && transform.localScale.y < 0.01 && transform.localScale.z < 0.01)
			{
				//Destroy(this.gameObject);
				}

			
			
			}
		
		
		
		
		
}






function OnTriggerEnter(objhit:Collider)
{
	if(objhit.gameObject.name == "Hole")
	{
		deadball=true;
		deadballposition = objhit.transform.position;
		}
		
		
	if(objhit.gameObject.name == "Goal")
	{	
		leveldone=true;
		}
		
		
		
		
		
		
		
		
		}
		
function OnGUI()
{
	
	if(transform.localScale.x<0.2)
	{
		if(GUI.Button(new Rect(Screen.width/2, Screen.height/2,120,40),"Restart"))
		{
			Application.LoadLevel(3);
			}
	}
	
	
	if(leveldone==true)
	{
		
		if(GUI.Button(new Rect(Screen.width/2, Screen.height/2,250,40),"You Win, Press to play the next level"))
		{
			Application.LoadLevel(4);
			}
	
	
	
	}


}

