import { Stack } from "./Stack.js";

function sayHello() {
  console.log("Hello");
}

function sayHi() {
  console.log("Hi");
}

function sayBye() {
  console.log("Bye");
}

function sayName() {
  console.log("Faraz");
}

const s1 = new Stack();
s1.push(sayHello);
s1.push(sayHi);
s1.push(sayBye);
s1.push(sayName);
// console.log(s1.peek());
// const poppedElement = s1.pop();
// poppedElement();

// const poppedElement2 = s1.pop();
// poppedElement2();

// const poppedElement3 = s1.pop();
// poppedElement3();

// const poppedElement4 = s1.pop();
// poppedElement4();
// console.log(s1.peek());
console.log(s1.printStack());
