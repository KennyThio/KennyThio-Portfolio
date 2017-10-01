var startspawn:boolean=true;
var startspawn2:boolean;
var startspawn3:boolean;

var respawn1:Transform;
var respawn2:Transform;
var respawn3:Transform;



var Spikewall : spikewall;
var Fakewall : fakewall;
var resettrap:boolean=false;
var timer=0;

function Start () {

}
function Update() {

			
	if(healthbar.playerEnergy < 0)
	{
		//startpoint
		if(startspawn==true)
			{
				transform.position.x = respawn1.position.x;
				transform.position.y = respawn1.position.y;
				transform.position.z = respawn1.position.z;
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				resettrap=true;
				
				
				}
				//checkpoint2
			if(startspawn2==true)
			{
				transform.position.x = respawn2.position.x;
				transform.position.y = respawn2.position.y;
				transform.position.z = respawn2.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				resettrap=true;
				}
				
				
			if(startspawn3==true)
			{
				transform.position.x = respawn3.position.x;
				transform.position.y = respawn3.position.y;
				transform.position.z = respawn3.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				resettrap=true;
				}	
				
				
				
				
				
				
			}
		
		//if player dies, reset traps to its starting point.
		
		if(resettrap==true)
		{
				GameObject.Find("trapwall").collider.enabled=false;
				GameObject.Find("trapwall").renderer.enabled=false;
				
				GameObject.Find("spikewall").collider.enabled=false;
				GameObject.Find("spikewall").renderer.enabled=false;

				
				
				
				GameObject.Find("fake").renderer.enabled=false;
				GameObject.Find("fakewall").renderer.enabled=false;
				
				//set spikewall to its starting position
				Spikewall.ResetToSpawn();
				Fakewall.ResetToSpawn();
				
				GameObject.Find("spikes").GetComponent(spikes).enabled=false;
				GameObject.Find("spikewall").GetComponent(spikewall).enabled=false;
				GameObject.Find("fakewall").GetComponent(fakewall).enabled=false;
				GameObject.Find("fake").GetComponent(fakespikes).enabled=false;
				
				timer=timer+1;
				}
		
		if(timer>20)
		{
				GameObject.Find("spikes").collider.enabled=false;
				GameObject.Find("spikes").collider.isTrigger=false;
				GameObject.Find("spikes").renderer.enabled=false;
			resettrap=false;
			timer=0;
			}
		
		
		
		}





