export class Stack<T> {
  private stack: T[];
  constructor() {
    this.stack = [];
  }

  push(item: T) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  get length() {
    return this.stack.length;
  }
}
