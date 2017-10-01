#pragma strict

function Start () {

}

function Update()
{

		if (GameObject.Find("trigger2").GetComponent(trigger2).trigger2==true)
			{
				transform.animation.CrossFade("Up Down");
				transform.animation.wrapMode=WrapMode.Once;
				
				}
				}