//LivesCounter.js
//created by Alexander Man
//displays game lives
//accessed on November 15th, 2015


static var gslives : int = 100;

function OnGUI() {
GUI.Label (Rect (10, 30, 100, 20), ("Life: " + gslives));
}