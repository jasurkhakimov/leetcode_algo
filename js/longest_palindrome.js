var longestPalindrome = function(s) {
  
    let pali = '';

    s.split('').forEach((item, index) => {
        let txt = s.slice(0, index);
        if (index === 0) {
            pali = item;
        } else if (txt === txt.split('').reverse().join('')) {
            pali = txt;
        }
    })

    return pali;

};


console.log(longestPalindrome('ababaa'));