const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor (){
	  this.Root = new Node();
  }
  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	if (this.Root.data){
		return this.Root;
	} else {return null;}
  }

  add(data, node=this.Root) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	function addData(data, node){
		if(isNaN(node.data)){
			node.data = data;
		} else if (node.data < data){
			if (node.right == null){
				node.right = new Node(data);
			} else {
				addData(data, node.right);
			}
		} else if (node.data > data){
			if (node.left == null){
				node.left = new Node(data);
			} else {
				addData(data, node.left);
			}
		}
	}
	addData(data, node);
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	function find(data, node){
		if (node.data == undefined){
			return false;
		} else if (data == node.data){
			return true;
		} else if (data > node.data){
			if (node.right == null){
				return false;
			} else {
				return find(data, node.right);
			}
		} else if (data < node.data){
			if (node.left == null){
				return false;
			} else {
				return find(data, node.left);
			}
		}
	}
	console.log(data);
	return find(data, this.Root);
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	function find(data, node){
		if (node.data == undefined){
			return null;
		} else if (data == node.data){
			return node;
		} else if (data > node.data){
			if (node.right == null){
				return null;
			} else {
				return find(data, node.right);
			}
		} else if (data < node.data){
			if (node.left == null){
				return null;
			} else {
				return find(data, node.left);
			}
		}
	}
	return find(data, this.Root);
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	function remove(data, Root){
		let currentNode = Root;
		let parentNode = Root;
		let isLeftChild = true;
		if (currentNode.data == undefined){
			return false;
		} else if (Root.data == data && Root.right == null && Root.left == null){
			Root.data = null;
			return true;
		}
		while (currentNode != null){
			if (currentNode.data == data){
				if (currentNode.right == null && currentNode.left == null){
					//console.log('On the right way');
					//console.log('isLeftChild: ' + isLeftChild);
					if (isLeftChild){
						/*console.log('On the right way');
						console.log(parentNode);
						console.log(parentNode.left);*/
						parentNode.left = null;
					} else {
						parentNode.right = null;
					}
					return true;
				} else if (currentNode.right == null){
					currentNode.data = currentNode.left.data;
					currentNode.right = currentNode.left.right;
					currentNode.left = currentNode.left.left;
					return true;
				} else if (currentNode.left == null){
					currentNode.data = currentNode.right.data;
					currentNode.left = currentNode.right.left;
					currentNode.right = currentNode.right.right;
					return true;
				} else {
					if (currentNode.right.left == null && currentNode.right.right == null){
						currentNode.data = currentNode.right.data;
						currentNode.right = null;
						return true;
					} else if (currentNode.right.left == null && currentNode.right.right != null){
						currentNode.data = currentNode.right.data;
						currentNode.right = currentNode.right.right;
						return true;
					}
					const MinNode = min(currentNode.right);
					currentNode.data = MinNode.data;
				}
			}
			parentNode = currentNode;
			if (data > currentNode.data){
				currentNode = currentNode.right;
				isLeftChild = false;
			} else  {
				currentNode = currentNode.left;
				isLeftChild = true;
			}
		}
	}
	remove(data, this.Root);
	function min(node){
		let currentNode = node;
		let parentNode = node;
		while (currentNode.left != null){
			parentNode = currentNode;
			currentNode = currentNode.left;
		}
		parentNode.left = currentNode.right;
		return currentNode;
	}
  }

  min(node=this.Root) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	function min(node){
		if (node.left == null){
			return node.data;
		} else {
			return min(node.left);
		}
	}
	return min(node);
  }

  max(node=this.Root) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		function max(node){
		if (node.right == null){
			return node.data;
		} else {
			return max(node.right);
		}
	}
	return max(node);
  }

}