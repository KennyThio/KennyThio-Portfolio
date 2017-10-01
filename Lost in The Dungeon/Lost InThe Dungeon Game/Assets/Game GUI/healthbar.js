var hp : GUIStyle ;
var healthicon : GUIStyle;

var bgImage : Texture2D; // background image that is 256 x 32
var fgImage : Texture2D; // foreground image that is 256 x 32
var hearticon:Texture2D;
static var playerEnergy = 1.0; // a float between 0.0 and 1.0
 
function Start() {
	
	playerEnergy = 1.0;

}
 
function Update() {



	if(healthbar.playerEnergy >1.0)
	{
		playerEnergy = 1.0;

	}


}
 
function OnGUI () {
// Create one Group to contain both images , the first two numbers define the on screen placement
GUI.BeginGroup (Rect (100,10,256,32));
 
// Draw the background image
GUI.Box (Rect (0,0,256,32), bgImage, hp);
 
// Create a second Group which will be clipped
// We want to clip the image and not scale it, which is why we need the second Group
GUI.BeginGroup (Rect (0,00,playerEnergy * 256, 32));
 
// Draw the foreground image
GUI.Box (Rect (0,0,256,32), fgImage, hp);
 
// End both Groups
GUI.EndGroup ();
GUI.EndGroup ();



GUI.Box (Rect (0,-10,80,80), hearticon, healthicon);










}