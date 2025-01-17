class LL { 

    insertNode(value){
        const node = new Node(value)
        let currentNode = this.head

        // Initial creation
        if(currentNode == undefined){
            this.head = node
            return
        } 

        while(currentNode.next){
            currentNode = currentNode.next
        } 

        currentNode.next = node

    } 

    listNodes(){
        let currentNode = this.head
        while(currentNode != undefined){
            console.log(currentNode.value)
            currentNode = currentNode.next
        } 
    } 

    deleteMiddleNode(){
        let currentNode = this.head
        let count = 0
        while(currentNode != undefined){
            currentNode = currentNode.next
            count++
        } 

        if(count > 0){
            let middle = count / 2 - 1
            let currentNode = this.head
            while(middle != 0){
                currentNode = currentNode.next
                middle--
            } 

            currentNode.next = currentNode.next.next
        } 
    } 
} 

class Node {
    constructor(value,){
        this.value = value
    } 
} 

(()=>{
    const ll = new LL()
    ll.insertNode(5)
    ll.insertNode(8)
    ll.insertNode(-3)
    ll.insertNode(10)

    ll.listNodes()

    ll.deleteMiddleNode()
    ll.listNodes()
})()