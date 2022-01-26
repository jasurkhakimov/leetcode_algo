var kidsWithCandies = function(candies, extraCandies) {
    let result = candies.map(item => {
        let max_c = Math.max.apply(null, candies);
        if (item + extraCandies >= max_c) {
            return true;
        }
        return false;
    });

    return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([12,1,12], 10));
console.log(kidsWithCandies([4,2,1,1,2], 1));