//LivesDecreaseCounter.js
//created by Alexander Man
//Decreases the lives by 2 when red cube touches the player
//accessed on November 15th, 2015



function OnTriggerEnter (info : Collider) {
LivesCounter.gslives -= 2;
}