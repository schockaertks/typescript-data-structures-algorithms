export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: LinkedListNode<T> | null;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value: T) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addLast(value: T) {
    if (this.isEmpty()) {
      this.addFirst(value);
      return;
    }
    const newNode = new LinkedListNode(value);
    let last = this.head!;
    while (last.next != null) {
      last = last.next;
    }
    last.next = newNode;
    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      return undefined;
    }
    const itemToRemove = this.head!;
    this.head = this.head!.next;
    this.size--;
    return itemToRemove.value;
  }

  removeLast() {
    if (this.isEmpty()) {
      return undefined;
    } else if (this.size === 1) {
      return this.removeFirst();
    } else {
      let secondToLast = this.head!;
      while (secondToLast.next!.next != null) {
        secondToLast = secondToLast.next!;
      }
      const itemToRemove = secondToLast.next!;
      secondToLast.next = null;
      this.size--;
      return itemToRemove.value;
    }
  }

  peekFirst() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.head!.value;
    }
  }

  peekLast() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      let last = this.head!;
      while (last.next != null) {
        last = last.next;
      }
      return last.value;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  get length() {
    return this.size;
  }
}
