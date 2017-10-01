var timer=0;
var on:boolean=true;
var off:boolean=false;
function Start () {

}

function Update () {

	if(on==true)
	{
		timer=timer+1;
		}
		
	if(off==true)
	{
		timer=timer-1;
		}
		
	
	//off
	if(timer>360)
	{
		gameObject.collider.enabled=false;
		off=true;
		on=false;
		}
		
		//on
		if(timer<1)
		{
			gameObject.collider.enabled=true;
			on=true;
			off=false;
			}



}