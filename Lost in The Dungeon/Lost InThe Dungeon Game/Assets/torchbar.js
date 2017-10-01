var lightbar : GUIStyle ;
var flashicon : GUIStyle;
var flashiconon : GUIStyle;
 
var bgImage : Texture2D; // background image that is 256 x 32
var fgImage : Texture2D; // foreground image that is 256 x 32

var flashimage : Texture2D;
var flashimageon : Texture2D;

static var lightEnergy = 1.0; // a float between 0.0 and 1.0
 
function Start() {
	
	lightEnergy = 1.0;

}
 
function Update() {


	if(torchbar.lightEnergy>1.0)
	{
		lightEnergy = 1.0;
		}




}
 
function OnGUI () {
// Create one Group to contain both images , the first two numbers define the on screen placement
GUI.BeginGroup (Rect (100,50,256,32));
 
// Draw the background image
GUI.Box (Rect (0,0,256,32), bgImage, lightbar);
 
// Create a second Group which will be clipped
// We want to clip the image and not scale it, which is why we need the second Group
GUI.BeginGroup (Rect (0,0,lightEnergy * 256, 32));
 
// Draw the foreground image
GUI.Box (Rect (0,0,256,32), fgImage, lightbar);
 
// End both Groups
GUI.EndGroup ();
GUI.EndGroup ();


GUI.Box (Rect (0,20,120,120), flashimage, flashicon);

if(GameObject.Find("Spotlight").light.enabled==true)
{
	GUI.Box (Rect (0,20,120,120), flashimageon, flashiconon);
	}











}