/*
    Binary tree implementation
    Depth-first traversal
    Breadth-first traversal
        - Pre-Order (NLR)
        - In-Order (LNR)
        - Post-Order (LRN)
*/

class Tree {
    constructor(value) {
        this.root = null
    }

    insert(newNode) {
        if(this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if(newNode.value < node.value) {
            if(node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}