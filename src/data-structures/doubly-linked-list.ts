export class DoublyLinkedListNode<T> {
  value: T;
  next: DoublyLinkedListNode<T> | null;
  prev: DoublyLinkedListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  private head: DoublyLinkedListNode<T> | null;
  private tail: DoublyLinkedListNode<T> | null;
  private size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFirst(value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    newNode.next = this.head;
    this.head!.prev = newNode;
    this.head = newNode;
    this.size++;
  }

  addLast(value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    newNode.prev = this.tail;
    this.tail!.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      return undefined;
    }
    const itemToRemove = this.head!;
    this.head = this.head!.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return itemToRemove.value;
  }

  removeLast() {
    if (this.isEmpty()) {
      return undefined;
    }
    const itemToRemove = this.tail!;
    this.tail = this.tail!.prev;
    if (this.tail === null) {
      this.head = null;
    }
    this.size--;
    return itemToRemove.value;
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
    return this.tail!.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  get length() {
    return this.size;
  }
}
