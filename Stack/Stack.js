export class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(element) {
    this.items.push(element);
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    this.top--;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  printStack() {
    console.log("Printing Call Stack");
    let str = "";

    for (let i = 0; i <= this.top; i++) {
      str += this.items[i] + " " + "\n";
    }
    return str;
  }

  size() {
    return this.top + 1;
  }

  clear() {
    this.items = [];
    this.top = -1;
  }

  toArray() {
    return this.items;
  }
}
