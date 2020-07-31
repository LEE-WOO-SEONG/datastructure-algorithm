class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = 0;
    this.array = new Array(capacity);
  }

  push(value) {
    if (this.top === this.capacity) {
      throw new Error('Overflow!');
    }

    this.array[this.top++] = value;
  }

  // pop: top을 움직이면서 기존값을 삭제하거나 바꾸지 않고 참조만 바꿈.
  pop() {
    if (this.isEmpty()) throw new Error('Underflow!');

    return this.array[--this.top];
  }

  peek() {
    if (this.top === 0) return 'Stack is Empty!';

    return this.array[this.top - 1];
  }

  isEmpty() {
    if (this.top === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const stack = new Stack(10);
