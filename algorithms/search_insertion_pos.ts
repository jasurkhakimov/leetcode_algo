function searchInsert(nums: number[], target: number): number {
    let start: number = 0;
    let end: number = nums.length;
    let mid: number;

    while (start < end) {
        mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) end = mid;
        else start = mid + 1;
    }
    return start;
};

console.log(searchInsert([1,3,5,6], 7))