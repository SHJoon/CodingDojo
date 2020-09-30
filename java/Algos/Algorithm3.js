class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Return the total amount of nodes in the list
    size(){
        let count = 0;
        let runner = this.head;

        while(runner) {
            count++;
            runner = runner.next;
        }

        return count;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront(){
        if (this.head === null) {
            return null;
        }

        let originalHead = this.head;
        this.head = this.head.next;

        return originalHead;
    }

    // bonus: add a node to the end of the list.
    addToBack(node){
        if (this.head === null) {
            this.head = node;
            return;
        }

        let runner = this.head;

        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = node;
    }

    // console log the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    // return true / false if current list contains a data equal to value
    // do not loop
    recursiveContains(val, current) {
        // if you didn't pass current, current should be the head
        if (current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if (current === null) {
            return false;
        }

        // if runner.data === value, return true up the call stack
        if (current.data === val) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(val, current.next);
    }

    // return true / false if list is empty
    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    // add node to front of list
    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    // create a node with data and add to front of list
    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
}
