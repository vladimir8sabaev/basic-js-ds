const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	add(value) {
		if (this.length === 0) {
			this.head = new Node(value);
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = new Node(value);
		}
		this.length++;
	}
}

class Queue {
	constructor() {
		this.arr = [];
	}
	getUnderlyingList() {
		let list = new LinkedList();
		for (let i = 0; i < this.arr.length; i++) {
			list.add(this.arr[i]);
		}
		return list.head;
	}

	enqueue(value) {
		this.arr.push(value);
	}

	dequeue() {
		let start = this.arr[0];
		this.arr.shift();
		return start;
	}
}

module.exports = {
	Queue,
};
