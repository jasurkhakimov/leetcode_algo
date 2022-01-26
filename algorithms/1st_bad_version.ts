const isBadVersion = (n:number):boolean => {
    return n >= 4;
}

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n:number) {
        let start:number = 0;
        let end:number = n;
        let mid:number;
        while(start < end) {
            mid = Math.floor(start + (end - start) / 2);
            if (isBadVersion(mid)) end = mid;
            else start = mid + 1;
        }
        return start;
    };
};

console.log(solution(isBadVersion)(10));