function OnTriggerEnter(other : Collider) {
	
		
		if(other.gameObject.tag=="ghost1")
		{
			
			
			GameObject.Find("ghost1.1").GetComponent(ghostscript).foundtarget=false;
			GameObject.Find("ghost1.2").GetComponent(ghostscript).foundtarget=false;
			GameObject.Find("ghost1.3").GetComponent(ghostscript).foundtarget=false;
	
			GameObject.Find("ghost2.1").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.2").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.3").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.4").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.5").GetComponent(ghostscript2).foundtarget=false;
			
			
			//starting point
			if(startspawn==true)
			{
				transform.position.x = respawn1.position.x;
				transform.position.y = respawn1.position.y;
				transform.position.z = respawn1.position.z;
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
				
				//checkpoint2
			if(startspawn2==true)
			{
				transform.position.x = respawn2.position.x;
				transform.position.y = respawn2.position.y;
				transform.position.z = respawn2.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
				
				//checkpoint3
			if(startspawn3==true)
			{
				transform.position.x = respawn3.position.x;
				transform.position.y = respawn3.position.y;
				transform.position.z = respawn3.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}	
				
				
				
				
				
				
			}
	
	
	
	
	
	
	
	
		
		if(other.gameObject.name=="pinchos")
		{
			//starting point
			if(startspawn==true)
			{
				transform.position.x = respawn1.position.x;
				transform.position.y = respawn1.position.y;
				transform.position.z = respawn1.position.z;
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
				
				//checkpoint2
			if(startspawn2==true)
			{
				transform.position.x = respawn2.position.x;
				transform.position.y = respawn2.position.y;
				transform.position.z = respawn2.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
				
				//checkpoint3
			if(startspawn3==true)
			{
				transform.position.x = respawn3.position.x;
				transform.position.y = respawn3.position.y;
				transform.position.z = respawn3.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}	
				
				
				
				
				
				
			}
			
		if(other.gameObject.name=="crusher")
		{
			//start point
			if(startspawn==true)
			{
				transform.position.x = respawn1.position.x;
				transform.position.y = respawn1.position.y;
				transform.position.z = respawn1.position.z;
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				
				}
				
				//checkpoint2
				
					if(startspawn2==true)
			{
				transform.position.x = respawn2.position.x;
				transform.position.y = respawn2.position.y;
				transform.position.z = respawn2.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
				
				//checkpoint3
					if(startspawn3==true)
			{
				transform.position.x = respawn3.position.x;
				transform.position.y = respawn3.position.y;
				transform.position.z = respawn3.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
				
				
				
				
			}	
		
		if(other.gameObject.name=="falldeath")
		{
			//start point
			if(startspawn==true)
			{
				transform.position.x = respawn1.position.x;
				transform.position.y = respawn1.position.y;
				transform.position.z = respawn1.position.z;
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
					
				resettrap=true;
				}
				
				
				//checkpoint2
				
				if(startspawn2==true)
			{
				transform.position.x = respawn2.position.x;
				transform.position.y = respawn2.position.y;
				transform.position.z = respawn2.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
			
			//checkpoint3
			if(startspawn3==true)
			{
				transform.position.x = respawn3.position.x;
				transform.position.y = respawn3.position.y;
				transform.position.z = respawn3.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
			
			
			
			
			}
			
			if(other.gameObject.name=="spikes")
			{
			//start point
			if(startspawn==true)
			{
				transform.position.x = respawn1.position.x;
				transform.position.y = respawn1.position.y;
				transform.position.z = respawn1.position.z;
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				
				}
				
				
				//checkpoint2
				
				if(startspawn2==true)
			{
				transform.position.x = respawn2.position.x;
				transform.position.y = respawn2.position.y;
				transform.position.z = respawn2.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
				
				
				//checkpoint3
			if(startspawn3==true)
			{
				transform.position.x = respawn3.position.x;
				transform.position.y = respawn3.position.y;
				transform.position.z = respawn3.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
			
				
				
	
			}
			
			if(other.gameObject.name=="spikewall")
			{
			//start point
			if(startspawn==true)
			{
				transform.position.x = respawn1.position.x;
				transform.position.y = respawn1.position.y;
				transform.position.z = respawn1.position.z;
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				
				}
				
				
				//checkpoint2
				
				if(startspawn2==true)
			{
				transform.position.x = respawn2.position.x;
				transform.position.y = respawn2.position.y;
				transform.position.z = respawn2.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
	
	
					//checkpoint3
			if(startspawn3==true)
			{
				transform.position.x = respawn3.position.x;
				transform.position.y = respawn3.position.y;
				transform.position.z = respawn3.position.z;	
				healthbar.playerEnergy = 1.0;
				torchbar.lightEnergy = 1.0;
				
				resettrap=true;
				}
	
	
	
	
			}
			
			
			
			
			
			
			
			
		if(other.gameObject.name=="checkpoint")
		{
			startspawn2=true;
			startspawn=false;
			startspawn3=false;
			
			GameObject.Find("ghost1.1").GetComponent(ghostscript).foundtarget=false;
			GameObject.Find("ghost1.2").GetComponent(ghostscript).foundtarget=false;
			GameObject.Find("ghost1.3").GetComponent(ghostscript).foundtarget=false;

		
			GameObject.Find("ghost2.1").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.2").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.3").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.4").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.5").GetComponent(ghostscript2).foundtarget=false;
		
			}	
			
			
			if(other.gameObject.name=="checkpoint2")
		{
			startspawn2=false;
			startspawn=false;
			startspawn3=true;
			
			GameObject.Find("ghost1.1").GetComponent(ghostscript).foundtarget=false;
			GameObject.Find("ghost1.2").GetComponent(ghostscript).foundtarget=false;
			GameObject.Find("ghost1.3").GetComponent(ghostscript).foundtarget=false;
	
	
	
	
	
	
	
			GameObject.Find("ghost2.1").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.2").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.3").GetComponent(ghostscript2).foundtarget=false;
			GameObject.Find("ghost2.4").GetComponent(ghostscript2).foundtarget=false;	
			GameObject.Find("ghost2.5").GetComponent(ghostscript2).foundtarget=false;
			
			
			
			
			
			
			
			}	
			
			
			
			
			
			
			
			
	}

   
	