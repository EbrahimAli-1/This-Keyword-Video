/*
// This in Global Object => (Window)
console.log(this);

// Function executes This in Global Object => (Window)
function global() {
  console.log(this);
}
global();

// Strict Mode
function global() {
  console.log(`${this.name} says Hello!!`);
  console.log(`${this.username} says Hi!!`);
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
welcome("morning");
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
// Callback Function && Arrow Function
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
function callbackFunc2() {
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

/*
const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");

btn1.addEventListener("click", function () {
  console.log("THIS IS:", this);
  console.log("#####################################");
});

btn2.addEventListener("click", () => {
  console.log("THIS IS:", this);
  console.log("#####################################");
});
*/

/*
// Constructon Function
function Game(gameName, gameVersion) {
  this.name = gameName;
  this.version = gameVersion;
  this.details = function () {
    console.log(`This is:`, this);
    console.log(`The game is ${this.name} and the version is ${this.version}`);
  };
}

const game1 = new Game("COD", "V4");
console.log(game1);
game1.details();

const game2 = new Game("Fortnite", "Story mode");
console.log(game2);
game2.details();
*/

/*
// Classes
class Game {
  constructor(gameName, gameVersion) {
    this.name = gameName;
    this.version = gameVersion;
  }

  static checkGame() {
    console.log(this);
  }

  details(requires) {
    console.log(
      `This game is ${this.name} and the virsion is ${this.version}, It requires ${requires}`
    );
  }
}

const game1 = new Game("Fortnite", "Story Mood");
console.log(game1);
game1.details("High-performance PC");
*/
