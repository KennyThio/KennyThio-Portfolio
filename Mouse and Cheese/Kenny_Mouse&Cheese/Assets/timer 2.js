var millisec = 0;
var sec = 0;
var min = 0;
var hour = 0;

var timer:boolean= true;

function Update () {

	if(timer==true)
	{
	millisec=millisec+1;
	}

	if(millisec>60)
	{
		millisec=0;
		sec=sec+1;
		}
		
		if(sec>60)
		{
			sec=0;
			min=min+1;
			}
	
		if(min>60)
		{
			min=0;
			hour=hour+1;
			}

		if(timer==false)
		{
			millisec=millisec+0;
			}

		
		if(GameObject.Find("stage").GetComponent("stage 2 goal").stagegoal==true)
	{
		timer=false;
		}
		
}

function OnGUI()
{
	GUI.TextField(new Rect(110,5,100,20),"millisec: " + millisec.ToString());
	GUI.TextField(new Rect(210,5,100,20),"sec: " + sec.ToString());
	GUI.TextField(new Rect(310,5,100,20),"min: " + min.ToString());
	GUI.TextField(new Rect(410,5,100,20),"hour: " + hour.ToString());
	
	}
