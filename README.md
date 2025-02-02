# Binary Search Tree (BST) Project

This project demonstrates the implementation and functionality of a Binary Search Tree (BST) using JavaScript. It covers operations like insertion, deletion, traversal, height calculation, rebalancing, and more.

## Features

- Build a balanced BST from an array.
- Insert and delete nodes.
- Check if the BST is balanced.
- Traverse the BST in different orders (level-order, in-order, pre-order, post-order).
- Rebalance the BST when it becomes unbalanced.

## Directory Structure
```
project-directory/
  |- index.js            # Entry point of the application
  |- bst.js               # Contains BST and Node class implementations
  |- README.md            # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd project-directory
   ```

3. Install Node.js if you haven't already: [Node.js Download Page](https://nodejs.org/)

## Usage

1. Run the project:
   ```bash
   node index.js
   ```

2. The application will:
   - Create a BST with random numbers.
   - Display the initial tree.
   - Perform different types of traversals.
   - Demonstrate balancing and rebalancing operations.

## Sample Output
```
Initial array: [12, 55, 3, 7, 99, 34, 22, 87, 44, 20]
Initial BST (pretty printed):
| 99
   | 55
      | 34
         | 22
   3
      | 7
Is the tree balanced? true
Level Order:
3 7 22 34 44 55 87 99
...
```

## Functions and Operations

### `Node Class`
Defines the structure of a single node in the BST.
- `data`: Stores the value of the node.
- `left`: Pointer to the left child.
- `right`: Pointer to the right child.

### `Tree Class`
Implements the BST with the following methods:

#### Constructor
```javascript
constructor(array)
```
- Builds a balanced BST from a sorted array.

#### Insert/Delete Functions
```javascript
insert(value)
deleteItem(value)
```
- Insert or remove nodes in the BST.

#### Traversal Functions
```javascript
levelOrder(callback)
inOrder(callback)
preOrder(callback)
postOrder(callback)
```
- Traverse the BST using different strategies.

#### Tree Properties
```javascript
height(node)
depth(value)
```
- Calculate height and depth of the tree or specific nodes.

#### Balance Operations
```javascript
isBalanced()
rebalance()
```
- Check if the tree is balanced and rebalance it if necessary.

## Future Improvements
- Add visual representation for BST structure.
- Enhance error handling.
- Implement additional balancing algorithms.


