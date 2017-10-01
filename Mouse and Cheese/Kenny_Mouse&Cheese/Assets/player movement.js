var speed: float;
var lives = 10;
var shrinktrap:Transform;
var cdtimer = 0;
var cooldown:boolean=false;
function Start () {

}

function Update () {

speed=0;


if(Input.GetKey(KeyCode.W)){speed = speed + 5;}
if(Input.GetKey(KeyCode.S)){speed = speed - 5;}
if (Input.GetKey(KeyCode.D)) transform.Rotate(0, 1, 0);
if (Input.GetKey(KeyCode.A)) transform.Rotate(0, -1, 0);


if(Input.GetKey(KeyCode.Space)&&cooldown==false)
{
	var tempspell:Transform = Instantiate(shrinktrap);
	
	tempspell.position.x=transform.position.x;
	tempspell.position.y=0.1;
	tempspell.position.z=transform.position.z;
	
	tempspell.rotation.x=transform.rotation.x;
	tempspell.rotation.y=0;
	tempspell.rotation.z=transform.rotation.z;
	
	
	Destroy(tempspell.gameObject,10);
	cooldown=true;
	}
	
	if(cooldown==true)
	{
		cdtimer=cdtimer+1;
		}
		
		if(cdtimer>550)
		{
			cooldown=false;
			cdtimer=0;
			}
		

	
	

//movement
transform.Translate(Vector3.forward*Time.deltaTime*speed);

//when reach a certain scale & life reach less than 1, destroy the player
if(transform.localScale.x < 0.1 && transform.localScale.y < 0.1 && transform.localScale.z < 0.1 && lives<1)
{
	//Destroy(this.gameObject);
	}




}

function OnGUI ()
{
	GUI.TextField(new Rect(5,5,100,20),"Life: " + lives.ToString());
	
	if(lives<1)
	{
		if(GUI.Button(new Rect(Screen.width/2, Screen.height/2,120,40),"You Died."))
		{
			Application.LoadLevel(0);
			}
	}
}

//everytime mouse collide with player or vice versa, player shrink abit.
function OnCollisionEnter(collision:Collision)
{
	if(collision.gameObject.name=="prefab_mouse(Clone)")
	{
		transform.localScale -= Vector3(5,5,5)*Time.smoothDeltaTime;
		lives = lives -1;
	}
	}
	
