//link_list.mjs
import { Node } from "./node.mjs"

export class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){ //เพิ่ม Node ใหม่เข้าไปที่ ท้ายลิสต์
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

    prepend(value){ //เพิ่ม Node ใหม่เข้าไปที่ หัวลิสต์
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

    at(index){ //คืนค่า Node ที่ตำแหน่งที่ระบุ (index)
       if (index < 0 || index >= this.size) return null;
       let current = this.head;
       for(let i = 0; i< index; i++){
        current = current.nextNode;
       }
       return current;
    }

    pop(){ //ลบ Node สุดท้ายของลิสต์
        if (this.size === 0) return null; // ถ้าลิสต์ว่าง
        if (this.size === 1) { // ถ้ามีเพียง Node เดียว
        const poppedNode = this.head; // เก็บ Node ที่จะลบ
        this.head = null; // ลบ head
        this.tail = null; // ลบ tail
        this.size--; // ลดขนาดของลิสต์
            return poppedNode;
    }
        let current = this.head; // เริ่มต้นที่ head
        while (current.nextNode !== this.tail) {
        current = current.nextNode; // เดินไปยัง Node ก่อน tail
    }
        const poppedNode = this.tail; // เก็บ Node ที่จะลบ
        this.tail = current; // ตั้ง tail ใหม่
        this.tail.nextNode = null; // ลบการเชื่อมต่อของ tail ใหม่
        this.size--; // ลดขนาดของลิสต์
            return poppedNode;
}   

    contains(value){ //ตรวจสอบว่าค่าที่ระบุอยู่ในลิสต์หรือไม่
        let current = this.head;
        while(current) {
            if(current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value){ //คืนค่าดัชนี (index) ของ Node ที่มีค่าตรงกัน
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