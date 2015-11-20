//ScoreCount.js
//created by Alexander Man
//displays score
//made this script to also hold the properties of other labels
//accessed on November 15th, 2015




static var gscore : int = 0;

function OnGUI() {
GUI.Label (Rect (10, 10, 100, 20), ("Score: " + gscore));
GUI.Label (Rect (10, 50, 1000, 200), ("Click R to reset game"));
GUI.Label (Rect (100, 10, 1000, 200), ("Collect the green cubes"));
GUI.Label (Rect (100, 30, 1000, 200), ("avoid the red cube"));
GUI.Label (Rect (250, 30, 1000, 200), ("W,A,S,D to move, LEFT SHIFT to run, SPACE to jump,"));
 GUI.Label (Rect (250, 50, 1000, 200), ("MOUSE to rotate camera"));
}