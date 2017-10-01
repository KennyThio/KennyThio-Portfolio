//the enemy target
var target : Transform;
//move speed
var movespeed = 3;
//speed of turning
var rotationspeed = 3;

var mytransform:Transform;

var mousedead:boolean = false;

function Awake()
{
	mytransform=transform;

}

function Start () {


	target=GameObject.FindWithTag("cheese").transform;
	
	
}

function Update () 
{
	
	if(movespeed>2)
	{
		mytransform.animation.CrossFade("walk");
		mytransform.animation.wrapMode=WrapMode.Loop;
		
		}

	
	//rotate to look at the player
	mytransform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(target.position - mytransform.position), rotationspeed * Time.deltaTime);
	//move toward player
	mytransform.position += mytransform.forward * movespeed * Time.deltaTime;
	
	if(mousedead==true)
	{
		movespeed=0;
		transform.rigidbody.useGravity=false;
		transform.Rotate(0,20,0);
		transform.localScale -= Vector3(0.3,0.3,0.3);
		
		if(transform.localScale.x < 0.1)
		{
			Destroy(this.gameObject);
			}
		}
		

	
	
}



function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.name == "Tornado(Clone)")
	{
		mousedead=true;
		other.transform.position=transform.position;
		}
		}