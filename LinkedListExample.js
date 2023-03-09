class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  addData(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let iter = this.root;
      while (iter.next !== null) {
        iter = iter.next;
      }
      iter.next = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    let iter = this.root;
    while (iter !== null) {
      console.log(iter.data + " ");
      iter = iter.next;
    }
  }

  reversePrint() {
    if (this.root === null) {
      return;
    }

    let prev = null;
    let current = this.root;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    let iter = prev;
    while (iter !== null) {
      console.log(iter.data + " ");
      iter = iter.next;
    }
  }

  removeData(ValueToBeDeleted) {
    if (this.root !== null && this.root.data === ValueToBeDeleted) {
      this.root = this.root.next;
      this.length--;
      return this;
    }

    let iter = this.root;
    while (iter.next !== null && iter.next.data !== ValueToBeDeleted) {
      iter = iter.next;
    }

    if (iter.next === null) {
      console.log("Error: The specified data does not exist in the linked list.");
    } else {
      iter.next = iter.next.next;
      this.length--;
    }
    return this;
  }

  search(data) {
    let iter = this.root;
    let position = 0;
    while (iter !== null) {
      if (iter.data === data) {
        console.log(`The specified data is at position ${position + 1} and index ${position}.`);
        return position;
      }
      position++;
      iter = iter.next;
    }
    console.log("Error: The specified data does not exist in the linked list.");
    return -1;
  }
}

function main() {
  const list = new LinkedList();
  console.log("Welcome, enter how many Node you want to add:");
  const nodeCount = parseInt(prompt());

  for (let i = 1; i <= nodeCount; i++) {
    console.log("Enter the "+ i +". data:");
    const value = prompt();
    list.addData(value);
  }

  console.log("...........................................................");
  console.log("a -> Delete Node\nb -> See number of Nodes\nc -> Print the list in reverse\nd -> See the index value of the Node\n");
  console.log("Enter the letter for the action you want to do");

  const choice = prompt();

  switch (choice) {
    case 'a':
      console.log("Enter the data of the node you want to delete:");
      const valueToDelete = prompt();
      list.removeData(valueToDelete);
      console.log("...........................................................");
      list.print();
      break;

    case 'b':
      console.log("...........................................................");
      console.log(list.length);
      break;

    case 'c':
      console.log("...........................................................");
      list.reversePrint();
      break;

    case 'd':
      console.log("Enter the Node to be searched:");
      const DataToSearch = prompt();
      console.log("...........................................................");
      list.search(DataToSearch);
      break;

    default:
      console.log("Wrong selection, program closing...");
      break;
  }
}

main();
