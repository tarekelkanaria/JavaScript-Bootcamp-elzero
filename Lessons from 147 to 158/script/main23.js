// Lessons from 147 to 158 Tasks
// Assignment 1
/*
convert the function constructor below to class and print the required result
function Car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}
*/
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}
let raptor = new Car("MG", "2022", 420000);
let testarossa = new Car("ferrari", "2000", 200000);
let gladiator = new Car("jeep", "2021", 800000);
console.log(
  `Car One Name Is ${raptor.n} And Model Is ${raptor.m} And Price Is ${raptor.p}`
);
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
console.log(raptor.run()); // "Car Is Running Now"

// Assignment 2
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size ? size : "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);
console.log(`${TabletOne.fullDetails()}`); // iPad Serial is 100200300 And Size Is 12.9
console.log(`${TabletTwo.fullDetails()}`); // Nokia Serial is 350450650 And Size Is 10.5
console.log(`${TabletThree.fullDetails()}`); // LG Serial is 250450650 And Size Is Unknown

// Assignment 3
// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = `${card}`.match(/(\d{4})/g).join("-");
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }
}
let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);
console.log(userOne.showData); // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
console.log(userTwo.showData); // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
console.log(userThree.showData); // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
console.log(userOne.c); // Undefined

// Assignment 4
String.prototype.addLove = () => `I Love Elzero Web School`;
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// Assignment 5
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};
Object.defineProperties(myObj, {
  id: {
    enumerable: false,
  },
  score: {
    writable: false,
  },
  country: {
    configurable: true,
  },
});
delete myObj.country;
myObj.score = 500;
for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`); // "username => Elzero" "score => 1000"
}
console.log(myObj); // {username: 'Elzero', score: 1000, id: 100}
