var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);

    let arr_len = merged.length;

    let median;

    if (arr_len % 2 === 0) {
        median = ( merged[(arr_len / 2) - 1] + merged[arr_len / 2] ) / 2;
    } else {
        median = merged[Math.floor(arr_len / 2)]
    }

    return median;
};

console.log(findMedianSortedArrays([1,3], [2]));