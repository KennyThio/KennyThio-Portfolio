var millisec=0;
var sec=0;
var min=0;
var hour=0;

function Start () {

}

function Update () {
	
	millisec=millisec+1;
	
	if(millisec>60)
	{
		sec=sec+1;
		millisec=0;
		}
		
		if(sec>60)
		{
			min=min+1;
			sec=0;
			}
			
			if(min>60)
			{
				hour=hour+1;
				min=0;
				}
				
				guiText.text = hour + " hour " + min + " min " + sec + " sec " ;
				




}