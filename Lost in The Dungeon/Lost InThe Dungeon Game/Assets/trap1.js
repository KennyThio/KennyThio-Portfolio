var timer=0;

function Start () {

}

function Update () {

	timer=timer+1;
	
	if(timer>500)
	{
		transform.animation.CrossFade("Up Down");
		transform.animation.wrapMode=WrapMode.Once;	
		timer=0;
		}



}