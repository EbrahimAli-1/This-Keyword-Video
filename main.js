/*
// This in Global Object => (Window)
console.log(this);

// Function executes This in Global Object => (Window)
function global() {
  console.log(this);
}
global();
*/

/*
// Function executes This in Object => (Object)
function welcome(period) {
  period == "morning"
    ? console.log(`${this.name} says ${this.morningHi}`)
    : period === "evening"
    ? console.log(`${this.name} says ${this.eveningHi}`)
    : console.log(`what kind of greeting do you want to say?!`);
}
const person1 = {
  name: "Ahmed",
  morningHi: "good morning everyone!",
  eveningHi: "good evening everyone!!",
  welcome: welcome,
};
person1.welcome("morning");
*/

/*
//============================= Function Methods =============================
// Function.call()
const person2 = {
  name: "Ibrahim",
  morningHi: "guten tag jeder mensch!",
  eveningHi: "guten abend jeder mensch!!",
};
// Global Function
welcome.call(person2, "morning");
// Object Function
person1.welcome.call(person2, "evening");
*/

/*
// Function.apply()
const person3 = {
  name: "Mohammed",
  morningHi: "bonjour tout le monde!",
  eveningHi: "bonsoir tout le monde!!",
};
// Global Function
welcome.apply(person3, ["morning"]);
// Object Function
person1.welcome.apply(person3, ["evening"]);
*/

/*
// Function.bind()

// Global Function
const welcomeVar1 = welcome.bind(person2, "morning");
welcomeVar1();
// Object Function
const welcomeVar2 = person1.welcome.bind(person2);
welcomeVar2();
*/

/*
// Callback Function
function callbackFunc1() {
  console.log(this);
  console.log("#####################################");

  setTimeout(function () {
    console.log(this);
  }, 1000);

  setTimeout(() => {
    console.log(this);
  }, 2000);
}
// callbackFunc1();

const person = {
  name: "Ali",
  callbackFunc1,
};
person.callbackFunc1();
*/

/*
function callbackFunc2(arr = []) {
  arr.map(function (e) {
    console.log(e);
    console.log(this);
  });
  console.log("##################################### \n".repeat(3));

  arr.map((e) => {
    console.log(e);
    console.log(this);
  });
}
// callbackFunc2([1, 2, 3, 4, 5]);
const arr = [1, 2, 3, 4, 5];

const person = {
  name: "Ali",
  callbackFunc2,
};
person.callbackFunc2(arr);
*/
