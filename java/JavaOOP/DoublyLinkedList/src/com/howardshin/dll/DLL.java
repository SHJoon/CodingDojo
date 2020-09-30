package com.howardshin.dll;

public class DLL {
	public Node head;
    public Node tail;
    
    public DLL() {
        this.head = null;
        this.tail = null;
    }
    
    // the push method will add a new node to the end of the list
    public void push(Node newNode) {
        // if there is no head in the list, aka, an empty list, we set the newNode to be the head and tail of the list
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        // first find the lastNode in the list
        // then, set the lastNode's next to be the newNode;
        // then, we have to set the previous of the lastNode to the lastNode that we found previously.
        // finally, set the list's tail to be the node that we have added
        Node lastNode = this.tail;
        lastNode.next = newNode;
        newNode.previous = lastNode;
        this.tail = newNode;
    }
    
    public void printValuesForward() {
        // find the first node, aka head.
        Node current = this.head;
        
        // while the current node exists...
        while(current != null) {
            // print it's value
            System.out.println(current.value);
            // and move on to it's next node.
            current = current.next;
        }
    }
    
    public void printValuesBackward() {
    	Node current = this.tail;
    	while(current != null) {
    		System.out.println(current.value);
    		current = current.previous;
    	}
    }
    
    public Node pop() {
    	Node lastNode = this.tail;
    	this.tail = this.tail.previous;
    	lastNode.previous = null;
    	return lastNode;
    }
    
    public boolean contains(Integer value) {
    	Node current = this.head;
    	while(current != null) {
    		if (current.value == value) {
    			return true;
    		}
    		current = current.next;
    	}
    	return false;
    }
    
    public int size() {
    	int count = 0;
    	Node current = this.head;
    	while(current != null) {
    		count++;
    		current = current.next;
    	}
    	return count;
    }
    
    private void addToFront(Node newNode) {
    	if (this.head == null) {
    		this.head = newNode;
    		this.tail = newNode;
    	}
    	else {
    		newNode.next = this.head;
    		this.head.previous = newNode;
    		this.head = newNode;    		
    	}
    }
    
    private void addToBack(Node newNode) {
    	if (this.head == null) {
    		this.head = newNode;
    		this.tail = newNode;
    	}
    	else {
    		newNode.previous = this.tail;
        	this.tail.next = newNode;
        	this.tail = newNode;		
    	}
    }
    
    public void insertAt(Node newNode, int index) {
    	if (index == 0) {
    		this.addToFront(newNode);
    	}
    	else {
    		Node current = this.head;
    		for (int i = 0; i < index; i++) {
    			current = current.next;
    		}
    		if (current.next == null) {
    			this.addToBack(newNode);
    		}
    		else {    			
    			newNode.next = current;
    			newNode.previous = current.previous;
    			current.previous.next = newNode;
    			current.previous = newNode;    		
    		}
    	}
    }
    
    public void removeAt(int index) {
    	if (index == 0) {
    		this.head.next.previous = null;
    		this.head = this.head.next;
    	}
    	Node current = this.head;
    	for (int i = 0; i < index; i++) {
			current = current.next;
		}
    	if (current.next == null) {
    		current.previous.next = null;
    		current.previous = null;
    	}
    	else {
    		current.previous.next = current.next;
    		current.next.previous = current.previous;
    		current.next = null;
    		current.previous = null;    		
    	}
    }
    
    public boolean isPalindrome() {
    	Node frontRunner = this.head;
    	Node backRunner = this.tail;
    	
    	while (frontRunner != backRunner) {
    		if (frontRunner.value != backRunner.value) {
    			return false;
    		}
    		if (frontRunner.next == backRunner) {
    			break;
    		}
    		frontRunner = frontRunner.next;
    		backRunner = backRunner.previous;
    	}
    	return true;
    }
}
