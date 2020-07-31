class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) return true;

    return false;
  }

  prepend(value) {
    let currNode = this.head;
    const newNode = new Node(value, null, currNode);

    this.head = newNode;

    if (currNode === null) return;

    currNode.prev = newNode;
  }

  append(value) {
    let currNode = this.head;
    let prevNode = null;

    if (currNode === null) {
      this.prepend(value);
      return;
    }

    while (currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    const newNode = new Node(value, prevNode, null);
    prevNode.next = newNode;
    return;
  }

  setHead(index) {
    if (index === 0) return;

    let currNode = this.head;
    let prevNode = null;

    for (let i = 0; i < index; i++) {
      if (currNode === null || currNode.next === null) {
        throw new Error(`This List do not have index: ${index}`);
      }

      currNode = currNode.next;
    }

    this.head = currNode;
    currNode.prev = null;
  }

  access(index) {
    let currNode = this.head;

    if (index === 0) return currNode;

    for (let i = 0; i < index; i++) {
      if (currNode === null || currNode.next === null) {
        throw new Error(`This List do not have index: ${index}`);
      }

      currNode = currNode.next;
    }

    return currNode;
  }

  insert(index, value) {
    // 첫번째에 노드 삽입
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let currNode = this.head;

    // index에 해당하는 요소 탐색
    for (let i = 0; i < index; i++) {
      if (currNode === null || currNode.next === null) {
        throw new Error(`This List do not have index: ${index}`);
      }

      // currNode.prev = currNode;
      currNode = currNode.next;
    }

    // 마지막 요소 삽입
    if (currNode.next === null) {
      this.append(value);
      return;
    }

    const prevNode = currNode.prev;

    const newNode = new Node(value, prevNode, currNode);
    prevNode.next = newNode;
    currNode.prev = newNode;
  }

  remove(index) {
    // 첫번째 노드 제거
    if (index === 0) {
      this.setHead(1);
      return;
    }

    let currNode = this.head;

    // index에 해당하는 노드 탐색
    for (let i = 0; i < index; i++) {
      if (currNode === null || currNode.next === null) {
        throw new Error(`This List do not have index: ${index}`);
      }

      currNode = currNode.next;
    }

    // 마지막 노드 제거
    if (currNode.next === null) {
      const prevNode = currNode.prev;

      prevNode.next = null;
      currNode.prev = null;
      return;
    }

    const nextNode = currNode.next;
    const prevNode = currNode.prev;

    nextNode.prev = prevNode;
    prevNode.next = nextNode;
    currNode.prev = null;
    currNode.next = null;
  }

  print() {
    const nodeList = [{ ...this }];

    let currNode = this.head;
    let prevNode = null;

    while (currNode !== null) {
      nodeList.push(new Node(currNode.value, currNode.prev, currNode.next));
      currNode = currNode.next;
    }

    console.log(nodeList);
  }
}

const myList = new DoublyLinkedList();

myList.append(3);
myList.prepend(2);
myList.append(4);
myList.prepend(1);

// myList.setHead(2);
// myList.setHead(3);
// console.log(myList.access(2));
// console.log(myList.access(3));

// myList.insert(3, 50);
// myList.insert(2, 50);

// myList.remove(2);
myList.print();
