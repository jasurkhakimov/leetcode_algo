const check_even = (num: number): boolean => num % 2 === 0;
const find_parent_index = (indx: number): number => {
    if (indx === 0) return 0;

    if (check_even(indx)) return (indx / 2) - 1;

    return ((indx + 1) / 2) - 1;
};

function Heap(arr: number[]) {
    this.heap = [];

    this.heapify = function (node) {
        this.heap.push(node);

        let current_indx = this.heap.length - 1;

        while (current_indx > 0) {
            let parent_indx = find_parent_index(current_indx);

            if (this.heap[parent_indx] < this.heap[current_indx]) {
                [this.heap[parent_indx], this.heap[current_indx]] = [this.heap[current_indx], this.heap[parent_indx]];
            }

            current_indx = parent_indx;
        }
    }

    this.buildheap = function () {
        arr.forEach(node => {
            this.heapify(node);
        })
    }

    this.pop = function() {
        if (!this.heap.length) {
            console.log("Don't have enough elements");
            return -Infinity;
        } else {
            const remove_element = this.heap[0];
            
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.length -= 1;

            let index = 0;

            while(index <= this.heap.length - 1) {
                let left = index * 2 + 1;
                let right = index * 2 + 2;

                if (this.heap[index] < this.heap[left] || this.heap[index] < this.heap[right]) {
                    if (this.heap[left] > this.heap[right]) {
                        [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]]

                        index = left;
                    } else {
                        [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]]

                        index = right;
                    }
                } else {
                    break;
                }

            }
            return remove_element;
        }
    }

}

const kst_max = function (arr: number[], k:number):number {
    let max:number = 0;
    let heap_arr = new Heap(arr);
    heap_arr.buildheap();
    

    for (let i = 0; i < k; i++) {
        if (arr.length > k) {
            max = heap_arr.pop();
        }
    }

    return max;
}

console.log(kst_max([1,5,2,3,5,1,3,5,6,8,9,96,1], 1));


function findKthLargest(nums: number[], k: number): number {
    
    const sorted = nums.sort((a,b) => a - b).reverse();

    return sorted[k - 1];
};

console.log(findKthLargest([1,5,2,3,5,1,3,5,6,8,9,96,1], 1));


