/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {
  console.log("I don't know what to do!");
  if (hungry === true && availableTime < 20) {
    console.log("Go pick something up!");
  } else if (hungry === true && availableTime >= 20 && availableTime <= 30) {
    console.log("Take a break and treat yourself to Gastown");
  } else if (availableTime > 30) {
    console.log("This is a bootcamp... are you sure you have more than 30 minutes?");
  } else {
    console.log("Wait to take a break until you are hungry")
  }
}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");
// Take a break and treat yourself to Gastown
console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");
// this is bootcamp... are you sure you have more than 30 minutes?
console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");
// wait to take a break until you are hungry
console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
// Go pick something up