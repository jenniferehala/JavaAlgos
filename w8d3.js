class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    addToFront(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

    }

    addToBack(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }



    printList() {
        var runner = this.head
        while(runner){
            console.log(runner.value);
            runner = runner.next
            }
        }
}

    let newList = new DLL();
    newList.addToFront(1);
    newList.addToFront(2);
    newList.addToFront(3);
    newList.addToFront(4);
    newList.addtoBack(5);
    newList.addtoBack(6);
    newList.printList()
    console.log(newList.tail)