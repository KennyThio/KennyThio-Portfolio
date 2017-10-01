private var dt = Date();
 
 
function Update () {
 
var day = dt.Now.Day;
var month = dt.Now.Month;
var year = dt.Now.Year;
var hours = dt.Now.Hour;
var minutes = dt.Now.Minute;
var seconds = dt.Now.Second;
 
guiText.text = hours + " hour " + minutes + " min " + seconds + " sec ";
 
}