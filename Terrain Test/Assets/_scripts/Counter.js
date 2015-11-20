//Counter.js
//created by Alexander Man
//destroys pick up item when player touches it and increases the score by 1
//accessed on November 15th, 2015

function OnTriggerEnter (info : Collider) {
Destroy(gameObject);
ScoreCount.gscore += 1;
}