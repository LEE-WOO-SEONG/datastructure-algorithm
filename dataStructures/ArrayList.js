class ArrayList {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Int32Array(capacity);
    this.length = 0;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  prepend(value) {
    if (this.length === 0) {
      this.array[0] = value;
      this.length = 1;
      return;
    }

    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = new Int32Array(this.capacity);

      for (let i = 0; i < this.length; i++) {
        newArray[i + 1] = this.array[i];
      }

      this.array = newArray;
    } else {
      for (let i = this.length; i > 0; i--) {
        this.array[i] = this.array[i - 1];
      }
    }

    this.array[0] = value;
    this.length++;
  }

  append(value) {
    if (this.length === 0) {
      this.array[0] = value;
      this.length = 1;
      return;
    }

    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = new Int32Array(this.capacity);

      for (let i = 0; i < this.length; i++) {
        newArray[i] = this.array[i];
      }

      this.array = newArray;
    }

    this.array[this.length] = value;
    this.length++;
  }

  setHead(index) {
    if (index === 0) return;
    if (index > this.length - 1)
      throw new Error(`This array do not has index: ${index}`);

    const newArray = new Int32Array(this.capacity);

    for (let i = 0; i < this.length - index; i++) {
      newArray[i] = this.array[index + i];
    }

    this.array = newArray;
    this.length = this.length - index;
  }

  access(index) {
    if (index > this.length - 1)
      throw new Error(`This array do not has index: ${index}`);

    return this.array[index];
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index > this.length - 1)
      throw new Error(`This array do not has index: ${index}`);

    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = new Int32Array(this.capacity);

      for (let i = 0; i < this.length; i++) {
        if (i < index) newArray[i] = this.array[i];

        newArray[i + 1] = this.array[i];
      }

      this.array = newArray;
    } else {
      for (let i = this.length; i > index; i--) {
        this.array[i] = this.array[i - 1];
      }
    }
    this.array[index] = value;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.setHead(1);
      return;
    }

    if (index > this.length - 1)
      throw new Error(`This array do not has index: ${index}`);

    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.length--;
  }

  print() {
    console.log(this.capacity);
    console.log(this.array);
    console.log(this.length);
  }
}

const arrayList = new ArrayList(8);
// console.log(arrayList.isEmpty());

arrayList.prepend(10);
arrayList.prepend(20);
arrayList.append(6);
arrayList.append(3);
arrayList.append(2);
arrayList.append(1);

// console.log(arrayList.access(5));
arrayList.insert(2, 77);
arrayList.insert(4, 88);
arrayList.insert(3, 33);
arrayList.remove(8);
arrayList.print();
