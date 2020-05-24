export class SinglyLinkedListNode<T> {
  value: T;
  next: SinglyLinkedListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  private head: SinglyLinkedListNode<T> | null;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value: T) {
    const newNode = new SinglyLinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addLast(value: T) {
    const newNode = new SinglyLinkedListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.size++;
      return;
    }
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
      const itemToRemove = this.head!;
      this.head = null;
      this.size--;
      return itemToRemove.value;
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
    }
    return this.head!.value;
  }

  peekLast() {
    if (this.isEmpty()) {
      return undefined;
    }
    let last = this.head!;
    while (last.next != null) {
      last = last.next;
    }
    return last.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  get length() {
    return this.size;
  }
}
