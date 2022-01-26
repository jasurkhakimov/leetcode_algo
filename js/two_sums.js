

const twoSums = (nums, target) => {
    const hash = new Map();


    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (hash.has(diff)) {
            return [hash.get(diff), i]
        }
        hash.set(nums[i], i)
    }
    return []
}

console.log(twoSums([2,3,4,5], 7))