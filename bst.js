// bst.js
export class Node {
    constructor(data) {
      this.data = data; // data: holds the value.
      this.left = null; // left/right: pointers to the left and right child nodes.
      this.right = null;
    }
  }
  
  export class Tree {
    constructor(array) { // constructor: Accepts an array.
      // Remove duplicate values and sort the array.
      const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);
      this.root = this.buildTree(uniqueSortedArray); // Create a balanced BST using buildTree.
    }
  
    buildTree(array) {
      if (!array.length) return null; // Base: if array is empty, return null.
  
      const mid = Math.floor(array.length / 2); // Pick the middle element.
      const node = new Node(array[mid]); // Middle value becomes the node’s data.
  
      // Recursively build left and right subtrees.
      node.left = this.buildTree(array.slice(0, mid));
      // IMPORTANT: Use mid+1 to avoid duplicating the middle element.
      node.right = this.buildTree(array.slice(mid + 1));
  
      return node;
    }
  
    insert(value, node = this.root) {
      if (node === null) {
        // If you reach a null spot, you've found the right place.
        return new Node(value);
      }
  
      if (value === node.data) {
        // Duplicate, do not insert.
        return node;
      } else if (value < node.data) {
        // If the new value is less than the current node’s data, go left.
        node.left = this.insert(value, node.left);
      } else {
        // If the new value is greater, go right.
        node.right = this.insert(value, node.right);
      }
      return node;
    }
  
    deleteItem(value, node = this.root) {
      if (node === null) return null;
  
      if (value < node.data) {
        node.left = this.deleteItem(value, node.left);
      } else if (value > node.data) {
        node.right = this.deleteItem(value, node.right);
      } else {
        // Node found: now handle deletion cases.
        // Case 1: No child -> on BOTH left & right
        if (node.left === null && node.right === null) {
          return null;
        }
        // Case 2: One child -> but not BOTH
        else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
        // Case 3: Two children -> The node has both a left and a right child
        else {
          // Find in-order successor (smallest in right subtree).
          let successor = node.right;
          while (successor.left !== null) {
            successor = successor.left;
          }
          // Replace node's data with the successor's data.
          node.data = successor.data;
          // Delete the successor node.
          node.right = this.deleteItem(successor.data, node.right);
        }
      }
      return node;
    }
  
    find(value, node = this.root) {
      if (node === null) return null;        // Reached end of branch.
      if (node.data === value) return node; // Found the node.
      return value < node.data             //After findding the node now finding which side is it (right or Left)
        ? this.find(value, node.left)
        : this.find(value, node.right);
    }
  
    levelOrder(callback) {
      if (typeof callback !== "function") {
        throw new Error("Callback function is required");
      }
  
      const queue = [];
      queue.push(this.root);  //Start with the root, then push its children onto the queue.
      while (queue.length) { //loop continues as long as there are elements in the queue.
        let node = queue.shift(); // Remove the first element from the queue
        callback(node);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
    }
  
    inOrder(callback, node = this.root) {                   //Left subtree -> Current node -> Right subtree.
      if (typeof callback !== "function") {                //ensures a callback function is provided.
        throw new Error("Callback function is required"); //Error Handling
      }
      if (node !== null) {                    //If node=null we've reached the end of a branch
        this.inOrder(callback, node.left);   //visits all nodes in the left subtree before visiting the current node.
        callback(node);
        this.inOrder(callback, node.right);
      }
    }
  
    preOrder(callback, node = this.root) { //Current node -> Left subtree -> Right subtree.
      if (typeof callback !== "function") {
        throw new Error("Callback function is required");
      }
      if (node !== null) {
        callback(node);
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right);
      }
    }
  
    postOrder(callback, node = this.root) { // Left subtree -> Right subtree -> Current node.
      if (typeof callback !== "function") {
        throw new Error("Callback function is required");
      }
      if (node !== null) {
        this.postOrder(callback, node.left);
        this.postOrder(callback, node.right);
        callback(node);
      }
    }
  
    height(node = this.root) {       //Focuses on the longest path from a node to a leaf. It's about the maximum distance downwards.
      if (node === null) return -1; // Base: if node is null, height is -1.
      return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
  
    depth(value, node = this.root, currentDepth = 0) { //Focuses on the path from the root to a specific node. It's about the distance from the top.
      if (node === null) return -1; // Value not found.
      if (node.data === value) return currentDepth;
      if (value < node.data) {
        return this.depth(value, node.left, currentDepth + 1);
      } else {
        return this.depth(value, node.right, currentDepth + 1);
      }
    }
  
    isBalanced(node = this.root) {
      if (node === null) return true;
  
      let leftHeight = this.height(node.left);
      let rightHeight = this.height(node.right);
  
      if (Math.abs(leftHeight - rightHeight) > 1) return false; //diff between the left and right child is at most 1.
      return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
  
    // Collect all nodes in an array using in-order traversal.
    inOrderArray(node = this.root, arr = []) {
      if (node !== null) {
        this.inOrder(n => arr.push(n.data), node);
      }
      return arr;
    }
  
    rebalance() {
      const nodesData = this.inOrderArray();
      this.root = this.buildTree(nodesData);
    }
  }
  

