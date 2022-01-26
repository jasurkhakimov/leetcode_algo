function rotate(nums: number[], k: number): void {
    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(arr: number[], start:number, end:number) {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start += 1;
        end -= 1;
    }
}

const nums:number[] = [1,2,3,4,5];

rotate(nums, 2)
console.log(nums);


// [1,2,3,4,5] 2
// [5,4,3,2,1]
// [4,5,3,2,1]
// [4,5,1,2,3]
