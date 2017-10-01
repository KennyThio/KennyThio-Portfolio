var speed:float=10;
var turncounter=0;
var degree:float= 0;
var timer=0;

var foundtarget:boolean=false;
var target:Transform;
var rayhit: RaycastHit;
var rayhit2:RaycastHit;
var rayhit3:RaycastHit;



function Start () {

transform.rotation.x=0;
transform.rotation.y=0;
transform.rotation.z=0;





}

function Update () {
	
	
		
	
	
	
	
	
	
	
	
		if(speed<20)
		{
			transform.animation.CrossFade("idle_hover");
		transform.animation.wrapMode=WrapMode.Loop;
		}

		
		
		
		


		turncounter=turncounter+1;
		
		//movement code
	transform.Translate(Vector3.forward * Time.deltaTime * speed);
	
	//if counter is more than 1000, ghost will turn random degree
	if(turncounter>500)
	{
		turncounter=0;
		degree = Random.Range(0,360)- Random.Range(0,360);
		transform.Rotate(0,degree,0);
			transform.rotation.x=0;
		transform.rotation.z=0;
		}
	
	
	var raystartpt = transform.position + Vector3(0,1.5,0);

	
	if(Physics.Raycast(raystartpt,transform.forward,rayhit,200))
	{	
		 Debug.DrawLine (transform.position,rayhit.point,Color.white);
		//if raycast hit player
		if(rayhit.transform.gameObject.name == "body")
		{		
		foundtarget=true;
		
		
		}
		
								
		
		
		//if raycast hit boundary1
		if(rayhit.transform.gameObject.name == "boundary4")
		{		
		transform.rotation.y=0;
			turncounter=0;	
		}
				//if raycast hit boundary2
		if(rayhit.transform.gameObject.name == "boundary5")
		{		
		transform.rotation.y=90;
			turncounter=0;	
		}
				//if raycast hit boundary3
		if(rayhit.transform.gameObject.name == "boundary6")
		{		
		transform.rotation.y=180;
			turncounter=0;	
		}
		
		if(rayhit.transform.gameObject.name == "ghosttrigger")
		{
			foundtarget=true;
			}
		
		
			if(rayhit.transform.gameObject.name == "checkpoint1")
		{		
			transform.rotation.y=180;
			turncounter=0;	
			foundtarget=false;
			
		}
		
		}
		

	if(foundtarget==true)
	{
		//chase player	
		transform.rotation = Quaternion.Slerp(transform.rotation, 
		Quaternion.LookRotation(target.position - transform.position), 3 * Time.deltaTime);				
	}
	
	
	
	
	
	if(healthbar.playerEnergy == -0.1)
	{
		foundtarget=false;
		
		}
	
	
	
	
	//more raycast
	 var leftRay = transform.position + Vector3(-10, 1.5, 2);
     var rightRay = transform.position + Vector3(10, 1.5, 2);
	
		// check for leftRay raycast(chicken)
	if(Physics.Raycast(leftRay,transform.forward,rayhit2,200))
	{		
		Debug.DrawLine (transform.position,rayhit2.point,Color.red);
		
		if(rayhit2.transform.gameObject.name == "body")
		{		
		foundtarget=true;
					
		}
	}

		if(Physics.Raycast(rightRay,transform.forward,rayhit3,200))
	{
		
		Debug.DrawLine (transform.position,rayhit3.point,Color.green);
		
		if(rayhit3.transform.gameObject.name == "body")
		{		
		foundtarget=true;

		}

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
	
	
	
	
	



