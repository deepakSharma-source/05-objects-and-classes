// 05 Objects and Classes

/**
 *
 * Encapsulation
 *
 */

// Define an object named babyPrototype with a method named speak that returns the string "goo goo ga ga"
const babyPrototype = {
  // Your Code Here
};

// define a function named createBaby that takes two arguments name and age
// the function should create a new object using Object.create and the babyPrototype as the prototype of the new object
// the function should set the name and age properties on the new object
// the function should return the new object
function createBaby(name, age) {
  // Your Code Here
}

// define a function named makeWarfaAndSpeak that creates a baby named Warfa with age 1
// the function should return the result of calling the speak method on Warfa
function makeBabyAndSpeakOne() {
  // Your Code Here
}

// The baby is learning fast!
// define a method on the babyPrototype named sayName that returns "My name is " + the name of the baby
// Your Code Here
babyPrototype.sayName = function () {};

// define a function named makeBabyAndSayName that creates a baby named Warfa with age 1
// the function should return the value of calling the sayName method on Warfa
function makeBabyAndSayNameOne() {
  // Your Code Here
}

/**
 *
 * The `new` keyword = syntactical sugar
 *
 */

// define a function named Baby that takes two arguments name and age
// the function should set the name and age properties on the new object
// HINT: use the `this` keyword.
// HINT: We wont't need to use Object.create here or to return anything
function Baby(name, age) {
  // Your Code Here
}

// define a method on the Baby prototype named speak that returns the string "goo goo ga ga"
Baby.prototype.speak = function () {
  // Your Code Here
};

// define a function named makeBabyAndSpeak that creates a baby named Warfa with age 1
// the function should return the value of calling the speak method on Warfa
function makeBabyAndSpeakTwo() {
  // Your Code Here
}

// define a method on the Baby prototype named sayName that returns "My name is " + the name of the baby
// Your Code Here
Baby.prototype.sayName = function () {};

// define a function named makeBabyAndSayName that creates a baby named Warfa with age 1
// the function should return the value of calling the sayName method on Warfa
function makeBabyAndSayNameTwo() {
  // Your Code Here
}

/**
 *
 * Classes
 *
 */

// fill in the class definition for BabyClass

class BabyClass {
  constructor(name, age) {
    // Your Code Here
  }

  speak() {
    // Your Code Here
  }

  sayName() {
    // Your Code Here
  }
}

// makeBabyClassAndSayName should create a baby named Warfa with age 1
// the function should return the value of calling the speak method on Warfa
function makeBabyClassAndSpeak() {
  // Your Code Here
}

// makeBabyClassAndSayName should create a baby named Warfa with age 1
// the function should return the value of calling the sayName method on Warfa
function makeBabyClassAndSayName() {
  // Your Code Here
}

/**
 *
 * Inheritance
 *
 */

// define a class named Todler that extends the Baby class

// Define a ToddlerClass that extends BabyClass
class ToddlerClass extends BabyClass {
  constructor(name, age) {}

  // Override the speak method
  speak() {}

  // New method specific to ToddlerClass
  growUp() {}
}

// makeToddlerClassAndSpeak should create a toddler named Tina with age 2
// the function should return the value of calling the speak method on Tina
function makeToddlerClassAndSpeak() {}

// makeToddlerClassAndWalk should create a toddler named Tina with age 2
// the function should return the value of calling the walk method on Tina
function makeToddlerClassAndWalk() {}

// makeToddlerClassAndGrowUp should create a toddler named Tina with age 2
// the function should call the growUp method on Tina
// the function should return the age of Tina
function makeToddlerClassAndGrowUp() {}
