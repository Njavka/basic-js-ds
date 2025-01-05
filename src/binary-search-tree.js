const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    const insertNode = (node) => {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insertNode(node.left);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          insertNode(node.right);
        }
      }
    };

    insertNode(this.rootNode);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    const searchNode = (node) => {
      if (!node) return null;
      if (data === node.data) return node;
      return data < node.data ? searchNode(node.left) : searchNode(node.right);
    };

    return searchNode(this.rootNode);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
      } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
      } else {
          if (!node.left && !node.right) return null;
          if (!node.left) return node.right;
          if (!node.right) return node.left;

          let minRight = this.min(node.right);
          node.data = minRight;
          node.right = removeNode(node.right, minRight);
          return node;
      }
  };

  this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let currentNode = this.rootNode;
    if (!currentNode) return null;

    while (currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    if (!currentNode) return null;

    while (currentNode.right) {
        currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};