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
	console.log(data);
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

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	function find(data, node, Root=null){
		if (data == node.data){
			remove(node, Root);
		} else if (data > node.data){
			if (node.right != null){
				return find(data, node.right, node);
			}
		} else if (data < node.data){
			if (node.left != null){
				return find(data, node.left, node);
			}
		}
	}
	function remove(node, Root){
		if (node.right == null && node.left == null){
			Root = null;
		} else if (node == this.Root){
			this.Root.data == null;
			this.Root.right == null;
			this.Root.left == null;
		} else if (node.right == null){
			Root = node.left;
		} else if (node.left == null){
			Root = node.right;
		} else {
			DeleteNode = node;
			node = min(DeleteNode.right);
			node.right = DeleteNode.right;
			node.left = DeleteNode.left;
			DeleteNode.right = null;
			DeleteNode.left = null;
		}
		function min(node){
			if (node.left == null){
				return node;
			} else {
				return min(node.left);
			}
		}
	}
	find(data, this.Root);
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

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}