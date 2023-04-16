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
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.pasteNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.pasteNode(node.right, newNode);
			}
		}
	}
	has(data) {
		if (searchNode(this.core, data)) {
			return true;
		} else {
			return false;
		}
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

	min() {}

	max() {}
}

module.exports = {
	BinarySearchTree,
};
