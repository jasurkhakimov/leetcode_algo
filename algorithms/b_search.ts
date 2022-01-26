const search = function (nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    let center:number;

    while (end >= start) {
        center = Math.round((start + end) / 2);
        if (nums[center] === target) return center;
        else if (nums[center] > target) end = center - 1;
        else start = center + 1;
    }
    return -1;
};

console.log(search([-1, 0, 2, 3, 5, 9, 12], 2));
