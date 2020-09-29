// expect to be pulled back into the main room at the top of the hour!!

class SLL {
    constructor(){
        this.head = null;
    }

    isEmpty(){
        // if(this.head == null){
        //     return true;
        // }
        // else {
        //     return false;
        // }

        return this.head == null;
    }

    addToFront(node){
        node.next = this.head;
        this.head = node;
    }
    addDataToFront(data){
        var newNode = new Node(data);
        this.addToFront(newNode);
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);


var mySLL = new SLL();

mySLL.isEmpty()

mySLL.addToFront(new Node(10));
mySLL.addDataToFront(10);