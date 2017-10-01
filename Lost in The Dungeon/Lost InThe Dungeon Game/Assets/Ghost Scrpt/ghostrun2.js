var target:Transform;
var speed:float=10;
var timer=0;
var rayhit: RaycastHit;

function Start () {

transform.rotation.x=0;
transform.rotation.y=0;
transform.rotation.z=0;


}

function Update () {



	







	timer=timer+1;
	
	if(speed<20)
		{
			transform.animation.CrossFade("idle_hover");
		transform.animation.wrapMode=WrapMode.Loop;
		}

		//movement code
	transform.Translate(Vector3.forward * Time.deltaTime * speed);


	transform.rotation = Quaternion.Slerp(transform.rotation, 
		Quaternion.LookRotation( transform.position-target.position ), 3 * Time.deltaTime);				
	
	var raystartpt = transform.position + Vector3(0,1.5,0);

	
	if(Physics.Raycast(raystartpt,transform.forward,rayhit,200))
	{	
		 Debug.DrawLine (transform.position,rayhit.point,Color.white);
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
			transform.GetComponent(ghostscript2).enabled = true;
			transform.GetComponent(ghostscript2).foundtarget = true;
			}
		
		
		
		
		
		
		
		
		
		
		if(rayhit.transform.gameObject.name == "checkpoint1")
		{		
		transform.rotation.y=180;
			turncounter=0;	
		}
		
		
		
		
		}
		
		
		if(timer>500)
		{
			timer=0;
			transform.GetComponent(ghostrun2).enabled = false;
			transform.GetComponent(ghostscript2).enabled = true;
			}

		
		
		


}