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

  removeData(deleteData) {
    if (this.root !== null && this.root.data === deleteData) {
      this.root = this.root.next;
      this.length--;
      return this;
    }

    let iter = this.root;
    while (iter.next !== null && iter.next.data !== deleteData) {
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
  console.log("Hoşgeldiniz, kaç adet veri girmek istediğinizi giriniz:");
  const nodeCount = parseInt(prompt());

  for (let i = 1; i <= nodeCount; i++) {
    console.log(i + ". Değeri giriniz:");
    const value = prompt();
    list.addData(value);
  }

  console.log("...........................................................");
  console.log("a -> veri sil\nb -> eleman sayısını gör\nc -> listeyi tersten yazdır\nd -> verinin indis değerini gör\n");
  console.log("Yapmak istediğiniz işlemi yazınız...");

  const choice = prompt();

  switch (choice) {
    case 'a':
      console.log("Silmek istediğiniz verinin değerini giriniz:");
      const valueToDelete = prompt();
      list.removeData(valueToDelete);
      list.print();
      break;

    case 'b':
      console.log(list.length);
      break;

    case 'c':
      list.reversePrint();
      break;

    case 'd':
      console.log("Aranacak veriyi giriniz:");
      const arananDeger = prompt();
      list.search(arananDeger);
      break;

    default:
      console.log("Yanlış seçim. Programdan çıkılıyor.");
      break;
  }
}

main();
