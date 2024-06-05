import { Stack } from "./Stack.js";

export class TextEditor {
  constructor() {
    this.currentState = "";
    this.undoStack = new Stack();
    this.redoStack = new Stack();
  }

  addText(newText) {
    this.undoStack.push(this.currentState);
    this.currentState += newText;
    this.redoStack = new Stack(); // Clear redo stack on new action
    this.display();
  }

  undo() {
    if (!this.undoStack.isEmpty()) {
      this.redoStack.push(this.currentState);
      this.currentState = this.undoStack.pop();
    } else {
      console.log("Nothing to undo");
    }
    this.display();
  }

  redo() {
    if (!this.redoStack.isEmpty()) {
      this.undoStack.push(this.currentState);
      this.currentState = this.redoStack.pop();
    } else {
      console.log("Nothing to redo");
    }
    this.display();
  }

  display() {
    console.log(this.currentState);
  }
}

// Example Usage
const notepad = new TextEditor();

notepad.addText("Hello, ");
notepad.addText("world!");
// Current state: "Hello, world!"

notepad.undo();
// Current state: "Hello, "

notepad.undo();
// Current state: ""

notepad.redo();
// Current state: "Hello, "

notepad.redo();
// Current state: "Hello, world!"

notepad.undo();
// Current state: "Hello, "

notepad.addText("everyone!");
// Current state: "Hello, everyone!"

notepad.redo();
// Nothing to redo (redo stack is cleared on new action)
