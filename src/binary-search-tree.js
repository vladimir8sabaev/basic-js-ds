const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.core = null;
	}
	root() {
		return this.core;
	}

	add(data) {
		let newNode = new Node(data);
		if (this.core === null) {
			this.core = newNode;
			return;
		} else {
			this.pasteNode(this.core, newNode);
		}
	}
	pasteNode(node, newNode) {
		if (newNode.data < node.data) {
			node.left === null
				? (node.left = newNode)
				: this.pasteNode(node.left, newNode);
		} else {
			node.right === null
				? (node.right = newNode)
				: this.pasteNode(node.right, newNode);
		}
	}
	has(data) {
		return searchNode(this.core, data) ? true : false;
		function searchNode(node, value) {
			if (node === null) {
				return null;
			}
			if (value === node.data) {
				return node;
			} else if (value < node.data) {
				return searchNode(node.left, value);
			} else if (value > node.data) {
				return searchNode(node.right, data);
			}
		}
	}
	find(data) {
		return searchNode(this.core, data);
		function searchNode(node, value) {
			if (node === null) {
				return null;
			}
			if (value === node.data) {
				return node;
			} else if (value < node.data) {
				return searchNode(node.left, value);
			} else if (value > node.data) {
				return searchNode(node.right, data);
			}
		}
	}

	remove(data) {}

	min() {
		let node = this.core;
		while (node.left !== null) {
			node = node.left;
		}
		return node.data;
	}

	max() {
		let node = this.core;
		while (node.right !== null) {
			node = node.right;
		}
		return node.data;
	}
}

module.exports = {
	BinarySearchTree,
};
