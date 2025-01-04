//link_list.mjs
import { Node } from "./node.mjs"

export class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.tail = newNode;
        }
        this.size++;
    }

    size(){
        return this.size;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }

    at(index){
       if (index < 0 || index >= this.size) return null;
       let current = this.head;
       for(let i = 0; i< index; i++){
        current = current.nextNode;
       }
       return current;
    }

    pop(){
        if( this.size === 0) return null;
        if( this.size === 1){
            const poppedNode = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return poppedNode;
        }
        let current = this.head;
        while (current.nextNode !== this.tail) {
        current = current.nextNode;
        } 
        const poppedNode = this.tail;
        this.tail = current;
        this.tail.nextNode = null;
        this.size--;
        return poppedNode;
    }

    contains(value){
        let current = this.head;
        while(current) {
            if(current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value){
        let current = this.head;
        let index = 0;
        while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
        }
        return null;
  }

    toString(){
        let result ="";
        let current = this.head;
        while (current) {
            result += `( ${current.value} ) => `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }
}