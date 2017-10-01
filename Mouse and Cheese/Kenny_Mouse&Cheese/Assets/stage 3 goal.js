var stagegoal:boolean=false;

function Start () {

}

function Update () {

	if(GameObject.Find("stage").GetComponent("timer 3").min>0)
	{
		stagegoal=true;
		}

	if(stagegoal==true)
	{
		GameObject.Find("prefab_mouse(Clone)").GetComponent("Mouse").movespeed=0;
		GameObject.Find("cheese").GetComponent("player movement").speed=0;
		}



}

function OnGUI()
{
	if(stagegoal==true)
	{
		if(GUI.Button(new Rect(Screen.width/2, Screen.height/2,250,40),"You Win, Press to play the next level"))
		{
			Application.LoadLevel(5);
			}
	}
}