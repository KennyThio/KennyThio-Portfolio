var on:boolean=false;
var show:boolean=false;
var recharge:boolean=false;

var rayhit: RaycastHit;

var rayhit2: RaycastHit;

var obj: Transform;

function Start () {

}

function Update () {

	if(recharge==false)
	{
	if(on)
	{
		show=true;
		RenderSettings.fogDensity = RenderSettings.fogDensity - 0.0001;
		transform.light.enabled=true;
		torchbar.lightEnergy-=0.002;
		
		if(RenderSettings.fogDensity < 0.01)
		{
			RenderSettings.fogDensity = 0.01;
			}
		
		
		var rayget = transform.position + Vector3(0,1,0);
		
		if(Physics.Raycast(rayget,transform.forward,rayhit2, 40))
		{
			
			obj=rayhit2.transform;
			
			if(obj.transform.gameObject.tag == "red")
			{
			obj.transform.gameObject.GetComponent(appear).enabled = true;
			
			
			
			}
			
			if(obj.transform.gameObject.tag == "blue")
			{
			obj.transform.gameObject.GetComponent(appear).enabled = true;
			}
			
			if(obj.transform.gameObject.tag == "green")
			{
			obj.transform.gameObject.GetComponent(appear).enabled = true;
			}
			
			if(obj.transform.gameObject.tag == "hidden")
			{
				obj.transform.gameObject.GetComponent(appear).enabled = true;
			}
			
			
			
			}
		
		
		
		
		
		//when raycast hit ghost, ghost runs away
	var raystartpt = transform.position + Vector3(0,1,0);
	

	
	if(Physics.Raycast(raystartpt,transform.forward,rayhit,400))
	{	
		 Debug.DrawLine (transform.position,rayhit.point,Color.white);
		 
 
		 
		//if raycast hit ghost
		
		if(rayhit.transform.gameObject.name == "ghost1.1")
		{		
			GameObject.Find("ghost1.1").GetComponent(ghostrun).enabled = true;
			GameObject.Find("ghost1.1").GetComponent(ghostscript).enabled = false;
			
			
			
			}
			
			if(rayhit.transform.gameObject.name == "ghost1.2")
		{		
			GameObject.Find("ghost1.2").GetComponent(ghostrun).enabled = true;
			GameObject.Find("ghost1.2").GetComponent(ghostscript).enabled = false;
			
			
			
			}
			
			if(rayhit.transform.gameObject.name == "ghost1.3")
		{		
			GameObject.Find("ghost1.3").GetComponent(ghostrun).enabled = true;
			GameObject.Find("ghost1.3").GetComponent(ghostscript).enabled = false;
			
			
			
			}
			
			
			
				if(rayhit.transform.gameObject.name == "ghost2.1")
		{		
			GameObject.Find("ghost2.1").GetComponent(ghostrun2).enabled = true;
			GameObject.Find("ghost2.1").GetComponent(ghostscript2).enabled = false;
			
			
			
			}
			
			
				if(rayhit.transform.gameObject.name == "ghost2.2")
		{		
			GameObject.Find("ghost2.2").GetComponent(ghostrun2).enabled = true;
			GameObject.Find("ghost2.2").GetComponent(ghostscript2).enabled = false;
			
			
			
			}
			
			
				if(rayhit.transform.gameObject.name == "ghost2.3")
		{		
			GameObject.Find("ghost2.3").GetComponent(ghostrun2).enabled = true;
			GameObject.Find("ghost2.3").GetComponent(ghostscript2).enabled = false;
			
			
			
			}
			
			
				if(rayhit.transform.gameObject.name == "ghost2.4")
		{		
			GameObject.Find("ghost2.4").GetComponent(ghostrun2).enabled = true;
			GameObject.Find("ghost2.4").GetComponent(ghostscript2).enabled = false;
			
			
			
			}
			
			
			
			
			
			
			
			
			
			
			
			if(rayhit.transform.gameObject.name == "ghost2.5")
		{		
			GameObject.Find("ghost2.5").GetComponent(ghostrun2).enabled = true;
			GameObject.Find("ghost2.5").GetComponent(ghostscript2).enabled = false;
			
			
			
			}
			
			
			
			}
		
			
			
			
			
			
			
			
			
			
			
		
		}
		}
		
		if(!on)
		{
			show=false;
			RenderSettings.fogDensity = RenderSettings.fogDensity + 0.0001;
			transform.light.enabled=false;
			
			if(RenderSettings.fogDensity > 0.02)
			{
				RenderSettings.fogDensity = 0.02;
				}
		
			

			
			}


			if(torchbar.lightEnergy < 0)
	{
		on=!on;
		recharge=true;
		}


	if(recharge==true)
	{
		torchbar.lightEnergy+=0.0025;
		}

	if(torchbar.lightEnergy > 1)
	{
		recharge=false;
		}
	

	if(Input.GetKeyDown(KeyCode.F))
	{
		on=!on;
		
		}






}