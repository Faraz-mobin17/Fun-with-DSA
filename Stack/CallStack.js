import { Stack } from "./Stack.js";

export class CallStack {
  constructor() {
    this.stack = new Stack();
  }

  addFunctionToStack(func) {
    this.stack.push(func);
  }

  runStack() {
    while (!this.stack.isEmpty()) {
      const currentFunction = this.stack.pop();
      currentFunction();
    }
  }
}

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

// Example Usage
const callStack = new CallStack();

callStack.addFunctionToStack(sayHello);
callStack.addFunctionToStack(sayHi);
callStack.addFunctionToStack(sayBye);
callStack.addFunctionToStack(sayName);

callStack.runStack();
// Output:
// Faraz
// Bye
// Hi
// Hello
