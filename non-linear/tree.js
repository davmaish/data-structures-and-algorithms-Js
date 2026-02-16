// Tree Data Structure Implementation

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

// Creating a simple tree
const root = new TreeNode("Root");

const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");

root.addChild(child1);
root.addChild(child2);

console.log("Root Node:", root.value);
console.log("Children of Root:", root.children.map(child => child.value));

