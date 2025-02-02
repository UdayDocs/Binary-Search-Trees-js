// index.js
// Corrected the function name to "generateRandomArray".
import { Node, Tree } from "./bst.js";

const generateRandomArray = (size, max = 100) => {
  const arr = [];
  while (arr.length < size) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
};

// Fixed the prettyPrint function to properly print the node data.
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) return;
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "|   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "|   "}`, true);
  }
};

// 1. Create a BST with random numbers.
let randomArray = generateRandomArray(10);
console.log("Initial array:", randomArray);
let bst = new Tree(randomArray);
console.log("Initial BST (pretty printed):");
prettyPrint(bst.root);

// 2. Check if the tree is balanced.
console.log("Is the tree balanced?", bst.isBalanced());

// 3. Print out all traversals.
console.log("Level Order:");
bst.levelOrder(node => console.log(node.data));

console.log("In Order:");
bst.inOrder(node => console.log(node.data));

console.log("Pre Order:");
bst.preOrder(node => console.log(node.data));

console.log("Post Order:");
bst.postOrder(node => console.log(node.data));

// 4. Unbalance the tree by inserting several numbers > 100.
[101, 150, 200, 250, 300].forEach(num => bst.insert(num));
console.log("\nBST after inserting numbers > 100 (to unbalance):");
prettyPrint(bst.root);
console.log("Is the tree balanced?", bst.isBalanced());

// 5. Rebalance the tree.
bst.rebalance();
console.log("\nBST after rebalancing:");
prettyPrint(bst.root);
console.log("Is the tree balanced?", bst.isBalanced());

// 6. Print out all traversals after rebalancing.
console.log("Level Order (after rebalancing):");
bst.levelOrder(node => console.log(node.data));

console.log("In Order (after rebalancing):");
bst.inOrder(node => console.log(node.data));

console.log("Pre Order (after rebalancing):");
bst.preOrder(node => console.log(node.data));

console.log("Post Order (after rebalancing):");
bst.postOrder(node => console.log(node.data));
