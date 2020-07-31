// Singly Linked List
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    let curNode = this.head;
    let prevNode = null;

    if (curNode === null) {
      this.head = new Node(value, this.head);
      return;
    }

    while (curNode !== null) {
      prevNode = curNode;
      curNode = curNode.next;
    }

    prevNode.next = new Node(value, null);
  }

  setHead(index) {
    if (index === 0) return 'Complete';

    let curNode = this.head;

    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
      if (curNode === null) {
        return `This list has lower index than ${index}`;
      }
    }
    this.head = curNode;
  }

  access(index) {
    let curNode = this.head;
    if (index === 0) return curNode;

    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
      if (curNode === null) {
        return `This list has lower index than ${index}`;
      }
    }
    return curNode.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.append(value);
      return 'Complete';
    }

    let curNode = this.head;
    let prevNode = null;

    for (let i = 0; i < index; i++) {
      prevNode = curNode;
      curNode = curNode.next;
      if (curNode === null) {
        return `This list has lower index than ${index}`;
      }
    }
    prevNode.next = new Node(value, curNode);
    return 'Complete';
  }

  remove(index) {
    let curNode = this.head;
    let prevNode = null;

    for (let i = 0; i < index; i++) {
      prevNode = curNode;
      curNode = curNode.next;
      if (curNode === null) {
        return `This list has lower index than ${index}`;
      }
    }
    prevNode.next = curNode.next;
  }

  print() {
    let value = [];
    let curNode = this.head;

    if (curNode === null) {
      console.log([]);
      return;
    }

    while (curNode !== null) {
      value.push(curNode.value);
      curNode = curNode.next;
    }

    return value;
  }
}

myList = new SinglyLinkedList();
