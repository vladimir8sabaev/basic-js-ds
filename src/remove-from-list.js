const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}

function convertArrayToList(arr) {
	return arr.reverse().reduce((acc, cur) => {
		if (acc) {
			const node = new ListNode(cur);
			node.next = acc;
			return node;
		}
		return new ListNode(cur);
	}, null);
}
let arr = [];
function printList(list) {
	let i = 0;
	arr = [];
	while (list) {
		arr[i] = list.value;
		i++;
		list = list.next;
	}
}

function removeKFromList(l, k) {
	printList(l);
	console.log("arr:", arr);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === k) {
			arr.splice(i, 1);
			i--;
		}
	}
	console.log("filter", arr);
	return convertArrayToList(arr);
}

module.exports = {
	removeKFromList,
};
