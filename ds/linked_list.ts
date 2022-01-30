class MyLinkedList {
    head: object;

    constructor(val: any) {
        this.head = {
            val: val || null,
            next: null
        } 
    }

    get(index: number): number {
        
    }

    addAtHead(val: number): void {
        this.head.val = val;
    }

    addAtTail(val: number): void {

    }

    addAtIndex(index: number, val: number): void {

    }

    deleteAtIndex(index: number): void {

    }
}